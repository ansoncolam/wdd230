const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function() {

    if (input.value == "") {
        alert("Please enter your favorite Book of Mormon chapters.");
        input.focus();
    } else {
        const myItem = input.value;
        input.value = "";
    
        const listItem = document.createElement("li");
        const listBtn = document.createElement("button");
        const listText = document.createElement("span");
    
        listText.textContent = myItem;
        listItem.appendChild(listText);
    
        listBtn.textContent = "❌";
        listItem.appendChild(listBtn);
    
        list.appendChild(listItem);
    
        listBtn.addEventListener("click", function() {
          list.removeChild(listItem);
          input.focus();
        });

        input.focus();
    }
    });