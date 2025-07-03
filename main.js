import { Shape } from "./Shape.js";
class Circle extends Shape {
    constructor(radius) {
        super();
        if (radius <= 0) {
            throw new Error("Radius must be a positive number.");
        }
        this.radius = radius;
    }
    Area() {
        return Math.PI * this.radius * this.radius;
    }
    Perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        if (length <= 0 || width <= 0) {
            throw new Error("Length and width must be positive numbers.");
        }
        this.length = length;
        this.width = width;
    }
    Area() {
        return this.length * this.width;
    }
    Perimeter() {
        return 2 * (this.length + this.width);
    }
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        if (side <= 0) {
            throw new Error("Side must be a positive number.");
        }
    }
    Area() {
        return this.length * this.length;
    }
    Perimeter() {
        return 4 * this.length;
    }
}
const circle = new Circle(5);
console.log(circle.tostring());
const rectangle = new Rectangle(4, 6);
console.log(rectangle.tostring());
const square = new Square(4);
console.log(square.tostring());