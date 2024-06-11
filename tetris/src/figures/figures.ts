let square = [
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}]
];
let line = [
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}]
];
let corner = [
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 0, color: ""},{block: "active", cube: 0, color: ""}]
];
let z = [
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 0, color: ""}]
];
let t = [
    [{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 1, color: ""}],
    [{block: "active", cube: 0, color: ""},{block: "active", cube: 1, color: ""},{block: "active", cube: 0, color: ""}]
];

let area = new Array(42).fill(0).map((el) => {
    return new Array(21).fill(0);
})

export {square,line,z,t,corner, area};