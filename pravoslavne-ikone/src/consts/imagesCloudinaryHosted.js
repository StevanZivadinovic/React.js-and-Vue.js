import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const cld = new Cloudinary({ cloud: { cloudName: 'dvayrzzpb' } });
const imageCludinaryFolderPaths = [
  '/ikona1_lapeua',
  '/ikona2_tgpp1w',
  '/ikona3_z8wwi9',
  '/ikona4_t75ooc',
  '/ikona5_k0uj9a',
  '/ikona6_h6fn9n',
  '/ikona7_g2ehm5',
  '/ikona8_qzpvgn',
  '/ikona9_shrfcz'
];
const imagesCloudinaryHostedArray = [];
imageCludinaryFolderPaths.forEach((a, i) => {
  const img = cld
    .image(`pravoslavne ikone${a}`)
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

  imagesCloudinaryHostedArray.push({ img: img, imgURL: img.toURL() });
});

export const imagesCloudinaryHosted = imagesCloudinaryHostedArray;
// export const imagesCloudinaryHostedURLs = [
//   imagesCloudinaryHostedArray.toURL(),
//   img2.toURL(),
// ];
