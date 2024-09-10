
let mark=document.getElementById('sidebar')
mark.style.marginLeft='-100px'
document.getElementById('menu-toggle').addEventListener('click', function() {
   document.getElementById('sidebar').classList.toggle('active');
 mark.style.margin='0px'
 mark.style.transition ='transform 0.5s ease';

 mark.style.width='250px'
 
});

document.getElementById('close-btn').addEventListener('click', function() {
   document.getElementById('sidebar').classList.remove('active');
    mark.style.margin='-300px'
    mark.style.transition ='transform 0.5s ease';
    body.style.opacity='0%'
  
});

let cros=document.getElementById('menu-toggle')
cros.addEventListener('mouseover',function(){
 cros.style.transform='rotatey(60deg)'
 cros.style.transition ='transform 0.3s ease';
 cros.style.color='red'
 cros.style.fontSize='24px'
 
   
});
cros.addEventListener('mouseout',function(){
   cros.style.transform='rotatey(0deg)'
   cros.style.fontSize='24px'
   cros.style. outline='0px ';
    cros.style.color='black'
});






  

  