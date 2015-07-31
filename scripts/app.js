(function () {
    require.config({
        paths: {
            "app": "app"
        }
    });


}());

(function () {
    require.config({
        paths: {
            "app": "app"
        }
    });


    require(['libs/raphael', 'libs/jquery-2.1.4.min'], function (Raphael) {

        function displayEndGameScreen() {
            $('#viewport').hide();
            $('#end-screen').show();

            var paper = Raphael('end-screen', window.innerWidth, window.innerHeight);
            //creates letter GAME OVER
            paper.path('M 100.32 105.37 C 107.33 105.37 114.36 105.16 121.37 105.54 C 121.35 106.92 121.33 108.30 121.32 109.68 C 122.97 109.90 124.62 110.18 126.25 110.56 C 126.24 113.53 126.22 116.49 126.20 119.46 C 123.88 119.58 121.56 119.71 119.24 119.75 C 119.04 117.38 118.86 115.02 118.70 112.66 C 113.52 112.65 108.34 112.64 103.17 112.67 C 103.22 123.20 102.97 133.73 103.37 144.25 C 105.24 141.88 106.86 138.79 109.99 137.95 C 112.89 137.02 115.64 138.92 118.27 139.86 C 118.26 137.14 118.26 134.42 118.24 131.70 C 115.35 131.58 112.46 131.50 109.58 131.41 C 109.57 129.09 109.58 126.78 109.61 124.47 C 115.00 124.24 120.43 123.96 125.81 124.47 C 126.63 132.81 126.44 141.32 125.51 149.66 C 124.24 149.57 122.98 149.49 121.72 149.42 C 121.49 151.40 121.27 153.39 121.03 155.37 C 120.83 154.17 120.63 152.97 120.44 151.77 C 119.23 150.09 118.03 148.41 116.88 146.70 C 114.09 145.75 110.91 144.69 108.07 146.00 C 104.71 148.16 102.74 151.80 100.94 155.24 C 100.78 154.57 100.47 153.24 100.31 152.57 C 100.03 150.46 97.14 150.47 96.43 148.65 C 95.31 145.57 95.61 142.21 95.54 138.99 C 95.65 129.26 95.42 119.52 95.69 109.79 C 97.03 109.73 98.38 109.68 99.72 109.63 C 99.92 108.21 100.12 106.79 100.32 105.37 Z');
            paper.path('M 145.50 105.37 C 152.49 105.35 159.49 105.23 166.49 105.47 C 166.53 106.87 166.57 108.27 166.61 109.67 C 168.19 109.88 169.78 110.15 171.34 110.53 C 171.20 118.01 171.59 125.51 170.88 132.96 C 170.33 138.96 170.42 145.00 171.00 150.99 C 170.79 152.56 170.59 154.12 170.39 155.69 C 170.00 155.62 169.21 155.49 168.82 155.42 C 166.83 152.87 164.31 150.41 163.85 147.05 C 163.26 142.23 163.71 137.35 163.49 132.50 C 161.18 132.46 158.86 132.44 156.55 132.45 C 154.66 134.78 152.81 137.14 151.02 139.55 C 150.43 139.58 149.25 139.65 148.66 139.68 C 148.39 145.33 148.25 151.00 147.43 156.61 C 145.59 151.87 140.63 148.41 140.70 143.00 C 140.64 133.64 140.78 124.29 140.66 114.93 C 140.84 113.39 140.32 111.56 141.25 110.22 C 142.47 109.86 143.70 109.54 144.95 109.28 C 145.13 107.97 145.31 106.67 145.50 105.37 Z');
            paper.path('M 186.76 105.55 C 189.27 105.43 191.78 105.41 194.29 105.47 C 194.31 106.87 194.34 108.26 194.36 109.66 C 195.70 109.66 197.04 109.66 198.38 109.66 C 198.53 111.23 198.67 112.80 198.81 114.37 C 200.94 114.41 203.06 114.46 205.19 114.51 C 205.31 112.91 205.45 111.32 205.59 109.73 C 206.97 109.74 208.35 109.76 209.73 109.79 C 209.94 108.30 210.14 106.81 210.36 105.33 C 212.70 105.39 215.04 105.47 217.38 105.58 C 217.85 127.75 214.66 149.76 214.39 171.91 C 213.55 173.60 212.73 175.31 211.92 177.02 C 209.82 172.94 208.96 168.41 209.52 163.85 C 209.29 165.43 209.05 167.00 208.78 168.57 C 208.34 160.71 208.27 152.82 208.81 144.96 C 209.74 137.19 210.01 129.31 209.01 121.54 C 208.78 123.03 208.55 124.53 208.34 126.03 C 207.79 125.86 206.69 125.52 206.14 125.34 C 204.14 121.77 199.91 121.89 196.35 121.50 C 196.26 120.16 196.18 118.81 196.09 117.47 L 194.36 117.44 C 193.97 126.64 194.58 135.87 194.28 145.06 C 192.84 149.02 189.05 151.92 188.86 156.42 C 187.75 150.66 187.31 144.83 186.64 139.02 C 185.47 127.88 187.25 116.71 186.76 105.55 Z');
            paper.path('M 233.23 105.39 C 243.32 105.38 253.42 105.14 263.51 105.53 C 263.53 107.84 263.54 110.16 263.54 112.48 C 255.96 112.84 248.38 112.56 240.81 112.68 C 240.77 114.96 240.72 117.24 240.68 119.52 C 246.66 119.40 252.69 118.79 258.66 119.44 C 259.92 121.41 259.06 124.25 259.37 126.55 C 255.65 126.80 251.90 126.61 248.21 127.15 C 244.98 127.47 242.82 130.13 240.58 132.17 C 240.45 137.55 240.20 143.04 241.87 148.24 C 243.80 144.83 245.83 141.44 248.44 138.48 C 253.38 137.80 258.37 137.46 263.36 137.71 C 263.56 141.30 263.43 144.91 262.58 148.42 C 257.61 149.04 252.65 149.88 247.62 149.59 C 245.20 151.32 242.88 153.19 240.80 155.32 C 240.07 155.37 238.61 155.48 237.87 155.53 C 236.18 152.72 233.74 150.08 233.42 146.68 C 232.52 132.94 232.50 119.14 233.23 105.39 Z');
            paper.path('M 304.61 105.55 C 314.81 105.23 325.04 105.12 335.24 105.61 C 335.36 117.08 335.07 128.56 335.44 140.03 C 335.56 142.24 335.14 144.43 334.59 146.57 C 333.19 146.54 331.80 146.50 330.41 146.47 C 329.59 147.54 328.78 148.61 327.99 149.70 C 324.64 149.45 321.29 148.14 317.92 148.73 C 313.15 149.64 310.75 155.21 305.60 154.90 C 303.34 138.54 304.71 122.00 304.61 105.55 Z');
            paper.path('M 350.35 105.34 C 352.70 105.36 355.04 105.41 357.39 105.50 C 357.62 113.01 357.42 120.67 359.23 128.02 C 359.70 128.89 360.65 130.64 361.12 131.52 C 361.32 130.37 361.71 128.07 361.90 126.91 C 362.27 128.67 362.69 130.41 363.16 132.14 C 363.47 134.64 363.80 137.14 364.29 139.61 C 364.94 135.05 364.43 130.45 364.79 125.89 C 365.91 124.96 367.17 124.21 368.30 123.29 C 368.96 117.42 368.28 111.47 368.58 105.57 C 370.95 105.44 373.33 105.34 375.71 105.27 C 376.47 112.39 376.39 119.58 375.78 126.71 C 374.37 126.74 372.97 126.78 371.57 126.82 C 371.55 129.88 371.52 132.95 371.44 136.02 C 370.15 136.58 368.87 137.15 367.58 137.73 C 367.63 143.41 368.09 149.37 365.22 154.54 C 364.07 154.53 362.92 154.54 361.78 154.54 C 361.48 151.52 360.96 148.53 360.42 145.55 C 359.55 144.60 358.67 143.65 357.81 142.70 C 357.46 141.45 357.10 140.20 356.74 138.96 C 356.62 137.16 356.52 135.37 356.41 133.58 C 354.18 131.03 350.81 128.81 350.72 125.08 C 350.35 118.51 350.11 111.92 350.35 105.34 Z');
            paper.path('M 391.35 105.43 C 401.43 105.71 411.52 105.05 421.61 105.47 C 421.65 107.83 421.66 110.19 421.64 112.55 C 417.43 112.73 413.19 112.44 409.00 112.88 C 405.44 113.57 402.13 115.31 399.17 117.36 C 397.81 120.88 397.94 124.79 397.49 128.49 C 397.94 128.51 398.85 128.54 399.30 128.56 C 401.56 125.79 403.72 122.83 406.65 120.72 C 409.81 118.55 413.83 119.36 417.41 119.41 C 417.41 121.77 417.40 124.13 417.39 126.49 C 413.77 126.82 410.00 126.58 406.54 127.82 C 403.67 129.77 401.35 132.43 399.17 135.10 C 396.83 137.80 397.66 141.61 397.42 144.88 C 398.06 144.78 399.34 144.58 399.98 144.48 C 402.12 141.86 404.17 138.27 407.92 137.99 C 412.43 138.27 416.93 138.79 421.46 138.61 C 421.82 142.63 421.87 146.68 421.57 150.71 C 419.32 150.68 417.08 150.64 414.84 150.56 C 412.24 148.02 409.10 144.47 405.02 145.85 C 400.90 147.89 398.41 152.02 395.51 155.42 C 394.59 155.43 393.68 155.45 392.77 155.47 C 391.86 153.07 390.77 150.65 390.64 148.05 C 390.21 133.84 391.04 119.63 391.35 105.43 Z');
            paper.path('M 435.38 105.45 C 443.83 105.81 452.27 105.12 460.72 105.40 C 460.79 106.81 460.85 108.22 460.92 109.64 C 462.46 109.89 464.01 110.14 465.56 110.41 C 465.59 115.77 465.58 121.13 465.58 126.49 C 464.28 126.87 462.99 127.24 461.71 127.61 C 463.59 132.88 460.59 139.14 464.19 143.81 C 464.91 143.79 466.35 143.76 467.08 143.75 C 468.43 150.44 469.39 157.21 469.84 164.03 C 469.91 165.26 469.28 166.35 468.88 167.46 C 467.87 166.46 466.91 165.46 465.88 164.50 L 468.77 163.01 C 468.05 162.53 466.62 161.56 465.91 161.08 C 463.18 156.79 460.42 152.47 458.72 147.65 C 457.12 142.94 452.93 139.97 449.69 136.46 C 449.29 135.33 448.85 134.24 448.36 133.16 C 446.50 135.40 444.47 137.50 442.52 139.67 C 442.38 144.66 442.05 149.64 441.40 154.59 C 439.79 154.58 438.20 154.57 436.60 154.57 C 433.73 147.72 434.95 140.20 434.71 133.00 C 434.85 123.82 434.36 114.59 435.38 105.45 Z');

            paper.forEach(function (el) {
                el.attr({
                    stroke: "#c70015",
                    fill: "#c70015"
                }).translate(600, 200);
            });
        }

        var startGame = function () {
            Engine.getEngine(Block, Tetris, Utilities, displayEndGameScreen);
            Engine.run();
            $('#showGuide').attr({
                cursor: 'pointer'
            }).click(function () {
                console.log(guideScreen);
               // guideScreen();

            });
            //  $('#showGuide').show();


        };


        var unnecessary = true; // set false to stop intro

        if (unnecessary) {
            var width = window.innerWidth,
                height = window.innerHeight;

            $('#viewport').css('width', width).css('height', height);
            $('#logoSvg').css('width', width).css('height', height);

            var r = Raphael("viewport");
            r.rect(0, 0, width, height).attr({
                fill: 'black'
            });

            $('#contentLogo').attr({
                width: width,
                height: height
            });

            var textMojito = r.text(0, height / 3, 'Team "Mojito"').attr({
                font: '10px "Consolas',
                fill: "white",
                opacity: 0.1
            });

            var textMojitoWidth = textMojito.getBBox().width;
            var textMojitoRotated = [{
                x: width / 2 - textMojitoWidth / 2,
                opacity: 1,
                transform: "r360s8"
            }, {
                transform: ""
            }];

            var textPresents = r.text(width / 1.5, -10, 'presents').attr({
                font: '6px Consolas',
                fill: 'white',
                opacity: 0.1
            });

            var textPresentsWidth = textPresents.getBBox().width;
            var textPresentsRotated = [{
                x: width / 2 - textPresentsWidth / 2,
                y: height / 2,
                opacity: 1,
                transform: "r0s6"
            }, {
                transform: ""
            }];

            var animateMojito = Raphael.animation(textMojitoRotated[0], 3700, 'elastic');
            textMojito.animate(animateMojito);

            var animatePresents = Raphael.animation(textPresentsRotated[0], 3000, 'bounce', function () {
                $('#contentLogo').show();
                $('div#viewport > svg').fadeOut(400);
            });

            textPresents.animate(animatePresents.delay(1000));

            $('.text').attr({
                cursor: 'pointer'
            }).click(function () {
                $('#contentLogo').hide();
                startGame();
                Tetris.sounds['theme'].pause();
                Tetris.sounds['gameStart'].play();
                /*$('#showGuide').attr({
                    cursor: 'pointer'
                }).click(function () {
                    console.log(guideScreen);
                    guideScreen();

                });*/
            });
        } else {

            startGame();
        }
       /* function guideScreen() {
            require(['libs/raphael', 'libs/jquery-2.1.4.min','libs/kinetic.min','block','tetris3d'], function () {
                var buttons, stage, layer, rect;
                var positionTop = 180;
                $('#container').show();
                $('#showGuide').show();
                $('#guide').fadeToggle("slow", "linear");
                var blob, circle, curvedLine, layer, polygon, rect, stage, straightLine, background, bgRect;


                stage = new Kinetic.Stage({
                    container: 'container',
                    width: 540,
                    height: 500
                });

                // Background
                background = new Kinetic.Layer();
                bgRect = new Kinetic.Rect({
                    x: 0,
                    y: 0,
                    width: 540,
                    height: 400,
                    fill: 'gray',
                    opacity: 0.5,
                    stroke: '#CCCCCC',
                    cornerRadius: 25
                });
                background.add(bgRect);
                stage.add(background);

                // Cube
                var cubeLayer = new Kinetic.Layer({
                    x: 20,
                    y: 30
                });
                var cube = new Kinetic.Line({
                    points: [
                        50, 100,  //1
                        50, 300,   //2
                        250, 300,
                        250, 100,
                        50, 100,
                        100, 0,
                        300, 0,
                        300, 200,
                        250, 300,
                        250, 100,
                        300, 0],
                    stroke: 'green',
                    strokeWidth: 4,
                    lineJoin: 'round'
                });

                var innerOutline = new Kinetic.Line({
                    points: [
                        100, 0,
                        100, 200,
                        50, 300,
                        100, 200,
                        300, 200
                    ],
                    stroke: 'yellowgreen',
                    strokeWidth: 2
                });
                cubeLayer.add(innerOutline);
                cubeLayer.add(cube);

                // Block
                layer = new Kinetic.Layer();
                var height = 150;
                var width = 150;
                var x = 180;
                var y = 200;
                var block = new Kinetic.Group({
                    x: x,
                    y: y,

                    offset: {x: 150, y: 200},
                    draggable: true
                });

                // Sub blocks
                for (var i = 2; i < 5; i += 1) {
                    rect = new Kinetic.Rect({
                        x: i * 50,
                        y: 200,
                        width: 50,
                        height: 50,
                        fill: 'yellowgreen',
                        stroke: '#CCCCCC',
                        name: 'static'
                    });
                    block.add(rect);
                }

                rect = new Kinetic.Rect({
                    x: 150,
                    y: 150,
                    width: 50,
                    height: 50,
                    fill: 'yellowgreen',
                    stroke: '#CCCCCC',
                    draggable: true,
                    name: 'movable'

                });

                block.add(rect);
                layer.add(block);

                stage.add(layer);
                stage.add(cubeLayer);

                // Buttons - Rotation
                buttons = $("#guideButtons button");
                buttons.each(function (index, element) {
                    $(element).addClass("buttons")
                        .attr('id', 'btnRotation' + index)
                        .css('top', positionTop + 'px');
                    console.log($(element));
                });


                // axis X
                $('#btnRotation0').on("click", function () {
                    console.log('ROTATE X');

                    var m = stage.find('.movable');
                    var x = m.getPosition()[0].attrs.x;
                    var y = m.getPosition()[0].attrs.y;

                    var newPos = (400 - y);

                    m.setY(newPos);
                    layer.draw();
                });
                // TODO: axis Y
                //axis Z
                $('#btnRotation2').on("click", function () {
                    console.log('ROTATE Z');
                    var angularSpeed = 360 / 3;//Math.PI / 2;
                    var anim = new Kinetic.Animation(function (frame) {
                        // var angleDiff = frame.timeDiff * angularSpeed / 1000;
                        if (frame.time > 20) {
                            console.log(frame);
                            return;
                        }
                        block.rotate(90);

                    }, layer);
                    anim.start();

                });

                //Buttons - Move by direction

                var navButtons = $("#nav button");
                var upArrow = String.fromCharCode('0x2191');
                var leftArrow = String.fromCharCode('0x2190');
                var downArrow = String.fromCharCode('0x2193');
                var rightArrow = String.fromCharCode('0x2192');

                navButtons.each(function (index, element) {
                    var arrow = String.fromCharCode('0x219' + index);
                    $(element).addClass("buttons")
                        .attr('id', 'btnNav' + index)
                        .text(arrow);

                    console.log($(element));
                });
                $('#btnNav1').css('margin-top', -60 + 'px').css('position', 'absolute');
                $('#btnNav2').css('margin-left', 55 + 'px').css('position', 'absolute');

                $('#btnNav0').on("click", function () {
                    console.log('ROTATE X');

                    var x = layer.getAbsolutePosition().x;
                    ;
                    var newPos = (x - 10);

                    layer.setX(newPos);
                    layer.draw();
                });

                $('#btnNav1').on("click", function () {
                    console.log('ROTATE X');

                    var y = layer.getAbsolutePosition().y;
                    ;
                    var newPos = (y - 10);

                    layer.setY(newPos);
                    layer.draw();
                });

                $('#btnNav2').on("click", function () {
                    console.log('ROTATE X');

                    var x = layer.getAbsolutePosition().x;
                    ;
                    var newPos = (x + 10);

                    layer.setX(newPos);
                    layer.draw();
                });

                $('#btnNav3').on("click", function () {
                    console.log('ROTATE X');

                    var y = layer.getAbsolutePosition().y;
                    ;
                    var newPos = (y + 10);

                    layer.setY(newPos);
                    layer.draw();
                });
                $('#startGameFromGuide').addClass('buttons')
            });
        };*/
    });


}());
