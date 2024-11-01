import { errorMessages, VALIDATION_PATTERNS } from "../consts/validationPatterns";
import emailjs from 'emailjs-com';


export const updateStatus = (field, isValid,setStatus) => {
    setStatus((prev) => ({ ...prev, [field]: isValid }));
  };
export const validateInput = (e, type,language,setStatus) => {
    const value = e.target.value;
    const isValid = VALIDATION_PATTERNS[type].test(value);
    e.target.style.borderColor = isValid ? 'blue' : 'red';
    e.target.setCustomValidity(isValid ? '' : errorMessages[type][language]);
    updateStatus(type, isValid,setStatus);
  };

  export   function onClickHandleError(t) {
    alert(t('email_je_neispravan'));
  }

  export  const sendEmail = (e,t,setLoading,setStatus) => {
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
          email: false,
          textarea: false,
        });
        e.target.reset();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        onClickHandleError(t);
      });
  };

  export  const isFormValid = (status) => {
    return (
      status?.name &&
      status?.email &&
      status?.textarea
    );
  };

  export  const handleSubmit = (e,t,status,setLoading,setStatus) => {
    if (isFormValid(status)) {
      return sendEmail(e,t,setLoading,setStatus);
    } else {
      e.preventDefault();
    }
  };

  export   const handlePreventPaste = (e,regexPattern)=>{
    const pastedData = e.clipboardData.getData('Text');
    const regex =regexPattern;
  if (!regex.test(pastedData)) {
    e.preventDefault(); 
    alert('Pasted data is not allowed'); 
  }
  }