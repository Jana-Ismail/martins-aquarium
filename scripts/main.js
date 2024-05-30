import { fishList, renderFishListToDOM } from './fishList.js'
import { tipList, renderTipListToDOM } from './tipList.js'
import { locationList, renderLocationListToDOM } from './locationList.js'

const fishHTML = fishList()
renderFishListToDOM(fishHTML)

const tipHTML = tipList()
renderTipListToDOM(tipHTML)


const locationHTML = locationList()
renderLocationListToDOM(locationHTML)

