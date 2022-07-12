import {ReactComponent as Logo} from '../../../assets/logo.svg'
import {LogoContainer} from './header.styles'

function Header(){

    return(
        <header>
            <LogoContainer>
                <Logo />
            </LogoContainer>
        </header>
    )
}

export default Header;