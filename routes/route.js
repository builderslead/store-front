const express=require("express")
const {categorieslist} = require("../controller/category")
const {clientsDetails}=require("../controller/clients")
const { customeraddress } = require("../controller/customersAdd")
const { Storemedia } = require("../controller/Media")
const { Storepolice: Storepolices } = require("../controller/policies")
const {storeProductBYID,All_CategoryOfProduct} = require("../controller/Product")
const { StoreproductOptions } = require("../controller/productopt")
const { promocodeArray } = require("../controller/promo")

const {storeSelfDelLocation}=require("../controller/SelfDelLocation")
const { storelocationArray } = require("../controller/Store")
const { Storesuppliers } = require("../controller/Supplier")
const {createUserCart, update_userCart, Delete_userCart,storeUsercart}=require("../controller/UserCartDetails")
const router=express.Router()

//profile
router.get("/store/getHome/:org_id",clientsDetails)

//category
router.get("/store/categories",categorieslist)

//product
router.get("/store/category/products",All_CategoryOfProduct)
router.get("/store/product/details",storeProductBYID)

//customers
router.get("/store/customerAddresses",customeraddress)


//promocode

router.get("/store/promoCodes",promocodeArray)

//storemedia
router.get("/store/media",Storemedia)

//selfdellocaton
router.get("/store/allSelfDelLocations",storeSelfDelLocation)

// Store locationArray
router.get("/Store/allstores",storelocationArray)

//UserCartDetails
router.post("/store/userCart/create",createUserCart)
router.get("/store/Usercart/:_id",storeUsercart)
router.put("/store/userCart/update",update_userCart)
router.delete("/store/userCart/delete",Delete_userCart)


//Storesupplier
router.get("/store/suppliers/:org_id",Storesuppliers)

//Storepolice
router.get("/store/policies/:org_id",Storepolices)

//storeproductOption
router.get("/store/productOptions/:org_id",StoreproductOptions)
module.exports=router