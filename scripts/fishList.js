import { database } from './aquariumData.js'

export const fishList = () => {
    let fishHTML = '';

    for (const fish of database.fish) {
        fishHTML += `
            <img class="fish-img"
                src="${fish.image}" 
                alt="picture of ${fish.name}, a ${fish.species}, swimming in the ${fish.location}" 
            >
            <article class="fish">
                <div class="fish-details">
                    <h2 class="fish-name">${fish.name}<h2>
                    <p class="fish-description">
                        ${fish.name} is a ${fish.species}, a(n) ${fish.diet} that is ${fish.length} inches long and lives in the ${fish.location}
                    </p>
                </div>
            </article>
        `
    };

    return fishHTML
}

export const renderFishListHTML = (fishHTML) => {
    const fishList = document.getElementById("fishList")

    if (fishList) {
        fishList.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fishList"');
    }
}