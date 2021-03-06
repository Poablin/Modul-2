function createPoll() {
    const buttonText = 'Oppdater';
    const pageInputs = model.inputs.createPoll;
    const checked = pageInputs.usersCanAddAlternatives ? 'checked' : '';
    // const newText = model.inputs.createPoll.newAlternative=this.value;
    contentDiv.innerHTML = ` 
    <div class='header'>Spørsmål</div>
    <input id='textInput' type='text' placeholder='Skriv inn spørsmål...' value='${model.polls[model.app.chosenPoll].question}' oninput='model.inputs.createPoll.question=this.value'></input>
    <br><br>
    <input type='checkbox' id='cBox' ${checked} onchange="model.inputs.usersCanAddAlternatives=this.checked==='checked';checkUsersAdd()"></input>
    La brukerene legge til egne alternativer
    <br><br>
    <div id='altPreText' style='visibility: visible'>Alternativer:</div>
    <ul id="list">
    ${showOptionsInCreate()}
    </ul>
    <input id='altInput' placeholder='Skriv inn alternativ...' value='' oninput='model.inputs.createPoll.newAlternative=this.value'></input>
    <button onclick='addAlternative(model.inputs.createPoll.newAlternative)'>Legg til alternativ</button>
    <br><br>
    <button onclick='updatePoll()'>${buttonText}</button>
    `;
}

function showOptionsInCreate() {
    let html = '';
    let i = 0;
    for (option of model.inputs.createPoll.options) {
        html += `<li id="${i}">${option} <button class="far fa-times-circle" onclick="removeAlternative(${i})"></button> </li> <br>`
        i++
    }
    return html
}