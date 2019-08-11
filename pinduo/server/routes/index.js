var express = require('express');
var router = express.Router();
var connection = require('../db')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//首页swiper接口
router.get('/swiper', function(req, res, next) {
    connection.query('select * from swiperlist', function (error, results, fields) {
      if (error) throw error;
      res.json({
        results
      })
    })
});

//推荐商品数据接口
router.get('/shop', function(req, res, next) {
  connection.query('select * from shop', function (error, results, fields) {
    if (error) throw error;
    res.json({
      results
    })
  })
});


///首页icon图标数据 接口
router.get('/iconfon', function(req, res, next) {
  connection.query('select * from iconfon', function (error, results, fields) {
    if (error) throw error;
    res.json({
      results
    })
  })
});

// 搜索接口
router.get('/search', function(req, res, next) {
  
    let data = require('../data/sreach.json')
   
    res.json({
      data
    })
  
});


module.exports = router;
