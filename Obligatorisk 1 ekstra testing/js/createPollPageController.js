function createOrUpdatePoll() {
    const inputObj = model.inputs.createPoll;


    if (model.app.currentPoll === model.inputs.createPoll.pollId) {
        model.polls[model.app.currentPoll - 1].options = model.inputs.createPoll.options;
        model.polls[model.app.currentPoll - 1].question = model.inputs.createPoll.question
        model.polls[model.app.currentPoll - 1].usersCanAddAlternatives = model.inputs.createPoll.usersCanAddAlternatives;
        return
    }

    model.polls.push({
        pollId: model.app.newPollId,
        isOpen: true,
        usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
        question: inputObj.question,
        options: [...inputObj.options],
        votes: {},
    });

    model.app.newPollId++
    updateView();
}

function startNewPoll() {
    model.app.currentPoll = model.app.newPollId;
    model.inputs.createPoll.usersCanAddAlternatives = true;
    updateView();
}

function addAlternative(text) {
    model.inputs.createPoll.options.push(text)
    updateViewCreateVotePage()
}