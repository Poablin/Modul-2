function selectPoll(id) {
    model.app.currentPoll = id;
    model.inputs.createPoll.options = model.polls[id - 1].options;
    model.inputs.createPoll.question = model.polls[id - 1].question;
    model.inputs.createPoll.pollId = id;
    updateView()
}