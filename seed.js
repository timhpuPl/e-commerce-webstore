const Stripe = require("stripe");
const products = require("./products");

const stripe = Stripe("sk_test_51NUdKzCvXROxBwwE0L8zTIqQ646JZdlxbZpUDUrqRe44PXHo6OzKGV6t5zCKfAKbq8NlcbYcez95SI4ItX9aXOY50050fCA0vu");

(async () => {
    for (const product of products) {
        const stripeProduct = await stripe.products.create({
            name: product.name,
            default_price_data: {
                currency: product.currency,
                unit_amount_decimal: product.price,
            },
            images: [product.image],
        });
        console.log(stripeProduct.name, ":", stripeProduct.id);
    }
})();