import express from "express";
import {
    createPost,
    deletePost,
    getPost,
    getPosts,
    getUserPosts,
    likePost,
} from "../controllers/Post.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
const postRoutes = express.Router();
postRoutes.get("/", getPosts);
postRoutes.get("/:postId", getPost);
postRoutes.get("/user/:username", getUserPosts);

// protected proteced
postRoutes.post("/", protectRoute, upload.single("image"), createPost);
postRoutes.post("/:postId/like", protectRoute, likePost);
postRoutes.delete("/:postId", protectRoute, deletePost);
export default postRoutes;
