// Citation de type 1
var table1 = ["On ne devrait pas", "Il ne faut pas", "Il serait convenable de", "Il faut", "On devrait"];
var table2 = ["manger", "casser des assiettes", "chasser les rats", "fumer", "désamorcer des ogives nucléaires"];
var table3 = ["dans des fast food", "chez des aristocrates", "sur les parkings", "dans les bars", "sur la voie publique"];

// Citation de type 2
var table4 = ["Les chats", "Les chiens", "Les cochons", "Les vaches", "Les poules"];
var table5 = ["aiment chasser", "veulent jouer avec", "aiment courrir avec", "jouent avec", "veulent courrir avec"];
var table6 = ["des petits oiseaux", "des ballons", "les canards", "les chèvres", "des vers de terre"];


//Fonction de création de citation n°1
function quoteCreation1 () {
    var randTable1 = table1[Math.floor(Math.random() * table1.length)];
    var randTable2 = table2[Math.floor(Math.random() * table2.length)];
    var randTable3 = table3[Math.floor(Math.random() * table3.length)];

    var citation = randTable1 + " " + randTable2 + " " + randTable3 + ". ";
    return citation;
};

//Fonction de création de citation n°2
function quoteCreation2 () {
    var randTable4 = table4[Math.floor(Math.random() * table4.length)];
    var randTable5 = table5[Math.floor(Math.random() * table5.length)];
    var randTable6 = table6[Math.floor(Math.random() * table6.length)];

    var citation = randTable4 + " " + randTable5 + " " + randTable6 + ". ";
    return citation;
};

// Fonction d'insertion de citation
function addQuote (id, citation) {
    var newLi = document.createElement("li");
    var content = document.createTextNode(citation);
    newLi.appendChild(content);
     
    document.getElementById(id).appendChild(newLi);
};

// Fonction de selection du type et du nombre de citation
function showSelected (type, number) {

    for (i = 0; i < number; i++) {
        
        if (type === 1) {
            addQuote("listage", quoteCreation1());
        } else if (type === 2) {
            addQuote("listage", quoteCreation2());
        } else {
            alert("How did you manage that ?");
        }
    }
}


//Clic sur le bouton "Cliquer pour commencer"
document.getElementById("button").addEventListener("click", function(){

    // Déclaration de variables globales pour selectQuote
    var newDiv1 = document.createElement("div");     
    var newDiv2 = document.createElement("div");
    var newLabel = document.createElement("label");
    var newSelect = document.createElement("select");
    var newOption1 = document.createElement("option");
    var newOption2 = document.createElement("option");


    //Création du formulaire de selection du type de citation
    function selectQuote (insert) {

        // Ajout des classes et id
        newDiv1.classList.add("d-flex");
        newDiv1.classList.add("justify-content-center");
        newDiv1.classList.add("text-center");
        newDiv1.classList.add("m-2");
        newDiv1.id = "selectQuote";
        newDiv2.classList.add("form-group");
        newSelect.classList.add("form-control");
        newSelect.id = "quoteSelected";

        // Ajout du contenu
        newLabel.textContent = "Choisissez le type de générateur :";
        newOption1.textContent = "Conseils";
        newOption2.textContent = "Animaux";

        // Assemblage des noeuds 
        newDiv1.appendChild(newDiv2);
        newDiv2.appendChild(newLabel);
        newDiv2.appendChild(newSelect);
        newSelect.appendChild(newOption1);
        newSelect.appendChild(newOption2);

        // Insertion dans le DOM        
        insert;
    };

    //Création du formulaire de selection du nombre de citation
    function selectQuoteNumber () {

        // Déclaration des variables
        var newDiv1 = document.createElement("div");
        var newDiv2 = document.createElement("div");
        var newLabel = document.createElement("label");
        var newSelect = document.createElement("select");
        var newOption1 = document.createElement("option");
        var newOption2 = document.createElement("option");
        var newOption3 = document.createElement("option");
        var newOption4 = document.createElement("option");
        var newOption5 = document.createElement("option");

        // Ajout des classes et id
        newDiv1.classList.add("d-flex");
        newDiv1.classList.add("justify-content-center");
        newDiv1.classList.add("text-center");
        newDiv1.classList.add("m-2");
        newDiv1.id = "selectQuoteNumber";
        newDiv2.classList.add("form-group");
        newSelect.classList.add("form-control");
        newSelect.id = "quoteNumberSelected";

        // Ajout du contenu
        newLabel.textContent = "Choisissez le nombre de citations que voulez obtenir :";
        newOption1.textContent = "1";
        newOption2.textContent = "2";
        newOption3.textContent = "3";
        newOption4.textContent = "4";
        newOption5.textContent = "5";

        // Assemblage des noeuds 
        newDiv1.appendChild(newDiv2);
        newDiv2.appendChild(newLabel);
        newDiv2.appendChild(newSelect);
        newSelect.appendChild(newOption1);
        newSelect.appendChild(newOption2);
        newSelect.appendChild(newOption3);
        newSelect.appendChild(newOption4);
        newSelect.appendChild(newOption5);

        // Insertion dans le DOM
        document.getElementById("begin").appendChild(newDiv1);
    };
    
    //Création du bouton d'affichage des citations
    function quoteButton () {
         // Déclaration de variable
         var newButton = document.createElement("button");

         // Ajout des classes et id
         newButton.classList.add("btn");
         newButton.classList.add("btn-primary");
         newButton.classList.add("m-2");
         newButton.id = "selectQuoteButton";

         // Ajout du contenu
        newButton.textContent = "Afficher la/les citations"

         // Insertion dans le DOM
        document.getElementById("quoteButton").appendChild(newButton);
    };

    //Appel des fonctions d'insertion de listes déroulantes et du bouton
    selectQuote (document.getElementById("begin").replaceChild(newDiv1, button));
    selectQuoteNumber ();
    quoteButton ();

    //Clic sur le bouton "Afficher la/les citations"
    document.getElementById("quoteButton").addEventListener("click", function(){

        //Création de variables de récupération d'informations utilisateur
        var quoteSelected = document.getElementById("quoteSelected").selectedIndex + 1;       
        var quoteNumberSelected = document.getElementById("quoteNumberSelected").selectedIndex + 1;
    
        //Suppression du formulaire
        document.getElementById("begin").removeChild(document.getElementById("selectQuote"));
        document.getElementById("begin").removeChild(document.getElementById("selectQuoteNumber"));
        document.getElementById("quoteButton").removeChild(document.getElementById("selectQuoteButton"));

        //Appel de la fonction d'insertion de citation
        showSelected (quoteSelected, quoteNumberSelected);
     
        // Fonction d'insertion de boutons Oui/Non
        function restart () {
    
         // Déclaration des variables
         var newDiv1 = document.createElement("div");
         var newH3 = document.createElement("h3");
         var newButton1 = document.createElement("button");
         var newButton2 = document.createElement("button");
         
         // Ajout des classes et id
         newDiv1.classList.add("d-flex");
         newDiv1.classList.add("justify-content-center");
         newDiv1.classList.add("text-center");
         newDiv1.classList.add("m-2");
         newButton1.classList.add("btn");
         newButton1.classList.add("btn-primary");
         newButton1.classList.add("m-2");
         newButton1.id = "yes";
         newButton2.classList.add("btn");
         newButton2.classList.add("btn-primary");
         newButton2.classList.add("m-2");
         newButton2.id = "no";
         newH3.id = "continue";
    
         // Ajout du contenu
         newH3.textContent = "Voulez-vous continuer ?";
         newButton1.textContent = "Oui";
         newButton2.textContent = "Non";
    
    
         // Assemblage des noeuds
         newDiv1.appendChild(newButton1);
         newDiv1.appendChild(newButton2);
    
    
         // Insertion dans le DOM
         document.getElementById("restartQuestion").appendChild(newH3);
         document.getElementById("restartAnswer").appendChild(newButton1);
         document.getElementById("restartAnswer").appendChild(newButton2);
        }
    
        // Appel de fonction
        restart ();
        
        //Clic sur le bouton "Oui"
        document.getElementById("yes").addEventListener("click", function(){
            
            
            //Insertion du formulaire du début
            selectQuote (document.getElementById("begin").appendChild(newDiv1));
            selectQuoteNumber ();
            quoteButton ();

            //Suppression des citations et des boutons
            document.getElementById("begin").removeChild(document.querySelector("ul"));
            document.getElementById("restartQuestion").removeChild(document.getElementById("continue"));
            document.getElementById("restartAnswer").removeChild(document.querySelector("#yes"));
            document.getElementById("restartAnswer").removeChild(document.querySelector("#no"));
            
            //Ajout de l'emplacement d'insertion de citation pour une réutilisation du générateur
            var newUl = document.createElement("ul");
            newUl.id = "listage";
            document.getElementById("begin").appendChild(newUl);
           
        });
        
        //Clic sur le bouton "Non"
        document.getElementById("no").addEventListener("click", function(){

            //Création du message "Au revoir"
            var newH3 = document.createElement("h3");
            newH3.textContent = "Au revoir !";

            //Suppression des citations et des boutons et insertion de "Au revoir"
            document.getElementById("restartQuestion").removeChild(document.querySelector("h3"));
            document.getElementById("restartAnswer").removeChild(document.querySelector("#yes"));
            document.getElementById("restartAnswer").removeChild(document.querySelector("#no"));
            document.getElementById("restartQuestion").appendChild(newH3);
        
        });
    
    });

});