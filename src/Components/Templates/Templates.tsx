import React from 'react'
import withHeaderAndFooter from '../../HOC/withHeaderAndFooter';
import Template_body from './Template_body';
import withSharedContent from '../../HOC/withSharedContent';
import Template_head from './Template_head';


const Templates:React.FC = () => {
  return (
    <>
      <div className="overflow-hidden max-w-[1600px] mx-auto">
        <Template_head />
        <Template_body />
      </div>
    </>
  );
}

export default withHeaderAndFooter(withSharedContent(Templates));
