
        //Importar librerias
        import * as THREE from '../src/three.module.js';
        import {PointerLockControls} from '../src/PointerLockControls.js'
        
        let camera, scene, renderer, pControl

        scene = new THREE.Scene();
        //fondo
        scene.background = new THREE.Color(0xffffff)
        //Efecto de neblina / efecto alejado
        scene.fog = new THREE.Fog(0xffffff, 0, 500)
        //Agregar un plano
        scene.add(new THREE.GridHelper(10000, 1000))
        //Figura geometrica
        let mesh = new THREE.Mesh(
            new THREE.BoxGeometry(10,10,10),
            new THREE.MeshLambertMaterial({color: 0x0000ff})
        )
        //posicionar la figura en z hacia adentro de la pantalla
        mesh.position.z = -50
        //agregar la figura a la escena
        scene.add(mesh)
        //Agregar una luz para verla figura
        scene.add(new THREE.HemisphereLight(0xffffff))
        
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
        //modificar la camara en y
        camera.position.y = 10
        //propiedad para mejorar la visualización 
        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize( window.innerWidth, window.innerHeight );
        //metodo que recibe un parametro y le pasamos una propiedad - cuantos pixels de la pantalla se necesitan
        renderer.setPixelRatio(window.devicePixelRatio)
        document.body.appendChild( renderer.domElement );
        
        //la variable recibe la camara y el render
        pControl = new PointerLockControls(camera, renderer.domElement)
        //obtiene el elemento cuando hagamos click se ejecuta una funcion
        document.getElementById('btnPlay').onclick = ()=>{
            //activa el control
            pControl.lock()
        }  

        animate()
        //funcion
        function animate() {
        //ciclo repetitivo, mover la escena
            requestAnimationFrame( animate );

            renderer.render( scene, camera );
        }


