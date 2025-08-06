// import from database.js
import { servicesData } from "./database.js";

//export services function which accepts serviceArray parameter
export const services = (serviceArray) => {
    // call copy of services array and store in variable
    const servicesDataArray = servicesData()
    // servicesHTML variable
    let servicesHTML = "<ul class='services'>"
    // loops services from database.js
    for (const service of servicesDataArray) {
        // loop over serviceArray
            for (const serviceItem of serviceArray) {
            // if service id === item in serviceArray
                if (service.id === serviceItem) {
                // write HTML and add to servicesHTML
                 servicesHTML += `<li>${service.attraction}</li>`
                }
                }
        }
        servicesHTML += "</ul>"
    // return services HTML
    return servicesHTML
}