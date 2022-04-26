const express=require("express")
const { storeBanner } = require("../controller/Banner")
const { store_blogs, storeBlogDetails } = require("../controller/Blog")
const {categorieslist} = require("../controller/category")
const {storeProfileDetails}=require("../controller/profile")
const { customeraddress } = require("../controller/customersAdd")
const { storeMedia } = require("../controller/Media")
const { storePolicies} = require("../controller/policies")
const {storeProductBYID,All_CategoryOfProduct,storeProductsYORGid: storeProductYORGid, storeBestsellers, storeFeatured, storeNew_arrival} = require("../controller/Product")
const { storeProductOptions } = require("../controller/productOpt")
const { promoCodeArray } = require("../controller/promo")

const {storeSelfDelLocation}=require("../controller/SelfDelLocation")
const { storeLocationArray } = require("../controller/Store")
const {storeSupplier } = require("../controller/Supplier")
const {createUserCart, update_userCart, deleteUserCart,storeUsercart}=require("../controller/UserCartDetails")
const { Organization } = require("../controller/organization")

const {StoreVendorCategory}=require("../controller/vendorCategory")
const router=express.Router()

//profile
// router.get("/store/getHome/:org_id",clientsDetails)
router.get("/store/profile/details/:org_id",storeProfileDetails)

//category
router.get("/store/categories",categorieslist)

//product
router.get("/store/category/products",All_CategoryOfProduct)
router.get("/store/product/details",storeProductBYID)
router.get("/store/AllProduct",storeProductYORGid)
router.get("/store/product/bestseller/:org_id",storeBestsellers)
router.get("/store/product/featured/:org_id",storeFeatured)
router.get("/store/product/new_arrival/:org_id",storeNew_arrival)

//customers
router.get("/store/customerAddresses",customeraddress)


//promocode

router.get("/store/promoCodes",promoCodeArray)

//storemedia
router.get("/store/media",storeMedia)

//selfdellocaton
router.get("/store/allSelfDelLocations",storeSelfDelLocation)

// Store locationArray
router.get("/Store/allStores",storeLocationArray)

//UserCartDetails
router.post("/store/userCart/create",createUserCart)
router.get("/store/Usercart/:_id",storeUsercart)
router.put("/store/userCart/update",update_userCart)
router.delete("/store/userCart/delete",deleteUserCart)


//Storesupplier
router.get("/store/suppliers/:org_id",storeSupplier)

//StorePolicies
router.get("/store/policies/:org_id",storePolicies)

//storeproductOption
router.get("/store/productOptions/:org_id",storeProductOptions)

//StoreBanner
router.get("/store/banners",storeBanner)

//store blogs
router.get("/store/blog/:org_id",store_blogs)
router.get("/store/blogs/:_id",storeBlogDetails)

//Organizations
router.get("/store/orgDetails",Organization)

//StoreVendorCategory
router.get("/store/vendorCategories/:org_id",StoreVendorCategory)
module.exports=router