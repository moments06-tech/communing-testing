import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    sender: {
      type: String,
      enum: ["me", "you"],
      default: "me",
      required: true,
    },
  },
  { timestamps: true },
);

messageSchema.index({ createdAt: -1 });

const Message = mongoose.model("Message", messageSchema);
export default Message;
