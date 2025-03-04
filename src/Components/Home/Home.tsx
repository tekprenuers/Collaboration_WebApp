import React from 'react'
import withHeaderAndFooter from '../../HOC/withHeaderAndFooter'
import Banner_1 from './Banner_1'
import Banner_2 from './Banner_2';
import Banner_3 from './Banner_3';

const Home: React.FC = () => {
  return (
    <>
      <div className='overflow-hidden max-w-[1600px] mx-auto'>
        <Banner_1 />
        <Banner_2 />
        <Banner_3 />
      </div>
    </>
  );
};

export default withHeaderAndFooter(Home)
