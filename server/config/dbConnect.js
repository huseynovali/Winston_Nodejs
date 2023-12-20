const { default: mongoose } = require("mongoose");

const db = {
  connect: async () => {
    try {
      await mongoose.connect(process.env.DB_CONNECT_KEY);
      console.log("CONNECTED!");
    } catch (err) {
      console.log("Mongodb connection error!!");
      console.log(err);
    }
  },
};

module.exports = {
  db,
};
