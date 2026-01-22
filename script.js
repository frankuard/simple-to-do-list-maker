searchBox = document.querySelector(".search")
inputBox = document.querySelector(".textEnter")
taskList = document.querySelector(".taskList")




try{

 
searchBox.addEventListener("click", () => {
if (inputBox.value === ""){ 
    alert("You need to enter something!")
}
else{
let newList = document.createElement('li');


 newList.innerHTML = inputBox.value;

taskList.appendChild(newList)

inputBox.value = "";
saveData();
let span = document.createElement('span');
span.innerHTML = "X";
newList.appendChild(span);


}
});

taskList.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
}

catch (err){
    console.log("Error:", err.message)
}


function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
    
}

function retrieveData() {
    taskList.innerHTML= localStorage.getItem("data");
}
retrieveData()