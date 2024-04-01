import { clickedIcon, defaultIcon } from "../consts/mapMarkerConsts.ts";


export const markerIconSetFunction = (point) => {
  if (point.clicked) {
    return clickedIcon;
  } else {
    return defaultIcon;
  }
};

export function setClickedMarkerFunc(
  i: number,
  pointsArray,
  setPointsArray: React.Dispatch<React.SetStateAction<any[]>>,
  setIndexOfClickedMarker: React.Dispatch<React.SetStateAction<number>>,
  points
) {
  setIndexOfClickedMarker(i)
  const updatedPointsArray = pointsArray?.map((p, index) => {
    if (index === i) {
      return { ...p, clicked: true };
    } else {
      return { ...p, clicked: false };
    }
  });

  if(updatedPointsArray.length>0){
      setPointsArray(updatedPointsArray)
    }else{
      setPointsArray(points)
    }
}
