const express = require('express');
const router = express.Router();

const _ = require('lodash');
const picture = require('../models/picture');

router.get('/category', (req, res) => {
    
    picture.distinct('category')
    .then(categories => {
        res.status(200).send(categories);
    })
    .catch(error => {
        res.status(500).json({error: error});
    })
})

router.get('/random', (req, res) => {
    
    picture.aggregate([{$sample: {size: 1}}])
          .then(picture => {
              let data = {};
              data.url = picture[0].url;
              data.title = picture[0].title;
              data.category = picture[0].category;

              res.status(200).send(data);
          })
          .catch(error => {
            res.status(500).json({error: error});
          })
})

router.get('/random/:category', (req, res) => {
    const category = capitalize(req.params.category);
    const value_match = new RegExp(category);
    
    picture
    .aggregate([{$match: {category: {$regex: value_match}}}, 
                {$sample: {size: 1}}])
    .then(picture => {
        //console.log(picture);
        let data = {};
        data.url = picture[0].url;
        data.title = picture[0].title;
        data.category = picture[0].category;

        res.status(200).send(data);
    })
    .catch(error => {
        res.status(500).json({error: error});
    })
})

const capitalize = s =>{
    return s[0].toUpperCase() + s.slice(1);
}

module.exports = router;
