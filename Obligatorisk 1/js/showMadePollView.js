function showPoll()
{  
    contentDiv.innerHTML = `
    <div class='header'>${model.polls[model.app.chosenPoll].question}</div>
    <br>
    ${createAlternativesHtml2()}
    <div id='buttons'></div>
    <br>
    <div ${model.polls[model.app.chosenPoll].usersCanAddAlternatives == true ? '' : 'style="visibility: hidden"'} id='canAddAlt' style="visibility: visible">
    <input placeholder='Skriv inn alternativ...' value='' oninput='model.inputs.createPoll.newAlternative=this.value'></input>
    <button onclick="addAlternative2(model.inputs.createPoll.newAlternative)">Legg til alternativ</button>
    </div>
    `;
    // createAlternativesHtml()

}