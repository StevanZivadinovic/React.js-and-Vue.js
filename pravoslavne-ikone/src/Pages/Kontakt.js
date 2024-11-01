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
import { errorMessages, VALIDATION_PATTERNS } from '../consts/validationPatterns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
function Kontakt() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    name: false,
    phone: false,
    email: false,
    subject: false,
    textarea: false,
  });
  const updateStatus = (field, isValid) => {
    setStatus((prev) => ({ ...prev, [field]: isValid }));
  };
  const validateInput = (e, type,language) => {
    const value = e.target.value;
    const isValid = VALIDATION_PATTERNS[type].test(value);
    e.target.style.borderColor = isValid ? 'blue' : 'red';
    e.target.setCustomValidity(isValid ? '' : errorMessages[type][language]);
    updateStatus(type, isValid);
  };

  function onClickHandleError() {
    alert(t('email_je_neispravan'));
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_fyy4nvv',
        'template_pasc3rj',
        e.target,
        'user_iDF7GBVBepZlv2bZg187d'
      )
      .then(() => {
        alert(t('poruka_je_poslata'));
        setStatus({
          name: false,
          phone: false,
          email: false,
          subject: false,
          textarea: false,
        });
        e.target.reset();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error?.text);
        onClickHandleError();
      });
  };

  const isFormValid = () => {
    return (
      status?.name &&
      status?.phone &&
      status?.email &&
      status?.subject &&
      status?.textarea
    );
  };

  const handleSubmit = (e) => {
    if (isFormValid()) {
      return sendEmail(e);
    } else {
      e.preventDefault();
    }
  };

  const handlePreventPaste = (e,regexPattern)=>{
    const pastedData = e.clipboardData.getData('Text');
    const regex =regexPattern;
  if (!regex.test(pastedData)) {
    e.preventDefault(); 
    alert('Pasted data is not allowed'); 
  }
  }

  return (
    <div className="main3">
      <Helmet>
        <title>Kontakt - Pravoslavne ikone - Nis</title>
        <meta name="description" content="Контактирајте нас за више детаља" />
        <meta
          name="keywords"
          content="контакт, православне иконе, емаил, prodaja"
        />
      </Helmet>
      <form
        className="wrapper"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="title">
          <h1 lang="sr-Cyrl">{t('kontaktirajte_nas')}</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <input
              onChange={(e) => {
                validateInput(e, 'name', i18n.language);
              }}
              onInput={(e) => validateInput(e, 'name', i18n.language)}
              onPaste={(e)=>{handlePreventPaste(e, VALIDATION_PATTERNS?.name)}}
              type="text"
              className="input"
              placeholder={t('ime')}
              name="from_name"
              required
              autoComplete="name"
            ></input>
            <input
              onChange={(e) => {
                validateInput(e, 'email', i18n.language);
              }}
              onInput={(e) => validateInput(e, 'email', i18n.language)}  
              onPaste={(e)=>{handlePreventPaste(e, VALIDATION_PATTERNS?.email)}}            
              name="email"
              id="email"
              type="email"
              className="input"
              placeholder={t('email_adresa')}
              required
              autoComplete="email"
            ></input>
            <input
              onChange={(e) => {
                validateInput(e, 'phone', i18n.language);
              }}
              onInput={(e) => validateInput(e, 'phone', i18n.language)}
              onPaste={(e)=>{handlePreventPaste(e, VALIDATION_PATTERNS?.phone)}}
              type="text"
              className="input"
              placeholder={t('telefon')}
              name="phone"
              required
              autoComplete="tel"
            ></input>
            <input
              onChange={(e) => {
                validateInput(e, 'subject', i18n.language);
              }}
              type="text"
              className="input"
              placeholder={t('tema')}
              name="subject"
              required
            ></input>
          </div>
          <div className="msg">
          
            <textarea
              onChange={(e) => {
                validateInput(e, 'textarea', i18n.language);
              }}
              placeholder={t('poruka')}
              name="message"
            ></textarea>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                t('posalji')
              )}
            </button>
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
