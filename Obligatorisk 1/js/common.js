function getCurrentPoll() {
    const pollId = model.app.currentPoll;

    for (let poll of model.polls) {
        if (poll.id === pollId) return poll;
    }
    return null;
}

function checkUsersAdd() {
    model.inputs.createPoll.usersCanAddAlternatives === true ? model.inputs.createPoll.usersCanAddAlternatives = false : model.inputs.createPoll.usersCanAddAlternatives = true;
}

function checkVotes() {
    // let votes = null;

    // for (i = 0; i < model.polls.length; i++) {
    //     votes = model.polls[i].votes;
    // }

    // return votes

    model.polls[0].votes.reduce(function(sums, entry) {
        sums[entry.]
    } )

}