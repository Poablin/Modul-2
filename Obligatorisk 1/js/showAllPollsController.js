function selectPoll(id) {
    model.app.chosenPoll = id;
    model.inputs.createPoll.options = model.polls[id].options
    model.inputs.createPoll.question = model.polls[id].question
    showPoll()
}