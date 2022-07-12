import {ReactComponent as AndroidLogo} from '../../../assets/icon-android.svg';
import {ReactComponent as AppleLogo} from '../../../assets/icon-apple.svg';

function Offer(){
    return(
        <div class="offer-container">
            <div id="app-illustration">
                <img src="./assets/illustration-app.png" alt="app-illustration" />
            </div>
            <div id="plan-container">
                <div id="plan-heading">
                    <h2>Premium EQ</h2>
                    <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take
                    your listening experience to a whole new level and access all our incredible features!</p>
                </div>
                <div id="price">
                    <p>
                        <strong>$4</strong>&nbsp;/&nbsp;month
                    </p>
                </div>
                <div id="download-btns">
                    <button id="apple">
                        <AppleLogo />
                        iOS Download
                    </button>
                    <button id="android">
                        <AndroidLogo />
                        Android Download
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Offer;