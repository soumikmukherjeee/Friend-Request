//Friend Request

let a =document.querySelector("h5")

let add = document.querySelector("#add")
let btn = document.querySelector("button")

let check =0;

add.addEventListener("click",function (){
    if(check==0){
        a.innerHTML="Friend"
        a.style.color="green"
        add.innerHTML="Remove Friend"
        btn.style.backgroundColor="gray"

        check=1;
    }else{
        a.innerHTML="Stranger"
        a.style.color="red"
        add.innerHTML="Add Friend"
        btn.style.backgroundColor="cadetblue"

        check=0;
    }
})

