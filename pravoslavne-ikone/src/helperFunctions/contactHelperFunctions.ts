import { Dispatch, SetStateAction } from 'react';
import {
  errorMessages,
  VALIDATION_PATTERNS,
} from '../consts/validationPatterns';
import emailjs from 'emailjs-com';
import { TFunction } from 'i18next';

export const updateStatus = (
  field: any,
  isValid: any,
  setStatus: (arg0: (prev: any) => any) => void
) => {
  setStatus((prev) => ({ ...prev, [field]: isValid }));
};
export const validateInput = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  type: 'name' | 'email' | 'textarea',
  language:  string,
  setStatus: (arg0: (prev: any) => any) => void
) => {
  const value = e.target.value;
  const isValid = VALIDATION_PATTERNS[type].test(value);
  e.target.style.borderColor = isValid ? '' : 'red';
  e.target.setCustomValidity(isValid ? '' : errorMessages[type]?.[language]);
  updateStatus(type, isValid, setStatus);
};

export function onClickHandleError(t: TFunction<"translation", undefined>) {
  alert(t('email_je_neispravan'));
}

export const sendEmail = (
  e: React.FormEvent<HTMLFormElement>,
  t: TFunction<'translation', undefined>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setStatus: Dispatch<SetStateAction<any>>
) => {
  e.preventDefault();
  setLoading(true);
  const form = e.target as HTMLFormElement;
  emailjs
    .sendForm(
      'service_m2sqmzk',
      'template_pasc3rj',
      form,
      'user_iDF7GBVBepZlv2bZg187d'
    )
    .then(() => {
      alert(t('poruka_je_poslata'));
      setStatus({
        name: false,
        email: false,
        textarea: false,
      });
      form.reset();
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      onClickHandleError(t);
    });
};

export const isFormValid = (status: {
  name: any;
  email: any;
  textarea: any;
}) => {
  return status?.name && status?.email && status?.textarea;
};

export const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  t: TFunction<'translation', undefined>,
  status: {
    name: any;
    email: any;
    textarea: any;
  },
  setLoading: Dispatch<SetStateAction<boolean>>,
  setStatus: Dispatch<SetStateAction<any>>
) => {
  if (isFormValid(status)) {
    return sendEmail(e as React.FormEvent<HTMLFormElement>, t, setLoading, setStatus);
  } else {
    e.preventDefault();
  }
};

export const handlePreventPaste = (
  e: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  regexPattern: RegExp
) => {
  const pastedData = e.clipboardData.getData('Text');
  const regex = regexPattern;
  if (!regex.test(pastedData)) {
    e.preventDefault();
    alert('Pasted data is not allowed');
  }
};
