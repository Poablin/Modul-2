
function addAlternative(text) {
    model.inputs.createPoll.options.push(text)
}

function showOptionsInCreate() {
    let html = '';
    for (option of model.inputs.createPoll.options)
    {
        html += `<li>${option}</li> <br>`
    }
    return html
}

function showOptionsInVote() {
    const pageInputs = model.polls[model.polls[0].id].options;
    return pageInputs.map(option => `<li>${option}</li>`).join('');
}



// function addAlternative2() {
//     for (i = 0; i < model.inputs.createPoll.options.length; i++)
//     {
//         document.getElementById('list').innerHTML += `<button>${model.inputs.createPoll.options[i]}</button> <br><br>`
//     }
// }