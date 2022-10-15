class User {
  constructor(_firstName, _lastName, _username, _DoB, _phone) {
    (this.firstName = _firstName),
      (this.lastName = _lastName),
      (this.username = _username),
      (this.DoB = _DoB),
      (this.phone = _phone);
  }
}

const getEle = (id) => {
  return document.getElementById(id);
};

const getVal = (id) => document.getElementById(id).value;

getEle("btnCreate").addEventListener("click", () => {
  getEle("exampleModalLabel").innerHTML = "Add";
  getEle("btnSubmit").style.display = "block";
  getEle("btnUpdate").style.display = "none";
});

const getDelete = (username) => {
  fetch(`/users`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })

    .then((response) => {
      if (response === "No user to delete") {
        getEle("message").textContent = "No user to delete";
      } else {
        window.location.reload(true);
      }
    })

    .catch((err) => console.log(err));
};

const getEdit = (id) => {
  getEle("exampleModalLabel").innerHTML = "Edit User";
  getEle("btnSubmit").style.display = "none";
  getEle("btnUpdate").style.display = "block";

  fetch(`/users/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      const { user } = response;
      getEle("firstName").value = user.firstName;
      getEle("lastName").value = user.lastName;
      getEle("username").value = user.username;
      getEle("username").setAttribute("disabled", true);
      getEle("DoB").value = user.DoB;
      getEle("phone").value = user.phone;
    })
    .catch((err) => console.log(err));
};

getEle("btnUpdate").addEventListener("click", () => {
  let firstName = getEle("firstName").value;
  let lastName = getEle("lastName").value;
  let username = getEle("username").value;
  let DoB = getEle("DoB").value;
  let phone = getEle("phone").value;

  const userInfo = new User(firstName, lastName, username, DoB, phone);
  fetch("/users", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userInfo,
    }),
  })
    .then((res) => {
      if (res.ok) res.json();
    })
    .then((response) => {
      console.log(response);
      window.location.reload(true);
    })
    .catch((err) => console.log(err));
});
