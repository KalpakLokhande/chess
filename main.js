import { Game } from "./game.js";
import { Piece } from "./piece.js";
import { Player } from "./player.js";
import { Square } from "./square.js";


const board = document.querySelector('.board')
const letters = ['a','b','c','d','e','f','g','h']


function createBoard(){

    let black = false
    let index = 0
    let k = 8

    for(let i = 1; i <= 64; i++){

        let square = new Square()
        let thisSquare = square.getSquare()

        if(black){

            thisSquare.classList.add('black')
            thisSquare.id = letters[index] + k
            index++
            black = !black

        }else{

            thisSquare.classList.add('white')
            thisSquare.id = letters[index] + k
            index++
            black = !black

        }if(index === 8){

            index = 0
            k--
            black = !black

        }

        board.appendChild(thisSquare)

    }

}

function readFEN(){

    const initial = 'rnbqkbnr/pppppppp/8/4K3/8/8/PPPPPPPP/RNBQKBNR'
    let index = 0
    let k = 8

    for(let i = 0; i <= initial.length; i++){

        let char = initial.charAt(i)


        if(char === '/'){

            index = 0
            k--

        }else if(!isNaN(char)){

            index += parseInt(char)

        }else if(char === char.toUpperCase()){

            let piece = new Piece('w' + char.toLowerCase(),char.toLowerCase(),'wPiece')


            let square = document.getElementById(letters[index] + k)
            square.appendChild(piece.getPiece())
            index++

        }else if(char === char.toLowerCase()){

            let piece = new Piece('b' + char,char,'bPiece')
            

            let square = document.getElementById(letters[index] + k)
            square.appendChild(piece.getPiece())
            index++

        }

    }

    

}
createBoard()
readFEN()

export let game = new Game();






