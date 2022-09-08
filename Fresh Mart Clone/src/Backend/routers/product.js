const Buffer = require("buffer/").Buffer;
const express = require("express");
const multer = require("multer");
const Product = require("../models/Product");
const Adminusername = require("../models/Username");
var jwt = require("jsonwebtoken");
const app = express()
var busboy = require("connect-busboy");

const router = new express.Router();

 const memory = multer.memoryStorage();
const uploadmemory = multer({ storage: memory,
  fileFilter: (req, file, cb) => {
    console.log(file)
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
     
    }
  }
}); //memory to create buffer object 
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, 'C:/Users/Ar Bros/Documents/ordering/Fresh Mart Clone/public/')
  },
  filename: function (req, file, cb) {
    console.log(file)

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage,fileFilter: (req, file, cb) => {
  console.log(file)
  if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
   
  }
} })
// app.use(storage.single())

// router.post("/createproduct", upload.single("avatar"), async (req, res) => {
//   try {
//     var a = req.body;
//     delete a.avatar;

//     const task = new Product({ ...req.body, avatar: req.file.buffer });
//     const base64data = Buffer.from(req.file.buffer).toString("base64");

//     console.log(base64data);
//     await task.save();

//     res.status(201).send(task);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });


router.post('/fetchimage',uploadmemory.single('Image'),(req,res) => {
  try {
  console.log(req.fil)
    const base64data = Buffer.from(req.file.buffer).toString("base64");
    res.status(201).send("data:image/jpeg;base64,"+base64data)
  } catch (error) {
    res.status(400).send(error)
  }
})


router.get(
  "/getproduct/:popular",
  upload.single("avatar"),
  async (req, res) => {
    try {
      if (req.params.popular == "true") {
        req.params.popular = true;
      }
      console.log(req.params);
      var productlist = await Product.find(req.params).limit(8);
      console.log(productlist[0].description.avatar);
      // console.log(Buffer.from())
      res.status(201).send(productlist);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  }
);
router.post("/adminusername", async (req, res) => {
  try {
    const task = new Adminusername(req.body);

    await task.save();

    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.post("/checkadminusername", async (req, res) => {
  try {
    const task = await Adminusername.findcredit(req.body, Adminusername);
    const token = jwt.sign({ username: task.username }, "admin");

    res.cookie("token", token, { httpOnly: true, sameSite: "strict" });
    res.status(201).send(task);
  } catch (e) {
    const erroruser = await Adminusername.checktheerror(
      req.body,
      Adminusername
    );

    res.status(400).send(erroruser);
  }
});
router.post("/sss", async (req, res) => {
  try {
    var token = req.cookies.token;

    var tokensverify = jwt.verify(token, "admin");

    const erroruser = await Adminusername.findOne(tokensverify);

    res.status(201).send(erroruser);
  } catch (e) {
    res.status(400).send("Please Log In");
  }
});

router.post("/destorytoken", async (req, res) => {
    try {
      res.clearCookie('token');

  
  
      res.status(201).send("Please Log In");
    } catch (e) {
      res.status(400).send("Please Log In");
    }
  });


   router.post('/creatproduct',upload.single("Image"),async (req,res) => {
     try {
     console.log(req.body)
     console.log(req.file)

      const products = new Product({...req.body,Image:"/assets/"+req.file.filename})
      await products.save()
      res.status(201).send(products);

    } catch (error) {
      res.status(400).send("Please Log In");

  }
   })
   router.delete('/deleteproduct',async (req,res) => {
    try {
    console.log(req.query)
    // const products = new Product({...req.body,Image:"/assets/"+req.file.filename})
    // await products.save() 
    const product = await Product.findByIdAndDelete(req.query)
    res.status(201).send("Successfully Deleted");

   } catch (error) {
     res.status(400).send(error);

 }
  })
module.exports = router;
