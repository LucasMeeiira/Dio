const imgBell = document.querySelector('.lista_img-sino');

imgBell.addEventListener('mouseover', (event)=>{
   let newImage = event.target;

 newImage.src = './assets/image/sino-branco2.png';
 newImage = newImage.setAttribute('class' , 'nova_img-sino') 

}) 