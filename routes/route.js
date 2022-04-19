const express=require("express")
const {categorieslist} = require("../controller/category")
const {clientsDetails}=require("../controller/clients")
const {storeProductBYID,All} = require("../controller/Product")
const router=express.Router()


router.get("/store/getHome/:org_id",clientsDetails)

router.get("/store/categories",categorieslist)

router.get("/store/category/products",All)
router.get("/store/product/details",storeProductBYID)
module.exports=router