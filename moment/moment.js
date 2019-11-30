const moment = require('moment');

const week = [];

for(let i = 0 ; i < 7; i++){
    week[6-i] = moment().add(-i, 'days').format("YYYY-MM-DD"); 
}

console.log(week);