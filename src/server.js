import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import express from "express";
import userRoutes from "../src/Routes/user.route.js";
import { connectDb } from "./config/db.js";
import { ENV } from "./config/env.js";
import { arcjetMiddleware } from "./middleware/arcjet.middleware.js";
import commentRoutes from "./Routes/comment.route.js";
import notificationRoutes from "./Routes/notification.route.js";
import postRoutes from "./Routes/post.route.js";
const app = express();
//const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(clerkMiddleware());
app.use(arcjetMiddleware);

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/notifications", notificationRoutes);
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

//app.get("/", (req, res) => res.send("Hello World!"));

const startServer = async () => {
  try {
    await connectDb();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () =>
        console.log(`Example app listening on port ${ENV.PORT}!`),
      );
    }
  } catch (error) {
    console.log("there is error in starting server", error.message);
    process.exit(1);
  }
};
startServer();
export default app;
