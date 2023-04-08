(function (){
"use strict"
var chichan= ['robin1.jpeg','robin2.jpeg','robin3.jpeg','robin4.jpeg','robin5.jpeg','robin6.jpeg','robin7.jpeg'];

let chi = 0;
const prePic= document.getElementById('previous');
const nextPic= document.getElementById('next');
const con = document.getElementById('content');

nextPic.addEventListener('click',function (event){

   chi++;  
   if(chi===7){
   chi = 6; }
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
