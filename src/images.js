import IHaveADreamQrCode from "./images/IHaveADream/qrcode.png"
import IHaveADreamCode from "./images/IHaveADream/code.png"
import IHaveADreamScreen from "./images/IHaveADream/screen.png"

import BirdQrCode from "./images/Bird/qrcode.png"
import BirdCode from "./images/Bird/code.png"
import BirdScreen from "./images/Bird/screen.png"

import PaintPotQrCode from './images/PaintPot/qrcode.png'
import PaintPotCode from './images/PaintPot/code.png'
import PaintPotScreen from './images/PaintPot/screen.png'

function qrCode(index){
    if(index === 0) return IHaveADreamQrCode;
    else if(index === 1) return BirdQrCode;
    else if(index === 2) return PaintPotQrCode;
    else return ""
}

function code(index){
    if(index === 0) return IHaveADreamCode;
    else if(index === 1) return BirdCode;
    else if(index === 2) return PaintPotCode;
    else return ""
}

function screen(index){
    if(index === 0) return IHaveADreamScreen;
    else if(index === 1) return BirdScreen;
    else if(index === 2) return PaintPotScreen;
    else return ""
}

export {qrCode, code, screen};