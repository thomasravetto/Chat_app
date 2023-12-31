const { findUserInDatabase, getUserDataFromDatabase, getFriendshipData, sendFriendshipRequestInDatabase, handleIncomingRequestsInDatabase, getIncomingRequestsFromDatabase } = require('../../app/user/user.data-access');

async function findUserHelper (username) {
    const usersData = await findUserInDatabase(username);

    if (usersData.length !== 0) {
        return { users: usersData };
    } else {
        return { error: 'No user was found'};
    }
}

async function getUserInfoHelper (id) {
    const userData = await getUserDataFromDatabase(id);

    if (userData) {
        return userData[0];
    } else {
        return { error: 'No user was found' };
    }
}

async function checkFriendshipHelper (viewerUserId, profileUserId) {
    const friendshipData = await getFriendshipData(viewerUserId, profileUserId);

    console.log(friendshipData);

    if (friendshipData && friendshipData.length !== 0) {
        return friendshipData[0];
    } else {
        return { error: 'No friendship was found in db' };
    }
}

async function sendFriendshipRequestHelper (senderUserId, receiverUserId) {
    const friendshipRequest = await sendFriendshipRequestInDatabase(senderUserId, receiverUserId);

    if (friendshipRequest.length !== 0 && !friendshipRequest.error) {
        return friendshipRequest[0];
    } else {
        return { error: 'Error while sending the request' };
    }
}

async function handleIncomingRequestsHelper (senderUserId, receiverUserId, requestStatus) {
    const friendshipStatus = await handleIncomingRequestsInDatabase(senderUserId, receiverUserId, requestStatus);

    if (friendshipStatus.length !== 0 && !friendshipStatus.error) {
        return friendshipStatus;
    } else {
        return { error: 'Error while handling friend request' };
    }
}

async function getIncomingRequestsHelper (userId) {
    const incomingRequests = await getIncomingRequestsFromDatabase(userId);

    if (incomingRequests) {
        return incomingRequests;
    } else {
        return { error: 'No incoming requests'};
    }
}

module.exports = {
    findUserHelper,
    getUserInfoHelper,
    checkFriendshipHelper,
    sendFriendshipRequestHelper,
    handleIncomingRequestsHelper,
    getIncomingRequestsHelper
}