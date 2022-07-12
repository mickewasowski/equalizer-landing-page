import styled from 'styled-components'

export const DescriptionContainer = styled.div`
    width: 65%;

    @media (min-width: 320px) and (max-width: 540px) {
        width: 100%;
    }
`

export const H1 = styled.h1`
     font-size: 5.5rem;
    margin-bottom: 0;
    margin-right: 0;
    width: 88%;

    @media (min-width: 320px) and (max-width: 540px) {
        font-size: 2.5rem;
        width: auto;
        padding: 0 1rem;
    }
`

export const Parag = styled.p`
    width: 88%;
    font-size: 1.25rem;

    @media (min-width: 320px) and (max-width: 540px) {
        width: auto;
        padding: 0 1rem;
    }
`