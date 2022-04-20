const express=require("express")
const {categorieslist} = require("../controller/category")
const {clientsDetails}=require("../controller/clients")
const { customeraddress } = require("../controller/customersAdd")
const { Storemedia } = require("../controller/Media")
const {storeProductBYID,All_CategoryOfProduct} = require("../controller/Product")
const { promocodeArray } = require("../controller/promo")
const router=express.Router()

//profile
router.get("/store/getHome/:org_id",clientsDetails)

//category
router.get("/store/categories",categorieslist)

//product
router.get("/store/category/products/:id",All_CategoryOfProduct)
router.get("/store/product/details",storeProductBYID)

//customers
router.get("/store/customerAddresses",customeraddress)


//promocode

router.get("/store/promoCodes/:org_id",promocodeArray)

//storemedia
router.get("/store/media/:org_id",Storemedia)
module.exports=router