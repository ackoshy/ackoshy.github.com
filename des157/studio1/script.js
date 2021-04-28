
var myForm = document.querySelector('#myform'); 
var madlib = document.querySelector('#madlib'); 
 myForm.addEventListener('submit', function(event){
    event.preventDefault(); 
    var noun1 = document.querySelector('#noun1').value; 
    var noun2 = document.querySelector('#noun2').value; 
    var noun3 = document.querySelector('#noun3').value; 
    var adj1= document.querySelector('#adj1').value; 
    var adj2 = document.querySelector('#adj2').value; 
    var number = document.querySelector('#number').value;  

    var myText; 
    var myText_two; 
    var myText_three; 
    var myText_four; 

    if(noun1 && noun2 && noun3 && adj1 && adj2 && number){
        myText = ` • <b><u>${noun1}'s</u><b> maganizine named Donald Trump the most <b><u>${adj1}</u><b> man alive`; 
        myText_two = `• Trump released his tax returns, paying more than $<b><u>${number}</u><b> in taxes!`; 
        myText_three = `• Donald Trump was recently spotted attending the <b><u>${noun3}</u><b> protest in <b><u>${noun2}<u><b>`; 
        myText_four = `MAKE AMERICA <b><u>${adj2}</u><b> AGAIN`; 
    }
   
    var formData = document.querySelectorAll("input[type=text"); 
    for (var eachField of formData){
        eachField.value = ""; 
    } 

     text_one.innerHTML = myText;
     text_two.innerHTML = myText_two; 
     text_three.innerHTML = myText_three; 
     text_four.innerHTML = myText_four; 

}); 

(function () {

    'use strict';

    document.querySelector('#myform').addEventListener('submit',function(event){
        event.preventDefault(); 
        document.getElementById('overlay').className='showing'; 
        document.getElementById('initial').className='hidden';

    
    });
})();