// import from database.js
import { servicesData } from "./database.js";

//export services function which accepts serviceArray parameter
export services = (serviceArray) => {
    // call copy of services array and store in variable
    const services = servicesData()
    // servicesHTML variable
    const servicesHTML = "<ul>"
    // loops services from database.js
    for (const service of services) {
        // loop over serviceArray
            for (const )
            // if service id === item in serviceArray
                // write HTML and add to servicesHTML
        }
    // return services HTML
}