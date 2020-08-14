function createStoredPolls() {
    let html = '';
    for (i = 0; i < model.polls.length; i++) {
        html += `<button onclick="selectPoll(${i})">${model.polls[i].question}</button> <br><br>`
    }
    return html
}

function selectPoll(id) {
    model.app.chosenPoll = id;
    model.inputs.createPoll.options = model.polls[id].options
    model.inputs.createPoll.question = model.polls[id].question
    showPoll()
}