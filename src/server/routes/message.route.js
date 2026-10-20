import { Router } from "express";
import { sendMessage, getMessage, createPin, verifyPin } from "../controllers/message.controller.js";

const router = Router();

router.route("/we-send-message-to-each-other").post(sendMessage);
router.route("/get-our-messages").get(getMessage);

router.route("/create-the-pin").post(createPin);
router.route("/verify-pin").post(verifyPin);

export default router;
