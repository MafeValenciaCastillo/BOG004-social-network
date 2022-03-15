// import { baseDeDatos } from './index.html';
// import { obtenerRecetas } from './lib/firebase-base-de-datos.js';
import { register, login, authGoogle} from "./lib/auth.js";
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { changeView } from './view-controler/router.js'
// obtenerRecetas(baseDeDatos).then((recetas) => {
//   console.log(recetas);
// });

const registerForm = document.querySelector("#register-form");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#register-email").value;
    const password = document.querySelector("#register-password").value;
    console.log(email, password);
    register(email,password);
});

const signUpForm = document.querySelector("#signUp-form");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#signUp-email").value;
    const password = document.querySelector("#signUp-password").value;
    console.log(email, password);
    login(email, password);
});


const googleButton = document.querySelector("#google");
const provider = new GoogleAuthProvider();  
googleButton.addEventListener("click", e => {
  authGoogle(provider);
})

const init = () => {
    changeView(window.location.hash)
    window.addEventListener("hashchange", () => changeView(window.location.hash))
}
window.addEventListener("load", init);