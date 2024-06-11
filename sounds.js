class AudioControl{
    constructor(){
        this.bite1 = document.getElementById('bite1')
        this.bad_food = document.getElementById('bad_food');

        this.start = document.getElementById('start')
        this.restart = document.getElementById('restart')
        this.win = document.getElementById('win')
        this.button = document.getElementById('button')
    }
    play(sound){
        sound.currentTime = 0;
        sound.play();
    }
}