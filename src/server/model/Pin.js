import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    pin: {
      type: String,
      required: true,
      trim: true,
    },
    pinsender: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

messageSchema.index({ createdAt: -1 });

const Pin = mongoose.model("Pin", messageSchema);
export default Pin;
