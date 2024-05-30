import { database } from './aquariumData.js'

export const locationList = () => {
    let locationHTML = `
        <h2>Locations</h2>
    `

    for (const location of database.locations) {
        locationHTML += `
        <article class="locations">
            <section class="location">
                <h3 class="location-name">${location.name}, ${location.country}</h3>
                <p class="country-description">${location.description}</p>
            </section>
        </article
        `
    }

    return locationHTML
}

export const renderLocationListToDOM = (locationHTML) => {
    let locationList = document.getElementById('locationList')

    locationList.innerHTML = locationHTML
}