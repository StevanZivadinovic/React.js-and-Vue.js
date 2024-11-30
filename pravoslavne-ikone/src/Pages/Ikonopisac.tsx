import ikonopisac from './../assets/ikonopisac.jpg';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { preventRightClick } from '../helperFunctions/global';

export default function Ikonopisac() {
  const { t } = useTranslation();
 
  return (
    <div
     className="mobile:w-full mobile:h-[100%] mobile:flex-col  mobile:content-center bg-[#282c34] flex justify-around items-center min-h-[90vh]">
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

      <img
        onContextMenu={preventRightClick}
        alt="иконописац, биографија"
        id="ikonopisac"
        className="w-auto h-[60vh] max-w-[100%] !cursor-default mobile:h-[40vh] rounded-md"
        src={ikonopisac}
      />
      <div
        lang="sr-Cyrl"
        className="mobile:flex mobile:flex-col 
        mobile:items-center mobile:content-center mobile:-mt-[10px] mobile:mb-[10px] mobile:w-[80%] mobile:text-[1rem]
        mt-0 w-[500px] text-justify text-[1.7rem]"
      >
        <p
          className="pt-[10px] font-cormorant"
          lang="sr-Cyrl"
          content="o ikonopiscu, biografija"
        >
          {t('o_ikonopiscu_deo_prvi')}
        </p>
        <p
          className="pt-[10px] font-cormorant"
          lang="sr-Cyrl"
          content="o ikonopiscu, biografija"
        >
          {t('o_ikonopiscu_deo_drugi')}
        </p>
        <p
          className="pt-[10px] font-cormorant"
          lang="sr-Cyrl"
          content="o ikonopiscu, biografija"
        >
          {t('o_ikonopiscu_deo_treci')}
        </p>
      </div>
    </div>
  );
}
