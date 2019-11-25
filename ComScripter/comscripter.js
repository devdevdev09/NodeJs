const cheerio = require('cheerio');
const request = require('request');
const date    = require('date-utils');

const target  = process.argv[2];

const today   = new Date().toFormat("YYYY-MM-DD");

request(target, function(error, response, body){
    var test = cheerio.load(body);

    test('[data-date=' + today +']').each(function(){
        const commit = test(this).data("count");
        if( commit > 0){
            console.log("commit : " + commit);
        }else{
            console.log("no commit :) ");
        }
    })
});

