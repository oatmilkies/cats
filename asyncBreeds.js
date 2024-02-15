// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  //Read from the file. readFile's callback function is the console.log
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    //Call the function to return the data
    if (!error) callback(data);
    //Return undefined if a breed isn't found
    else callback(undefined);
  });

};

//*keeping these comments for learning*
//This is the callback function to print the data because breedDetailsFromFile will return undefined otherwise. Can't use "return data"
//const printBreed = breed => console.log('Return value: ', breed);

//Call the main function to read the file and then print
//breedDetailsFromFile('Bombay', printBreed);

module.exports = breedDetailsFromFile;