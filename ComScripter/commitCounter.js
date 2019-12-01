const cheerio = require('cheerio');
const request = require('request');
const moment  = require('moment');

const target  = "https://github.com/" + process.argv[2];

const week = [];

for(let i = 0 ; i < 7; i++){
    week[6-i] = moment().add(-i, 'days').format("YYYY-MM-DD"); 
}

request(target, function(error, response, body){
    const test = cheerio.load(body);
    let total  = 0;
    
    for(let i = 0 ; i < week.length; i++){
        test('[data-date=' + week[i] +']').each(function(){
            const commit = test(this).data("count");
            if( commit > 0){
                total += commit;
            }
        })
    }
    if(total > 0){
        console.log("total commit count : " + total);
    }else{
        console.log("no commit :)");
    }
});

