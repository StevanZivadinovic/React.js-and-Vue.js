import {faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';



export const useContactData = ()=>{
    const { t } = useTranslation();
     const contactData = [
        {
            icon:faMapMarkerAlt,
            title:t('address'),
            content:t('nis')
        },
        {
            icon:faPhone,
            title:t('telefon'),
            content:'+381 321 60 87'
        },
        {
            icon:faEnvelope,
            title:t('email_adresa'),
            content:'gagaikone@live.com'
        }
    ]
    return {contactData};
}


