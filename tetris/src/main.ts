import { position, shapes } from './figures/figures';
import { createTable } from './functions/create-table';
import { draw } from './functions/draw-figure';
import './style.css'




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class = "container">
      <div class="container__gradient">
        <div class ="conteiner__section">  
          <section class ="section__game">
            <table class="section__table">

            </table>
          </section>    <!--игра-->
          <section class="section__tools">
            <div class = "container__tools">
              <div class="tools__element"></div>   <!--рамка-->
              <div class="tools__table">
                <div class="table__body">
                  <div class="table__row">
                    <div class="table__row__level">level</div>
                    <div class="table__row__level-number">1</div>
                  </div>
                </div>
                <tbody class="table__body">
                  <div class="table__row">
                    <div class="table__row__lines">lines</div>
                    <div class="table__row__lines-number">0</div>
                  </div>
                  <div class="table__row">
                    <div class="table__row__score">score</div>
                    <div class="table__row__score-number">238</div>
                  </tr>
                </tbody>
              </div> 
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
const index: number = Math.floor((Math.random() * shapes.length));

createTable();

export const activeShape = shapes[index];

draw();

addEventListener("keydown", (e) => {

  if (e.code === "ArrowLeft") {
    position.row--;
    draw();
  }
  if (e.code === "ArrowRight") {
    position.row++;
    draw();
  }
  if (e.code === "ArrowDown") {
    position.column+=2;
    draw();
  }

})

