const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

const expectedDesc1 = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";

const expectedDesc2 = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner."

const bombay = breedDetails('Bombay');
const balinese = breedDetails('Balinese');
const siamese = breedDetails('Siamese');

describe('#breedDetails', () => {

  it('returns breed details for the Bombay breed', () => {
    assert.equal(expectedDesc1, bombay);
  });

  it('returns breed details for the Balinse breed', () => {
    assert.equal(expectedDesc2, balinese);
  });

  it('returns undefined when no description is provided', () => {
    assert.equal(undefined, siamese);
  });

});