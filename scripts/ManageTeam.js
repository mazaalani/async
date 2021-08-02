export default class ManageTeam {
  constructor(el) {
    this._el = el;
    this._changeBtn = this._el.querySelector("[data-js-change]");
    this._deleteBtn = this._el.querySelector("[data-js-delete]");
    this.id = this._el.dataset.jsEquipe;
    this.name = this._el.nom;
    this.nameLabel = this._el.querySelector("label");

    this.dataInJSON = [
      {
        nom: "",
        id: this.id,
        type: "",
      },
    ];

    this.init();
  }

  init = () => {
    this._changeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      //faire le changement si valeur input renseignée
      if (this.name.value != "") this.changeTeamName();
    });

    console.log(this);

    this._deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      //supprimer equipe
      this.deleteTeam();
    });
  };

  changeTeamName = () => {
    //determiner les valeurs de data en json a envoyer
    this.dataInJSON[0].type = "changeTeamName";
    this.dataInJSON[0].nom = this.name.value;
    //traitement si reponse est ok
    this.callFetch();
    //traitement DOM
    this.nameLabel.textContent = this.name.value;
    this.name.value = "";
  };
  deleteTeam = () => {
    //determiner les valeurs de data en json a envoyer
    this.dataInJSON[0].type = "deleteTeam";
    this.callFetch();
    //traitement DOM
    this._el.remove();
  };

  callFetch = () => {
    //recuperation des valeurs du fetch
    let dataFetch = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.dataInJSON),
    };

    fetch("requetes/requeteAsync.php", dataFetch)
      .then((response) => {
        if (response.ok) return true;
        else return false;
      })
      .catch((error) => {
        console.log(
          `Il y a eu un problème avec l'opération fetch: ${error.message}`
        );
      });
  };
}
