import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../components/footer';
import './../style/kontakt.scss';
import { connect } from 'react-redux';
import { wholeStateToFalse } from '../actions/wholeStateToFalse';
import {
  ValidationInputTextareaTrue,
  ValidationInputTextareaFalse,
} from '../actions/validationInputTextarea';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

function Kontakt() {
  const { t } = useTranslation();
  const [status, setStatus] = useState({
    textarea: false,
    phone: false,
    validationInput: false,
    validationEmail: false,
    validationInputSubject: false,
  });

  let labelPosition = (position, display) => {
    let label = document.querySelector('label');
    label.style.position = 'absolute';
    label.style.top = `${position}px`;
    label.style.right = '0px';
    label.style.fontSize = '14px';
    label.style.display = `${display}`;
    label.style.color = 'red';
    label.style.opacity = 1;
  };

  function onClickHandle() {
    alert(t('poruka_je_poslata'));
  }

  function onClickHandle1() {
    alert(t('email_je_neispravan'));
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fyy4nvv',
        'template_pasc3rj',
        e.target,
        'user_iDF7GBVBepZlv2bZg187d'
      )
      .then(
        () => {
          alert(t('poruka_je_poslata'));
          setStatus({
            ...status,
            textarea: false,
            phone: false,
            validationInput: false,
            validationEmail: false,
            validationInputSubject: false,
          });
        },
        (error) => {
          console.log(error.text);
        }
      ); 

    e.target.reset();
  }
  //npm install emailjs-com --save

  let validationInputTextarea = (e) => {
    var pattern =
      /^[\s0-9-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ša-š:/.!?]+$/;
    let a = pattern.test(e.target.value);

    if (a) {
      e.target.style.borderColor = 'blue';
      setStatus({ ...status, textarea: true });

      e.target.setCustomValidity('');
    } else {
      e.target.setCustomValidity(t('poruka_je_prazna'));

      e.target.style.borderColor = 'red';

      setStatus({ ...status, textarea: false });
    }
  };
  let validationInputPhone = (e) => {
    var pattern = /^[\s0-9-]+$/;
    let a = pattern.test(e.target.value);

    if (a) {
      setStatus({ ...status, phone: true });
      e.target.style.borderColor = 'blue';
      e.target.setCustomValidity('');
    } else {
      e.target.setCustomValidity(t('ne_koristite_slovne_karaktere_msg'));

      setStatus({ ...status, phone: true });
      e.target.style.borderColor = 'red';
      labelPosition('170');
    }
  };

  let validationInputName = (e) => {
    var pattern =
      /^[\s-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ža-ž:/.!?]+$/;
    let a = pattern.test(e.target.value);

    if (a) {
      setStatus({ ...status, validationInput: true });
      e.target.style.borderColor = 'blue';
      labelPosition('0', 'none');
      e.target.setCustomValidity('');
    } else {
      e.target.setCustomValidity(
        t('ne_koristite_brojeve_specijalne_karaktere')
      );
      setStatus({ ...status, validationInput: false });
      e.target.style.borderColor = 'red';

      labelPosition('50', 'inline');
    }
  };

  let validationInputSubject1 = (e) => {
    var pattern =
      /^[\s0-9-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ša-š:/.!?]+$/;
    let a = pattern.test(e.target.value);

    if (a) {
      setStatus({ ...status, validationInputSubject: true });
      e.target.style.borderColor = 'blue';
      labelPosition('0', 'none');
      e.target.setCustomValidity('');
    } else {
      setStatus({ ...status, validationInputSubject: false });
      e.target.style.borderColor = 'red';
      labelPosition('230', 'inline');
    }
  };

  let validationEmail1 = (e) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let a = pattern.test(e.target.value);

    if (a) {
      e.target.style.borderColor = 'blue';
      setStatus({ ...status, validationEmail: true });
      document.querySelector('input[type="submit"]').disabled = false;

      labelPosition('110', 'none');
      e.target.setCustomValidity('');
    } else {
      e.target.setCustomValidity(t('email_je_neispravan'));

      setStatus({ ...status, validationEmail: false });
      e.target.style.borderColor = 'red';
      document.querySelector('input[type="submit"]').disabled = true;
      labelPosition('110', 'inline');
    }
  };

  return (
    <div className="main3">
      <Helmet>
        <title>Kontakt - Pravoslavne ikone - Nis</title>
        <meta name="description" content="Контактирајте нас за више детаља" />
        <meta name="keywords" content="контакт, православне иконе, емаил, prodaja" />
      </Helmet>
      <form
        className="wrapper"
        onSubmit={
          status.validationInputSubject &&
          status.textarea &&
          status.phone &&
          status.validationInput &&
          status.validationEmail
            ? sendEmail
            : (e) => {
                e.preventDefault();
              }
        }
      >
        <div className="title">
          <h1 lang='sr-Cyrl'>{t('kontaktirajte_nas')}</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <label lang='sr-Cyrl' htmlFor="from_name">{t('neispravan_unos')}</label>
            <input
              onKeyUp={validationInputName}
              type="text"
              className="input"
              placeholder={t('ime')}
              name="from_name"
              required
            ></input>
            <label htmlFor="email">{t('neispravan_unos')}</label>
            <input
              onKeyUp={validationEmail1}
              name="email"
              id="email"
              type="email"
              className="input"
              placeholder={t('email_adresa')}
              required
            ></input>
            <label htmlFor="phone">{t('neispravan_unos')}</label>
            <input
              onKeyUp={validationInputPhone}
              type="text"
              className="input"
              placeholder={t('telefon')}
              name="phone"
              required
            ></input>
            <label htmlFor="subject">{t('neispravan_unos')}</label>
            <input
              onKeyUp={validationInputSubject1}
              type="text"
              className="input"
              placeholder={t('tema')}
              name="subject"
              required
            ></input>
          </div>
          <div className="msg">
            <textarea
              onKeyUp={validationInputTextarea}
              placeholder={t('poruka')}
              name="message"
            ></textarea>
            <input
              onClick={
                status.validationInputSubject &&
                status.textarea &&
                status.phone &&
                status.validationInput &&
                status.validationEmail
                  ? onClickHandle
                  : onClickHandle1
              }
              type="submit"
              className="btn"
              value={t('posalji')}
              required
            ></input>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
}

let mapStateToProps = (state) => {
  return { statusIzReduxa: state.status };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setWholeStatusToFalse: () => {
      dispatch(wholeStateToFalse());
    },
    actionValidationInputTextareaTrue1: () => {
      dispatch(ValidationInputTextareaTrue());
    },
    ValidationInputTextareaFalse1: () => {
      dispatch(ValidationInputTextareaFalse());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Kontakt);
