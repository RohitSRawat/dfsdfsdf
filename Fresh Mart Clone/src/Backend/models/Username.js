const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const AdminUsername = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
AdminUsername.pre("save", async function (next) {
  var user = this;
  var hash = await bcrypt.hash(user.password, saltRounds);
  this.password = hash;
  next();
});




AdminUsername.statics.checktheerror = async function (userbody,Adminusername) {
  const user = Adminusername;
  const error = {};

  const usererror = await user.findOne({ username: userbody.username });
  if (!usererror) {
    error.username = "wrong username";
    return error;
  }
console.log(usererror)
  const passerror = await bcrypt.compare(usererror.password, userbody.password);
  if (!passerror) {
    error.username = "wrong password";
  }

  return error;
};


AdminUsername.methods.hello = function () {
   

    return "hello"
}

AdminUsername.statics.findcredit = async ({ username, password }, User) => {
  console.log(username);
  const user = await User.findOne({ username: username });
  console.log(user);
  if (!user) {
    throw new Error();
  }

  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch);
  console.log(password);

  if (!isMatch) {
    throw new Error();
  }

  return user;
};
AdminUsername.methods.toJSON = function () {
    const user = this
    const userobject = user.toObject()
    delete userobject.password
    delete userobject._id


    return userobject
}
const ProductModel = mongoose.model("Adminusername", AdminUsername);

module.exports = ProductModel;
