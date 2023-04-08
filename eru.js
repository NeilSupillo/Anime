(function (){
"use strict"
var chichan= ['eru4.jpeg','eru1.jpeg','eru2.jpeg','eru3.jpeg','eru5.jpeg','eru6.jpeg','eru7.jpeg','eru8.jpeg','eru9.jpeg'];
let chi = 0;
const prePic= document.getElementById('previous');
const nextPic= document.getElementById('next');
const con = document.getElementById('content');

nextPic.addEventListener('click',function (event){
    
   chi++;  
   if(chi===9){
   chi = 8; }
  
swapImg();
});
   
 
prePic.addEventListener('click',function (event){ 
  
   if(chi===0){
      chi = 1;
   }
  chi--;
  
  swapImg();
});    

function swapImg(){
const nextsli= document.createElement('img');
nextsli.src= chichan[chi];
nextsli.className='fade';
con.appendChild(nextsli);

if(con.children.length > 2){
   con.removeChild(con.children[0]);
} 
}
})();
