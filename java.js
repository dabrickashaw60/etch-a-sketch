const container = document.querySelector('#container');
let gridSize = 16;
let count = 1;



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