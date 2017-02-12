import {MathIO} from "../mathio";
export type ValueType= "radius" | 'diam' | "circum" | "area";

class CircleClass extends MathIO {
    public areaFromDiameter(diameter:number){ return Math.PI * this.utils.squared(diameter/2); }
    public areaFromCircumference(circumference:number){ return  this.utils.squared(circumference) / (Math.PI*4) ;}
    public areaFromRadius(radius:number){ return   Math.PI * this.utils.squared(radius);}
    public radius(diameter: number) { return diameter / 2; }
    public circumferenceFromRadius(radius:number) {return Math.PI * (radius*2);}
    public circumferenceFromDiameter(diameter:number) {return Math.PI * diameter;}
    public innerCoords(radius:number):Array<Array<number>>{
        return [
            [radius * Math.cos(this.conversion.degree.toRadians(135)),
            radius * Math.sin(this.conversion.degree.toRadians(135))],
            [radius * Math.cos(this.conversion.degree.toRadians(45)),
            radius * Math.sin(this.conversion.degree.toRadians(45))],
            [radius * Math.cos(this.conversion.degree.toRadians(315)),
            radius * Math.sin(this.conversion.degree.toRadians(315))],
            [radius * Math.cos(this.conversion.degree.toRadians(225)),
            radius * Math.sin(this.conversion.degree.toRadians(225))]
        ]
    }
    public getPoint(startingCoords:[number,number], distance, angle):Array<number>{
       return  [startingCoords[0] + distance * Math.cos(this.conversion.degree.toRadians(angle)),
                startingCoords[1] + distance * Math.sin(this.conversion.degree.toRadians(angle))]
    }
    public circumferenceFromArea(area:number) {
        let radius =Math.sqrt(area);
        return this.areaFromRadius(radius)}

}

export const Circle = new CircleClass();






