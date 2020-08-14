function removeAlternative(id) {
    model.inputs.createPoll.options.splice(id, 1)
    document.getElementById(id).innerHTML = '';
    createPoll()
}

function addAlternative(text) {
    model.inputs.createPoll.options.push(text)
    createPoll()
}

function updatePoll() {
    model.polls[model.app.chosenPoll].options = model.inputs.createPoll.options;
    model.polls[model.app.chosenPoll].question = model.inputs.createPoll.question
    model.polls[model.app.chosenPoll].usersCanAddAlternatives = model.inputs.createPoll.usersCanAddAlternatives;
    showPoll()
}

function showOptionsInCreate() {
    let html = '';
    let i = 0;
    for (option of model.inputs.createPoll.options) {
        html += `<li id="${i}">${option} <button class="far fa-times-circle" onclick="removeAlternative(${i})"></button> </li> <br>`
        i++
    }
    return html
}
