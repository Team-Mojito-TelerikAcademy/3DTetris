var Tetris = function () {
    var renderer, render_stats, physics_stats, scene, camera,sounds;

    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight,
        NEAR = 10,
        FAR = 50000,

        GRAVITY_VECTOR = -100,
        GROUND_HEIGHT = 1,
        BLOCK_MASS = 10,

        GAMEFIELD_CONFIG = {
            width: 600,
            height: 600,
            depth: 600,

            segmentWidth: 10,
            segmentHeight: 10,
            segmentDepth: 10
        },
        COLLISION_OBJECT = {
            GROUND: 1,
            WALLX: 2,
            WALLZ: 3,
            STATIC_BLOCK: 4
        },
        BLOCK_SIZE = GAMEFIELD_CONFIG.width / GAMEFIELD_CONFIG.segmentWidth;

    // Params for Perspective camera
    var VIEW_ANGLE = 30,
        ASPECT = WIDTH / HEIGHT;

    var CAMERA_POSITION = {
        X: 0,
        Y: 150,
        Z: 1900
    };

    sounds={};
    //Add sounds
    sounds["theme"] = document.getElementById("audio_theme");
    sounds["collision"] = document.getElementById("audio_collision");
    sounds["move"] = document.getElementById("audio_move");
    sounds['rotate']=document.getElementById('audio_rotate');
    sounds['gameStart']=document.getElementById('audio_game_start');
    sounds['theme'].play();

    function webglAvailable() {
        try {
            var canvas = document.createElement( 'canvas' );
            return !!( window.WebGLRenderingContext && (
                canvas.getContext( 'webgl' ) ||
                canvas.getContext( 'experimental-webgl' ) )
            );
        } catch ( e ) {
            return false;
        }
    }

    if ( webglAvailable() ) {
        renderer = new THREE.WebGLRenderer();
    } else {
        renderer = new THREE.CanvasRenderer();
    }

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

    function initScene() {
        // Basic setup for the render, camera and scene. We have to do it just once.
        renderer.setSize(WIDTH, HEIGHT);
        renderer.shadowMapEnabled = true;
        renderer.shadowMapSoft = true;
        document.getElementById('viewport').appendChild(renderer.domElement);

       /* render_stats.domElement.style.position = 'absolute';
        render_stats.domElement.style.top = '0px';
        render_stats.domElement.style.zIndex = 100;*/
       // document.getElementById('viewport').appendChild(render_stats.domElement);

        camera.position.set(CAMERA_POSITION.X, CAMERA_POSITION.Y, CAMERA_POSITION.Z);
        //camera.lookAt(scene.position);
        scene.add(camera);

        // End of basic setup

        // Ground
        var size = 300, step = BLOCK_SIZE;
        var geometry = new THREE.Geometry();

        for (var i = -size; i <= size; i += step) {
            geometry.vertices.push(new THREE.Vector3(-size, -size, i));
            geometry.vertices.push(new THREE.Vector3(size, -size, i));
            geometry.vertices.push(new THREE.Vector3(i, -size, -size));
            geometry.vertices.push(new THREE.Vector3(i, -size, size));
        }

        var material = new THREE.LineBasicMaterial({color: 0xA3DA2E, opacity: 0.9, transparent: true});
        var line = new THREE.Line(geometry, material, THREE.LinePieces);
        scene.add(line);
        // end of ground

        // Gamefield - the big cube
        var boundingBoxGeometry = new THREE.BoxGeometry(GAMEFIELD_CONFIG.width, GAMEFIELD_CONFIG.height, GAMEFIELD_CONFIG.depth,
            GAMEFIELD_CONFIG.segmentWidth, GAMEFIELD_CONFIG.segmentHeight, GAMEFIELD_CONFIG.segmentDepth);
        var boundingBox = new THREE.Mesh(
            boundingBoxGeometry,
            new THREE.MeshBasicMaterial({color: 0x000000, transparent: true, opacity: 0.05}), 0);

        scene.add(boundingBox);

        /*var outlineMaterial = new THREE.MeshBasicMaterial({
            color: 0xA3DA2E,
            transparent: true,
            opacity: 1,
            side: THREE.BackSide
        });

        var outlineMesh = new THREE.Mesh(boundingBoxGeometry, outlineMaterial);
        outlineMesh.position = boundingBox.position;
        outlineMesh.scale.multiplyScalar(1.01);
        scene.add(outlineMesh);
        // end of game field*/

        // test borders

        var cubeOutline = new THREE.EdgesHelper( boundingBox, 0xA3DA2E );
        cubeOutline.material.linewidth = 5;
        scene.add( cubeOutline );
        //end test borders
    }

    return {
        initScene: initScene,
        scene: scene,
        renderer: renderer,
        camera: camera,
       // stats: render_stats,
        sounds:sounds,
        //  controls: getPerspectiveCameraControls(),
        blockSize: BLOCK_SIZE,

        //FIXME:
        gameFieldConfig: GAMEFIELD_CONFIG,
        collisionObject: COLLISION_OBJECT
    }
}();
