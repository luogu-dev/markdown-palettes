import BtnBold from './btn-bold'
import BtnItalic from './btn-italic'
import BtnStrikeThrough from './btn-strikethrough'
import Divider from './divider'
import BtnImg from './btn-img'
import BtnLink from './btn-link'
import BtnTable from './btn-table'
import BtnsHeader from './btn-header'
import BtnUl from './btn-ul'
import BtnOl from './btn-ol'
import BtnHr from './btn-hr'
import BtnCode from './btn-code'
import BtnHide from './btn-hide'
import BtnFullscreen from './btn-fullscreen'
import BtnScrollsync from './btn-scrollsync'
import BtnInfo from './btn-info'

export const defaultBtns = [
    BtnBold,
    BtnStrikeThrough,
    BtnItalic,
    BtnHr,
    Divider,
    BtnsHeader(1),
    BtnsHeader(2),
    BtnsHeader(3),
    BtnsHeader(4),
    BtnsHeader(5),
    BtnsHeader(6),
    Divider,
    BtnUl,
    BtnOl,
    Divider,
    BtnImg,
    BtnLink,
    BtnCode,
    BtnTable,
    Divider,
    BtnHide,
    BtnFullscreen,
    BtnScrollsync,
    Divider,
    BtnInfo
]

function getDefaultBtnsMap () {
    const btnsMap = {}
    defaultBtns.forEach(function (btn) {
        btnsMap[btn.name] = btn
    })
    return btnsMap
}

export function getBtns (toolbarConfig) {
    const btnsMap = getDefaultBtnsMap()
    const btns = []
    toolbarConfig.forEach(function (btn) {
        if (typeof btn === 'object') { btns.push(btn) } else { btns.push(btnsMap[btn]) }
    })
    return btns
}
