import { Dispatch, SetStateAction } from "react";

export const preventRightClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
  };


 export const paginate = (pageNumber: number,setCurrentPage:Dispatch<SetStateAction<number>>) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 export  const handlePrevious = (currentPage:number,setCurrentPage: Dispatch<SetStateAction<number>>) => {
    if (currentPage > 1) {
      paginate(currentPage - 1,setCurrentPage);
    }
  };

  export const handleNext = (currentPage:number,totalPages:number,setCurrentPage: Dispatch<SetStateAction<number>>) => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1,setCurrentPage);
    }
  };

  export const paginationItems = (currentPage:number,totalPages:number) => {
    const pages = [];
    pages.push(1);

   
    if (currentPage > 3) {
      pages.push('...');
    }

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }
    if (currentPage < totalPages - 2) {
      pages.push('...');
    }
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    return pages;
  };