

let tasks = [];


function addTasks(e){
    let inputs = document.querySelector(".input-box").value;
    if(inputs!==""){
        tasks.push(inputs);
    }
    inputs.value="";
    rerender();
}

function deleteTask(i){
    tasks.splice(i,1);
    rerender();
}

console.log(tasks);
function rerender(){
    const list = document.querySelector('.lists')
    list.innerHTML = "";
    tasks.forEach((task,index)=>{
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.innerText = task;

        const btn = document.createElement("button");
        btn.innerText = "X";

        // ✅ SET CLASS HERE
        btn.classList.add("remove-btn");

        btn.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(btn);
        list.appendChild(li);
        


    })
}


let add = document.querySelector('.add-btn')
add.addEventListener('click',addTasks);