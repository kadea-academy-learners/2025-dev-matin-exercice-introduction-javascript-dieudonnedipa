/*let paul, marie, eric, clair, madameMukuna, joseph, sarah;*/
// Ecrivez votre code ici

let paul, marie, eric, clair, madameMukuna, joseph, sarah;

let patrimoineTotal = 60000000 + 40000000 + 20000000;

let partPremiereCategorie = patrimoineTotal * 0.75;
let partDeuxiemeCategorie = patrimoineTotal * 0.25;

paul = partPremiereCategorie / 3;
marie = partPremiereCategorie / 3;
let partAlain = partPremiereCategorie / 3;
eric = partAlain / 2;
clair = partAlain / 2;

madameMukuna = partDeuxiemeCategorie / 3;
joseph = partDeuxiemeCategorie / 3;
sarah = partDeuxiemeCategorie / 3;

console.log("Paul : " + paul + " CDF");
console.log("Marie : " + marie + " CDF");
console.log("Éric : " + eric + " CDF");
console.log("Claire : " + clair + " CDF");
console.log("Madame MUKUNA : " + madameMukuna + " CDF");
console.log("Joseph : " + joseph + " CDF");
console.log("Sarah : " + sarah + " CDF");

// Ne pas modifier le code ci-dessous
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};
