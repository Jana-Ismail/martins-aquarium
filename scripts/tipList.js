import { database } from './aquariumData.js'

export const tipList = () => {
    let tipHTML = `
            <h2 class="tips-header">Tips</h2>
            <ul class="tips">
    `
    for (const tip of database.tips) {
        tipHTML += `
                <li class="tip">${tip.topic}:\n
                    <p>${tip.text}</p>
                </li>
        `
    }

    tipHTML += `
            </ul>
    `
    return tipHTML
}

export const renderTipListToDOM = (tipHTML) => {
    let tipList = document.getElementById('tipList')

    if (tipList) {
        tipList.innerHTML = tipHTML;
    } else {
        console.error('Could not find element with id "tipList"')
    }
}

