const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();
const db = require('../models');


router.get('/testing', (req, res)=> {
    db.Program.find({})
    .then(results => {
        res.send(results)
    })
    .catch(error => {
        console.log('THERE\'S BEEN AN ERROR RETRIEVING ALL THE PROGRAMS', error)
    })
})


router.get('/monthly/update', (req, res) => {
    request('https://thepointsguy.com/guide/monthly-valuations/', function(error, response, body){
        var $ = cheerio.load(body);
        var data = $('td').map(function(index, element){
            return $(this).text();
        }).get()
        // return the airline program and the current month's point valuation as an object
        // function points(data) {
        //     let airlines = []
        //     for(let i = 0; i < data.length; i+=5){
        //         airlines.push({
        //             Program: data[i],
        //             Current_Month: data[i+3]
        //         })
        //     }
        //     return airlines;
        // }
        // console.log(points(data))
        // res.send(points(data))

        // update the db to with data scraped from the website
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