/*
1. initiate a new game
   a. place images into all slots

2. when you click on the first block, flip a block and show the image
3. when you click on the second block, flip the block and show the image
   a. check if the second click == the first click
   b. if yes, return
4. check if those 2 images are the same
5. if images ==, then do nothing, else, flip back both blocks
6. check if we finish the game
*/


let clickedCard = null; // to hold the first click slot
let preventClick = false;

let image_holder = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let image_position = [];
let validator = true;

// randomly put 10 images into 20 slots
while (validator) {
     num = Math.floor(Math.random() * 10); //floor function
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
            // if there's one unmatched, get out of this function and go back to ^
            return
         }
      }
  };
  // if all matched, message show
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

