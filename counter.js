let counter = 0;

function count(){
    counter ++;
    document.querySelector("h3").innerHTML = counter
}


//The below code can be improoved better eg.
/*
function change(){
    if(document.querySelector("h2").innerHTML === "Hello"){
        document.querySelector("h2").innerHTML = "Adios";
    }else{
        document.querySelector("h2").innerHTML = "Hello";
    }
    
}
*/

//Here is the improovement

function change(){
    const heading = document.querySelector("h2");
    if (heading.innerHTML==='Hello'){
        heading.innerHTML = 'Goodbye'
    }else{
        heading.innerHTML = 'Hello'
    }
    document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('button').onclick = change;
    })

}