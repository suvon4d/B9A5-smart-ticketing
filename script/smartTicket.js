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

        showFromButton('inputNumber','formButton')
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

         // appendElement('myDiv')
     
         const myDiv = document.getElementById('myDiv');
     
         const div = document.createElement('div');
         div.classList.add('flex', 'justify-between', 'space-x-10')
     
         const p1 = document.createElement('p');
         
         p1.innerText = correntDiv.innerText
         const p2 = document.createElement('p');
         p2.innerText = 'Economoy';
         const p3 = document.createElement('p');
         p3.innerText = '550';
     
         div.append(p1);
         div.append(p2);
         div.append(p3);
         
         myDiv.append(div);
         
         // total price...
         const price = getParseInt('totalPrice');
         const totalPrice = price + 550;
         setParseInt('totalPrice', totalPrice)
        //  grand total
        setParseInt('grandtotal', totalPrice)
       }     
       
  });      
    
  
}