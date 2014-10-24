/*

  Requisitos: 

  La nave del usuario disparará 2 misiles si está pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendrá un tiempo de recarga de 0,25s, no pudiéndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificación:

  - Hay que añadir a la variable sprites la especificación del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se añadirán
    misiles al tablero de juego en la posición en la que esté la nave
    del usuario. En el código de la clase PlayerSip es donde tienen
    que añadirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creación de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declararán los métodos de
    la clase en el prototipo {} []

*/
describe("Clase PlayerMissile",function(){

  beforeEach(function(){
    loadFixtures('index.html');
    canvas = $('#game')[0];
    expect(canvas).toExist();
    ctx = canvas.getContext('2d');
    expect(ctx).toBeDefined();
    oldGame = Game;
    Game = {width: 320, height: 480};

  });
  afterEach(function(){
    Game = oldGame;
  });


  it("Los misiles se crean",function(){
      Game = oldGame;
      var board = new GameBoard();
      var ship = new PlayerShip();
      board.add(ship);
      Game.keys['fire'] = true;
      spyOn(board,'add');
      ship.step(1);
      expect(board.add).toHaveBeenCalledWith(new PlayerMissile(ship.x,ship.y+ship.h/2));
      expect(board.add).toHaveBeenCalledWith(new PlayerMissile(ship.x+ship.w,ship.y+ship.h/2));
  });
});