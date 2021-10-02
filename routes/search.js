const router = require("express").Router();

router.use("/search", (req, res) => {
    res.status(200).json("Route working internally")
});

module.exports = router;