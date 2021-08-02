import ManageTeam from "./ManageTeam.js";
class AddTeam {
  constructor() {
    this._form = document.querySelector("[data-js-add-team]");
    this._teamsDiv = document.querySelector("[data-js-all-teams]");
    this.nom = this._form.nom;
    this.quartier = this._form.quartier;
  }
  add = () => {
    //Add en JSON
    let dataInJSON = [
      {
        nom: this.nom.value,
        quartier: this.quartier.value,
        type: "addTeam",
      },
    ];
    //options de la requete
    let myInit = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataInJSON),
    };

    fetch("requetes/requeteAsync.php", myInit)
      .then((response) => {
        if (response.ok) {
          //traitement a la reception de la reponse
          response.json().then((myResponse) => {
            this.newTeamId = JSON.stringify(myResponse);
            //traitement DOM
            this.showTeam();
          });
        }
      })
      .catch((error) => {
        console.log(
          `Il y a eu un problème avec l'opération fetch: ${error.message}`
        );
      });
  };

  showTeam = () => {
    //afficher equipe dans la liste de equipes
    this._teamsDiv.insertAdjacentHTML(
      "beforeend",
      `<form data-js-equipe="${this.newTeamId}">
          <label for="${this.newTeamId}" data-js-label>"${this.nom.value}" : </label>
          <input type='text' name='nom' id="${this.newTeamId}" />
          <button data-js-change>Changer</button>
          <button data-js-delete>Supprimer</button>
      </form>`
    );
    //vider champs saisie
    this.nom.value = "";
    this.quartier.value = "";
    //ajout gestion a l'equipe
    new ManageTeam(this._teamsDiv.lastElementChild);
  };
}

export const { add } = new AddTeam();
