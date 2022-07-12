import {ReactComponent as AndroidLogo} from '../../../assets/icon-android.svg';
import {ReactComponent as AppleLogo} from '../../../assets/icon-apple.svg';
import appimage from '../../../assets/illustration-app.png'

import {OfferContainer, AppIllustration, AppImg, PlanContainer,PlanItems, H2, Parag, PriceParag, PriceStrong, BtnContainer, AppleBtn, AndroidBtn} from './offer.styles';

function Offer(){
    return(
        <OfferContainer>
            <AppIllustration>
                <AppImg src={appimage} alt="app-illustration" />
            </AppIllustration>
            <PlanContainer>
                <PlanItems>
                    <H2>Premium EQ</H2>
                    <Parag>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take
                    your listening experience to a whole new level and access all our incredible features!</Parag>
                </PlanItems>
                <PlanItems>
                    <PriceParag>
                        <PriceStrong>$4</PriceStrong>&nbsp;/&nbsp;month
                    </PriceParag>
                </PlanItems>
                <BtnContainer>
                    <AppleBtn>
                        <AppleLogo />
                        iOS Download
                    </AppleBtn>
                    <AndroidBtn>
                        <AndroidLogo />
                        Android Download
                    </AndroidBtn>
                </BtnContainer>
            </PlanContainer>
        </OfferContainer>
    )
}

export default Offer;