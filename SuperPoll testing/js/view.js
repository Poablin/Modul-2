function createPoll()
{
    const pageInputs = model.inputs.createPoll;
    
    contentDiv.innerHTML = ` 
    <div>Spørsmål</div>
    <input id='textInput' placeholder='Skriv inn spørsmål...' value='' oninput='model.inputs.createPoll.question=this.value'></input>
    <br><br>
    <input type='checkbox' id='cBox'></input>
    <p>La brukerene legge til egne alternativer</p>
    
    <ul id="list">
    ${showOptionsInCreate()}
    </ul>
    
    <input placeholder='Skriv inn alternativ...' value='' oninput='model.inputs.createPoll.newAlternative=this.value'></input>
    <button onclick='addAlternative(model.inputs.createPoll.newAlternative); createPoll()'; '>Legg til alternativ</button>
    <br><br>
    <button onclick=''>Lag</button>
    `;
    
}

function showPoll()
{
    contentDiv.innerHTML = `
    <div>${model.polls[0].question}</div>
    <br>
    ${showOptionsInVote()}
    <div id='buttons'></div>
    <input placeholder='Skriv inn alternativ...' oninput=' value=''></input>
    <button onlick="">Legg til alternativ</button>
    `;
    // createAlternativesHtml()

}

// oninput='model.inputs.createPoll.newAlternative=this.value'