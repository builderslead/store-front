// const { query } = require("express")

const { json } = require("express/lib/response")

class ApiFeatures{
    constructor(query,querystring){
    this.query=query
    this.querystring=querystring
}
search(){
    const mobile=this.querystring.mobile
    ?{
        mobilenumber:{    
            $regex:this.querystring.mobile
            // $option:"i"
        },
    }
    :{}
    // console.log(mobile);
    this.query=this.query.find({...mobile})
    return this
}
filter(){
    const querycopy={...this.querystring};
    // const removefields=["l"]
    let querystr=json.stringify(querycopy)
    querystr=querystr.replace(/^(\+880|00880|880|01)/ )
    this.query=this.query.find(querycopy)
    return this
}
}

module.exports={ApiFeatures}