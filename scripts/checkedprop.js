const checkboxbtn = document.getElementById("checkboxbtn");
const submitbtn = document.getElementById("submit");
const applebtn = document.getElementById("apple");
const mangobtn = document.getElementById("mango");
const kiwibtn = document.getElementById("kiwi");

submitbtn.onclick = function() {
    if(checkboxbtn.checked){
        document.getElementById("displaymessage").textContent = "you are subscribed";

        // conditional statements
        if(applebtn.checked || mangobtn.checked || kiwibtn.checked){
            console.log(applebtn);
            document.getElementById("displaymessage").textContent = `You selected ${applebtn.id}`;
        }else{
            document.getElementById("displaymessage").textContent = "You have not selected a fruit";
        }
    }else{
        document.getElementById("displaymessage").textContent = "you are not subscribed";
    }

    
}