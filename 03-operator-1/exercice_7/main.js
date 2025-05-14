/*let ageEnfant, agePere, ageMere, ageGrandPere, ageOncle;*/
// Ecrivez votre code ici

let ageEnfant = 10;
let agePère = ageEnfant * 2;
let ageMère = agePère - 5;
let ageGrandPère = (ageMère * 2) + (ageEnfant / 2);
let ageOncle = agePère + 10;

// Ne pas modifier le code ci-dessous
module.exports = {
  ageEnfant,
  agePere,
  ageMere,
  ageGrandPere,
  ageOncle,
};
