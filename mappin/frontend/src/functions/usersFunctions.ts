export const handleSubmitRegister = (
  e,
  newUser,
  setErrRegistered,
  setSuccessRegistered,
  setLoggedUserEmail
) => {
  e.preventDefault();
  const { username, email, password } = newUser.current;
  const newUserObject = {
    username,
    email,
    password,
  };

  fetch("/api/users/register_new_user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserObject),
  })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data)
      if (data.user) {
        console.log(data)
        setSuccessRegistered(data.loggedIn);
        setErrRegistered({ display: false, msg: "" });
        setLoggedUserEmail(data.userData.email);
        alert("User is registered!");
      } else {
        setErrRegistered({ display: true, msg: data });
      }
    })
    .catch((errMessages) => {
      setErrRegistered({ dispay: true, msg: errMessages });
    });
};

export const handleLogout = (setDisplayBtns, setIsUserLoggedIn, setPopupOpen) => {
  if (window.confirm("Are you sure you want to logout?")) {
    fetch("/api/users/logout")
      .then((data) => {
        setDisplayBtns(false);
        setPopupOpen(false);
        setIsUserLoggedIn(false);
        alert("User is logged out!");
      })
      .catch((err) => {
        console.log(err, "eror");
      });
  }
};

export const handleSubmitLogin = (
  e,
  loggedUser,
  setErrLoggin,
  setIsUserLoggedIn,
  setLoggedUserEmail,
  setPopupOpen
) => {
  e.preventDefault();
  const { username, password } = loggedUser.current;

  const loggedUserObject = {
    username,
    password,
  };
  fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loggedUserObject),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json();
      }
      return res.json();
    })
    .then((data) => {
      if (!data.user) {
        setErrLoggin({ display: true, msg: data });
      } else {
        setErrLoggin({ display: false, msg: "" });
        setIsUserLoggedIn(data.loggedIn);
        setLoggedUserEmail(data.userData.email);
        setPopupOpen(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
