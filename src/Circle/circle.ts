import {MathIO} from "../mathio";
export type ValueType= "radius" | 'diam' | "circum" | "area"
class CircleClass extends MathIO {
    public areaFromDiameter(diameter:number){ return Math.PI * this.squared(diameter/2); }
    public areaFromCircumference(circumference:number){ return  this.squared(circumference) / (Math.PI*4) ;}
    public areaFromRadius(radius:number){ return   Math.PI * this.squared(radius);}
    public radius(diameter: number) { return diameter / 2; }
    public circumferenceFromRadius(radius:number) {return Math.PI * (radius*2);}
    public circumferenceFromDiameter(diameter:number) {return Math.PI * diameter;}
    public circumferenceFromArea(area:number) {
        let radius =Math.sqrt(area);
        return this.areaFromRadius(radius)}
    public circumference(number: number, type?: ValueType) {
        let t=type.toLowerCase();
        if(t === 'diam'){this.circumferenceFromDiameter(number);}
        else if(t === 'area'){this.circumferenceFromArea(number);}
        else if(t === 'radius'){this.circumferenceFromRadius(number);}
        else{ throw new Error("type is not defined")}
    }
    public area(number: number, type: ValueType) {
        let t=type.toLowerCase();
        if(t === 'diam'){this.areaFromDiameter(number);}
        else if(t === 'circum'){this.areaFromCircumference(number);}
        else if(t === 'radius'){this.areaFromRadius(number);}
        else{ throw new Error("type is not defined")}
    }


}

export const Circle = new CircleClass();



