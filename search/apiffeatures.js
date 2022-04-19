const { query } = require("express")

class ApiFeatures{
    constructor(query,querystr){
    this.squery=query
    this.querystr=querystr
}
search(){
    const org_id=this.querystr.org_id
    ?{
        id:{
            $regex:this.querystr.org_id,
            $option:"i"
        },
    }
    :{}
    console.log(org_id);
    this.query=this.query.find(...org_id)
    return this
}
}
module.exports=ApiFeatures