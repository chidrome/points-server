const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();

router.get('/home', (req, res) => {
    request('https://thepointsguy.com/guide/monthly-valuations/', function(error, response, body){
        var $ = cheerio.load(body);
        var data = $('td').map(function(index, element){
            return $(this).text();
        }).get()
        // return the airline program and the current month's point valuation as an object
        function points(data) {
            let airlines = []
            for(let i = 0; i < data.length; i+=5){
                airlines.push({
                    Program: data[i],
                    Current_Month: data[i+3]
                })
            }
            return airlines;
        }

        console.log(points(data))
        
    })
})


module.exports = router;