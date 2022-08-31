# 💻 Portfolio Web - #YoProgramo

*NOTA: En este repositorio se encuentra todo lo relacionado al **Frontend** del proyecto, para dirigirse al repositorio del **Backend** **[hacer click aquí](https://github.com/meli-morenooo/Backend-portafolio-web "aquí").***
## 📝 Descripción
- ***Portfolio Web Fullstack*** realizado como Proyecto Final del curso **Argentina Programa - #YoProgramo**.

- Se trata de una **Single Page Application (SPA)** realizada utilizando tecnologías Frontend como ser **HTML, CSS, Angular y Bootstrap**.

- La **primera versión** se encuentra disponible [en este enlace](https://cmgmportafolioweb.web.app/ "en este enlace").

## ✅ Manejo de la App
1. Podemos ingresar a través del apartado <b>"INGRESO"</b> en el encabezado de la página.
<div align="center">
<img src="https://user-images.githubusercontent.com/87624300/187559946-f2f0cc49-a99b-40e1-ac1d-357d3446e3b6.png">          <img src="https://user-images.githubusercontent.com/87624300/187559791-3a28b622-19e7-47cb-a4d6-d1714104484a.png">
</div>
<br>
2. Una vez ingresada a la cuenta, se pueden modificar los datos a través de los distintos botones en la interfaz, como figura en la siguiente imagen:
<div align="center">
<img src="https://user-images.githubusercontent.com/87624300/187560142-1c906a59-ec28-4f2f-b347-292b8f52314b.png">
</div>
<br>

## ⌨🖱 Instalación
- Si queremos correr la aplicación en un entorno local debemos tener en cuenta lo siguiente: 

1. Clonar el repositorio utilizando GIT o descargando el archivo ZIP:

    `git clone https://github.com/meli-morenooo/Frontend-portafolio-web.git`

2. Instalar las dependencias a través de NPM.

    `npm install`

3. Configurar las variables de entornos en src/enviroments/enviroment.ts, donde configuraremos 3 propiedades:

- **baseUrl**: La URL de base para las conexiones con nuestra API REST. EJ:

  `baseUrl: "http://localhost:8080"`
  
- **authApi**: La URL para realizar las autenticaciones en nuestra API REST. EJ: 

  `authApi: "http://localhost:8080/api/auth"`

- **frontUrl**: La URL para redireccionar y realizar distintas operaciones en nuestro Frontend. EJ:

  `frontUrl: "http://localhost:4200/portfolio/"` (incluir el *slash* o *barra diagonal* al final).

4. Compilar y montar el proyecto utilizando el comando `ng serve`

5. **IMPORTANTE:** Debemos tener un servidor con el proyecto *Backend* activo para poder obtener los datos y registrar usuarios, caso contrario, no se renderizarán los componentes de Angular. Para más información ir al **[repositorio backend.](https://github.com/meli-morenooo/Backend-portafolio-web "repositorio backend.")**

## 📩 Contacto
🙋‍♂️Si tienes dudas o te interesa ponerte en contacto conmigo podés hacerlo a través de:
**[LinkedIn ](https://www.linkedin.com/in/melisa-moreno-0b4163212/) - [Github ](https://github.com/meli-morenooo)**
