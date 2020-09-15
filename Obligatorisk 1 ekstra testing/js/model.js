const model = {
    app: {
        currentPoll: 1,
        loggedInUser: 'per',
        currentPage: 'createPoll',
        newPollId : 1,
    },

    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],

    inputs: {
        createPoll: {
            pollId: null,
            newAlternative: '',
            question: 'Hvem er den tøffeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            usersCanAddAlternatives: true,
        },
    },

    polls: [],
};
// {
//     id: 1,
//     newAlternative: '',
//     question: 'Hvem er den tøffeste læreren ved GET Academy?',
//     options: ['Geir', 'Eskil', 'Terje'],
//     usersCanAddAlternatives: true,
// }