// importing the inquirer package for asking questions from the users.
import inquirer from "inquirer";
// File system
import fs from "fs";

// import the Triangle class from the triangle file which is located in lib folder (./ represents in the current folder)
import { Triangle } from "./lib/triangle.js";
import { Circle } from "./lib/circle.js";
import { Square } from "./lib/square.js";

// We wanted to start off with asking question so we used this
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
      validate: function (input) {
        return input.length <= 3
          ? true
          : "Please enter up to three characters.";
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (keyword or hexadecimal value):",
      default: "white", // Default text color is white
      validate: function (input) {
        // Regular expression to validate hexadecimal color codes
        // it should start with # the numbers should be from 0-9. Capital A to capital F.
        // small caps a to small caps f.
        const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
        // List of valid color keywords
        const validColors = [
          "red",
          "green",
          "blue",
          "yellow",
          "orange",
          "purple",
          "pink",
          "white",
          "black",
        ];

        if (
          input.toLowerCase() === "transparent" ||
          validColors.includes(input.toLowerCase()) ||
          hexRegex.test(input)
        ) {
          return true;
        } else {
          return "Please enter a valid color (keyword or hexadecimal value).";
        }
      },
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: ["triangle", "circle", "square"],
    },
    {
      // the type of the question whether a number a password or a simple text input
      type: "input",
      // the key to save the prompt to answer hash
      name: "shapeColor",
      // the message to show to the user
      message: "Enter shape color (keyword or hexadecimal value):",
      // the default value
      default: "red", // Default shape color is red
      // we are using a method called validate
      validate: function (input) {
        // Regular expression to validate hexadecimal color codes
        const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
        // List of valid color keywords
        const validColors = [
          "red",
          "green",
          "blue",
          "yellow",
          "orange",
          "purple",
          "pink",
          "white",
          "black",
        ];

        if (
          input.toLowerCase() === "transparent" ||
          validColors.includes(input.toLowerCase()) ||
          hexRegex.test(input)
        ) {
          return true;
        } else {
          return "Please enter a valid color (keyword or hexadecimal value).";
        }
      },
    },
  ])
  .then((answers) => {
    // object destructuring assignment
    const { text, textColor, shape, shapeColor } = answers;
    let svgString;
    // shape: 'circle'
    // switch statement allows us to select one option from different available options and if the option is true we exit the code. It is very similar to if statement
    switch (shape) {
      case "triangle":
        // if the selection is triangle create a triangle object
        const triangle = new Triangle(text, textColor, shapeColor);
        svgString = triangle.render();
        // this keywords tells the code to stop executing
        break;
      // same as above for circle
      case "circle":
        const circle = new Circle(text, textColor, shapeColor);
        svgString = circle.render();
        break;
      case "square":
        const square = new Square(text, textColor, shapeColor);
        svgString = square.render();
        break;
      // default keyword will allow us to present a deffault message to the user in case non of the above conditions are true.
      default:
        console.error("Invalid shape selected.");
        return;
    }

    fs.writeFileSync("./examples/logo.svg", svgString);
    console.log("SVG saved to ./examples/logo.svg");
  })
  .catch((eror) => {
    console.error("Something went wrong:", eror);
  });