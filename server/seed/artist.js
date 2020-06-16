const db = require('../db/connection')
const Artist = require('../models/artist')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const artists =
    [
      {
        "name": "Grayson Perry",
        "portraitImg": "https://www.google.com/url?sa=i&url=https%3A%2F%2Frts.org.uk%2Farticle%2Fgrayson-perry-host-channel-4-s-grayson-s-art-club&psig=AOvVaw15dvfQhw0_4gB_3eOi2GYQ&ust=1592065376131000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiZzevX_OkCFQAAAAAdAAAAABAT",
        "artistBio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "galleryName": "Lorem Ipsum"
      }
    ]
    await Artist.insertMany(artists)
    console.log("Created artist!")
}
const run = async () => {
    await main()
    db.close()
}

run()