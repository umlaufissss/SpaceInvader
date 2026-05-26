import Invader from "./Invader";

class Grid
{
    constructor(rows, cols)
    {
        this.rows = rows;
        this.cols = cols;

        this.invaderVelocity = 1;
        this.invaders = this.
    }
    
    init()
    {
        const array = []

        for (let row = 0; row < this.rows; row++)
        {
            for(let col = 0; col < this.cols;col++)
            {
                const invader = new Invader({
                    x: col, y: row,
                },
                1
            );

            array.push(invader)
            }
        }
    }
}

export default Grid;