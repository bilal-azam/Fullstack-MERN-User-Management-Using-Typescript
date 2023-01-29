import path from "path";
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import { userRouter } from './routes/userRoute';

// import picturesRoute from "./routes/pictures";
// import favouritesRoute from "./routes/favourites";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/api/user", userRouter);
// app.use("/api/favourites", favouritesRoute);

app.use(express.static(path.resolve("dist")));


export default app;