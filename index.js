
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const écran = document.querySelector('.écran');

// document.addEventListener('keydown',(e) => {
//     const valeur = e.keyCode.toString();
// }) ;
// document.addEventListener('click',(e)=> {
//     const valeur = e.target.dataset.key ;
// }) ;
// const calculer = (valeur)=> {
//     if(listeKeycode.includes (valeur)){
//         switch(valeur){
//             case '8':
//                 écran.textContent = "";
//                 break;
//                 case '13':
//                     const calcul = eval (écran.textContent);
//                     écran.textContent = "";
//                     break ;
//                 default:
//                     const indexKeycode = listeKeycode .indexOf(valeur);
//                     const touche = touches [ indexKeycode];
//                      écran.textContent += touche.innerHTML;   
//         }
        
//     }
// } ;

// window.addEventListener("error",(e) => {
//     alert('Une erreur survenue dans votre calcul :' + e.message)
// })
