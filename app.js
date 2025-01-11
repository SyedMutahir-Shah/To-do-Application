var getUl = document.getElementById('ul'); // Correctly target the <ul> element

function add() {
    var getInp = document.getElementById('inp'); // Correctly target the <input> element

    if (getInp.value == "") {
        alert("Please Enter A value"); // Alert if input is empty
    } else {


        getUl.innerHTML += `<li class="mt-2">
    <span>${getInp.value}</span>
    <button class="btn btn-danger ms-2" onclick="del(this)" style="padding: 5px 10px;">Delete</button> 
    <button class="btn btn-success ms-2" onclick="upd(this)" style="padding: 5px 10px;">Update</button>
</li>`;

        getInp.value = ""; // Clear the input field after adding the item
    }
}

// Function to delete all items in the list
function delAll() {
    getUl.innerHTML = ''; // Remove all list items inside <ul>
}

// Function to delete an individual list item
function del(e) {
    e.parentNode.remove(); // Remove the parent <li> element
}

// Function to update the value of a list item
function upd(a) {
    // Prompt the user to enter a new value
    var newvalue = prompt("Please Enter an Updated Value", a.parentNode.firstChild.textContent);

    // If the user entered a new value, update the list item text
    if (newvalue !== null) {
        a.parentNode.firstChild.textContent = newvalue; // Update the text content
    }
}
