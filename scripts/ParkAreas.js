// import database.js
import { parkAreasData } from "./database.js"
// import Services.js
import { services } from "./Services.js"

//export parkAreas function
export const parkAreas = () => {
    const parks = parkAreasData()

    let html = ""

    for (const park of parks) {
        const serviceArr = park.serviceId

        services(serviceArr)

        html += `
        <article class=''>
            <h2>${park.title}</h2>
            ${services}
        </article>
        `
    }
    return html
}
// call copy of park areas array and store in variable
// parkAreaHTML
// loop park area data
// get serviceId array
// call Services.js function stored in a variable using serviceId array as argument
// add HTML to parkAreaHTML for each park
// return parkAreaHTML
