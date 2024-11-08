import React, { useState } from 'react';
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
import {
  handlePreventPaste,
  handleSubmit,
  validateInput,
} from '../helperFunctions/contactHelperFunctions';
import { VALIDATION_PATTERNS } from '../consts/validationPatterns';
import { useContactData } from '../hooks/useContactDataHook';
function Kontakt() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { contactData } = useContactData();
  const [status, setStatus] = useState({
    name: false,
    email: false,
    textarea: false,
  });
  return (
    <div className="kontaktMain bg-center bg-no-repeat bg-cover">
      <Helmet>
        <title>Kontakt - Pravoslavne ikone - Nis</title>
        <meta name="description" content="Контактирајте нас за више детаља" />
        <meta
          name="keywords"
          content="контакт, православне иконе, емаил, prodaja"
        />
      </Helmet>
      <div className="mobile:h-auto mobile:w-full self-center w-full min-h-screen mx-auto bg-black bg-opacity-70 p-8 shadow-lg relative flex flex-col items-center justify-center">
        <div className="mainContactTitle pb-[1rem] h-auto mb-[2rem]">
          <h1 lang="sr-Cyrl" className="mobile:text-[1.7rem] mobile:mb-[2rem] w-full mx-0 text-center mt-0 pt-0  mb-[0.5rem] text-[2.5rem]">
            {t('kontaktirajte_nas')}
          </h1>
          <div className="mobile:hidden inline-block border-0 border-b border-solid border-[#842d25] w-[10%] z-100"></div>
        </div>
        <div className="mobile:flex-col mobile:justify-center mobile:items-center flex w-full justify-center">
          <div className="mobile:w-[80%] w-[30%]">
            {contactData?.map((a: any, i: number) => {
              return (
                <div className="mobile:w-[80%] mobile:justify-between mobile:pb-[1rem] flex pb-[2rem] items-center" key={i}>
                  <FontAwesomeIcon icon={a?.icon} className="mobile:text-[1.5rem] mr-[1rem] w-[3rem] text-[1.7rem]" />
                  <div className="text-left mobile:w-full">
                    <p className="mobile:text-[1.3rem] font-bold text-[1.5rem] text-[#a4372f]">{a?.title}</p>
                    <p className="text-[1.2rem]">{a?.content}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <form
            className="mobile:flex-col mobile:h-auto flex z-100 mobile:w-[80%] w-[30%]"
            onSubmit={(e) => {
              handleSubmit(e, t, status, setLoading, setStatus);
            }}
          >
            <div className="input-fields flex flex-col mr-[4%] z-100 relative w-full ">
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  validateInput(e, 'name', i18n.language, setStatus);
                }}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  validateInput(e, 'name', i18n.language, setStatus)
                }
                onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => {
                  handlePreventPaste(e, VALIDATION_PATTERNS?.name);
                }}
                type="text"
                className="input focus:outline-none mt-[10px] bg-transparent border-0 border-b-[1px] border-solid border-[#fff] p-[10px] text-white w-full z-100"
                placeholder={t('ime')}
                name="from_name"
                required
                autoComplete="name"
              ></input>
              <input
                onChange={(e) => {
                  validateInput(e, 'email', i18n.language, setStatus);
                }}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  validateInput(e, 'email', i18n.language, setStatus)
                }
                onPaste={(e) => {
                  handlePreventPaste(e, VALIDATION_PATTERNS?.email);
                }}
                name="email"
                id="email"
                type="email"
                className=" input focus:outline-none mt-[10px] bg-transparent border-0 border-b-[1px] border-solid border-[#fff] p-[10px] text-white w-full z-100"
                placeholder={t('email_adresa')}
                required
                autoComplete="email"
              ></input>
              <textarea
                onChange={(e) => {
                  validateInput(e, 'textarea', i18n.language, setStatus);
                }}
                placeholder={t('poruka')}
                name="message"
                className='focus:outline-none mt-[10px] bg-transparent border-0 border-b-[1px] border-solid border-[#fff] p-[10px] text-white w-full z-100'
              ></textarea>
              <button type="submit" className="bg-[#842d25] text-center p-4 rounded text-white cursor-pointer uppercase w-full font-bold outline-none border-none mt-[10px] hover:bg-[#571b16]" disabled={loading}>
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  t('posalji')
                )}
              </button>
            </div>
          </form>
        </div>
        <h3 className="mobile:hidden w-full mx-0 text-center pt-0 text-[1.2rem] mb-[-1rem] mt-[2rem]">{t('kontaktirajte_nas_sub')}</h3>
      </div>
    </div>
  );
}

let mapStateToProps = (state: { status: any }) => {
  return { statusIzReduxa: state.status };
};

let mapDispatchToProps = (dispatch: (arg0: any) => void) => {
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
