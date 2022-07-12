import styled from "styled-components";

export const OfferContainer = styled.div`
background-image: url('./assets/bg-pattern-2.svg');
    background-repeat: no-repeat;
    background-position: 45% -30%;
    background-color: hsl(244, 23%, 12%);
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    margin-top: 20rem;

    @media (min-width: 320px) and (max-width: 540px) {
        flex-direction: column;
        align-items: center;

        background-position: 54% 0%;
    }
`

export const AppIllustration = styled.div`
    transform: translate(0, -214px);

    @media (min-width: 320px) and (max-width: 540px) {
        transform: translate(0, -101px);
        text-align: center;
    }
`

export const AppImg = styled.img`
    width: 19.5rem;
    height: 40.125rem;

    @media (min-width: 320px) and (max-width: 540px) {
        width: 100%;
        height: 28rem;
    }
`

export const PlanContainer = styled.div`
    width: 27.9rem;
    height: 39rem;
    background-color: hsl(12, 94%, 65%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transform: translate(0, 115px);

    @media (min-width: 320px) and (max-width: 540px) {
        width: 100%;
        transform: translate(0, 0);
    }
`

export const PlanItems = styled.div`
    width: 80%;
`

export const H2 = styled.h2`
    font-size: 2.5rem;
    color: hsl(20, 33%, 98%);
    text-align: left;
`

export const Parag = styled.p`
    font-size: 1.25rem;
    color: hsl(20, 33%, 98%);
    text-align: left;
`

export const PriceParag = styled.p`
    display: flex;
    align-items: center;
    color: hsl(20, 33%, 98%);
`

export const PriceStrong = styled.strong`
    font-size: 4rem;
    margin-right: .8rem;
`

export const BtnContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30%;
    justify-content: space-around;
`

export const AppleBtn = styled.button`
    width: 100%;
    height: 4rem;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .4rem;

    background-color: hsl(244, 23%, 12%);
    color: hsl(20, 33%, 98%);

    &:hover{
        cursor: pointer;
        background-color: hsl(177, 68%, 64%);
    }
`

export const AndroidBtn = styled.button`
    width: 100%;
    height: 4rem;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .4rem;

    background-color: hsl(20, 33%, 98%);
    color: hsl(244, 23%, 12%);

    &:hover{
        cursor: pointer;
        background-color: hsl(33, 100%, 70%);
    }
`