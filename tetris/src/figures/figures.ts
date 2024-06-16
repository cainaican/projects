import { activeShape } from "../functions/shapes-functions";
import { columns } from "../main";

let square = [
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}]
];
let line = [
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""}],
];
let cornerLeft = [
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""}]
];
let cornerRight = [
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""}]
];
let zLeft = [
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 0, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""}]
];
let zRight = [
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 0, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""}]
];
let t = [
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 0, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""}]
];

export type TFigure = {
    block: string;
    cube: number;
    color: string;
}[][]

export const shapes: TFigure[] =[ square, line, zLeft, zRight, t, cornerLeft, cornerRight ];
export const colors =[ "red", "green", "blue", "yellow", "orange" ];