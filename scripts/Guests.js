// import database.js
import database from {database}
// export guests function
export const guests = () => {
 // call copy of guest array and store in variable
    guestData()
    // guestsHTML
    let guestsHTML = "";
        for (const guest of database.guests) {
            guestsHTML += `<ul> ${guest.firstName}, ${guest.lastName} </ul>`
            
        }

    // loop guests
        // make HTML and add to guestsHTML
    // return guestsHTML
    return guestsHTML
}
   