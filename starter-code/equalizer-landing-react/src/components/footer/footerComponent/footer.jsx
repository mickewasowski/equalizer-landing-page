import {ReactComponent as Logo} from '../../../assets/logo.svg'
import {FooterContainer,FirstDiv, CopyrightContainer, CopyParag, IconsContainer, StyledNavLink, FacebookLogo, InstagramLogo, TwitterLogo} from './footer.styles';

function Footer(){

    return(
        <FooterContainer>
            <FirstDiv>
                <Logo />
            </FirstDiv>
            <CopyrightContainer>
                <CopyParag>All rights reserved © Equalizer 2021</CopyParag>
                <CopyParag>Have any problems? Contact us via social media or email us at <strong>equalizer@example.com</strong></CopyParag>
            </CopyrightContainer>
            <IconsContainer>
                <StyledNavLink to={'/'}>
                    <FacebookLogo />
                </StyledNavLink>
                <StyledNavLink to={'/'}>
                    <InstagramLogo />
                </StyledNavLink>
                <StyledNavLink to={'/'}>
                    <TwitterLogo />
                </StyledNavLink>
            </IconsContainer>
      </FooterContainer>
    )
}

export default Footer;