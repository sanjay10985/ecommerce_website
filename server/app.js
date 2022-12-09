import express from "express";
import connectToMongodb from "./databse.js";
import authRouter from "./routes/user-routes.js";

import cors from "cors";

const app = express();
const PORT = 5000;

connectToMongodb();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
