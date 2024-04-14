import Order from "../../models/Order";
import connectDb from "../../middleware/mongoose";
import Product from "../../models/Product";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let product, sumTotal = 0;
        let cart = req.body.cart
        for (let item in cart) {
            console.log(item);
            sumTotal += cart[item].price * cart[item].qty
            product = await Product.findOne({ slug: item })
            console.log(product);

            if (product.availableQty < cart[item].qty) {
                res.status(200).json({ success: false, "error": "Out of Stock" })
                return
            }
            if (product.price != cart[item].price) {
                res.status(200).json({ success: false, "error": "The Price of Some items may have changed. Please try again" })
                return
            }
        }
        if (sumTotal != req.body.subtotal) {
            console.log(sumTotal, req.body.subtotal);
            res.status(200).json({ success: false, "error": "The Sumtotal of Some items may have changed. Please try again" })
            return
        }

        



        let order = new Order({
            email: req.body.email,
            orderId: req.body.oid,
            products: req.body.cart,
            address: req.body.address,
            amount: req.body.subtotal,
            name: req.body.name
        })
        await order.save()
        res.status(200).json({ success: "Order Added" })

        let productQtyDec = order.products

        for (let slug in productQtyDec) {
            // console.log(productQtyDec[slug].qty);
            await Product.findOneAndUpdate({ slug: slug }, { $inc: { "availableQty": - productQtyDec[slug].qty } })
        }


    } else {
        res.status(400).json({ error: "Order Not Added" })
    }
}







export default connectDb(handler)