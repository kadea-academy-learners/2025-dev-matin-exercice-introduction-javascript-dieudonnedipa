/*let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste;*/
// Ecrivez votre code ici

let salaireMensuel = 500;

let loyer = salaireMensuel * 0.30;
let nourriture = salaireMensuel * 0.20;
let transport = salaireMensuel * 0.10;
let autresDepenses = 50;
    autresDepenses += 25;

let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
