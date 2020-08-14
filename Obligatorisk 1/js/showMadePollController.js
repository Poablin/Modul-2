function createAlternativesHtml2() 
{
    const pageInputs = model.polls[model.polls[0].id].options;
    return pageInputs.map(option => `<button>${option}</button> <br><br>`).join('');
}