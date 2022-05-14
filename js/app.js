


let clickedCard = null; 
let preventClick = false;

let image_holder = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let image_position = [];
let validator = true;


while (validator) {
     num = Math.floor(Math.random() * 10); 
     if(image_holder.includes(num)) {
      image_holder.splice(image_holder.indexOf(num),1);
      image_position.push(num);
     }
     if(image_holder.length == 0) {
        validator=false
     }
};

function clickedOn(event) {
    const target = event.currentTarget;
    if(preventClick || target.className.includes('matched')) {return};
 
    target.className = target.className.replace('card_with_hover hidden', 'card_without_hover' + ' pair'+image_position[target.getAttribute('id') -1]).trim();
    
    if (!clickedCard) {
        clickedCard = target;

     } else if (clickedCard.getAttribute('id')===target.getAttribute('id')){  return }
     else if (clickedCard) {
         if (image_position[clickedCard.getAttribute('id')-1] === image_position[target.getAttribute('id')-1]) {
            target.className = target.className + ' matched';
            clickedCard.className = clickedCard.className + ' matched';
            clickedCard = null; 
         } else {
            preventClick = true;
             setTimeout(()=>{
                target.className = target.className.replace('card_without_hover pair'+image_position[target.getAttribute('id')-1],'card_with_hover hidden');
                clickedCard.className = clickedCard.className.replace('card_without_hover pair'+image_position[clickedCard.getAttribute('id')-1],'card_with_hover hidden');
                clickedCard = null; 
                preventClick = false;
             },500);
         };
         
    };
    for (i=0; i<4; i++){
      for(r=0; r<5; r++){
         if(!document.querySelector('#block'+(i+1)).getElementsByTagName('div')[r].className.includes('matched')) {
            return
         }
      }
  };

  document.querySelector('#messag').className = '';
   };


function newGame(event) {
    image_position = [];
    image_holder = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
    validator = true;
    while (validator) {
        num = Math.floor(Math.random() * 10);
        if(image_holder.includes(num)) {
         image_holder.splice(image_holder.indexOf(num),1);
         image_position.push(num);
        }
        if(image_holder.length == 0) {
           validator=false
        }
   };
   for (i=0; i<4; i++){
       for(r=0; r<5; r++){
        document.querySelector('#block'+(i+1)).getElementsByTagName('div')[r].className = "card_with_hover hidden";
       }
   }
   document.querySelector('#messag').className = 'hidden_msg'
}

