const a = document.querySelector("body");
const b = document.getElementById("con");
const hide = document.getElementById("hide"); 
const btn1 = document.getElementById("btn");
const count = document.getElementById("count");
const box5 = document.querySelector(".box5");


function show(){
    b.style.display = b.style.display ==='none'?'block':'none';

};

const arr = [];

function inp (){

    const c = document.getElementById("input").value;

    if(c.trim() !== '' ){
    
        check(c);
        document.getElementById("input").value = '';
        hide.style.display = "none";
       
    }
    
};

function check(c){
    const eleToCheck = c;
    const checkInput = arr.includes(eleToCheck);

    if(checkInput){
        alert("User is already added please add new user");
    }
    else{
        arr.push(c);
        displayinput();
        
    }
}

const rangeValue= document.getElementById("range");

function rangeVal(index){
   
    rangeValue.value=index+1;
}

function displayinput(){

    const userbox = document.getElementById("user"); 
    userbox.innerHTML='';     
               
    arr.forEach((user, index) => {

        const box = document.createElement('div');
        box.classList.add("box4");

        const userLogo = document.createElement("p");
        userLogo.className=("userlogo");
        userLogo.textContent = user.slice(0,2).toUpperCase();
        box.appendChild(userLogo);        

        const userList = document.createElement("p");
        userList.className=("userlist");
        userList.textContent = user;
        box.appendChild(userList);

        const can = document.createElement("div");
        can.className=("edit");
        can.textContent = "Can Edit";
        box.appendChild(can);

        const remove = document.createElement("button");
        remove.className=("remove");
        remove.textContent = "X";
        
        remove.onclick = () => removeuser(index);
        box.appendChild(remove);

        count.textContent=index+1;
        rangeVal(index)
        userbox.appendChild(box)
    });
   
}


function removeuser(index){
    const z = arr.splice(index,1);
    console.log(z.toString());
    count.textContent=index;
    rangeValue.value=index;
    displayinput();
    addNotification(z);
  

}

let toggle1 = document.querySelector(".button4");

function toggleButton(){
    toggle1.classList.toggle("active");
    const link=document.querySelector(".link");

    if(toggle1.classList.contains("active")){
       
        link.style.display="block";
    }
    else{
        link.style.display="none";   
    }
    
}

const copyButton = document.getElementById("copyButton");

function info(){

    box5.style.visibility= "visible";
    const box7 = document.createElement("div")
    box7.classList.add("box7");

    const p3= document.createElement("p");
    p3.classList.add("Link");
    p3.textContent = "Link Copied !"; 
    box7.appendChild(p3);
    box5.appendChild(box7);

}

copyButton.addEventListener("click",info);

// setTimeout(function(){
//     const box7 = document.querySelector(".box7:first-child");
//     box7.remove();
// }, 2000);

// arrow function


function addNotification(z){

    box5.style.visibility= "visible";
    const box6 = document.createElement("div")
    box6.classList.add("box6");

    const p = document.createElement("p");
    p.classList.add("removeduser");
    p.textContent= z;
    box6.appendChild(p);

    const p2= document.createElement("p");
    p2.classList.add("removed");
    p2.textContent = "removed"; 
    box6.appendChild(p2);

    const cross = document.createElement("button");
    cross.classList.add("crossed");
    cross.textContent = "x";
    box6.appendChild(cross);

    cross.onclick = () => removeDiv();
    box5.appendChild(box6);

    // REMOVE ICON CROSS ICON
    // 
    setTimeout( () =>{

        // WHICH ELEMENT OT RMEOVE 
        const box6 = document.querySelector(".box6:first-child")
        // console.log(box6);
        box6.remove();
        
    }, 3000);

}
// only after  it shows up on the screen, after 3 seconds it

function removeDiv(){
    const box6 = document.querySelector(".box6:first-child")
    console.log(box6);
    box6.remove();
    
}

    // addNotification();

btn1.addEventListener("click",inp);


