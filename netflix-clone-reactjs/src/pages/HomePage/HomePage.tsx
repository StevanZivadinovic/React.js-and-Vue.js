import React from 'react';
// @ts-ignore
import Main from '../../components/Main/Main.tsx'
import Row from '../../components/Row/Row';
import requests from '../../helperFunctions/requests';


const HomePage = () => {
  return (
    <div className='text-white text-2xl'>
      <Main></Main>
      <Row title={'UpComing'} requestURL={requests.requestUpcoming}></Row>
      <Row title={'Popular'} requestURL={requests.requestPopular}></Row>
      <Row title={'Trending'} requestURL={requests.requestTrending}></Row>
      <Row title={'Horor'} requestURL={requests.requestHoror}></Row>
      <Row title={'TopRated'} requestURL={requests.requestTopRated}></Row>

    </div>
  )
}

export default HomePage