const superagent = require('superagent')
const cheerio =  require('cheerio')
const async = require('async')
const crawlerController = require('./controller/crawlerController')

const base_url = "https://picjumbo.com/";

var categories = [{
    category: String,
    cat_url: String
}];


function startCrawler() {
    superagent
        .get(base_url)
        .end(function (err, result) {
                if(err) {
                    console.log("get category url error");
                    return next(err);
                }
                var $ = cheerio.load(result.text);

                getCategory($);
                getPicture();
            }
        );
}

function getCategory($) {
    const cat = $('#menu-item-3475 .sub-menu');
    $(cat).find('li').each((index, el) => {
        let cat_url = $(el).find('a').attr('href');

        let category = $(el).find('a').text();

        categories.push({
            category,
            cat_url
        });

    });
}


function getPicture() {

    var fetchUrl = function (mycategory, callback) {

        getCurrentPagePicture(mycategory, 1, function (maxPage) {
            for(let i = 2; i <= maxPage; i++) {
                getCurrentPagePicture(mycategory, i);
            }
        });

        var result = {
            categories: mycategory
        }
        callback(null, result);
    };


    //开5个并发,callback为url传参回调
    async.mapLimit(categories, 5, function (mycategory, callback) {
        fetchUrl(mycategory, callback);
    }, function (err, res) {
        if (err) throw err;
        return false;
    });

}


function getCurrentPagePicture(mycategory, currentPage, callback) {

    if(typeof mycategory.cat_url === 'function')
        return;

    var currentUrl = mycategory.cat_url+'page/'+currentPage+'/';
    var category = mycategory.category;

    superagent
        .get(currentUrl)
        .end(function (err, res) {
            if(err) {
                console.log("get picture error: " + currentUrl);
                return;
            }

            var $ = cheerio.load(res.text);
            $('.query_item_wrap').each((index, el) => {
                let pic_url = $(el).find('img').attr('src');
                let title = $(el).find('h2').text();
                let picture = {};

                picture['url'] = pic_url;
                picture['title'] = title;
                picture['category'] = category;

                crawlerController.savePictureModel(picture);
            });

            let page_num = $('.page-numbers').length;
            if(typeof callback === 'function') {
                callback(parseInt(page_num));
            }
        });
}

exports.startCrawler = startCrawler;