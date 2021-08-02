<?php
require_once("FonctionsDB.php");

//récupération du JSON contenant le body du fetch
$request_payload = file_get_contents("php://input");
$json = json_decode($request_payload, true);

$type = $json[0]["type"];

switch ($type) {
   case 'addTeam':
      // ajout d'equipe
      if (isset($json[0]["nom"]) && isset($json[0]["quartier"])) {
         
         $nom = $json[0]["nom"];
         $quartier = $json[0]["quartier"];
         
         $return_id = addTeam($nom, $quartier);

         echo json_encode($return_id);
      }  
      break;

   case 'changeTeamName':
      // changer nom d'equipe
      if (isset($json[0]["nom"]) && isset($json[0]["id"])) {
        
         $nom = $json[0]["nom"];
         $id = $json[0]["id"];
         
         changeTeamName($nom, $id);
     }  
      break;

   case 'deleteTeam':
      // Supprimer equipe
      if (isset($json[0]["id"])) {
         $id = $json[0]["id"];
         
         deleteTeam($id);
     }  
      
      break;
}

?>