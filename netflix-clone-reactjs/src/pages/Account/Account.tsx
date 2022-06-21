import React from "react";
//@ts-ignore
import SavedShows from "../../components/SavedShows/SavedShows.tsx";

const AccountPage = () => {
  return (
    <div className="text-white w-full">
      <img
        className=" w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/f4332b34-eeb2-4fd9-a803-925b165f009a/RS-en-20220613-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
      <div className="absolute top-[15%] p-8 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
      <SavedShows></SavedShows>
    </div>
  );
};

export default AccountPage;
