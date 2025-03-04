import React from 'react'
import withHeaderAndFooter from '../../HOC/withHeaderAndFooter'
import Pricing_Bnr_1 from './Pricing_Bnr_1'
import Pricing_Bnr_2 from './Pricing_Bnr_2'
import Pricing_Bnr_3 from './Pricing_Bnr_3'
import Pricing_Bnr_4 from './Pricing_Bnr_4'

const Pricing:React.FC = () => {
  return (
      <>
      <Pricing_Bnr_1 />
      <Pricing_Bnr_2 />
      <Pricing_Bnr_3 />
      <Pricing_Bnr_4 />
      </>
  )
}

export default withHeaderAndFooter(Pricing)
