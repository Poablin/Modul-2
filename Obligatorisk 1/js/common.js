function getCurrentPoll() {
    const pollId = model.app.currentPoll;

    for (let poll of model.polls) {
        if (poll.id === pollId) return poll;
    }
    return null;
}

function checkUsersAdd() {
    model.inputs.createPoll.usersCanAddAlternatives === true ? model.inputs.createPoll.usersCanAddAlternatives = false : model.inputs.createPoll.usersCanAddAlternatives = true;
}