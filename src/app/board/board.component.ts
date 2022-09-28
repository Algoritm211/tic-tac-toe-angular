import { Component, OnInit } from '@angular/core';
import {calculateTicTacToeWinner} from "../utils/calculateTicTacToeWinner";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares!: string[];
  xIsNext!: boolean;
  winner!: string | null;

  constructor() { }

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame() {
    this.squares = new Array(9).fill(null);
    this.xIsNext = true;
    this.winner = ''
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(i: number) {
    if (!this.squares[i]) {
      this.squares.splice(i, 1, this.player)
      this.xIsNext = !this.xIsNext;
    }

    this.winner = calculateTicTacToeWinner(this.squares);
  }
}
