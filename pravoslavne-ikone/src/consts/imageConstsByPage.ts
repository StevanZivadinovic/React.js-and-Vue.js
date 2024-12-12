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
    images :[
        imagesCloudinaryHosted[54],
        imagesCloudinaryHosted[55],
        imagesCloudinaryHosted[56],
        imagesCloudinaryHosted[57],
        imagesCloudinaryHosted[58],
        imagesCloudinaryHosted[59],
        imagesCloudinaryHosted[60],
        imagesCloudinaryHosted[61],
        imagesCloudinaryHosted[62],
      ],
    
       textHeader :[
        t('sv_ravnoapostolna_marija_magdalina'),
        t('sv_apostoli_petar_i_pavle'),
        t('sv_prepodobna_mati_paraskeva'),
        t('sv_apostol_pavle'),
        t('sv_velikomucenik_georgije'),
        t('sv_nikolaj_mirlikijski'),
        t('sv_velikomucenik_dimitrije'),
        t('sv_prepodobna_mati_paraskeva_srbska'),
        t('sv_pravedni_melhisedek'),
      ],
    
     textFooter : [
        '18x40cm',
        '30x40cm',
        '30x40cm',
        '18x24cm',
        '21x30cm',
        '30x40cm',
        '23x50cm',
        '18x40cm',
        '23x50cm',
      ]

  }
  const pageEightData = {
     images : [
        imagesCloudinaryHosted[63],
        imagesCloudinaryHosted[64],
        imagesCloudinaryHosted[65],
        imagesCloudinaryHosted[66],
        imagesCloudinaryHosted[67],
        imagesCloudinaryHosted[68],
        imagesCloudinaryHosted[69],




      ],
    
       textHeader : [
        t('sv_arhangel_mihail'),
        t('sv_jovan_krstitelj'),
        t('gospod_isus_hristos'),
        t('presveta_bogorodica'),
        t('diptih_arhangeli_salatil_mihail'),
        t('presveta_trojica'),
        t('sv_apostoli_petar_i_pavle')
      ],
    
       textFooter : [
        '18x40cm',
        '30x40cm',
        '30x40cm',
        '45x60cm',
        '2x18x40cm',
        '30x40cm',
        'Ø 30cm'
      ]
  }

  return {
    pageOneData,
    pageTwoData,
    pageThreeData,
    pageFourData,
    pageFiveData,
    pageSixData,
    pageSevenData,
    pageEightData
  };
};
