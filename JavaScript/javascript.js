const deleteButton1 = document.getElementById("delete1");
const deleteButton2 = document.getElementById("delete2");

deleteButton1.addEventListener("click", (e) => {
    e.preventDefault();
    const container1 = document.getElementsByClassName("containNameAndID")[0];
    container1.remove();
});

deleteButton2.addEventListener("click", (x) => {
    x.preventDefault();
    const container2 = document.getElementsByClassName("containNameAndID")[1];
    container2.remove();
});



// Delete User Function
function deleteUser() {
    let userToDelete = event.target.parentNode;
    userToDelete.remove();
  }
  
  // Create User Function
  function createUser() {
    let name = document.getElementById("name").value;
    let idNumber = document.getElementById("idNumber").value;
    let country = document.getElementById("country").value;
    let languages = document.getElementById("languages").value;
  
    if (name === "" || idNumber === "" || country === "" || languages === "") {
      alert("Please fill in all fields!");
    } else {
      let newUser = document.createElement("div");
      newUser.className = "containNameAndID";
      newUser.innerHTML =
        '<h2 class="name">' +
        name +
        '</h2><p class="IDNum">' +
        idNumber +
        '</p><p class="country">' +
        country +
        '</p><p class="lang">' +
        languages +
        '</p><button class="btn" onclick="deleteUser()">Delete User</button>';
  
      let userForm = document.getElementById("userForm");
      let result = document.getElementById("result");
      userForm.reset();
      result.appendChild(newUser);
    }
  }
  