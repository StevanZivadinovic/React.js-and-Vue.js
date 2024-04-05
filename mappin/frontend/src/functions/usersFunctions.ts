export const handleSubmitRegister = (
  e,
  newUser,
  setErrRegistered,
  setSuccessRegistered,
  setLoggedUser
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
      if (res.ok) {
        alert("User is registered!");
        setSuccessRegistered(true);
        setErrRegistered({ display: false, msg: "" });
        localStorage.setItem("loggedAndRegistredUser", email);
        setLoggedUser(email)
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data?.error) {
        setSuccessRegistered(false);
        setErrRegistered({ display: true, msg: data?.error });
      }
    })
    .catch((err) => {
      setErrRegistered({ dispay: true, msg: err });
    });
};

export const handleLogout = (setDisplayBtns,setLoggedUser, setPopupOpen) => {
  if(window.confirm('Are you sure you want to logout?')){
    localStorage.removeItem("loggedAndRegistredUser");
    setDisplayBtns(false);
    setLoggedUser('')
    setPopupOpen(false);
  }
};

export const handleSubmitLogin = (
  e,
  loggedUser,
  setErrRegistered,
  setSuccessRegistered,
  setLoggedUser,
  setPopupOpen,
  
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
    if(data.error){
      setErrRegistered({display:true, msg:data.error})
    }else{
      setErrRegistered({display:false, msg:''})
      setSuccessRegistered(true)
      localStorage.setItem("loggedAndRegistredUser", data.email);
      setLoggedUser(data.email)
      setPopupOpen(false);
  }
})
.catch((err) => {
    console.error(err); 
});
};
