/*

  Requisitos: 

  La nave del usuario disparar� 2 misiles si est� pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendr� un tiempo de recarga de 0,25s, no pudi�ndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificaci�n:

  - Hay que a�adir a la variable sprites la especificaci�n del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se a�adir�n
    misiles al tablero de juego en la posici�n en la que est� la nave
    del usuario. En el c�digo de la clase PlayerSip es donde tienen
    que a�adirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creaci�n de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declarar�n los m�todos de
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