require("dotenv").config();

const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_SECTET_KEY)

module.exports = stripe