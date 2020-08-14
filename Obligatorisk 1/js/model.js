let contentDiv = document.getElementById('app');

const model = {
    app: {
        currentPoll: 1,
        loggedInUser: 'per',
        currentPage: 'createPoll',
        chosenPoll: 1,
    },
    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],
    inputs: {
        createPoll: {
            pollId: 0,
            newAlternative: '',
            question: 'Hvem er den tøffeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
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
    {
        id: 1,
        createdBy: 'per',
        isOpen: true,
        usersCanAddAlternatives: true,
        question: 'Liker du å spise is?',
        options: ['Ja', 'Nei'],
        votes: {
            per: 'Ja',
            pål: 'Ja',
            espen: 'Nei',
        }
    }]
};

/*
    Hvilke andre måter kunne vi lagret stemmene på?
        - Hva er best for å legge til nye stemmer?
        - Hva er best for å endre stemmer?
        - Hva er best for å telle opp stemmer?
    Hvordan ville det blitt om hvert alternativ var et objekt, med en id?
*/