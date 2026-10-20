import "./db/index.js";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routes
import messageRouter from "./routes/message.route.js";

app.use("/api/v1/message", messageRouter);

export default app;
