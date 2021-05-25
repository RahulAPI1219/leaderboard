import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Dashboard" icon={'home'}/>
            <MenuLink title="Certifications" icon={'file-multiple'} active />
            <MenuLink title="Analytics" icon={'gift'}/>
            <MenuLink title="Upcoming" icon={'bank'}/>
            <MenuLink title="Pending" icon={'cog'} />
        </Container>
    )
}

export default Menu
