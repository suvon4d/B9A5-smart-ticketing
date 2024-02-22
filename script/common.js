function getBackgroundColor(event){
    event.classList.add('bg-green-500')
    
}






function getParseInt(event){
    const elementId = document.getElementById(event);
    const elementText = elementId.innerText;
    const element = parseInt(elementText);
    return element;
}


function setParseInt(event,value){
 const element = document.getElementById(event);
 element.innerText = value;

}


function showFromButton(eventId, buttonId){
    const fromButton = document.getElementById(buttonId);
    const event = document.getElementById(eventId);
    const eventValue = event.value.trim();
    
    if(!isNaN(eventValue)){
     fromButton.classList.remove('hidden');
    }
}
