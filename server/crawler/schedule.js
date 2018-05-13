const schedule = require('node-schedule')
const crawler = require('./crawler')

const pic_crawler = function () {
    console.log("start web crawler using scheduler");
    schedule.scheduleJob('00 000 * * * *', function(){
        console.log("Crawler starting: " + new Date());
        crawler.startCrawler();
    });
};

module.exports.pic_crawler = pic_crawler;