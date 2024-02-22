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



function appendElement(event){
    const myDiv = document.getElementById(event);

    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'space-x-10')

    const p1 = document.createElement('p');
    p1.setAttribute('id','selectSearText')
    const p2 = document.createElement('p');
    p2.innerText = 'Economoy';
    const p3 = document.createElement('p');
    p3.innerText = '550';

    div.append(p1)
    div.append(p2)
    div.append(p3)
    
    myDiv.append(div)
}