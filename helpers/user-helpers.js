var collection=require('../config/collection')
var db=require('../config/connection')
const bcrypt =require('bcrypt')

module.exports={
    doSignup: (userData) => {
        console.log(userData);
        return new Promise(async (resolve, reject) => {
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({Email:userData.Email})
            console.log(user,"userCheck");
            if(!user){
                userData.password = await bcrypt.hash(userData.password, 10)
                userData.status=true;
                db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data) => {
                    resolve(data)
                    // console.log('FGDFGDGFDGDFGD');
                    // console.log(userData);
                })
            }else{
                reject()
            }
               
            })
    },
    doLogin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let response={}
            let user=await db.get().collection(collection.USER_COLLECTION).findOne().then({Email:userData.Email})
            if (user){
                bcrypt.compare(userData.Password,user.Password).then((status)=>{
                    if (status){
                        console.log("Login SuccessFully");
                        response.user=user
                        response.status=true
                        resolve(response)
                    }else{
                        console.log("Login Failde");
                        resolve({status:false})
                    }
                })

            }else{
                console.log("Login Failde");
            }
        })
    }
}