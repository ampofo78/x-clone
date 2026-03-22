import express from "express";
import {
    followUser,
    getCurrentUser,
    getUserProfile,
    syncUser,
    updateProfile,
} from "../controllers/User.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const userRoutes = express.Router();

userRoutes.get("/profile/:username", getUserProfile);
userRoutes.post("/sync", protectRoute, syncUser);
userRoutes.post("/me", protectRoute, getCurrentUser);
userRoutes.post("/follow/:targetUserId", protectRoute, followUser);
userRoutes.put("/profile", protectRoute, updateProfile);

export default userRoutes;
