import express from "express";
import connectToMongodb from "./databse.js";
import authRouter from "./routes/user-routes.js";

import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status((500).send(err));
    }
  );
});

app.listen(PORT, async () => {
  try {
    connectToMongodb();
    console.log(`app is running on ${PORT}`);
  } catch (error) {
    console.log(e.message);
  }
});
