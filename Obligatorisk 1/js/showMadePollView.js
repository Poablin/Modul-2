function showPoll()
{  
    contentDiv.innerHTML = `
    <div class='header'>${model.polls[0].question}</div>
    <br>
    ${createAlternativesHtml2()}
    <div id='buttons'></div>
    <br>
    <div ${model.polls[0].usersCanAddAlternatives == true ? '' : 'style="visibility: hidden"'} id='canAddAlt' style="visibility: visible">
    <input placeholder='Skriv inn alternativ...' value=''></input>
    <button  onclick="${addAlternative}">Legg til alternativ</button>
    </div>
    `;
    // createAlternativesHtml()

}