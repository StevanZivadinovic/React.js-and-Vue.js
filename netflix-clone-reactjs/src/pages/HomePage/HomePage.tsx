import React from 'react';
// @ts-ignore
import Main from '../../components/Main/Main.tsx';
// @ts-ignore
import Row from '../../components/Row/Row.tsx';
// @ts-ignore
import requests from '../../helperFunctions/requests.ts';


const HomePage = () => {
  return (
    <>
    <div className='text-white text-2xl'>
      <Main></Main>
    </div>
      <Row title={'UpComing'} requestURL={requests.requestUpcoming}></Row>
      <Row title={'Popular'} requestURL={requests.requestPopular}></Row>
      <Row title={'Trending'} requestURL={requests.requestTrending}></Row>
      <Row title={'Horor'} requestURL={requests.requestHoror}></Row>
      <Row title={'TopRated'} requestURL={requests.requestTopRated}></Row>
  </>
  )
}

export default HomePage