import { useTranslation } from 'react-i18next';
import { imagesCloudinaryHosted } from './imagesCloudinaryHosted';

export const usePageData = () => {
  const { t } = useTranslation();
  const pageOneData = {
    images: [
      imagesCloudinaryHosted[0],
      imagesCloudinaryHosted[1],
      imagesCloudinaryHosted[2],
      imagesCloudinaryHosted[3],
      imagesCloudinaryHosted[4],
      imagesCloudinaryHosted[5],
      imagesCloudinaryHosted[6],
      imagesCloudinaryHosted[7],
      imagesCloudinaryHosted[8],
    ],

    textHeader: [
      t('sv_vukasin_klepacki'),
      t('sv_jovan_krstitelj'),
      t('sv_velikomucenik_dimitrije'),
      t('sv_velikomucenik_knez_lazar'),
      t('majka_bozija_decanska'),
      t('majka_bozija'),
      t('sv_mucenik_justin_filosof'),
      t('sv_nektarije_eginski'),
      t('sv_arhangel_mihail'),
    ],

    textFooter: [
      '21x30cm',
      '30x40cm',
      '18x40cm',
      '30x40cm',
      '30x40cm',
      '30x40cm',
      '30x40cm',
      '30x40cm',
      '26x61cm',
    ],
  };

  const pageTwoData = {
    images: [
      imagesCloudinaryHosted[9],
      imagesCloudinaryHosted[10],
      imagesCloudinaryHosted[11],
      imagesCloudinaryHosted[12],
      imagesCloudinaryHosted[13],
      imagesCloudinaryHosted[14],
      imagesCloudinaryHosted[15],
      imagesCloudinaryHosted[16],
      imagesCloudinaryHosted[17],
    ],

    textHeader: [
      t('sv_arhandjel_gavril_beli_andjeo'),
      t('sv_velikomucenik_georgije'),
      t('sv_jovan_krstitelj'),
      t('sv_apostol_marko'),
      t('presveta_trojica'),
      t('sv_maksim_ispovednik'),
      t('sv_josif_isihasta'),
      t('sv_heruvima_sveta_petka'),
      t('sv_vasilije_ostroski'),
    ],

    textFooter: [
      '21x30cm',
      '30x40cm',
      '30x40cm',
      '30x40cm',
      '30x40cm',
      '18x24cm',
      '15x20cm',
      '30x40cm',
      '20x30cm',
    ],
  };
  const pageThreeData = {
    images: [
      imagesCloudinaryHosted[18],
      imagesCloudinaryHosted[19],
      imagesCloudinaryHosted[20],
      imagesCloudinaryHosted[21],
      imagesCloudinaryHosted[22],
      imagesCloudinaryHosted[23],
      imagesCloudinaryHosted[24],
      imagesCloudinaryHosted[25],
      imagesCloudinaryHosted[26],
    ],

    textHeader: [
      t('gospod_isus_hristos'),
      t('sv_simeon_novi_bogoslov'),
      t('sv_georgije_palama'),
      t('majka_bozija_atonska'),
      t('sv_arhangel_mihail'),
      t('sv_arhangel_rafail'),
      t('sv_arhangel_varahil'),
      t('sv_arhangel_uril'),
      t('sv_arhangel_salatil'),
    ],

    textFooter: [
      '18x40cm',
      '15x20cm',
      '15x20cm',
      '25х50cm',
      '18x40cm',
      '18x40cm',
      '18x40cm',
      '18x40cm',
      '18x40cm',
    ],
  };
  const pageFourData = {
    images: [
      imagesCloudinaryHosted[27],
      imagesCloudinaryHosted[28],
      imagesCloudinaryHosted[29],
      imagesCloudinaryHosted[30],
      imagesCloudinaryHosted[31],
      imagesCloudinaryHosted[32],
      imagesCloudinaryHosted[33],
      imagesCloudinaryHosted[34],
      imagesCloudinaryHosted[35],
    ],

    textHeader: [
      t('casni_krst'),
      t('sv_arhangel_mihail'),
      t('sv_sava'),
      t('sv_velikomucenik_dimitrije'),
      t('sv_prorok_ilija'),
      t('sv_vasilije_ostroski'),
      t('sv_jovan_krstitelj'),
      t('sv_prepodobna_mati_paraskeva'),
      t('sv_velikomucenik_georgije'),
    ],

    textFooter: [
      '21x29cm',
      '21x30cm',
      '21x30cm',
      '21х30cm',
      '21x30cm',
      '21x30cm',
      '21x30cm',
      '21x30cm',
      '21x30cm',
    ],
  };

  const pageFiveData = {
    images: [
      imagesCloudinaryHosted[36],
      imagesCloudinaryHosted[37],
      imagesCloudinaryHosted[38],
      imagesCloudinaryHosted[39],
      imagesCloudinaryHosted[40],
      imagesCloudinaryHosted[41],
      imagesCloudinaryHosted[42],
      imagesCloudinaryHosted[43],
      imagesCloudinaryHosted[44],
    ],

    textHeader: [
      t('sv_nikolaj_mirlikijski'),
      t('sv_velikomucenik_knez_lazar'),
      t('sv_arhidjakon_stefan'),
      t('sv_velikomucenik_pantelejmon'),
      t('sv_mucenik_trifun'),
      t('presveta_bogorodica'),
      t('blagovesti'),
      t('sv_velikomucenik_prokopije'),
      t('sv_petar_i_fevronija'),
    ],

    textFooter: [
      '21x30cm',
      '21x30cm',
      '21x30cm',
      '21х30cm',
      '26x61cm',
      '30x40cm',
      '2х(18x40)cm',
      '30x40cm',
      '30x40cm',
    ],
  };

  const pageSixData = {
    images: [
      imagesCloudinaryHosted[45],
      imagesCloudinaryHosted[46],
      imagesCloudinaryHosted[47],
      imagesCloudinaryHosted[48],
      imagesCloudinaryHosted[49],
      imagesCloudinaryHosted[50],
      imagesCloudinaryHosted[51],
      imagesCloudinaryHosted[52],
      imagesCloudinaryHosted[53],
    ],
    textHeader: [
      t('sv_ksenija_petrogradska'),
      t('sv_arhangel_mihail'),
      t('zitije_svetog_proroka_ilije'),
      t('sv_prepodobna_mati_paraskeva'),
      t('sv_velikomucenik_knez_lazar'),
      t('gospod_isus_hristos'),
      t('sv_arhangel_mihail'),
      t('sv_arhangel_mihail'),
      t('majka_bozija'),
    ],
    textFooter: [
      '30x40cm',
      '25x50cm',
      '45х60cm',
      '18x40cm',
      '30x40cm',
      '30x40cm',
      '30x40cm',
      '30x40cm',
      '21x30cm',
    ],
  };

  const pageSevenData = {
    images: [
      imagesCloudinaryHosted[54],
      imagesCloudinaryHosted[55],
      imagesCloudinaryHosted[56],
      imagesCloudinaryHosted[57],
      imagesCloudinaryHosted[58],
      imagesCloudinaryHosted[59],
      imagesCloudinaryHosted[60],
      imagesCloudinaryHosted[74],
      imagesCloudinaryHosted[62],
    ],

    textHeader: [
      t('sv_ravnoapostolna_marija_magdalina'),
      t('sv_apostoli_petar_i_pavle'),
      t('sv_prepodobna_mati_paraskeva'),
      t('sv_apostol_pavle'),
      t('sv_velikomucenik_georgije'),
      t('sv_nikolaj_mirlikijski'),
      t('sv_velikomucenik_dimitrije'),
      t('sv_andjeo_cuvar'),
      t('sv_pravedni_melhisedek'),
    ],

    textFooter: [
      '18x40cm',
      '30x40cm',
      '30x40cm',
      '18x24cm',
      '21x30cm',
      '30x40cm',
      '23x50cm',
      '18x40cm',
      '23x50cm',
    ],
  };
  const pageEightData = {
    images: [
      imagesCloudinaryHosted[63],
      imagesCloudinaryHosted[64],
      imagesCloudinaryHosted[65],
      imagesCloudinaryHosted[66],
      imagesCloudinaryHosted[67],
      imagesCloudinaryHosted[68],
      imagesCloudinaryHosted[69],
      imagesCloudinaryHosted[70],
      imagesCloudinaryHosted[71],
    ],

    textHeader: [
      t('sv_arhangel_mihail'),
      t('sv_jovan_krstitelj'),
      t('gospod_isus_hristos'),
      t('presveta_bogorodica'),
      t('diptih_arhangeli_salatil_mihail'),
      t('presveta_trojica'),
      t('sv_apostoli_petar_i_pavle'),
      t('sv_jovan_krstitelj'),
      t('sv_apostol_toma'),
    ],

    textFooter: [
      '18x40cm',
      '30x40cm',
      '30x40cm',
      '45x60cm',
      '2x18x40cm',
      '30x40cm',
      'Ø 30cm',
      '30x40cm',
      '30x40cm',
    ],
  };
  const pageNineData = {
    images: [
      imagesCloudinaryHosted[72],
      imagesCloudinaryHosted[73],
      imagesCloudinaryHosted[75],
      imagesCloudinaryHosted[76],
      imagesCloudinaryHosted[77],
      imagesCloudinaryHosted[78],
      imagesCloudinaryHosted[79],
      imagesCloudinaryHosted[80],
      imagesCloudinaryHosted[81],
    ],

    textHeader: [
      t('sv_arhangel_mihail'),
      t('sv_lazar_cetvorodnevni'),
      t('sv_velikomucenik_pantelejmon'),
      t('sv_arhandjel_gavril_beli_andjeo'),
      t('sv_arhangel_mihail'),
      t('vaskrsenje_hristovo'),
      t('sv_ksenija_rimljanka'),
      t('diptih_sv_lazar_cetvorodnevni_sv_tavita'),
      t('sv_simeon_bogoprimac_sv_ana'),
    ],

    textFooter: [
      '26x36cm',
      '15x20cm',
      '15x20cm',
      '30x40cm',
      '26x61cm',
      '42x50cm',
      '30x40cm',
      '2x15x20cm',
      '15x20cm',
    ],
  };

  const pageTenData = {
    images: [
      imagesCloudinaryHosted[82],
      imagesCloudinaryHosted[83],
      imagesCloudinaryHosted[84],
      imagesCloudinaryHosted[85],
      imagesCloudinaryHosted[86],
      imagesCloudinaryHosted[87],
      imagesCloudinaryHosted[88],
      imagesCloudinaryHosted[89],
      imagesCloudinaryHosted[90],
    ],

    textHeader: [
      t('sv_nikolaj_mirlikijski'),
      t('sv_arhangel_mihail'),
      t('sv_jovan_krstitelj'),
      t('presveta_bogorodica'),
      t('sv_andjeo_cuvar'),
      t('sv_apostol_andrej_prvozvani'),
      t('sv_arhangel_mihail'),
      t('sv_ksenija_petrogradska'),
      t('sv_sava_osveceni'),
    ],

    textFooter: [
      '26x61cm',
      '26x61cm',
      '26x61cm',
      '30x40cm',
      '15x20cm',
      '30x40cm',
      '15x20cm',
      '15x20cm',
      '30x40cm',
    ],
  };

  const pageElevenData = {
    images: [
      imagesCloudinaryHosted[91],
      imagesCloudinaryHosted[92],
      imagesCloudinaryHosted[93],
      imagesCloudinaryHosted[94],
      imagesCloudinaryHosted[95],
      imagesCloudinaryHosted[96],
      imagesCloudinaryHosted[97],
      imagesCloudinaryHosted[98],
      imagesCloudinaryHosted[99],
    ],

    textHeader: [
      t('sv_velikomucenica_paraskeva'),
      t('sv_prorok_isaija'),
      t('sv_jefrem_sirin'),
      t('sv_nikolaj_mirlikijski'),
      t('sv_velikomucenica_varvara'),
      t('rodjenje_godspoda_isusa_hrista_bozic'),
      t('sv_patrijarh_srbski_pavle'),
      t('sv_spiridon_cudotvorac_trimifuntski'),
      t('sv_sofronije_saharov'),
    ],

    textFooter: [
      '30x40cm',
      '15x20cm',
      '15x20cm',
      '30x40cm',
      '21x30cm',
      '42x50cm',
      '30x40cm',
      '21x30cm',
      '30x40cm',
    ],
  };

  const pageTwelveData = {
    images: [
      imagesCloudinaryHosted[100],
      imagesCloudinaryHosted[102],
      imagesCloudinaryHosted[103],
    ],
    textHeader: [t('presveta_bogorodica'), t('sv_impomonija'),t('sv_arhangel_mihail')],
    textFooter: ['30x40cm', '26x36cm','30x40cm'],
  };

  return {
    pageOneData,
    pageTwoData,
    pageThreeData,
    pageFourData,
    pageFiveData,
    pageSixData,
    pageSevenData,
    pageEightData,
    pageNineData,
    pageTenData,
    pageElevenData,
    pageTwelveData,
  };
};
