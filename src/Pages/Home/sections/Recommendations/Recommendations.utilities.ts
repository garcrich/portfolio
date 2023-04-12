import { RecommendationData } from './recommendationTypes';

export const slideBuilder = (
  recordsPerSlide:number,
  dataArr:RecommendationData[]
):RecommendationData[][] => {
  const slideData: RecommendationData[][] = [];
  for (let i = 0; i < dataArr.length; i += recordsPerSlide) {
    if(dataArr.length - i < recordsPerSlide)
      slideData.push(dataArr.slice(i, dataArr.length));
      
    slideData.push(dataArr.slice(i, i + recordsPerSlide));
  }
  return slideData;
}