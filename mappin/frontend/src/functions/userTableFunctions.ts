import { Dispatch, SetStateAction } from "react"
interface pinsObjectType{
    _id:string,
    pinsCount:number
    }
export const getPinsPerUser = (setUsersPins:Dispatch<SetStateAction<pinsObjectType[]>>)=>{
    fetch('/api/pins/pins_per_user')
    .then((data)=>{
        return data.json()
    })
    .then((data)=>{
        console.log(data)
        if(data.length>0){
            setUsersPins(data)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}