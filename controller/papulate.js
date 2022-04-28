const {User}=require("../model/ss")

module.exports.vh=(req,res) =>{
    res.send(User.find({}).populate('posts').exec(function(err, users) {
        if(err) console.log(err);
        //this will log all of the users with each of their posts
        else console.log(users);
        }))}