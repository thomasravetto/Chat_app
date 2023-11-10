const express = require('express');

const { getFriendsOfUserIdHelper } = require('../../helpers/friends/friends.helper');

async function getFriendsOfUserId (req, res) {
    const { userId } = req.body;

    const friendsList = await getFriendsOfUserIdHelper(userId);

    res.status(200).json(friendsList);
}

module.exports = {
    getFriendsOfUserId,
}