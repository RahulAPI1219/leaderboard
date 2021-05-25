import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewDepositBtn from './NewDepositBtn'
import Deposits from './Deposits/Deposits'

// import depositData from '../../DepositData.json'

import certificationData from '../../CertificationData.json'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const Main = () => {
    return (
        <Container>
            <Nav />
            <NewDepositBtn />
            {/* <Deposits title="Active Certifications" count={2} data={depositData.active} />
            <Deposits title="Completed Certifications" count={8} data={depositData.closed} /> */}
            <Deposits title="Active Certifications" count={4} data={certificationData.active} />
            <Deposits title="Completed Certifications" count={2} data={certificationData.closed} />
        </Container>
    )
}

export default Main
