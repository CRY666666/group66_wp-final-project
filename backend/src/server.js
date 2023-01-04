import express from "express";
import cors from "cors";
import routes from "./routes/Seats";
import dotenv from "dotenv-defaults";
import mongoose from 'mongoose';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);

import path from "path";
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../../frontend", "build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../frontend", "build", "index.html"));
  });
}

mongoose.connect(
    process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
   })
const port = process.env.PORT || 4000
app.listen(port, () => {
 console.log(`Server is up on port ${port}.`)
})