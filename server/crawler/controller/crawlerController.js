const Picture = require('../../models/picture')

const savePictureModel = function (info) {

    Picture.findOne({url: info.url}, (err, res) => {
        if(err) {
            console.log(err);
        } else {
            if(!res) {
                Picture.create(info, (err, res) => {
                    if(err)
                        console.log(err);
                });
            } else {
                console.log("picture exist");
                return;
            }
        }
    });
};

exports.savePictureModel = savePictureModel;