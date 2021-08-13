let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");

let filter = document.querySelector("#searchUser");

let ui = new UI ();
////search button
searchBtn.addEventListener("click", (e) => {
  let userText = searchUser.value;
  if (userText != "") {
    //Fetch api
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        //console.log(data)
        if (data.message == "Not Found") {
          //show alert
          ui.showAlert("User not Found!","alert alert-danger")
        } else {
          //show profile
          ui.showProfile(data);
        }
      });
  } else {
    //clear profile
    ui.clearProfile()
    ui.clearAlert()
  }
});

///profile Filter

filter.addEventListener("keyup", (e) => {
  let userText = filter.value;
  if (userText != "") {
    //Fetch api
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        //console.log(data)
        if (data.message == "Not Found") {
          //show alert
          ui.showAlert("User not Found!","alert alert-danger")
        } else {
          //show profile
          ui.showProfile(data);
        }
      });
  } else {
    //clear profile
    ui.clearProfile()
    ui.clearAlert()
  }
});
