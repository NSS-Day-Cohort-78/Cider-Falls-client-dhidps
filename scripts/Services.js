// import from database.js
import { parkAreasData, servicesData } from "./database.js";

//export services function which accepts serviceArray parameter
export const services = (serviceArray) => {
  // call copy of services array and store in variable
  const servicesDataArray = servicesData();
  // servicesHTML variable
  let servicesHTML = `
    <h3>Services:</h3>
    <ul class='services'>
    `;
  // loops services from database.js
  for (const service of servicesDataArray) {
    // loop over serviceArray
    for (const serviceItem of serviceArray) {
      // if service id === item in serviceArray
      if (service.id === serviceItem) {
        // write HTML and add to servicesHTML
        servicesHTML += `<li>${service.attraction}</li>`;
      }
    }
  }
  servicesHTML += "</ul>";
  // return services HTML
  return servicesHTML;
};

// create function to display list of each attraction
export const servicesList = () => {
  // store serviceData in variable
  const services = servicesData();
  let serviceAttractionArr = [];
  let eachServiceHTML = "<p class='park-services'>Park services: ";
  // iterate each service
  for (const service of services) {
    const eachServiceItem = `<span data-type="service" data-name="${service.attraction}" data-id="${service.id}">${service.attraction}</span>`
    serviceAttractionArr.push(eachServiceItem);
  }
  // add each service attraction name to HTML
  const serviceAttractions = serviceAttractionArr.join(", ");
  eachServiceHTML += `${serviceAttractions}</p>`;
  document.addEventListener("click", eventHandler)
  return eachServiceHTML;

};

// define event listener with click and click event as arguments
// define click event target
//
const eventHandler = event => {
    const itemClicked = event.target
    const parkAreas = parkAreasData()
    if (itemClicked.dataset.type === "service") {
        const serviceId = parseInt(itemClicked.dataset.id)
            let alert = `${itemClicked.dataset.name} is available in `
            const alertArray = []
                for (const parkArea of parkAreas) {
                    const serviceIdArr = parkArea.serviceId
                    for (const eachServiceId of serviceIdArr) {
                        if (eachServiceId === serviceId) {
                            alertArray.push(parkArea.title)
                        }
                    }
                }
                const joinedArr = alertArray.join(", ")
                alert += joinedArr
                window.alert(alert)
            }

}

