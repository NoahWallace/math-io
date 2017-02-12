import {Utils} from "./Utils/utils";
import {degree, radians} from "./Conversion"

export class MathIO{
  utils=Utils;
  conversion={
    degree:degree,
    radians:radians
  }
}