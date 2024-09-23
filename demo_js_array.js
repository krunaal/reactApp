let cities = ['Paris', 'Dubai', 'Mumbai', 'San Diego', 'Barcelona']
console.log(cities)

// this gives us name of element itself from array
for (let city of cities)
    console.log(city)

// this gives us index value
for (let city in cities)
    console.log(city)

let filtered_cities = cities.filter(c => c.startsWith('M'))
console.log(filtered_cities)

let size = cities.map(c => c.length)
console.log(size)