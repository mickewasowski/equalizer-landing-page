import styled from "styled-components";

import {ReactComponent as Facebook} from '../../../assets/icon-facebook.svg'
import {ReactComponent as Instagram} from '../../../assets/icon-instagram.svg'
import {ReactComponent as Twitter} from '../../../assets/icon-twitter.svg'

import { NavLink} from 'react-router-dom'

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    margin: 7rem 0;
`

export const FirstDiv = styled.div`
    flex: 2;
`

export const CopyrightContainer = styled.div`
    width: 25%;
    flex: 2;
`

export const CopyParag = styled.p`
    margin: 0;
`

export const IconsContainer = styled.div`
    flex: 4;
    width: 7%;
    display: flex;
    justify-content: flex-end;
`

export const StyledNavLink = styled(NavLink)`
    margin-left: 2rem;
    text-decoration: none;
`

export const FacebookLogo = styled(Facebook)`
    fill: hsl(244, 23%, 12%);

    &:hover{
        fill: hsl(12, 94%, 65%);
    }
`

export const InstagramLogo = styled(Instagram)`
    fill: hsl(244, 23%, 12%);

    &:hover{
        fill: hsl(12, 94%, 65%);
    }
`

export const TwitterLogo = styled(Twitter)`
    fill: hsl(244, 23%, 12%);

    &:hover{
        fill: hsl(12, 94%, 65%);
    }
`