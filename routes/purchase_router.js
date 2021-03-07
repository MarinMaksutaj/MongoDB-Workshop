const { Router } = require("express");
const  Purchase  = require("../models/purchase_model");

const purchaseRouter = Router();

purchaseRouter.get("/purchase" , async (req, res) => {
    const purchase_data = await Purchase.find();
    res.json(purchase_data);
});

purchaseRouter.post("/purchase" , async (req, res) => {
    try{
        const newPurchase =  await Purchase.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone_number,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip_code,
            quantity: 2
        });
        newPurchase.save();
        res.redirect("/");
    } catch(error) {
        res.status(500).json({
            message: "error 500"
        });
        
    }
    
});

module.exports = purchaseRouter;