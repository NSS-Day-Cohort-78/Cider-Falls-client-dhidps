// create database
const database = {
    parkAreas: [
        {
            id: 1,
            title: "Chamfort River",
            guestId: [],
            serviceId: []
        },
        {
            id: 2,
            title: "Lost Wolf Hiking Trail",
            guestId: [],
            serviceId: []
        },
        {
            id: 3,
            title: "Lodge",
            guestId: [],
            serviceId: []
        },
        {
            id: 4,
            title: "Gander River",
            guestId: [],
            serviceId: []
        },
        {
            id: 5,
            title: "Campgrounds",
            guestId: [],
            serviceId: []
        },
        {
            id: 6,
            title: "Pine Bluffs Trails",
            guestId: [],
            serviceId: []
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
            attraction: "vast network of trails for all levels of hikers"
        },
        {
            id: 15,
            attraction: "food vendors"
        },
        {
            id: 16,
            attraction: "zip lines"
        }
    ],
    guests: [
        {
            id: 1,
            firstName: "Paul",
            lastName: "McCartney",
            parkAreaId: 1
        },
        {
            id: 2,
            firstName: "Sarah",
            lastName: "Johnson",
            parkAreaId: 7
        },
        {
            id: 3,
            firstName: "Michael",
            lastName: "Chen",
            parkAreaId: 12
        },
        {
            id: 4,
            firstName: "Emma",
            lastName: "Rodriguez",
            parkAreaId: 3
        },
        {
            id: 5,
            firstName: "David",
            lastName: "Thompson",
            parkAreaId: 15
        },
        {
            id: 6,
            firstName: "Jessica",
            lastName: "Williams",
            parkAreaId: 9
        },
        {
            id: 7,
            firstName: "Ryan",
            lastName: "Anderson",
            parkAreaId: 4
        },
        {
            id: 8,
            firstName: "Amanda",
            lastName: "Davis",
            parkAreaId: 11
        },
        {
            id: 9,
            firstName: "Kevin",
            lastName: "Miller",
            parkAreaId: 6
        },
        {
            id: 10,
            firstName: "Lisa",
            lastName: "Garcia",
            parkAreaId: 14
        },
        {
            id: 11,
            firstName: "Christopher",
            lastName: "Brown",
            parkAreaId: 2
        },
        {
            id: 12,
            firstName: "Rachel",
            lastName: "Wilson",
            parkAreaId: 8
        },
        {
            id: 13,
            firstName: "Brandon",
            lastName: "Martinez",
            parkAreaId: 13
        },
        {
            id: 14,
            firstName: "Nicole",
            lastName: "Taylor",
            parkAreaId: 5
        },
        {
            id: 15,
            firstName: "Justin",
            lastName: "Moore",
            parkAreaId: 10
        },
        {
            id: 16,
            firstName: "Stephanie",
            lastName: "Lee",
            parkAreaId: 16
        },
        {
            id: 17,
            firstName: "Matthew",
            lastName: "Jackson",
            parkAreaId: 1
        },
        {
            id: 18,
            firstName: "Lauren",
            lastName: "White",
            parkAreaId: 7
        },
        {
            id: 19,
            firstName: "Anthony",
            lastName: "Harris",
            parkAreaId: 9
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
// export deep copy of services
// export deep copy of guests
