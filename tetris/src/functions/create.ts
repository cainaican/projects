export function create(shape: Array<any>){
    const lines  = shape.length;
    const cubesInLine = shape[0].length;
    const figure: HTMLDivElement | null = document.querySelector(".figure");

	if(!figure) return; 

    for (let i = 0 ; i < lines; i++){
        const lineElement = document.createElement("div");
    
        for (let j = 0 ; j < cubesInLine; j++){
            const cube = document.createElement("span");
            if(shape[i][j]){
                cube.classList.add("cube");     
            }else{
                cube.classList.add("empty");
            }
            lineElement.appendChild(cube);
        }
        figure.appendChild(lineElement);
        lineElement.classList.add("line");
    }
}