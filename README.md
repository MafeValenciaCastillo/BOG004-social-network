# Nibbles (red social)
![image](https://user-images.githubusercontent.com/97687839/162768428-9a332188-4dd4-4672-9af8-5227bcbbe659.png)


## Índice

* [1. Resumen del proyecto]
* [2. Objetivos de aprendizaje]
* [3. Definición del producto
* [5. Historias de usuario
* [6. Diseño de interfaz de usuario
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)


## 1. Resumen del proyecto

¿Alguna vez has tenido la necesidad de buscar recetas que se adaptan realmente a tu estilo de vida? Si tu respuesta es afirmativa, Nibbles es la red
social que necesitas en tu vida. Nibbles, es una red social que se destaca y cuyo diferencial por sobre otras redes o aplicaciones, es la de poder 
crear, compartir recetas propias o de otros usuarios. Así mismo, podrás seguir a grandes personalidades del mundo gastronómico y también a tus amigos
o usuarios que como tú, tienen ese alma de cocineros. 

En este proyecto se construyó una Red Social en la que el usuario puede crear una cuenta de
acceso y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.


## 2. Objetivos de aprendizaje

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico]

### CSS

- [ ] **Uso de selectores de CSS**

- [ ] **Modelo de caja (box model): borde, margen, padding**

- [ ] **Uso de flexbox en CSS**

- [ ] **Uso de CSS Grid Layout**

### Web APIs

- [ ] **Uso de selectores del DOM**

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [ ] **Manipulación dinámica del DOM**

- [ ] **Ruteado (History API, evento hashchange, window.location)**

### JavaScript

- [ ] **Arrays (arreglos)**

- [ ] **Objetos (key, value)**

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Variables (declaración, asignación, ámbito)**

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

- [ ] **Funciones (params, args, return)**

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Pruebas asíncronas**

- [ ] **Uso de mocks y espías**

- [ ] **Módulos de ECMAScript (ES Modules)**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Callbacks**

- [ ] **Promesas**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### user-centricity

- [ ] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### research

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

### Firebase

- [ ] **Firebase Auth**

- [ ] **Firestore**

### 3. Definición del producto

* Quiénes son los principales usuarios de producto.
  
  Hombres y mujeres que deseen buscar, crear y compartir recetas propias de autor o de sus amigos (seguidores). 
  
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

  En el mercado, existen apps para encontrar recetas o incluso las redes sociales más populares (Facebook, Instagram e Pinterest) también son un medio para    encontrar recetas. Entonces, ¿cuál es el inconveniente? Dentro de estas redes existe millones de perfiles todos variados, en los cuales no siempre encuentras de manera sencilla la información que necesitas. Por esta razón, nace Nibbles. En Niblles, solo encontras información gastronómica que se adapte a tus
  necesidades o intereses específicos. 
  
### 4 Historias de usuario

  ### H.U 1 Registro en Google
 * Yo como consumidor de hábitos de vida saludable, me gustaría registrarme con mi cuenta de Google, en la red social Nibbles, para que pueda acceder de manera más rápida sin necesidad de crear más contraseñas 
  
  ### H.U 2 Crear cuenta 
  
  * Yo como consumidor de hábitos de vida saludable, me gustaría crear una cuenta desde cero, en la red social Nibbles, para descubrir recetas que estén acordes a mi condición médica o hábitos de alimentación. 
  
  ### H.U 3 Loguearse con Google
  
  * Yo como usuario registrado en Nibbles me gustaría iniciar sesión con mi cuenta de Google para ingresar más rápido
  
  ### H.U 4 loguearse con usuario y contraseña
  
  * Yo como usuario registrado en Nibbles me gustaría iniciar sesión con mi cuenta con mi usuario y contraseña para poder descubrir recetas. 
  
  ### H.U 5 Intereses 
  
  * Yo como usuario de Nibbles, me gustaría poder seleccionar diversas opciones de interés (recetas veganas, sin azucar, keto, etc) para que en mi muro/feed pueda encontrar y ver lo que necesito.
  
  ### H.U 6 Crear un post
  
  * Yo como usuario de Nibbles, me gustaría poder escribir una receta en mi perfil, para crear contenido en la red social y lograr seguidores.  
  
  ### H.U 7 Compartir un post
  
  * Yo como usuario de Nibbles, quisiera poder compartir en la página principal desde mi perfil,  una receta escrita y creada por mí, para que mis seguidores puedan visualizarla y prepararla. 
  
  ### H.U 8 Dar like a un post
  
  * Yo como usuario de Nibbles, me gustaría poder dar "like" o "me gusta", a un post para poder indicarle a la persona que su contenido me ha parecido bueno. 

  ### H.U 9 Editar un post
  
  * Yo como usuario de Nibbles, me encantaría poder editar lo que he posteado, para corregir errores de escritura o agregar más contenido. 
  
  ### H.U 10 Eliminar un post
  
  * Yo como usuario, quisiera poder eliminar mis post que he creado para poder quitar aquello que no me gustaría ver más en mi perfil y sección de noticias. 
  
  ### H.U 11 Feed o sección de noticias
  
  * Yo como usuario de Nibbles, me encantaría poder ver el contenido de otras personas una vez inicie sesión para poder navegar y visualizar las recetas de lo usuarios que sigo
  
  
### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)
![image](https://user-images.githubusercontent.com/97687839/162762284-21065f7a-8ad2-44df-9991-011e75e4eb83.png)
![image](https://user-images.githubusercontent.com/97687839/162768576-db09481a-59d7-4f1c-b509-37c21448cb1a.png)

  

### 5.5 Responsive

  ![image](https://user-images.githubusercontent.com/97687839/162768805-5ad8a2d7-950f-4c0f-8c5a-c99bd6911fc5.png)
   
  ![image](https://user-images.githubusercontent.com/97687839/162768889-ab5b5910-c5fc-4d82-b830-61a930483ff5.png)

