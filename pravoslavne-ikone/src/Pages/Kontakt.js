import React, { useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { handlePreventPaste, handleSubmit, validateInput } from '../helperFunctions/contactHelperFunctions';
import { VALIDATION_PATTERNS } from '../consts/validationPatterns';
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
          handleSubmit(e,t,status,setLoading,setStatus);
        }}
      >
        <div className="title">
          <h1 lang="sr-Cyrl">{t('kontaktirajte_nas')}</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <input
              onChange={(e) => {
                validateInput(e, 'name', i18n.language,setStatus);
              }}
              onInput={(e) => validateInput(e, 'name', i18n.language,setStatus)}
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
                validateInput(e, 'email', i18n.language,setStatus);
              }}
              onInput={(e) => validateInput(e, 'email', i18n.language,setStatus)}  
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
                validateInput(e, 'phone', i18n.language,setStatus);
              }}
              onInput={(e) => validateInput(e, 'phone', i18n.language,setStatus)}
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
                validateInput(e, 'subject', i18n.language,setStatus);
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
                validateInput(e, 'textarea', i18n.language,setStatus);
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
