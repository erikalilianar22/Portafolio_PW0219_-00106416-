let counter = 0;

let counter_btn =  document.querySelector("#counter-btn")
let counter_space =  document.querySelector("#counter-space")

let add = () => {
        counter ++;
        counter_space.innerHTML = counter;
}

counter_btn.addEventListener("click", ()=>{
        add();
})
