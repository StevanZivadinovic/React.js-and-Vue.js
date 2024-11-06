import { Dispatch, SetStateAction } from "react";


export interface PageGalleryLightboxType{
    isOpen:boolean;
    setIsOpen:Dispatch<SetStateAction<boolean>>;
    images:string[],
    textHeader: any,
     textFooter:any,
     photoIndex:number;
     setPhotoIndex:Dispatch<SetStateAction<number>>;
}

export interface pageGalleryLight{
    images:string[],
    textHeader: any,
     textFooter:any,
     setIsOpen:Dispatch<SetStateAction<boolean>>;
     setPhotoIndex:Dispatch<SetStateAction<number>>;
}

export interface contentType{
    images:string[],
        textHeader:string[],
        textFooter:string[]
}

export interface contentOfGalleryPageType{
    content:contentType;
}

export interface languageNavType{
    cssClass:string;
    width:number;
}

export interface sideBarNavListType{
    closeMobileMenu: () => void;
}