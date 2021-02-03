class Form{
    constructor(){
       //creating properties
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Fruit catcher game");
        this.title.position(displayWidth/2 - 50, 0);
    this.resetButton=createButton('Reset');
    this.resetButton.position(displayWidth/2 + 80, displayHeight/2);

        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

      this.resetButton.mousePressed(()=>{

      player.index=0;
      player.updateCount(player.index);
      game.update(0);

    });


    }
}