import React, { useState } from "react";
import emailjs from "emailjs-com";

import fb from "./../assets/facebook.svg";
import "./../style/kontakt.scss";
// import { useForm } from "react-hook-form";

export default function Kontakt() {
  const [status, setStatus] = useState({
    textarea:false,
    phone:false,
    validationInput:false,
    validation:false


  });

  function onClickHandle() {
    console.log(status)

    alert("Порука је послата!");
  }

  function onClickHandle1() {
    console.log(status)
    alert("Емаил је неисправан!");
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vqyu154",
        "template_pasc3rj",
        e.target,
        "user_iDF7GBVBepZlv2bZg187d"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({...status, textarea:false, phone:false, validationInput:false, validation:false })
        },
        (error) => {
          console.log(error.text);
        }
      ); //ova funkcija je kopirana sa njihovog sajta
    console.log(e.target);
    e.target.reset();
  }

  //npm install emailjs-com --save, ovo mora da se instalira da bi EmailJS dodatak radio

  //
  let validationInputTextarea = (e) => {
    var pattern =
      /^[\s0-9-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ša-š:/.!?]+$/;
    let a = pattern.test(e.target.value);
    console.log(a);
    // setStatus(false);

    if (a) {
      e.target.style.borderColor = "blue";
      setStatus({...status, textarea:true})
      // setStatus(true);
      // setStatus([...status, true])
    } else {
      e.target.style.borderColor = "red";
      setStatus({...status, textarea:false})
      // setStatus(false);
      // setStatus([...status, false])

    }
  };
  let validationInputPhone = (e) => {
    var pattern = /^[\s0-9-]+$/;
    let a = pattern.test(e.target.value);
    console.log(a);
    // setStatus(false);

    if (a) {
      setStatus({...status, phone:true});
      e.target.style.borderColor = "blue";
      // setStatus(true);
    } 
    else {
      setStatus({...status, phone:true})
      e.target.style.borderColor = "red";
      // setStatus(false);
    }
  };

  let validationInput = (e) => {
    var pattern =
      /^[\s0-9-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ša-š:/.!?]+$/;
    let a = pattern.test(e.target.value);
    console.log(a);
    // setStatus(false);

    if (a) {
      setStatus({...status, validationInput:true})
      e.target.style.borderColor = "blue";
      // setStatus(true);
    } 
    else {
      setStatus({...status, validationInput:true})
      e.target.style.borderColor = "red";
      // setStatus(false);
    }
  };

  let validation = (e) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let a = pattern.test(e.target.value);
    console.log(a);

    if (a) {
      e.target.style.borderColor = "blue";
      setStatus({...status, validation:true})
      let dugme = (document.querySelector(
        'input[type="submit"]'
      ).disabled = false);

      // setStatus(true);

      let label = document.querySelector("label");
      label.style.display = "none";
    } else {
      setStatus({...status, validation:true})
      e.target.style.borderColor = "red";
      let dugme = (document.querySelector(
        'input[type="submit"]'
      ).disabled = true);
      let dugme1 = document.querySelector('input[type="submit"]');
      let label = document.querySelector("label");
      label.style.position = "absolute";
      label.style.top = "110px";
      label.style.right = "0px";
      label.style.fontSize = "14px";
      label.style.display = "inline";
      label.style.color = "red";

      label.style.opacity = 1;

      // setStatus(false);

    }
    console.log(status);
  };

  return (
    <div className="main3">
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <form className="wrapper" onSubmit={sendEmail}>
        <div className="title">
          <h1>Контактирајте нас!</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <input
              onKeyUp={validationInput}
              type="text"
              className="input"
              placeholder="Name"
              name="from_name"
              required
            ></input>
            <label htmlFor="email">Неисправан унос</label>
            <input
              onKeyUp={validation}
              name="email"
              id="email"
              type="email"
              className="input"
              placeholder="E-mail адреса"
              required
            ></input>

            <input
              onKeyUp={validationInputPhone}
              type="text"
              className="input"
              placeholder="Телефон"
              name="phone"
              required
            ></input>
            <input
              onKeyUp={validationInput}
              type="text"
              className="input"
              placeholder="Тема"
              name="subjekt"
              required
            ></input>
          </div>
          <div className="msg">
            <textarea
              onKeyUp={validationInputTextarea}
              placeholder="Порука"
              name="message"
            ></textarea>
            <input
              onClick={(status.textarea && status.phone && status.validationInput && status.validation) ? onClickHandle : onClickHandle1}
              onSubmit={validation}
              type="submit"
              className="btn"
              value="Пошаљи"
              required
            ></input>
          </div>
        </div>
        <div className="contactDetails">
          <p>gagaikone@live.com</p>
          <p>061/321-60-87</p>
          <p>
            <a
              target="_blank"
              href="https://www.facebook.com/Pravoslavne-ikone-Nis-1691948927791453"
            >
              <img id="fb" src={fb}></img>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
