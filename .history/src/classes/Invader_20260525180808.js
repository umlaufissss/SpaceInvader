import { PATH_INVADER_IMAGE } from "../utils/constants.js";
import Projectile from "./Projectile";

class Invader
{
    constructor(position)
    {
        this.position = position;
        this.width = 50 ;
        this.height = 37 ;
        this.velocity = 0;

        this.image = this.getImage(PATH_INVADER_IMAGEM); 
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
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    shoot(projectiles)
    {
        const p = new Projectile(
            {
                x: this.position.x + this.width / 2 - 1,
                y: this.position.y + 2,

            },
            10
        );
        projectiles.push(p);
    }
}

export default Invader;