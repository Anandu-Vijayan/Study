var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let product=[
    {
      Name:"Becardi",
      Discription:"Nice Drink",
      Price:5000,
      Image:"https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/420/images/6272/183061.primary_images__09938.1497900092.1280.1280.jpg?c=2"

    },
    {
      Name:"Becardi",
      Discription:"Nice Drink",
      Price:5000,
      Image:"https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/420/images/6272/183061.primary_images__09938.1497900092.1280.1280.jpg?c=2"

    },
    {
      Name:"Becardi",
      Discription:"Nice Drink",
      Price:5000,
      Image:"https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/420/images/6272/183061.primary_images__09938.1497900092.1280.1280.jpg?c=2"

    },
    {
      Name:"Becardi",
      Discription:"Nice Drink",
      Price:5000,
      Image:"https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/420/images/6272/183061.primary_images__09938.1497900092.1280.1280.jpg?c=2"

    },
    

  ]
  res.render('admin/view-product',{admin:true,product})
});

module.exports = router;
