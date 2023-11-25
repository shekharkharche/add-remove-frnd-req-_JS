let friendStatus = document.querySelector("h5")
let btn = document.querySelector("#add")
let check = 0

btn.addEventListener("click",()=>{
    if (check == 0){
        friendStatus.innerHTML = "Friends";
        friendStatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1
     }else{
        friendStatus.innerHTML = "Stranger";
        friendStatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
        }
})