const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
//mongo conection
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conexión ok"))
  .catch((err) => console.log(err));

app.use(express.json());

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(3000, () => {
  console.log("Server on PORT");
});
