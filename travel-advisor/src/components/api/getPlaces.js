import axios from "axios";


let URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
// const options = {
//   method: 'GET',
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': 'd3d8416290mshe8f889303ad46e5p16190ajsn798c21993e0d'
//   }
// };


export const getPlaces= async(bounds)=> {
  console.log(bounds)
  try{
    const {data:{data}} = await axios.get(URL, {
          method: 'GET',
          params: {
            bl_latitude: bounds._southWest.lat,
            tr_latitude: bounds._northEast.lat,
            bl_longitude: bounds._southWest.lng,
            tr_longitude: bounds._northEast.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'd3d8416290mshe8f889303ad46e5p16190ajsn798c21993e0d'
          }
        });
        return data;
    }catch{

    }
  return (
    <div>getApi</div>
  )
}
