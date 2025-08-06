// import from database.js
import { servicesData } from "./database.js"

//export services function which accepts serviceArray parameter
export const services = serviceArray => {
	// call copy of services array and store in variable
	const servicesDataArray = servicesData()
	// servicesHTML variable
	let servicesHTML = `
    <h3>Services:</h3>
    <ul class='services'>
    `
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

// create function to display list of each attraction
export const servicesList = () => {
    // store serviceData in variable
    const services = servicesData()
    let serviceAttractionArr = []
    let eachServiceHTML = "<p class='park-services'>Park services: "
    // iterate each service 
    for (const service of services) {
        serviceAttractionArr.push(service.attraction)
        }
        // add each service attraction name to HTML
        const serviceAttractions = serviceAttractionArr.join(", ")
        eachServiceHTML += `${serviceAttractions}</p>`
        return eachServiceHTML
}

// define event listener with click and click event as arguments
    // define click event target
    // 