import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import router from "./routes/taskRoutes.js";
import swaggerDocs from "./swagger.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({path: '.env'})
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3100;

const app = express();

app.use(express.json());
mongoose
  .connect(URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("error Conect to Mongo ", err));

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`first server running on http://localhost:${PORT}`);
});
