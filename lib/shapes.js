// define the shape class where we hve two methods and a construtor
// 
export class Shape {
    // a constructor is a function that auto execute when we create an object.
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      // whatever the current color is, set that value to the color's value
      this.color = color;
    }
  
    render() {
      return '';
    }
  }