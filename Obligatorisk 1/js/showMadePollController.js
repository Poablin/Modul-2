function createAlternativesHtml2() 
{
    const pageInputs = model.polls[model.app.chosenPoll].options;
    return pageInputs.map(option => `<button>${option}</button> <br><br>`).join('');
}

function addAlternative2(text) {
    model.inputs.createPoll.options.push(text)
    showPoll()
    updatePoll2()
}

function updatePoll2() {
    model.polls[model.app.chosenPoll].options = model.inputs.createPoll.options;
    model.polls[model.app.chosenPoll].usersCanAddAlternatives = model.inputs.createPoll.usersCanAddAlternatives;
    showPoll()
}