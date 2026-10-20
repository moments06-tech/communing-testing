import Message from "../model/Message.js";
import Pin from "../model/Pin.js";

const sendMessage = async (req, res) => {
  const { text, sender } = req.body;

  if ([text, sender].some((field) => field.trim() == "")) {
    return res.status(400).json({
      statusCode: 400,
      data: null,
      message: "All fields are required",
    });
  }

  try {
    await Message.create({ text, sender });

    res.status(200).json({
      statusCode: 200,
      data: {},
      message: "Message Sent Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const getMessage = async (req, res) => {
  try {
    const getMsg = await Message.find().select(" -__v");
    if (!getMsg.length > 0)
      return res.status(400).json({
        statusCode: 400,
        data: null,
        message: "no message found",
      });

    res.status(200).json({
      statusCode: 200,
      data: getMsg,
      message: "get messages",
    });
  } catch (error) {
    console.log(error);
  }
};

// authenticate pincode
const createPin = async (req, res) => {
  const { pin, pinsender } = req.body;

  if ([pin, pinsender].some((field) => field.trim() == "")) {
    return res.status(400).json({
      statusCode: 400,
      data: null,
      message: "All fields are required",
    });
  }

  try {
    await Pin.create({ pin, pinsender });

    res.status(400).json({
      statusCode: 200,
      data: {},
      message: "Pin add Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const verifyPin = async (req, res) => {
  const { pin } = req.body;

  try {
    const getPins = await Pin.findOne({ pin });

    if (!getPins)
      return res.status(400).json({
        statusCode: 400,
        data: null,
        message: "Enter the correct pin",
      });

    res.status(200).json({
      statusCode: 200,
      data: getPins.pinsender,
      message: "Pin verify Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export { sendMessage, getMessage, createPin, verifyPin };
