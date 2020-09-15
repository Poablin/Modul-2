function listPollsView() {
    let list = '';
    for (i = 0; i < model.polls.length; i++) {
        list += `<br> <button onclick="selectPoll(${model.polls[i].pollId})">${model.polls[i].question}</button> <br>`
    };
    document.getElementById('app').innerHTML = list;
}