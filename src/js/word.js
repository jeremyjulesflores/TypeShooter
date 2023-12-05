class Word {
    constructor(x, y, text, speed) {
      this.x = x;
      this.y = y;
      this.text = text;
      this.speed = speed;
      this.visible = true;
    }
  
    gravitate() {
      const dx = planet.x - this.x;
      const dy = planet.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
    
  
       
        const gravityX = (dx / distance)
        const gravityY = (dy / distance) 
    
       
    
        this.x += gravityX * this.speed;
        this.y += gravityY * this.speed;
      
    }

    draw() {
      if (this.visible) {
        c.fillStyle = 'white'
        c.font = '25px Pixel, Arial'; // Use a monospaced pixel art font, adjust size as needed
        c.fillText(this.text, this.x, this.y);
      }
    }
  
    update() {
      if (this.visible) {
        // this.y += this.speed;
        this.draw();
      }
    }
  
    hide() {
      this.visible = false;
    }
  }

  export{Word}