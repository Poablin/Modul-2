function getCurrentPoll() {
    const pollId = model.app.currentPoll;

    for (let poll of model.polls) {
        if (poll.id === pollId) return poll;
    }
    return null;
}

function updatePoll() {
    model.polls[model.app.chosenPoll].options = model.inputs.createPoll.options;
    model.polls[model.app.chosenPoll].question = model.inputs.createPoll.question
    model.polls[model.app.chosenPoll].usersCanAddAlternatives = model.inputs.createPoll.usersCanAddAlternatives;
    showPoll()
}

function checkUsersAdd() {
    model.inputs.createPoll.usersCanAddAlternatives === true ? model.inputs.createPoll.usersCanAddAlternatives = false : model.inputs.createPoll.usersCanAddAlternatives = true;
}