const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (req, res) => {
    const { github_username } = req.body;

    const git_res = await axios.get(`https://api.github.com/users/${github_username}`);

    console.log(git_res.data);

    res.json({});
});

module.exports = routes;