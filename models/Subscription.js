const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SubscriptionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  thumnail: {
    type: String,
    required: true
  },
  channel: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  }
});

module.exports = Subscription = mongoose.model(
  "subscription",
  SubscriptionSchema
);
