import { Shape } from './shapes.js';

// inheritance
export class Circle extends Shape {
  // a constructor is a function that auto execute when we create an object.
  constructor(text, textColor, shapeColor) {
    // super is a cosntructor of shape class, and it is making sure that we use properties and methods from the Shape class.
    super();
    this.text = text;
    // or operator (||) set either the left or the right value
    this.textColor = textColor || 'white'; // Default text color is white if not specified
    this.shapeColor = shapeColor || 'red'; // Default shape color is red if not specified
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <style>
                text {
                  font-family: Arial;
                  font-size: 40px;
                  fill: ${this.textColor};
                }

                circle {
                  fill: ${this.shapeColor};
                  stroke: black;
                  stroke-width: 2;
                }
              </style>

              <circle cx="150" cy="100" r="90"/>
              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
            </svg>`;
  }
}
// the constructor function will be auto executed when it see that the object has been created on line 37
// let cir1 = Circle()