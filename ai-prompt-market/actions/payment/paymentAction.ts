const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export const stripePublishableKey = () => {
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    return publishableKey;
};

export const stripePaymentIntent = async (amount: Number) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            metadata: {
                company: "YoungMoney",
            },
            automatic_payment_methods: {
                enabled: true,
            },
        });
        return paymentIntent;
    } catch (error) {
        console.log(error);
    }
};