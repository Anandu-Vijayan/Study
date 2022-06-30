var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var fileUpload =require('express-fileupload')
var productHelper=require('../helpers/product-helpers')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    console.log(products);

    res.render('admin/view-product',{admin:true,products})
  })
  
});
router.get('/add-product',(req,res)=>{
  res.render('admin/add-product',{admin:true})
})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);
  productHelpers.addProduct(req.body).then((id)=>{
    let image=req.files.Image
    console.log(id.insertedId);
    let ID=id.insertedId
    console.log("0000000000000000000000000000000000000000000000000000000000000000");
    image.mv('./public/images/'+ID+'.jpg',(err)=>{
      console.log("ddseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      console.log(id.insertedId);
      if(!err){
        res.render('admin/add-product',{admin:true})

 
      }else{
        console.log(err);
      }
    })
    
  })
  
})

module.exports = router;
