export class Player{

    constructor(name){

        this.name = name
        // this.isPlayTurn = Boolean

        if(this.name === 'whitePlayer'){

            this.pieces = document.querySelectorAll('.wPiece')
            this.isPlayTurn = true
            
        }else{

            this.pieces = document.querySelectorAll('.bPiece')
            this.isPlayTurn = false

        }

        this.#turn()

    }

    #turn(){

        if(this.isPlayTurn === true){

            for(let m of this.pieces){

                m.active = true

            }

        }else{


            for(let m of this.pieces){

                m.active = false

            }

        }

    }



}