
class ApiFeatures{
    constructor(query,querystring){
    this.query=query
    this.querystring=querystring
}
// search(){
//     const mobile=this.querystring.mobile
//     ?{
//         mobilenumber:{    
//             $regex:this.querystring.mobile
//             // $option:"i"
//         },
//     }
//     :{}
//     this.query=this.query.find({...mobile})
//     return this
// }
search(){
    const name=this.querystring.name
    ?{
        // data.name:{$regex:this.query.name}},
        name:{    
            $regex:this.querystring.name
            $option:"i"
        },
    }
    :{}
    this.query=this.query.find({...name})

    return this
}
}

module.exports={ApiFeatures}