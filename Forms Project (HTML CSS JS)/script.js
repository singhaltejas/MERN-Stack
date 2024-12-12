let input = document.getElementById("input");


let onfun = () => {
    input.style.backgroundColor = 'red';
};

let offfun = () => {
    input.style.backgroundColor = 'orange';
};


let funsubmit = () => {
    alert(`You Submitted ${input.value}`);
};

let selectfun = () => {
    alert("You Selected Something");
};