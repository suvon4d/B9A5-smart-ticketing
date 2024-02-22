// scroll down...............
function goDown(){
    document.getElementById('ticketSection').scrollIntoView({
        behavior: 'smooth'
    });
}


const allBtn = document.getElementsByClassName('seat');
let btnCount = 0
for( btn of allBtn){
    btn.addEventListener('click', function(item){
        const correntDiv = item.target;
     if( btnCount < 4){
            
        getBackgroundColor(correntDiv)
            
        btnCount = btnCount+1    
     
        const totalSeat = getParseInt('totalSeat');
         
        const remainingSeat = totalSeat-1;
        
        setParseInt('totalSeat',remainingSeat)

        const creentSelectSeat = getParseInt('selectSeat');
        const selectSeat = creentSelectSeat+1;
        setParseInt('selectSeat', selectSeat)

    appendElement('myDiv')

    setParseInt('selectSearText', correntDiv.innerText)
    
    }     
        
  });      
 
}