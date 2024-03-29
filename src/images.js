import IHaveADreamQrCode from "./images/IHaveADream/qrcode.png"
import IHaveADreamCode from "./images/IHaveADream/code.png"
import IHaveADreamScreen from "./images/IHaveADream/screen.png"

import BirdQrCode from "./images/Bird/qrcode.png"
import BirdCode from "./images/Bird/code.png"
import BirdScreen from "./images/Bird/screen.png"

import PaintPotQrCode from './images/PaintPot/qrcode.png'
import PaintPotCode from './images/PaintPot/code.png'
import PaintPotScreen from './images/PaintPot/screen.png'

import MandalaQrCode from './images/Mandala/qrcode.png'
import MandalaCode from './images/Mandala/code.png'
import MandalaScreen from './images/Mandala/screen.png'

import MoleMashQrCode from './images/MoleMash/qrcode.png'
import MoleMashCode from './images/MoleMash/code.png'
import MoleMashScreen from './images/MoleMash/screen.png'

import WhackAMinionQrCode from './images/WhackAMinion/qrcode.png'
import WhackAMinionCode from './images/WhackAMinion/code.png'
import WhackAMinionScreen from './images/WhackAMinion/screen.png'

import TSQuizQrCode from './images/TaylorSwiftQuiz/qrcode.png'
import TSQuizCode from './images/TaylorSwiftQuiz/code.png'
import TSQuizScreen from './images/TaylorSwiftQuiz/screen.png'

function qrCode(index){
    if(index === 0) return IHaveADreamQrCode;
    else if(index === 1) return BirdQrCode;
    else if(index === 2) return PaintPotQrCode;
    else if(index === 3) return MandalaQrCode;
    else if(index === 4) return MoleMashQrCode;
    else if(index === 5) return WhackAMinionQrCode;
    else if(index === 6) return TSQuizQrCode;
    else return ""
}

function code(index){
    if(index === 0) return IHaveADreamCode;
    else if(index === 1) return BirdCode;
    else if(index === 2) return PaintPotCode;
    else if(index === 3) return MandalaCode;
    else if(index === 4) return MoleMashCode;
    else if(index === 5) return WhackAMinionCode;
    else if(index === 6) return TSQuizCode;
    else return ""
}

function screen(index){
    if(index === 0) return IHaveADreamScreen;
    else if(index === 1) return BirdScreen;
    else if(index === 2) return PaintPotScreen;
    else if(index === 3) return MandalaScreen;
    else if(index === 4) return MoleMashScreen;
    else if(index === 5) return WhackAMinionScreen;
    else if(index === 6) return TSQuizScreen;
    else return ""
}

export {qrCode, code, screen};