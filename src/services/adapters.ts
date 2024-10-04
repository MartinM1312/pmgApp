import {SlidesData} from '../models/heroSlideModel';
export const heroSlidesAdapter = ({
  dataInput,
}: {
  dataInput: any;
}): SlidesData[] => {
  const dataArray = dataInput.blockHomeHeroSlider;

  const arrayLength = Array(Math.floor(Object.keys(dataArray).length / 6))
    .fill('')
    .map((_, index) => index);

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
  }, []);

  return dataOb;
};
