// import ParkAreas.js
import { parkAreas } from "./ParkAreas.js";
// import Guests.js
import { guests } from "./Guests.js";
// import Contact.js
import { contact } from "./Contact.js";
// import servicesList from services.js
import { servicesList } from "./Services.js";

// get element from DOM to put HTML into
const container = document.getElementById("container");

const parkAreasHTML = parkAreas();
const guestsHTML = guests();
const contactHTML = contact();
const servicesHTML = servicesList();

let html = `
<header>
    <img src="https://images.macrumors.com/article-new/2023/08/national_parks_2023_1.png?noresize" alt="Cider Falls logo">
    <h1>Cider Falls Park</h1>
</header>

<section class='park-services-section'>
    ${servicesHTML}
</section>

<section class='content-section'>
<section class='park-area-section'>
    ${parkAreasHTML}
</section>

<section class='guests-section'>
    ${guestsHTML}
</section>
</section>

<footer>
    ${contactHTML}
</footer>
`;

container.innerHTML = html;
