const button = document.querySelectorAll('.button');
// console.log(button);
const body = document.querySelector('body');
// console.log(body);

button.forEach((button) => {
    console.log(button);
    button.addEventListener('click', () =>{
        if(button.id == "grey"){
            body.style.backgroundColor = `${button.id}`
        }
        if(button.id == "white"){
            body.style.backgroundColor = `${button.id}`
        }
        if(button.id == "blue"){
            body.style.backgroundColor = `${button.id}`
        }
        if(button.id == "yellow"){
            body.style.backgroundColor = `${button.id}`
        }

    })

});