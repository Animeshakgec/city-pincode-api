const express = require("express");
const pi = require("../models/pin_model");
const router = express.Router();
router.route('/v1/pincode').get(
    async (req, res) => {
        const { city, country } = req.query;
        console.log(city);
        try {
            const data = await pi.find({ cityname: city });
            console.log(data);
            if (!data) {
                res.status(400).json({
                    ok: false,
                    city: city,
                    country: country,
                    pincode: []
                })
            } else {
                const pincodes = [];
                data.forEach(doc => { pincodes.push(doc.pincode) });
                res.status(200).json({
                    ok: true,
                    city: city,
                    country: country,
                    pincode: pincodes
                })
            }
        } catch (err) {
            res.json({ err: err })
        }
    }
)
router.route("/v1/city").get(async (req, res) => {
    const { country, pincode } = req.query;
    console.log(country, pincode);
    try {
        const f = await pi.findOne({ pincode: pincode });
        if (f) {
            res.json({
                ok: true,
                country: country,
                pincode: pincode,
                city: f.cityname
            })
        }
        else {
            res.json({
                ok: false,
                msg: 'pincode is ivalid'
            })
        }
    } catch (err) {
        res.json({ err: err })
    }
})
module.exports = router;