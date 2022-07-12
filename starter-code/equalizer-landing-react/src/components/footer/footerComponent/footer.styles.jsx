import styled from "styled-components";

import {ReactComponent as Facebook} from '../../../assets/icon-facebook.svg'
import {ReactComponent as Instagram} from '../../../assets/icon-instagram.svg'
import {ReactComponent as Twitter} from '../../../assets/icon-twitter.svg'

import { NavLink} from 'react-router-dom'

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    margin: 7rem 0;

    @media (min-width: 320px) and (max-width: 540px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 3rem;
        padding: 2rem;
        margin: 0;
    }

    @media (min-width: 700px) and (max-width: 1200px) {
        display: block;
    }
`

export const FirstDiv = styled.div`
    flex: 2;

    @media (min-width: 320px) and (max-width: 540px) {
        flex: auto;
    }

    @media (min-width: 700px) and (max-width: 1200px) {
        margin-bottom: 1rem;
    }
`

export const CopyrightContainer = styled.div`
    width: 25%;
    flex: 2;

    @media (min-width: 320px) and (max-width: 540px) {
        flex: auto;
        width: 90%;
    }

    @media (min-width: 700px) and (max-width: 1200px) {
        width: 50%;
        float: left;
    }
`

export const CopyParag = styled.p`
    margin: 0;
`

export const IconsContainer = styled.div`
    flex: 4;
    width: 7%;
    display: flex;
    justify-content: flex-end;

    @media (min-width: 320px) and (max-width: 540px) {
        flex: auto;
        justify-content: flex-start;
    }

    @media (min-width: 700px) and (max-width: 1200px) {
        align-self: flex-end;
        float: right;
    }
`

export const StyledNavLink = styled(NavLink)`
    margin-left: 2rem;
    text-decoration: none;

    @media (min-width: 320px) and (max-width: 540px) {
        margin-left: 0;
        margin-right: 2rem;
    }
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