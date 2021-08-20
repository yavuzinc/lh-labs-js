function hardPluralizer(word) {
  for (i = 0; i < pet.length; i++) {
    pet[i] = pet[i] + 's';
  }
  return word
};
pet = ["hamster", "bobcat", "dog", "hagfish"];
console.log("The original word is " + pet);
console.log("And the pluralized word is " + hardPluralizer(pet));
