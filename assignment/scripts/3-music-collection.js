console.log('***** Music Collection *****')
// Create a variable `collection` that starts as an empty array.

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  collection.push(album);
  
  return album;
}
console.log(addToCollection("Album 1", "Artist 1", 2020));
console.log(addToCollection("Album 2", "Artist 2", 2018));


// Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

console.log(addToCollection("1989", "Taylor Swift", 2014));
console.log(addToCollection("Purpose", "Justin Bieber", 2015));
console.log(addToCollection("25", "Adele", 2015));
console.log(addToCollection("Divide", "Ed Sheeran", 2017));
console.log(addToCollection("Crash My Party", "Luke Bryan", 2013));
console.log(addToCollection("Suldan Seerar's Debut Album", "Suldan Seerar", 2022));

console.log(collection);




// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

// - Test the `showCollection` function.


function showCollection(array) {
    console.log("Number of items in the collection:", array.length);
  
    for (let album of array) {
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
  }
  
  showCollection(collection);
  

//   Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.


function findByArtist(artist) {
    let results = [];
  
    for (let album of collection) {
      if (album.artist === artist) {
        results.push(album);
      }
    }
  
    return results;
  }
  
  console.log(findByArtist("Taylor Swift")); 
  console.log(findByArtist("Justin Bieber")); 
  console.log(findByArtist("Adele"));
  console.log(findByArtist("Ed Sheeran")); 
  console.log(findByArtist("Luke Bryan")); 
  console.log(findByArtist("Suldan Seerar"));


// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!
console.log(findByArtist("Selena Gomez"));
