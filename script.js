//document.body.innerHTML = 'hello';
//document.title ='Good job';

//console.log(document.title);
//document.title = 'Change';

//console.log(document.body.innerHTML);
//document.body.innerHTML = 'Changed';

//document.body.innerHTML = '<button>Good Job</button>';

//console.log(document.querySelector('button'));
//document.querySelector('button').innerHTML = 'Changed';


//document.querySelector('.js-button').innerHTML = 'Good Morning';

//const buttonElement = document.querySelector('.js-button');
//console.log(buttonElement);


//const buttonElement = document.querySelector('js-subscribe-button');


function subscribe(){
    const buttonElement = document.querySelector('js-subscribe-button');



if (buttonElement.innerText === 'Subscribe'){
    buttonElement.innerHTML = 'Subscribed';
}else{
    buttonElement.innerHTML = 'Subscribe';
}
}


