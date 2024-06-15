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

export const area = new Array(42).fill(0).map((el) => {
    return new Array(21).fill(0);
})

export const position = {
    row: 1,
    column: 9
}

export const shapes =[square, line, zLeft, zRight, t, cornerLeft, cornerRight];