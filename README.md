# Sams WorkFlow 2017

Gulp wordFlow 2017

* [Gulp] - Automatizador de tareas
br
* [Sass] - Extención minificación de css como preprocesador
br
* [sourcemaps] - Maping como herramienta de rastreo luego de la compilación tanto de las hojas de estilo css, al igual que todos los archivos javascript.
br
* [Autoprefixer] - Esencial en la compilación de los estilos para el soporte de los prefijos de todos los navegadores.
br
* [imagemin] - Minificador de imagenes
br
* [uglify] -
br
* [babel] -
br
* [pug] -
br
* [BrowserSync] -


*** Install
```shell
$ npm install
```

*** Running
```shell
$ gulp watch
```


# Que es e VUE.JS
# Que es data bing y reactividad

  - Que pasa cuando el modelo cambia o se actualiza? deberia Actualizarse... Reactividad 

# Que son las directivas
   
   - atributos y capacidades a los html 

***  Renderisado condicional
 
v show
    - Elemento que se puede mostra o ocultar(display none) con una variable booleana
```javascript
    v-show
```
v if
    - Elemento que se puede borrar o crear en el Dom apartir de una varia ble booleana

v else
    - Elemento se puede condicionar segú el valor conducional de una variable
```html
    <main>
        <h1 v-if="edad < 18">No puedes entrar.</h1>
        <h1 v-else-if="edad > 200"> Eres inmortal.</h1>
        <h1 v-else> Puedes entrar.</h1>
    </main>
```
````javascript
    const vm = new Vue ({
        el: 'main',
        data: {
            conectado: false,
            edad: 44,
        }
    });
````
*** Template

```html
    <main>
        <template v-if="conectado">
        <h3> Bievenido Juan</h3>
        <ul>
        <li><a href="#">Mis datos</a></li>
        <li><a href="#">Mensaje</a></li>
        <li><a href="#">Salir</a></li>
        </ul>
        </template>
    </main>
```
kloustr <gerencia@kloustr.com>
	
1 nov. 2018 20:17 (hace 18 horas)
	
para mí
HOME
Slider
	1.  Incrustar las imágenes en la resolución correcta que corresponden a cada slide.  Yo creería que con 5 segundos entre cada uno estaría bien.

	2. El gradiente de los azules del slider sigue siendo el incorrecto.
	3. La transición del texto y las imágenes planteadas aún no está, pero si es demasiado difícil de hacer, dejarlas así. 
	
About Condor Box
	1. La animación del slider de los productos no corresponde a la planteada.

Así de fácil

ok
Hemos diseñado
ok
Calculadora
ok


Preguntas frecuentes - Contacto
1. Permitir la rotación automática de la Preguntas Frecuentes en el gradiente. Que no solo aparezca la pregunta de Amazon-Ebay. 

Descubre miles de productos

1. La animación de los logos que lleguen todos desde abajo, no unos desde arriba y otros desde abajo. 
2. Aquí están los hipervinculo de las páginas que irían en ese slider de recomendaciones:
https://www.amazon.com
https://www.bestbuy.com
https://www.ebay.com
https://www.target.com
https://www.walmart.com
https://www.nike.com/us/en_us/
https://www.perryellis.com
https://www.basspro.com
https://www.journeys.com
https://explore.calvinklein.com/en_US/explore
https://www2.hm.com/en_us/index.html
https://ww.victoriassecret.com
https://www.brandsmartusa.com
https://www.michaelkors.com
https://www.apple.com
Esto dicen sobre Condor Box
1. La animación de los logos que lleguen todos desde abajo, no unos desde arriba y otros desde abajo. 
2. Este slider de artículos también es con autoplay.
Footer
1. Separar más los iconos de redes sociales.
2. Corregir ortografía sobre Imperio Cargo Express


Preguntas frecuentes
1.  La barra de arriba aparece blanca cuando está sobre el gradiente. Esta debe aparecer transparente igual que aparece sobre el slider del home o en la página de contacto. 
2. El footer aparece vacío

Contacto
1.  Eliminar el recuadro de Contacto en la página de Contacto abajo del número de wpp pues queda redundante.

Rastrear 
1.  Cambiar la animación del giro del recuadro. Que llegue desde abajo con opacidad así como las otras. 

Iniciar sesión
1.  Quitar el titular de Ingresa a tu casillero virtual, ya que está también en recuadro de MIISIL, al plantear el diseño creí que se podría quitar del MIISIL. 

Registro
1.  La barra de arriba aparece blanca cuando está sobre el gradiente. Esta debe aparecer transparente igual que aparece sobre el slider del home o en la página de contacto (la misma corrección de FAQs).

Responsive
1.  Favor hacer Responsive las ventanas de MISIIL: Rastreo, Iniciar Sesión, Registro. 
2. Mejorar aspectos generales cuando está en la pantalla de un celular (Botones sobre montados, partes que no aparecen como el de los artículos). Aplica para el Home y las páginas internas.

Anotaciones adicionales
1. Sobre la configuración de la ventana de Contacto el correo al que deben llegar todos los mensajes de los clientes es info@condorbox.com y Daniel ya te pasará el correo automático que le debe llegar al cliente una vez ha mandado el mensaje. Me cuentas cuánto vale esto por favor pero ayúdame que es muy importante. 
2. Cotízame también por favor la opción de que aparezcan como deben ser los mensajes de Facebook de nuestros clientes. Esto lo podemos hacer luego 
3. Cuánto crees que puedas tardarte en estas correcciones? 
4. Podríamos retrasar la subida de la página hasta mañana a la media noche. Lo crees posible?

2. Las animaciones de entrada están muy lentas. PROCURAR QUE TODAS LAS ANIMACIONES DEL HOME TENGAN LA MISMA VELOCIDAD, como la velocidad del titular #ConsumoInteligente, ese está perfecto. 