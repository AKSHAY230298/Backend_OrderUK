const User = require("../models/UserData");
const bcrypt = require("bcryptjs");
const BurgerInfo = require("../models/BurgerData");
const Cold_drinksInfo = require("../models/ColdDrinkData");
const FriesInfo = require("../models/FriesData");

const Cart = require("../models/AddInCart");
const Addresse = require("../models/AddAddresses");

const Card = require("../models/AddCardData")

const userPostData = async (req, res) => {
  console.log(req.body);
  let { name, phone, email, password } = req.body;
  const existData = await User.findOne({ email });
  if (existData) {
    return res.status(400).json({ msg: "Email Exist" });
  }

  const newPassword = await bcrypt.hash(password, 10);

  let user = new User({
    name: name,
    phone: phone,
    email: email,
    password: newPassword,
  });

  user
    .save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  res.status(200).json({ msg: "ok.." });
};

const signInData = async (req, res) => {
  try {
    // console.log(req.body);

    const { email, password } = req.body;

    const existEmailData = await User.findOne({ email });

    if (!existEmailData) {
      res.status(400).json({ meassage: "Invalid User" });
    }

    const existPasswordData = await bcrypt.compare(
      password,
      existEmailData.password
    );

    console.log(existPasswordData);

    if (existPasswordData) {
      res
        .status(200)
        .json({ message: "Congratulations User Details Matched..." });
    } else {
      res.status(400).json({ message: "sory details is not match" });
    }
  } catch (err) {
    console.log(err);
  }
};

const burgerProductInfo = async (req, res) => {
  try {
    const Info = await BurgerInfo.find();
    console.log(Info);

    if (!Info) {
      return res.status(400).json({ msg: "Data is not Fetch" });
    }

    res.status(200).json({ msg: Info });
  } catch (error) {
    console.log(error);
  }
};

const coldDrinkInfo = async (req, res) => {
  try {
    const cDinfo = await Cold_drinksInfo.find();
    if (!cDinfo) {
      return res.status(400).json({ msg: "Data is not Fetched" });
    }

    res.status(200).json({ msg: cDinfo });
  } catch (error) {
    console.log(error);
  }
};

const friesInfo = async (req, res) => {
  try {
    friesData = await FriesInfo.find();
    if (!friesData) {
      return res.status(400).json({ msg: "data is not fetched" });
    }

    res.status(200).json({ msg: friesData });
  } catch (error) {
    console.log(error);
  }
};

const addInCart = async (req, res) => {
  try {
    const { head, price } = req.body;

    // console.log(req.body);

    const cart = new Cart({
      head: head,
      price: price,
    });

    cart
      .save()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    res.status(200).json({ msg: "data is stored successfull" });
  } catch (error) {
    console.log(error);
  }
};

const getCartInfo = async (req, res) => {
  const response = await Cart.aggregate([
    {
      $group: {
        _id: { head: "$head", price: "$price" },
        quantity: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        head: "$_id.head",
        price: "$_id.price",
        quantity: 1,
      },
    },
  ]);

  if (!response) {
    return res.status(400).json({ msg: "data not found" });
  }
  res.status(200).json({ msg: response });
};

const deletCartInfo = async (req, res) => {
  try {
    const { head } = req.body;
    // console.log(head);

    const deleteResponse = await Cart.findOneAndDelete({ head: head });

    if (deleteResponse) {
      res.status(200).json({ msg: "Deleted Successfull" });
    }
  } catch (error) {
    console.log(error);
  }
};

const addressPostData = async (req, res) => {
  try {
    console.log(req.body);
    let { address, number } = req.body;

    let userAddress = new Addresse({
      address: address,
      number: number,
    });

    userAddress
      .save()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    res.status(200).json({ msg: "Done.." });
  } catch (error) {
    console.log(error);
  }
};

const getAddressData = async (req, res) => {
  try {
    let response = await Addresse.find();

    if (!response) {
      return;
      res.status(400).json({ msg: `Data not fetched` });
    }

    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { _id } = req.body;

    const deleteResponse = await Addresse.deleteOne({ _id: _id });
    if (deleteResponse) {
      res.status(200).json({ msg: `Data deleted` });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfileInfo = async (req, res) => {
  const { email } = req.body;
    //  console.log(email)                                  
  const user = await User.findOne({ email });

//   console.log("uuuuuuu",user);
  

  res.status(200).json({ msg: user });
};


const editProfileInfo = async(req,res)=>{
try {
    console.log(req.body);

    const {email, name, old_email} = req.body;
     
    let newData = await User.updateOne({email:old_email},{
        $set:{
            email:email,
            name :name
        }
    })
    res.status(200).json({msg:`Data Updated`})
    
} catch (error) {
    console.log(error);
    
}
}

const getCardsData = async (req, res)=>{
   try {
    const response = await Card.find();

    if (!response){
      res.status(400).json({msg:"Data is not Getting"})
    }
    res.status(200).json({msg:response})

    
   } catch (error) {
      console.log(error);
      
   }
}


const editCardData = async (req, res)=>{
  try {
    console.log(req.body);

    const {name,number} = req.body;
     
    let newData = await User.updateOne({_id},{
        $set:{
           name:name,
            number :number
        }
    })
    res.status(200).json({msg:`Data Updated`})
    
} catch (error) {
    console.log(error);
    
}

  
}


module.exports = {
  userPostData,
  signInData,
  burgerProductInfo,
  coldDrinkInfo,
  friesInfo,
  addInCart,
  getCartInfo,
  deletCartInfo,
  addressPostData,
  getAddressData,
  deleteAddress,
  getProfileInfo,
  editProfileInfo,
  getCardsData,
  editCardData
};
