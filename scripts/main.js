// import ParkAreas.js
import { parkAreas } from "./ParkAreas.js"
// import Guests.js
import { guests } from "./Guests.js"
// import Contact.js
import { contact } from "./Contact.js"

// get element from DOM to put HTML into
const container = document.getElementById("container")

const parkAreasHTML = parkAreas()
const guestsHTML = guests()
const contactHTML = contact()

let html = `
<header>
    <h1>Cider Falls Park</h1>
</header>

<section class='park-area-section'>
    ${parkAreasHTML}
</section>

<section class='guests-section'>
    ${guestsHTML}
</section>

<footer>
    ${contactHTML}
</footer>
`

container.innerHTML = html
