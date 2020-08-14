function createAlternativesHtml2() 
{
    const pageInputs = model.polls[model.app.chosenPoll].options;
    return pageInputs.map(option => `<button>${option}</button> <br><br>`).join('');
}