document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('#submit').disabled = true;
    document.querySelector('#new').onkeyup = () => {
        if(document.querySelector('#new').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }else{
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#new').value;
        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);
        document.querySelector('#new').value = '';

        document.querySelector('#submit').disabled = true

        //stop form from submitting
        return false;
    }
})