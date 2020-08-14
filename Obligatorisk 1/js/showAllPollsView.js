function showAllPolls() {
    contentDiv.innerHTML = `
    <br>
    ${showStoredPolls()}
    `
}

function showStoredPolls() 
{
    let html = '';
    for (i = 0; i < model.polls.length; i++)
    {
        html += `<button>${model.polls[i].question}</button> <br>`
    }
    return html
}