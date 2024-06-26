import { corner, line, square, t, z } from './figures/figures';
import { boost } from './functions/boost';
import { create } from './functions/create'
import { move } from './functions/move';
import { rightLeft } from './functions/right-left';
import './style.css'




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class = "container">
      <div class="container__gradient">
        <div class ="conteiner__section">  
          <section class ="section__game">
            <div class="figure">
              
            </div>
          </section>    <!--игра-->
          <section class="section__tools">
            <div class = "container__tools">
              <div class="tools__element"></div>   <!--рамка-->
              <table class="tools__table">
                <thead class="table__body">
                  <tr class="table__row">
                    <th class="table__row__level">level</th>
                    <th class="table__row__level-number">1</th>
                  </tr>
                </thead>
                <tbody class="table__body">
                  <tr class="table__row">
                    <td class="table__row__lines">lines</td>
                    <td class="table__row__lines-number">0</td>
                  </tr>
                  <tr class="table__row">
                    <td class="table__row__score">score</td>
                    <td class="table__row__score-number">238</td>
                  </tr>
                </tbody>
              </table> 
            </div>
              <ul class ="table__row__button">
                <li><a href="#">quit</a></li>
                <li><a href ="#">pause</a></li>
              </ul>
              <h1 class="tools__element-header">tetris</h1>
          </section>
        </div>
      </div>
      <!-- <div id="app"></div> -->
    </main>
`
let figure: HTMLDivElement = document.querySelector(".figure");
const shapes: Array<any> = [corner, line, square, t, z ];
const index: number = +(Math.random() * 5).toFixed(0);
let boostId: number;

create(shapes[index]);
let moveId = move(figure);
rightLeft(figure);

addEventListener("keydown", (event: KeyboardEvent) => {
  if(event.code === "ArrowDown" && !boostId) {
    boostId = boost(figure, moveId);
  }
});

addEventListener("keyup", (event: KeyboardEvent) => {
  if(event.code === "ArrowDown") {
    clearInterval(boostId);
    boostId = null;
    moveId = move(figure);
  }
});

// const pointer = document.createElement("span");
// pointer.style.position ="absolute";
// let pp = 0;

// addEventListener("click", (e) => {
//   pointer.style.display = "inline";
//   pointer.innerText = `${pp++}`;
//   pointer.style.left = `${e.x - 10}px`;
//   pointer.style.top = `${e.y - 10}px`;
//   pointer.style.cursor = "pointer";
//   document.body.appendChild(pointer);
//   setTimeout(() => {
//     pointer.style.display = "none";
//   },300)
// })