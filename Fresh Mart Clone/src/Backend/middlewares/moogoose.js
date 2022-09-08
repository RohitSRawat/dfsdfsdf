const multer = require("multer");
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
    console.log(file)
    cb(null, 'C:/Users/Ar Bros/Documents/ordering/Fresh Mart Clone/public/assets')
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

const arrayss = async (req,res,next) => {
 console.log("req.body")
 next()
}

module.exports = arrayss