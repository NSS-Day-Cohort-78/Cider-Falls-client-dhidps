// create database
const database = {
	parkAreas: [
		{
			id: 1,
			title: "Chamfort River",
			guestId: [2, 7, 13, 19],
			serviceId: [1, 2, 3]
		},
		{
			id: 2,
			title: "Lost Wolf Hiking Trail",
			guestId: [4, 9, 15],
			serviceId: [4, 5, 6]
		},
		{
			id: 3,
			title: "Lodge",
			guestId: [1, 8, 14, 20],
			serviceId: [7, 8, 9, 10, 11, 5]
		},
		{
			id: 4,
			title: "Gander River",
			guestId: [5, 11, 17],
			serviceId: [3, 4]
		},
		{
			id: 5,
			title: "Campgrounds",
			guestId: [3, 10, 16],
			serviceId: [12, 13, 11, 5]
		},
		{
			id: 6,
			title: "Pine Bluffs Trails",
			guestId: [6, 12, 18],
			serviceId: [4, 14, 5, 15]
		}
	],
	services: [
		{
			id: 1,
			attraction: "rafting"
		},
		{
			id: 2,
			attraction: "canoeing"
		},
		{
			id: 3,
			attraction: "fishing"
		},
		{
			id: 4,
			attraction: "hiking"
		},
		{
			id: 5,
			attraction: "picnicking"
		},
		{
			id: 6,
			attraction: "rock climbing"
		},
		{
			id: 7,
			attraction: "hotel"
		},
		{
			id: 8,
			attraction: "restaurant"
		},
		{
			id: 9,
			attraction: "lodging"
		},
		{
			id: 10,
			attraction: "parking"
		},
		{
			id: 11,
			attraction: "information"
		},
		{
			id: 12,
			attraction: "office park"
		},
		{
			id: 13,
			attraction: "children play areas"
		},
		{
			id: 14,
			attraction: "food vendors"
		},
		{
			id: 15,
			attraction: "zip lines"
		}
	],
	guests: [
		{
			id: 1,
			firstName: "Paul",
			lastName: "McCartney",
			parkAreaId: 3
		},
		{
			id: 2,
			firstName: "Sarah",
			lastName: "Johnson",
			parkAreaId: 1
		},
		{
			id: 3,
			firstName: "Michael",
			lastName: "Chen",
			parkAreaId: 5
		},
		{
			id: 4,
			firstName: "Emma",
			lastName: "Rodriguez",
			parkAreaId: 2
		},
		{
			id: 5,
			firstName: "David",
			lastName: "Thompson",
			parkAreaId: 4
		},
		{
			id: 6,
			firstName: "Jessica",
			lastName: "Williams",
			parkAreaId: 6
		},
		{
			id: 7,
			firstName: "Ryan",
			lastName: "Anderson",
			parkAreaId: 1
		},
		{
			id: 8,
			firstName: "Amanda",
			lastName: "Davis",
			parkAreaId: 3
		},
		{
			id: 9,
			firstName: "Kevin",
			lastName: "Miller",
			parkAreaId: 2
		},
		{
			id: 10,
			firstName: "Lisa",
			lastName: "Garcia",
			parkAreaId: 5
		},
		{
			id: 11,
			firstName: "Christopher",
			lastName: "Brown",
			parkAreaId: 4
		},
		{
			id: 12,
			firstName: "Rachel",
			lastName: "Wilson",
			parkAreaId: 6
		},
		{
			id: 13,
			firstName: "Brandon",
			lastName: "Martinez",
			parkAreaId: 1
		},
		{
			id: 14,
			firstName: "Nicole",
			lastName: "Taylor",
			parkAreaId: 3
		},
		{
			id: 15,
			firstName: "Justin",
			lastName: "Moore",
			parkAreaId: 2
		},
		{
			id: 16,
			firstName: "Stephanie",
			lastName: "Lee",
			parkAreaId: 5
		},
		{
			id: 17,
			firstName: "Matthew",
			lastName: "Jackson",
			parkAreaId: 4
		},
		{
			id: 18,
			firstName: "Lauren",
			lastName: "White",
			parkAreaId: 6
		},
		{
			id: 19,
			firstName: "Anthony",
			lastName: "Harris",
			parkAreaId: 1
		},
		{
			id: 20,
			firstName: "Megan",
			lastName: "Clark",
			parkAreaId: 3
		}
	]
}

// export deep copy of park areas
export const parkAreasData = () => {
	return structuredClone(database.parkAreas)
}
// export deep copy of services
export const servicesData = () => {
	return structuredClone(database.services)
}
// export deep copy of guests
export const guestsData = () => {
	return structuredClone(database.guests)
}
