import Invader from "./Invader.js";

class Grid
{
    constructor(rows, cols)
    {
        this.rows = rows;
        this.cols = cols;

        this.direcao = "right"
        this.moveDown = false;

        this.invaderVelocity = 1;
        this.invaders = this.init();
    }
    
    init()
    {
        const array = []

        for (let row = 0; row < this.rows; row++)
        {
            for(let col = 0; col < this.cols;col++)
            {
                const invader = new Invader({
                    x: col * 50 + 20, y: row *37 +20,
                },
                this.invaderVelocity
            );

            array.push(invader)
            }
        }
        return array;
    }

    draw(ctx)
    {
        this.invaders.forEach((invader) => invader.draw(ctx));
    }

    update()
    {
        /* if(chegarNaBordaDireita)
         {
            this.direcao = "left";
            this.moveDown =true;
         }
        else if (chegarNaBordaEsquerda)
        {
            {
                this.direcao = "right";
                this.moveDown = true;
            }
         }*/

         this.invaders.forEach((invader) =>
        {
           if(this.moveDown)
           {
            invader.moveDown();
           }
            if(this.direcao === "right") invader.moveRight();
            if(this.direcao === "left") invader.moveLeft();
        });

        this.moveDown = false;
    }

    reachedRightBoundary()
    {
        
    }
}

export default Grid