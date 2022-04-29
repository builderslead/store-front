const express=require("express")

const { storeBanner } = require("../controller/Banner")
const { store_blogs, storeBlogDetails } = require("../controller/Blog")
const {categorieslist} = require("../controller/category")
const {storeProfileDetails}=require("../controller/profile")
const { customerAddress } = require("../controller/customersAdd")
const { storeMedia } = require("../controller/Media")
const { storePolicies} = require("../controller/policies")
const {storeProductBYID,storeBestsellers,storeFeatured,storeNew_arrival,storeProduct,allCategoriesProduct} = require("../controller/Product")
const { storeProductOptions } = require("../controller/productOpt")
const {promoCodeArray} = require("../controller/promo")

const {storeSelfDelLocation}=require("../controller/SelfDelLocation")
const { storeLocationArray } = require("../controller/Store")
const {storeSupplier } = require("../controller/Supplier")
const {createUserCart, update_userCart, deleteUserCart,storeUsercart}=require("../controller/UserCartDetails")
const { Organization ,organizations } = require("../controller/organization")
const {createContactQuery}=require("../controller/queries")
const {createCostumerWishlist,getCustomerWishlist}=require("../controller/wishlist")
const {storeVendorCategory, searchVendorCategories}=require("../controller/vendorCategory")
const { searchQuery } = require("../controller/search")
const { storeHomePage } = require("../controller/storeHome")
const router=express.Router()



// storeHomePage
router.get("/store/getHome",storeHomePage)

//profile
router.get("/store/profile/details/:org_id",storeProfileDetails)

//category
router.get("/store/categories",categorieslist)

// //product
router.get("/store/category/products",allCategoriesProduct)
router.get("/store/product/details/:_id",storeProductBYID)
router.get("/store/AllProduct",storeProduct)
router.get("/store/product/bestseller/:org_id",storeBestsellers)
router.get("/store/product/featured/:org_id",storeFeatured)
router.get("/store/product/new_arrival/:org_id",storeNew_arrival)

//customers
router.get("/store/customerAddresses",customerAddress)


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
router.put("/store/userCart/update/:_id",update_userCart)
router.delete("/store/userCart/delete/:_id",deleteUserCart)


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
router.get("/store/orgDetails/:id",Organization)
router.get("/store/search/",searchQuery)



//StoreVendorCategory
router.get("/store/vendorCategories",storeVendorCategory)

//customerQueries

router.post("/store/userContactQuery",createContactQuery)

//createCostumerWishlist
router.post("/store/wishlist",createCostumerWishlist)
router.get("/store/wishlists/:org_id",getCustomerWishlist)
module.exports=router