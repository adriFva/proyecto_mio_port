function pgInicio(){
    let html ="";
    html=` 
    <section style="padding: 15px 0;">
    <!-- Articulo de Imagen con Opacity, texto Animado y Boton de registrarse -->
          <article style="position: relative; border-radius: 30px;height: 750px; background-color: rgb(39, 38, 53);" class="container-fluid text-light anima-fondo">
    <!-- Imagen -->
    <!-- Texto y boton centrado -->
              <p style="padding: 10% 0; font-size: 60px;" class="h1 text-center texto-animado"> <b>¿TE GUSTARIA CONTACTAR CON UNA EMPRESA<br> PARA EMPEZA A TRABAJAR?</b> </p>
              <h3 style="margin: -8% 0;"class="text-center texto-animado"><b> Dejanos ayudarte</b></h3>
              <input type="button" value="REGISTRARSE" style="position: absolute; font-size: 30px; background-color: rgb(255, 0, 106);top: 70%; left: 33.33%;" class="btn col-4 text-light texto-animado" onclick="pgRegistro()">
              
          </article>
    <!-- Articulo de Carrusel de perfiles mas destacados (Si se pincha en uno se llevara a perfil especifico) -->
    
          <article style="margin-top: 5%; width: 95%;" class="container-fluid">
              <h1 class="text-center"><b> Perfiles destacados</b></h1>
              <!-- Carrusel de perfiles -->
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <!-- Botones de Carruse -->
                <div class="carousel-indicators">
                  <button style=" width: 20px; height: 20px; border-radius: 50%; background-color: rgb(37, 37, 37);" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button style=" width: 20px; height: 20px; border-radius: 50%; background-color: rgb(37, 37, 37);" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button style=" width: 20px; height: 20px; border-radius: 50%; background-color: rgb(37, 37, 37);" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
    <!--  Imagenes y Texto de carrusel -->
                <div class="carousel-inner text-center">
                  <div class="carousel-item active">
                    <div id="pagPerfilEspe">
                       <img style="width: 90%;object-fit: cover; height: 500px; opacity: 80%;" src="img/fondoCarruselFotografo.jpg" class="w-100" alt="My Html">
                       <img style="position:absolute; z-index:1; top: 25%; left: 45%; width:200px; height: 200px; border-radius: 50%; border: 2px solid black;" src="img/perfil.jpg" alt="">
                    </div>
    
                    <div class="carousel-caption  text-dark">
                      <h1 class="text-center" style="text-shadow: 0 0 5px #a4f1ff, 0 0 10px #0f2b30;"><b>Ismael Codina</b></h1>
                      <p style="font-size: 20px; text-shadow: 0 0 5px #a4f1ff, 0 0 10px #0f2b30;"><b>Fotografo</b></p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div id="pagPerfilEspe">
                        <img style="width: 90%;object-fit: cover; height: 500px; opacity: 90%;" src="img/fondoCarruselIlustrador.jpg" class="w-100" alt="">
                        <img style="position:absolute; z-index:1; top: 25%; left: 45%; width:200px; height: 200px; border-radius: 50%; border: 2px solid black;" src="img/perfil.jpg" alt="">
                    </div>
    
                    <div class="carousel-caption  text-dark ">
                      <h1 class="text-center" style="text-shadow: 0 0 5px #a4f1ff, 0 0 10px #0f2b30;"><b> Maria Pilar Amado </b></h1>
                      <p style="font-size: 20px; text-shadow: 0 0 5px #a4f1ff, 0 0 10px #0f2b30;"><b>Ilustradora</b></p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div id="pagPerfilEspe">
                        <img style="width: 90%;object-fit: cover; height: 500px; opacity: 80%;" src="img/fondoCarruselWeb.jpg" class="w-100" alt="">
                        <img style="position:absolute; z-index:1; top: 25%; left: 45%; width:200px; height: 200px; border-radius: 50%; border: 2px solid black;" src="img/perfil.jpg" alt="">
                    </div>
    
                    <div class="carousel-caption text-dark">
                      <h1 class="text-center " style="text-shadow: 0 0 5px #a4f1ff, 0 0 10px #0f2b30;"><b> Esteban Correa </b></h1>
                      <p style="font-size: 20px; text-shadow: 0 0 5px #a4f1ff, 0 0 10px #0f2b30;"><b>Diseñador Website</b></p>
                    </div>
                  </div>
                </div>
              </div>
          </article>
      </section>
    `;
    document.querySelector("main").innerHTML= html;
}
function pgRegistro() {
    let htmlRegistro = "";
    htmlRegistro=`
       <section>
       <h1 class="text-center" style="top: 5%;"><b>Para poder trabajar con nosotros sigue <br>los siguientes pasos</b></h1> 
 <!-- Instrucciones -->
       <article style="padding: 5px 5%;" class="row text-center">
         <div style="background-color: #4fe5ff; height: 400px;"class="col-4">
           <p style=" margin: 10% 5%; background-color: #28a0b6; font-size: 30px; width: 50px;height:50px; border-radius: 50%; border: 3px solid white;" class="text-center text-light"><b>1</b></p>
           <p style="font-size: 50px;" class="text-light  text-center"><b>Introduce Tus <br> Datos</b></p>
         </div> 
         <div style="height: 60px; background-color: #308594; height: 400px;"class="col-4">
           <p style=" margin: 10% 5%; background-color: #004855;font-size: 30px; width: 50px;height:50px; border-radius: 50%; border: 3px solid white;" class="text-center text-light"><b>2</b></p>
           <p style="font-size: 50px; padding: 3% 0; " class="text-light  text-center"><b>Añade tu CV</b></p>
         </div> 
         <div style="height: 60px; background-color: #0f2b30; height: 400px;"class="col-4">
           <p style=" margin: 10% 5%; background-color: #001518; font-size: 30px; width: 50px;height:50px;  border-radius: 50%; border: 3px solid white;" class="text-center text-light"><b>3</b></p>
         <p style="font-size: 50px; padding: 3% 0;" class="text-light  text-center"><b>Registrate</b></p>
       </div> 
       </article>
 <!-- FRM_Registro -->
       <article class="mt-5 mb-5 text-start">
         <p style="font-size: 55px; padding: 5% 0;" class="h1 text-center"><b>Crear cuenta en Portfolio Virtual</b></p>
         <form style="padding: 10px 5%;" class="container-xl mt-5" action="">
           <div class="mb-4">
             <label for="nom" class="ms-2  form-label h5"><b>Nombre</b></label>
             <input type="text" class=" col-5 form-control">
           </div>
           <div class="mb-4">
             <label for="email" class="ms-2  form-label h5"><b>Correo Electronico</b></label>
             <input type="text" class=" col-5 form-control">
           </div>
           <div class="mb-4 row">
             <div class="col">
               <label for="pass" class="col-6 ms-2  form-label h5"><b>Contraseña</b></label>
               <input type="text" class="form-control">
             </div>
             <div class="col">
               <label for="passconfi" class="col-6 ms-2  form-label h5"><b>Confirmar contraseña</b></label>
               <input type="text" class= "form-control">
             </div>
             
           </div>
           <div class="mb-4">
             
           </div>
           <div class="mb-4">          
             <label for="nom" class="ms-2  form-label h5"><b>Perfil Profesional</b></label>
             <textarea style="resize: none;" rows="10"  class=" col-5 form-control" ></textarea>
           </div>
           <div class="mb-5">
             <label for="curriculum" class="ms-2 form-label h5"><b>Introduce CV</b></label>
             <input class="form-control" type="file" id="curriculum">
         </div>
           <div class="mt-5 pt-5">
             <input class="form-check-input" type="checkbox" id="condiciones">
             <label for="condiciones" class="ms-2 form-check-label h5"><b>Aceptar Condiciones</b></label>
           </div>
           <button style="margin: 5% 24%; background-color: rgb(255, 0, 106)" class="btn col-6 btn-block text-light" disabled type="button"><p class="h4"><b> Registrate</b></p> </button>
           
         </form>
 
       </article>
     </section>
    `;
    document.querySelector("main").innerHTML=htmlRegistro;
}
function pgContacto() {
    let htmlContact = "";
    htmlContact=``;
    document.querySelector("main").innerHTML = htmlContact
}  
