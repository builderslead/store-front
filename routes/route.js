const express=require("express")
const { Storebanner } = require("../controller/Banner")
const { Store_blogs, StoreBlogDetails } = require("../controller/Blog")
const {categorieslist} = require("../controller/category")
const {clientsDetails, StoreprofileDetails}=require("../controller/profile")
const { customeraddress } = require("../controller/customersAdd")
const { Storemedia } = require("../controller/Media")
const { Storepolice: Storepolices } = require("../controller/policies")
const {storeProductBYID,All_CategoryOfProduct,storeProductsYORGid: storeProductbYORGid, storeBestsellers, storefeatured, storeNew_arrival} = require("../controller/Product")
const { StoreproductOptions } = require("../controller/productopt")
const { promocodeArray } = require("../controller/promo")

const {storeSelfDelLocation}=require("../controller/SelfDelLocation")
const { storelocationArray } = require("../controller/Store")
const { Storesuppliers } = require("../controller/Supplier")
const {createUserCart, update_userCart, Delete_userCart,storeUsercart}=require("../controller/UserCartDetails")
const router=express.Router()

//profile
// router.get("/store/getHome/:org_id",clientsDetails)
router.get("/store/profile/details/:org_id",StoreprofileDetails)

//category
router.get("/store/categories",categorieslist)

//product
router.get("/store/category/products",All_CategoryOfProduct)
router.get("/store/product/details",storeProductBYID)
router.get("/store/AllProduct",storeProductbYORGid)
router.get("/store/product/bestseller/:org_id",storeBestsellers)
router.get("/store/product/featured/:org_id",storefeatured)
router.get("/store/product/new_arrival/:org_id",storeNew_arrival)

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

//Storebanner
router.get("/store/banners",Storebanner)

//store blogs
router.get("/store/blog/:org_id",Store_blogs)
router.get("/store/blogs/:_id",StoreBlogDetails)
module.exports=router