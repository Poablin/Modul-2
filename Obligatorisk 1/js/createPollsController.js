function addAlternative(text) {
    model.inputs.createPoll.options.push(text)
    createPoll()
}

function removeAlternative(id) {
    model.inputs.createPoll.options.splice(id, 1)
    document.getElementById(id).innerHTML = '';
    createPoll()
}

function updatePoll() {
    model.polls[0].options = model.inputs.createPoll.options;
    model.polls[0].usersCanAddAlternatives = model.inputs.createPoll.usersCanAddAlternatives;
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

function createAlternativesHtml() {
    for (i = 0; i < model.polls[0].options.length; i++) {
        document.getElementById('buttons').innerHTML += `<button>${model.polls[0].options[i]}</button> <br><br>`
    }
}

