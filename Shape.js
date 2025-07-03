export class Shape {
    constructor(){
        if(this.constructor==Shape){
            throw new Error("Cannot create an instance of abstract class Shape");
        }
        
    }
    Area() {
        throw new Error("Method 'Area()' must be implemented.");
    }
    Perimeter() {
        throw new Error("Method 'Perimeter()' must be implemented.");
    }
    tostring() {
        return `Shape: Area = ${this.Area()}, Perimeter = ${this.Perimeter()}`;
    }
}

