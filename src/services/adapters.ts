import {SlidesData} from '../models/heroSlideModel';
export const heroSlidesAdapter = ({
  dataInput,
}: {
  dataInput: any;
}): SlidesData[] => {
  // Asegúrate de que dataArray sea un objeto con las propiedades de los slides
  const dataArray = dataInput.blockHomeHeroSlider;
  // Calculamos cuántos grupos de slides hay (1 a 5)
  const arrayLength = Array(Math.floor(Object.keys(dataArray).length / 5))
    .fill('')
    .map((_, index) => index);

  // Usamos reduce con un acumulador de tipo SlidesData[]
  const dataOb: SlidesData[] = arrayLength.reduce((acc: SlidesData[], item) => {
    acc.push({
      title: dataArray[`slide${item + 1}Title`],
      eyeBrowText: dataArray[`slide${item + 1}EyebrowText`],
      targetUrl: dataArray[`slide${item + 1}TargetUrl`],
      enableDarkBackdrop: dataArray[`slide${item + 1}EnableDarkBackdrop`],
      eyebrowImage: dataArray[`slide${item + 1}EyebrowImage`]?.url || '',
      mobileImageOrVideo: dataArray[`slide${item + 1}MobileImageOrVideo`] || {
        url: '',
        contentType: '',
      },
    });
    return acc;
  }, []); // Proveer un array vacío como valor inicial

  return dataOb;
};
