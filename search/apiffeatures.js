// const { query } = require("express")

// class ApiFeatures{
//     constructor(query,querystring){
//     this.query=query
//     this.querystring=querystring
// }
// search(){
//     const mobile=this.querystring.mobile
//     ?{
//         mobilenumber:{    
//             $regex:this.querystring.mobile
//             // $option:"i"
//         },
//     }
//     :{}
//     // console.log(mobile);
//     this.query=this.query.find({...mobile})
//     return this
// }
// }

class ApiFeatures{
    constructor(query,querystring){
    this.query=query
    this.querystring=querystring
}
search(){
    const code=this.querystring.org_id
    ?{
        org_id:{    
            $regex:this.querystring.org_id
            // $option:"i"
        },
    }
    :{}
    // console.log(mobile);
    this.query=this.query.findOne({code})
    return this
}
}
module.exports={ApiFeatures}