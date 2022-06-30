var db=require('../config/connection')
var collection=require('../config/collection')
module.exports={
    addProduct:(product)=>{
        console.log(product)
        console.log("dassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
        product.Price = parseInt(product.Price);
        return new Promise((resolve,reject)=>{
            console.log("adhacsdcsdcsdcsdcsdcsdcsdccdscdsc");
            db.get().collection('product').insertOne(product).then((data)=>{
                console.log(data);
                resolve(data)

            })
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products= await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }




}