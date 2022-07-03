var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var productHelper=require('../helpers/product-helpers')
const userHelpers=require('../helpers/user-helpers')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let user=req.session.user
    console.log(user);
 let product=productHelpers.getAllProducts().then((product)=>{
  res.render('index', {product,user});

 })
  
});
router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('/signup',(req,res)=>{
    res.render('signup')

})
router.post('/signup',(req,res)=>{
    console.log(req.body);
        userHelpers.doSignup(req.body).then((response)=>{
            console.log(req.body);
            console.log(response);
    res.redirect('/login')
})

})
router.post('/login',(req,res)=>{
    userHelpers.doLogin(req.body).then((response)=>{
        if(response.status ){
            req.session.logedIn=true
            req.session.user=response.user  
            res.redirect('/')
        }else{
            res.redirect('/login')
        }
    })
        

    console.log(req.body);
})
router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/')

})

module.exports = router;
