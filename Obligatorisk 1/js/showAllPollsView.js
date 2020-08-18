function showAllPolls() {
    let html = '';
    for (i = 0; i < model.polls.length; i++) {
        html += `<button onclick="selectPoll(${i})">${model.polls[i].question}</button> <br><br>`
    }
    contentDiv.innerHTML = `
    <br>
    ${html}
    `
}