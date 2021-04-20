// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Define passenger variables
  let passenger = ride.passengerDetails
  let passengerFirstName = passenger.first
  let passengerLastName = passenger.last
  let passengerPhoneNumber = passenger.phoneNumber
  
  // Define pickup variables
  let pickup = ride.pickupLocation
  let pickupAddress = pickup.address
  let pickupCity = pickup.city
  let pickupState = pickup.state
  let pickupZip = pickup.zip
  
  //Define dropoff variables
  let dropoff = ride.dropoffLocation
  let dropoffAddress = dropoff.address
  let dropoffCity = dropoff.city
  let dropoffState = dropoff.state
  let dropoffZip = dropoff.zip
  
  //Define car request variables
  let passengercount = ride.numberOfPassengers
  let purple = ride.purpleRequested

  //Conditional Logic on Purple Cars and XL Cars  
  //Establish whether it's a Purple or Regular Noober based on passenger request
  
  let carType
    if (purple == `True`)
    {
      carType = `Purple Noober`
    } else
    {
      carType = `Regular Noober`
    }
//Establish whether or not an XL is required based on amount of passengers
let carSize
if (passengercount > 3)
{
  carSize = `Noober XL`
} else
{
  carSize = 'Noober Regular'
}
//Establish if Noober XL / Purple / Regular is required for riders
let car
if (carType == `Purple Noober`)
{
  car = `Purple Noober`
} else if (carSize == `Noober XL`)
{
  car = `Noober XL`
} else 
{
  car = `Noober Regular`
}

//Input Name, Phone Number, Pickup Location, Dropoff Location, Number of passengers in their party, Whether or not they would like a luxury "Noober Purple" car in readable format

console.log(`${car} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}. Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}`)

  
  // 🔥 YOUR CODE ENDS HERE 🔥
})
