(function (){
"use strict"
var chichan= ['kiyoko1.jpeg','kiyoko2.jpeg','kiyoko3.jpeg','kiyoko4.jpeg','kiyoko5.jpeg','kiyoko6.jpeg','kiyoko7.jpeg'];
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
