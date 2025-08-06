// import database.js
import { parkAreasData } from "./database.js"
// import Services.js
import { services } from "./Services.js"

//export parkAreas function
export const parkAreas = () => {
	const parks = parkAreasData()

	document.addEventListener("click", eventHandler)

	let html = ""

	for (const park of parks) {
		const serviceArr = park.serviceId
		const serviceItem = services(serviceArr)

		// services(serviceArr)

		html += `
        <article class='park'>
            <h2 data-type='park'
                data-guest-count='${park.guestId.length}'
                >${park.title}</h2>
            ${serviceItem}
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

// event handler
const eventHandler = e => {
	if (e.target.dataset.type === "park") {
		const guests = e.target.dataset.guestCount
		window.alert(`There are ${parseInt(guests)} guests in this area`)
	}
}
