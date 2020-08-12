const contentDiv = document.getElementById('app');


const model = {
    app: {
        currentPoll: 1,
        loggedInUser: 'per',
        currentPage: 'createPoll',
    },
    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],
    inputs: {
        createPoll: {
            pollId: 1,
            newAlternative: '',
            question: '',
            options: [],
            usersCanAddAlternatives: true,
        },
    },
    polls: [{
        id: 0,
        createdBy: 'espen',
        isOpen: true,
        usersCanAddAlternatives: true,
        question: 'Hvem er den tøffeste læreren ved GET Academy?',
        options: ['Geir', 'Eskil', 'Terje'],
        votes: {
            per: 'Terje',
            pål: 'Terje',
            espen: 'Geir',
               }
           }, 
    ]
};