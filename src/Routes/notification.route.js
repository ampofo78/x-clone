import express from "express";
import {
    deleteNotification,
    getNotifications,
} from "../controllers/Notification.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const notificationRoutes = express.Router();

notificationRoutes.get("/", protectRoute, getNotifications);
notificationRoutes.delete("/:notificationId", protectRoute, deleteNotification);

export default notificationRoutes;
