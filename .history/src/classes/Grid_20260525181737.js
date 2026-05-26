import Invader from "./Invader";

class Grid
{
    constructor(rows, cols)
    {
        this.rows = rows;
        this.cols = cols;
    }
    
    init()
    {
        const array = []

        for (let row = 0; row < this.rows; row++)
        {
            for(let cols = 0; cols < this.cols;cols++)
            {
                const invader = new Invader()
            }
        }
    }
}

export default Grid;