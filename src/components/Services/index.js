import React from 'react'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg2.svg'
import Icon3 from '../../images/svg3.svg'
import { ServicesContainer,
    ServicesH1, ServicesH2, ServicesP,
ServicesWrapper, ServicesCard, ServicesIcon } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our sserices anywhere in the world try ko lang pahabain pa.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benifits</ServicesH2>
                    <ServicesP>Unlock the bemifits that you won't find anywhere else try ko lang pahabain pa</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
