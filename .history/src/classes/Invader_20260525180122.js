import { PATH_INVADER_IMAGE } from "../utils/constants";

class Invader
{
    constructor(position)
    {
        this.position = position;
        this.width = 0;
        this.height = 0;
        this.velocity = 0;

        this.image = this.getImage(PATH_INVADER_IMAGE); 
    }

    getImage(path)
    {
        const image = new Image();
        image.src = path;

        return image;
    }

    moveLeft()
    {
        this.position.x -= this.velocity;
    }
    moveRight()
    {
        this.position.x += this.velocity;
    }

    draw(ctx)
    {
        
    }

    update()
    {
        if(this.frameCounter === 0)
        {
            this.sx = this.sx === 96 ? 0 : this.sx + 48;
            this.frameCounter = INITIAL_FRAMES;
        }
        this.frameCounter--;
    }

    shoot(projectiles)
    {
        const p = new Projectile(
            {
                x: this.position.x + this.width / 2 - 1,
                y: this.position.y + 2,

            },
            -10
        );
        projectiles.push(p);
    }
}