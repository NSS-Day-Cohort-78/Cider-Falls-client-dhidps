// import database.js
import { guestsData, parkAreasData } from "./database.js"
// export guests function
export const guests = () => {
	// call copy of guest array and store in variable
	const guestDataCopy = guestsData()
	// guestsHTML

	let guestsHTML = `
    <h2>Guests Visiting Parks</h2>
    <ul>`
	for (const guest of guestDataCopy) {
        // for each guest, get parkAreaId 
        const parkAreaId = guest.parkAreaId
        // call new function with parkArea id as argument
        // store new function in variable
        const parkTitle = guestLocation(parkAreaId)
		guestsHTML += `<li>${guest.firstName} ${guest.lastName} (${parkTitle})</li>`
	}
	guestsHTML += "</ul>"

	// loop guests
	// make HTML and add to guestsHTML
	// return guestsHTML
	return guestsHTML
}

// function displaying guest location with guest id as parameter
const guestLocation = (guestLocationId) => {
    // get parks
    const parks = parkAreasData()
    // loop parks to see if park id matches parameter
    for (const park of parks) {
        if (park.id === guestLocationId) {
            return park.title
        }
    }
        // if park id matches parameter
            // return park title
}
