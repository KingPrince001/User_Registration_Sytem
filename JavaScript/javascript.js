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
        '</p><button id="delete" onclick="deleteUser()">Delete User</button>';
  
      let userForm = document.getElementById("userForm");
      let result = document.getElementById("result");
      userForm.reset();
      result.appendChild(newUser);
    }
  }
  