import { Player } from "./player.js";

export class Game{

    constructor(){

        this.player1 = new Player('whitePlayer')
        this.player2 = new Player('blackPlayer')

        this.whiteMove = true

        this.#turn()

    }


    #turn(){

        if(this.whiteMove === true){

                this.player1.isPLayTurn = true
                this.player2.isPlayTurn = false

        }else{


                this.player2.isPLayTurn = true
                this.player1.isPlayTurn = false
        

        }console.table(this)

    }

}