require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handled = async (event) => {
	try {
		const { amount } = JSON.parse(event.body);

		console.log(stripe);

		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: "euro",
			payment_method_types: ["card"],
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ paymentIntent }),
		};
	} catch (err) {
		console.log({ err });
		return {
			status: 400,
			body: JSON.stringify({ err }),
		};
	}
};
