const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();
const db = require('../models');


router.post('/programs', (req, res)=> {
    console.log('TAYLOR NEEDS ENERGY')
    db.Program.find({})
    .then(results => {
        console.log(results)
        res.send(results)
    })
    .catch(error => {
        console.log('THERE\'S BEEN AN ERROR RETRIEVING ALL THE PROGRAMS', error)
    })
})

router.put('/edit', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.user.id
    }, {
        mileage_program: req.body.mileage_program,
        balance: req.body.balance
    })
    .then(updatedUserInfo => {
        res.send(updatedUserInfo)
        console.log('This user has been updated', updatedUserInfo)
    })
    .catch(error => {
        console.log('ERROR UPDATING USER INFO', error)
    })
})


router.get('/monthly/update', (req, res) => {
    request('https://thepointsguy.com/guide/monthly-valuations/', function(error, response, body){
        var $ = cheerio.load(body);
        var data = $('td').map(function(index, element){
            return $(this).text();
        }).get()

        // update the db to with data scraped from the website table
        function updateDb(data) {
            for(let i = 0; i < data.length; i+=5){
                db.Program.findOneAndUpdate({
                    program: data[i]
                }, {
                    current_month: data[i+3]
                },
                {
                    upsert: true
                })
                .then(updatedProgram => {
                    console.log('This program', updatedProgram, 'has been updated!')
                })
                .catch(error => {
                    console.log('THERE\'S BEEN AN ERROR TRYING TO UPDATE THE PROGRAMS', error)
                })
            }
        }
        updateDb(data)
    })
})



module.exports = router;