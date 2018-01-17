
import BtnBold from './btn-bold'
import Divider from './divider'
import BtnImg from './btn-img'
import BtnLink from './btn-link'
import BtnTable from './btn-table'
import BtnDelete from './btn-delete'
import BtnItalic from './btn-italic'
import BtnsHeader from './btn-header'
import BtnUl from './btn-ul'
import BtnOl from './btn-ol'
import BtnHr from './btn-hr'

export let toolbarBtn = [
  BtnBold,
  BtnDelete,
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
  BtnTable
]
