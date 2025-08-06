// import database.js
import {guestsData} from "./database.js"
// export guests function
export const guests = () => {
 // call copy of guest array and store in variable
    const guestDataCopy = guestsData()
    // guestsHTML 
    
    let guestsHTML = "<ul>";
        for (const guest of guestDataCopy) {
            guestsHTML += `<li>${guest.firstName}, ${guest.lastName}</li>`
            
        }
        guestsHTML += "</ul>"


    // loop guests
        // make HTML and add to guestsHTML
    // return guestsHTML
    return guestsHTML
}
   