const container = document.querySelector('#container');
let count = 1;


function playGame(){
let gridSize = prompt("Please enter a number up to 100");

while (count<=gridSize){

    let content = document.createElement('div');  
    container.appendChild(content);
    content.setAttribute( "class", "col" + count );

  for (i=1; i<=gridSize; i++){  
    let newContainer = document.querySelector('#container .col' + count);
    let sisterContent = document.createElement('div');
    sisterContent.innerHTML = "";
    sisterContent.setAttribute( "class", "piece");
    newContainer.appendChild(sisterContent);
  };
  
  count++;

};

container.addEventListener('mouseover', e =>{
  var target = e.target
  if (target !== container){
    target.classList.add('hover')
  }
});
};