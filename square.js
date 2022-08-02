export class Square{

    constructor(){

        this.isEmpty = true

        this.checkIfEmpty()


    }


    checkIfEmpty(){

        if(this.getSquare().hasChildNodes()){

            this.isEmpty = false

        }else{

            this.isEmpty = true

        }

    }

    getSquare(){

        let square = document.createElement('div')
        square.classList.add('square')

        return square

    }

}