import { add } from "./AddTeam.js";
import ManageTeam from "./ManageTeam.js";
(() => {
  let addBtn = document.querySelector("[data-js-add]"),
    allTeams = document.querySelectorAll("[data-js-equipe]");

  //ajout equipe
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    add();
  });
  //gestion des equipes dans la liste
  allTeams.forEach((element) => {
    new ManageTeam(element);
  });
})();
