"use script"



let lnom = ["louis","MJ","tamia","sam","TheRock"];
let nom = lnom [Math.floor(Math.random()*5)];
let lnom1 = ["louis","MJ","tamia","sam","TheRock"];
let nom1 = lnom1 [Math.floor(Math.random()*5)];
let lnom2 = ["louis","MJ","tamia","sam","TheRock"];
let nom2 = lnom2 [Math.floor(Math.random()*5)];
let lnom3 = ["louis","MJ","tamia","sam","TheRock"];
let nom3 = lnom3 [Math.floor(Math.random()*5)];
let lnom4 = ["louis","MJ","tamia","sam","TheRock"];
let nom4 = lnom4 [Math.floor(Math.random()*5)];



                                                      /*je n ai pas reussi a a faire une boucle ou les nom et 
                                                      caracteristique physique etait aleatoir a chaque tour.
                                                      j ai donc contourné le probleme en repliquant 5 fois les 
                                                      ligne jouant un role dans l attribution des nom et characteristique
                                                      physique. */


let type=["sportif","chauve","geek","bagarreur","chat"];
let type1= type [Math.floor(Math.random()*5)];
let type2=["sportif","chauve","geek","bagarreur","chat"];
let type3= type2 [Math.floor(Math.random()*5)];
let type4=["sportif","chauve","geek","bagarreur","chat"];
let type5= type4[Math.floor(Math.random()*5)];
let type6=["sportif","chauve","geek","bagarreur","chat"];
let type7= type6 [Math.floor(Math.random()*5)];
let type8=["sportif","chauve","geek","bagarreur","chat"];
let type9= type8 [Math.floor(Math.random()*5)];



class personnage{
    constructor(probaMort,probaDegats,probaDegatsMort,degat,degatMorts,vie){
    this.pMort=probaMort;
    this.pDegat=probaDegats;
    this.pDegatMortm=probaDegatsMort;
    this.degat=degat
    this.degatMort=degatMorts;
    this.PV =vie;}}//voici les parrametre pour configurer les personnages
    let survivant = new personnage(0.5, 0.7, 0.2,10,15,5);//voici les stats des personnage qui sont directement liée a la class ci dessus
    let tueurjason = new personnage (0,0.8,0,1,0,100);  



    /*comme je le disais au debut de page au lieu de crée une boucle j ai repliqué les diferrente action 
    se deroulant pendant un tour 5 fois ce qui represente donc 1 tour par survivant*/
    
    if (Math.random() < tueurjason.pDegat){// Vérifie si l'attaque réussit en comparant à la probabilité d'attaque
        survivant.PV-=1//consequence si l attaque touche un survivant
        console.log("le"+" "+"tueur jason a tuer "+nom+" le "+type1);
            if (Math.random() < survivant.pDegatMort);
            tueurjason.PV-=15;
            console.log("mais prend 15 degats");
            
}else{ tueurjason.PV-=10 ;//represente les degats que les survivant peuvent faire lorsqu il ne meurt pas
    console.log(nom+" le "+type1+" esquive et inflige 10 degat a jason");
   

    


    if (Math.random() < tueurjason.pDegat){
        survivant.PV-=1
        console.log("le"+" "+"tueur jason a tuer "+nom1+" le "+type3);
            if (Math.random() < survivant.pDegatMort);
            tueurjason.PV-=15;
            console.log("mais prend 15 degats");
            
}else{ tueurjason.PV-=10 ;
    console.log(nom1+" le "+type3+" esquive et inflige 10 degat a jason");
}}




    if (Math.random() < tueurjason.pDegat){
        survivant.PV-=1
        console.log("le"+" "+"tueur jason a tuer "+nom2+" le "+type5);
        if (survivant.PV==0)
            if (Math.random() < survivant.pDegatMort);
            tueurjason.PV-=15;
            console.log("mais prend 15 degats");
            
}else{ tueurjason.PV-=10 ;
    console.log(nom2+" le "+type5+" esquive et inflige 10 degat a jason");
   }




    if (Math.random() < tueurjason.pDegat){
        survivant.PV-=1
        console.log("le"+" "+"tueur jason a tuer "+nom3+" le "+type7);
        if (survivant.PV==0)
            if (Math.random() < survivant.pDegatMort);
            tueurjason.PV-=15;
            console.log("mais prend 15 degats");
            
}else{ tueurjason.PV-=10 ;
    console.log(nom3+" le "+type7+" esquive et inflige 10 degat a jason");
   
    if (tueurjason.PV==0){
    console.log("jason est mort et les survivant on gagné")}}





    if (Math.random() < tueurjason.pDegat){
        survivant.PV-=1
        console.log("le"+" "+"tueur jason a tuer "+nom4+" le "+type9);
        if (survivant.PV==0)
            if (Math.random() < survivant.pDegatMort);
            tueurjason.PV-=15;
            console.log("mais prend 15 degats");
            
}else{ tueurjason.PV-=10 ;
    console.log(nom4+" le "+type+" esquive et inflige 10 degat a jason");
   
    if (tueurjason.PV==0){
    console.log("jason est mort et les survivant on gagné")}}
/*ce systeme n'étant pas une boucle, il ne peut pas s arréter avec "break"lors de la mort des survivants 
ou de jason. J'ai donc opté pour un systeme de point a la fin des 5 tours.
*/

     console.log("les survivant sont encore "+survivant.PV)
     console.log("jason a encore "+tueurjason.PV+" PV")

     /*je suis desolé de ne pas pouvoir cocher tout les critère de reussites de ce devoir mais mes competence 
    ne me permettent pour l intant pas de vous rendre mieux.
    cordialement
    hugo lenoir
    
    
     */
    



