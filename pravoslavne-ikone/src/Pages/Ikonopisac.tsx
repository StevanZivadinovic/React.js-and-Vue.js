import './../style/ikonopisac.scss';
import ikonopisac from './../assets/ikonopisac.jpg';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function Ikonopisac() {
  const { t } = useTranslation();
  return (
    <div className="mainIkonopisac bg-[#282c34] flex justify-around items-center min-h-[90vh]">
      <Helmet>
        <title>Ikonopisac - Pravoslavne ikone - Nis</title>
        <meta
          name="description"
          content="Биографија иконописца са благословом, Драгана Живадиновић"
        />
        <meta
          name="keywords"
          content="иконописац, православне иконе, православне иконе продаја, православне иконе ниш"
        />
      </Helmet>

      <img alt="иконописац, биографија" id='ikonopisac' className='w-auto h-[60vh] max-w-[100%]' src={ikonopisac} />
      <div lang="sr-Cyrl" className="textIkonopisac mt-0 w-[500px] text-justify text-[1.7rem]"> 
        <p className='' lang="sr-Cyrl">{t('o_ikonopiscu_deo_prvi')}</p>
        <p lang="sr-Cyrl">{t('o_ikonopiscu_deo_drugi')}</p>
        <p lang="sr-Cyrl">{t('o_ikonopiscu_deo_treci')}</p>
      </div>
    </div>
  );
}
