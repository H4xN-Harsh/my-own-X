let num = document.querySelector('#num');

let increase = document.querySelector('#increase');

let reset = document.querySelector('#reset');

let decrease = document.querySelector('#decrease')






let no = 0;
increase.addEventListener('click', function(){
    no++;
    num.innerText = no;
});


reset.addEventListener('click',function(){
    no=0;
    num.innerText = no;
})


decrease.addEventListener('click',function(){
    no--;
    num.innerText = no;
})


