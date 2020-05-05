console.log("============================================");
console.log("Titre de la page : " + document.title);
console.log("Type du contenu de la page : " + document.body);
console.log("La troisième bande d'annonce est : " + document.querySelector("#a1"));
console.log("La troisième bande d'annonce est : " + document.links[2]); // Même chose que la ligne précédente mais d'une façon différente
console.log("============================================");
console.log("Le titre GONE GIRL est de type : " + document.head);
console.log("============================================");
console.log("Notre page contient " + document.getElementsByTagName("p").length + " et " + document.getElementsByTagName("img").length + " images");
console.log("============================================");
console.log("Notre page contient " + document.querySelectorAll(".synopsis").length + " synopsis de films.");
console.log("============================================");
console.log("La première rubrique des films date de l'année " + document.querySelector("h1").innerHTML);
console.log("Il existe " + document.querySelectorAll(".c5").length + " films sous la rubrique 2016");
console.log("============================================");
console.log("Synopsis du film : " + document.getElementById("h2").innerHTML + " :");
console.log(document.querySelector("#p9").innerHTML);
console.log("============================================");