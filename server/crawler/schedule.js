import schedule from 'node-schedule'
import crawler from './crawler'

const pic_crawler = function () {
    console.log("start web crawler using scheduler");
    schedule.scheduleJob('30 31 * * * *', function(){
        console.log("Crawler starting: " + new Date());
        crawler.startCrawler();
    });
};

module.exports.pic_crawler = pic_crawler;