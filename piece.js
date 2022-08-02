import { game } from "./main.js";

export class Piece{

    constructor(src,type,id){

        this.src = 'images/' + src + '.png' 
        this.type = type
        this.id = id
        this.active;


    }

    getPiece(){

        let piece = document.createElement('img')
        piece.src = this.src
        piece.classList.add('piece')
        piece.classList.add(this.id)
        piece.id = this.type

        piece.onclick = this.showMoves

        return piece

    }

    showMoves(){

        if(this.active){
        
            if(this.id === 'r'){

                console.log('this is a rook')
                rookMoves(this)

            }if(this.id === 'b'){

                console.log('this is a bishop')
                bishopMoves(this)

            }if(this.id === 'n'){

                console.log('this is a night')
                nightMoves(this)

            }if(this.id === 'q'){

                console.log('this is a queen')
                queenMoves(this)

            }if(this.id === 'k'){

                console.log('this is a king')
                kingMoves(this)

            }if(this.id === 'p'){

                if(this.classList.contains('bPiece')){

                    blackPawnMoves(this)

                }else{

                    whitePawnMoves(this)

                }

            }

        }else{

            console.log('not active')

        }
    
    
    }


}

function appendPiece(Moves,piece){

    for(let m of Moves){

        m.addEventListener('click',function(){

            m.appendChild(piece)
            game.whiteMove = !game.whiteMove

        })

    }

}

function capturePiece(Moves,piece){

    for(let m of Moves){

        m.addEventListener('click',function(){

            m.replaceChild(piece,m.firstChild)
            game.whiteMove = !game.whiteMove

        })

    }

}

function nightMoves(element){

    let currentSquare = element.parentElement.id

    let x = parseInt(currentSquare.substring(0,1).charCodeAt())
    let y = parseInt(currentSquare.substring(1,2))


    let night = [

        {x : -2, y : 1},{x : 2, y : 1},{x : -1, y : 2},{x : 1, y : 2},
        {x : -2, y : -1},{x : 2, y : -1},{x : -1, y : -2},{x : 1, y : -2}

    ]

    let possibleMoves = []
    let possibleCaptures = []

    for(let m of night){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row  + '' + column) === null){

            continue

        }if(document.getElementById(row + '' + column).hasChildNodes()){

            if(document.getElementById(row + '' + column).firstChild.id === element.id){

                continue

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }

    possibleMoves.forEach(element => function(){

        element.classList.add('possibleMoves')

    })

    possibleCaptures.forEach(element => function(){

        element.classList.add('possibleCaptures')

    })

    appendPiece(possibleMoves,element)


}

function bishopMoves(piece){

    let currentSquare = piece.parentElement.id

    let x = parseInt(currentSquare.substring(0,1).charCodeAt())
    let y = parseInt(currentSquare.substring(1,2))

    let upRight = [{x : 1, y : 1},{x : 2, y : 2},{x : 3, y : 3},{x : 4, y : 4},{x : 5, y : 5},{x : 6, y : 6},{x : 7, y : 7},{x : 8, y : 8}]
    let downLeft = [{x : -1, y : -1},{x : -2, y : -2},{x : -3, y : -3},{x : -4, y : -4},{x : -5, y : -5},{x : -6, y : -6},{x : -7, y : -7},{x : -8, y : -8}]
    let downRight = [{x : 1, y : -1},{x : 2, y : -2},{x : 3, y : -3},{x : 4, y : -4},{x : 5, y : -5},{x : 6, y : -6},{x : 7, y : -7},{x : 8, y : -8}]
    let upLeft = [{x : -1, y : 1},{x : -2, y : 2},{x : -3, y : 3},{x : -4, y : 4},{x : -5, y : 5},{x : -6, y : 6},{x : -7, y : 7},{x : -8, y : 8}]

    let possibleMoves = []
    let possibleCaptures = []

    for(let m of upRight){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y


        if(document.getElementById(row + '' +  column) === null){

            break

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }
    for(let m of upLeft){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y


        if(document.getElementById(row + '' + column) === null){

            break

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }
    for(let m of downLeft){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y


        if(document.getElementById(row + '' + column) === null){

            break

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }
    for(let m of downRight){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y


        if(document.getElementById(row + '' + column) === null){

            break

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }

    for(let m of possibleMoves){

        m.classList.add('possibleMoves')

    }

    for(let m of possibleCaptures){

        m.classList.add('possibleCaptures')

    }

    appendPiece(possibleMoves,piece)

    capturePiece(possibleCaptures,piece)


}

function rookMoves(piece){


    let currentSquare = piece.parentElement.id

    let x = parseInt(currentSquare.substring(0,1).charCodeAt())
    let y = parseInt(currentSquare.substring(1,2))


    let up = [
        {x : 0, y : 1},{x : 0, y : 2},{x : 0, y : 3},{x : 0, y : 4},{x : 0, y : 5},{x : 0, y : 6},{x : 0, y : 7},{x : 0, y : 8}
    ]
    let down = [
        {x : 0, y : -1},{x : 0, y : -2},{x : 0, y : -3},{x : 0, y : -4},{x : 0, y : -5},{x : 0, y : -6},{x : 0, y : -7},{x : 0, y : -8}
    ]
    let left = [
        {x : -1, y : 0},{x : -2, y : 0},{x : -3, y : 0},{x : -4, y : 0},{x : -5, y : 0},{x : -6, y : 0},{x : -7, y : 0},{x : -8, y : 0},
    ]
    let right = [
        {x : 1, y : 0},{x : 2, y : 0},{x : 3, y : 0},{x : 4, y : 0},{x : 5, y : 0},{x : 6, y : 0},{x : 7, y : 0},{x : 8, y : 0},
    ]

    let possibleMoves = []
    let possibleCaptures = []

    for(let m of up){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            continue

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }
    for(let m of down){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            continue

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))


        }

    }
    for(let m of left){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            continue

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }
    for(let m of right){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            continue

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }

   for(let m of possibleMoves){

    m.classList.add('possibleMoves')

   }

   for(let m of possibleCaptures){

    m.classList.add('possibleCaptures')

   }

   appendPiece(possibleMoves,piece)

   capturePiece(possibleCaptures,piece)

}

function queenMoves(piece){

    let currentSquare = piece.parentElement.id

    let x = parseInt(currentSquare.substring(0,1).charCodeAt())
    let y = parseInt(currentSquare.substring(1,2))

    let upRight = [{x : 1, y : 1},{x : 2, y : 2},{x : 3, y : 3},{x : 4, y : 4},{x : 5, y : 5},{x : 6, y : 6},{x : 7, y : 7},{x : 8, y : 8}]
    let downLeft = [{x : -1, y : -1},{x : -2, y : -2},{x : -3, y : -3},{x : -4, y : -4},{x : -5, y : -5},{x : -6, y : -6},{x : -7, y : -7},{x : -8, y : -8}]
    let downRight = [{x : 1, y : -1},{x : 2, y : -2},{x : 3, y : -3},{x : 4, y : -4},{x : 5, y : -5},{x : 6, y : -6},{x : 7, y : -7},{x : 8, y : -8}]
    let upLeft = [{x : -1, y : 1},{x : -2, y : 2},{x : -3, y : 3},{x : -4, y : 4},{x : -5, y : 5},{x : -6, y : 6},{x : -7, y : 7},{x : -8, y : 8}]

    let up = [
        {x : 0, y : 1},{x : 0, y : 2},{x : 0, y : 3},{x : 0, y : 4},{x : 0, y : 5},{x : 0, y : 6},{x : 0, y : 7},{x : 0, y : 8}
    ]
    let down = [
        {x : 0, y : -1},{x : 0, y : -2},{x : 0, y : -3},{x : 0, y : -4},{x : 0, y : -5},{x : 0, y : -6},{x : 0, y : -7},{x : 0, y : -8}
    ]
    let left = [
        {x : -1, y : 0},{x : -2, y : 0},{x : -3, y : 0},{x : -4, y : 0},{x : -5, y : 0},{x : -6, y : 0},{x : -7, y : 0},{x : -8, y : 0},
    ]
    let right = [
        {x : 1, y : 0},{x : 2, y : 0},{x : 3, y : 0},{x : 4, y : 0},{x : 5, y : 0},{x : 6, y : 0},{x : 7, y : 0},{x : 8, y : 0},
    ]

    let possibleMoves = []
    let possibleCaptures = []

    for(let m of upRight){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y


        if(document.getElementById(row + '' +  column) === null){

            break

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }
    for(let m of upLeft){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y


        if(document.getElementById(row + '' + column) === null){

            break

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }
    for(let m of downLeft){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y


        if(document.getElementById(row + '' + column) === null){

            break

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }
    for(let m of downRight){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y


        if(document.getElementById(row + '' + column) === null){

            break

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }

    for(let m of up){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            continue

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }
    for(let m of down){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            continue

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))


        }

    }
    for(let m of left){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            continue

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }
    for(let m of right){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            continue

        }if(document.getElementById(row + '' + column).hasChildNodes()){


            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                break

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))
                break

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }


    for(let m of possibleMoves){

        m.classList.add('possibleMoves')

    }
    for(let m of possibleCaptures){

        m.classList.add('possibleCaptures')

    }

    appendPiece(possibleMoves,piece)

    capturePiece(possibleCaptures,piece)


}

function kingMoves(piece){

    let currentSquare = piece.parentElement.id

    let x = parseInt(currentSquare.substring(0,1).charCodeAt())
    let y = parseInt(currentSquare.substring(1,2))

    let king = [

        {x : -1, y : 1},{x : 0, y : 1},{x : 1, y : 1},
        {x : -1, y : 0},{x : 1, y : 0},
        {x : -1, y : -1},{x : 0, y : -1},{x : 1, y : -1}

    ]

    let possibleMoves = []
    let possibleCaptures = []

    for(let m of king){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            continue

        }if(document.getElementById(row + '' + column).hasChildNodes()){

            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                continue

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))

            }

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }

    for(let m of possibleMoves){

        m.classList.add('possibleMoves')
        
    }
    for(let m of possibleCaptures){

        m.classList.add('possibleCaptures')

    }

    appendPiece(possibleMoves,piece)

    capturePiece(possibleCaptures,piece)

}

function blackPawnMoves(piece){

    let currentSquare = piece.parentElement.id

    let x = parseInt(currentSquare.substring(0,1).charCodeAt())
    let y = parseInt(currentSquare.substring(1,2))

    let bpMoves = [
        {x : 0, y : -1}, {x : 0, y : -2}
    ]
    let bpCaptures = [
        {x : -1, y : -1}, {x : 1, y : -1}
    ]


    let possibleMoves = []
    let possibleCaptures = []

    for(let m of bpMoves){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            break

        }if(document.getElementById(row + '' + column).hasChildNodes()){

            break

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }

    for(let m of bpCaptures){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column).hasChildNodes()){

            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                continue

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))

            }

        }

    }

    for(let m of possibleMoves){

        m.classList.add('possibleMoves')

    }
    for(let m of possibleCaptures){

        m.classList.add('possibleCaptures')

    }

    appendPiece(possibleMoves,piece)

    capturePiece(possibleCaptures,piece)

}

function whitePawnMoves(piece){

    let currentSquare = piece.parentElement.id

    let x = parseInt(currentSquare.substring(0,1).charCodeAt())
    let y = parseInt(currentSquare.substring(1,2))

    let wpMoves = [
        {x : 0, y : 1}, {x : 0, y : 2}
    ]
    let wpCaptures = [
        {x : -1, y : 1}, {x : 1, y : 1}
    ]


    let possibleMoves = []
    let possibleCaptures = []

    for(let m of wpMoves){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column) === null){

            break

        }if(document.getElementById(row + '' + column).hasChildNodes()){

            break

        }else{

            possibleMoves.push(document.getElementById(row + '' + column))

        }

    }

    for(let m of wpCaptures){

        let row = String.fromCharCode(x + m.x)
        let column = y + m.y

        if(document.getElementById(row + '' + column).hasChildNodes()){

            if(document.getElementById(row + '' + column).firstChild.className === piece.className){

                continue

            }else{

                possibleCaptures.push(document.getElementById(row + '' + column))

            }

        }

    }

    for(let m of possibleMoves){

        m.classList.add('possibleMoves')

    }
    for(let m of possibleCaptures){

        m.classList.add('possibleCaptures')

    }

    appendPiece(possibleMoves,piece)

    capturePiece(possibleCaptures,piece)

}
