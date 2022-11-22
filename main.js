function test_age(){
    let age = prompt("Quel est l'âge de l'enfant ?", "entrez ici l'âge");
    if (isNaN(age)){
        alert("entrez une valeur numérique");
    }
    else if (age < 6 || age > 17){
        alert("hors-catégorie");
    }
    else if (age >= 6 && age <= 7){
        alert("catégorie : Poussin");
    }
    else if (age>=8 && age <= 9){
        alert("catégorie : Pupille");
    }
    else if (age>=10 && age <= 11){
            alert("catégorie : Minime");
    }
    else if (age>=12 && age <= 17){
        alert("catégorie : Cadet");
    }
}
