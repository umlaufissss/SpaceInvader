import Invader from "./Invader";

class Grid
{
    constructor(rows, cols)
    {
        this.rows = rows;
        this.cols = cols;

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
        this.ina
    }
}

export default Grid. array.forEach(in => {
    
});;