const router = require("express").Router();
const axios = require("axios");
const sanitize = require("../lib/sanitize");

const types = "albums,artists,songs,music-videos,playlists,stations";

router.use("/search", (req, res) => {
    axios({
        method: "GET",
        url: 'https://api.music.apple.com/v1/catalog/us/search',
        params: {
            term: req.query.term,
            types: types
        },
        headers: {
            'Authorization': 'Bearer ' + process.env.APPLE_TOKEN
        }
    })
        .then(function (response) {

            sanitize(response).then(data => {
                res.status(200).json(data)
            })

        })
        .catch(function (error) {
            console.log(error);
        })
});

module.exports = router;