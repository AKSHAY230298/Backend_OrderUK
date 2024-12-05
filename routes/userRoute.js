const express = require("express");
const auth = require("../controllers/userControllers");

const router = express.Router();

router.post("/signup", auth.userPostData )

router.post("/signin", auth.signInData)

router.get("/product_info", auth.burgerProductInfo)

router.get("/cold_drinksInfo", auth.coldDrinkInfo )

router.get("/friesInfo", auth.friesInfo)

router.post("/addInCart", auth.addInCart)

router.get("/getCartInfo", auth.getCartInfo)

router.delete("/delCartData", auth.deletCartInfo)

router.post("/addAddress",auth.addressPostData)

router.get("/getAddressData", auth.getAddressData)

router.delete("/delAddress", auth.deleteAddress)

router.post("/getProfileInfo", auth.getProfileInfo)

router.put("/editProfileInfo", auth.editProfileInfo)

router.get("/getCardsData", auth.getCardsData)

router.put("/editCardData", auth.editCardData)



module.exports = router;

