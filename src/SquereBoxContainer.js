import React, { Component } from 'react';
import SqureBox from './SqureBox';
import { SIZE } from "./Constants";

class SquereBoxContainer extends Component{

    constructor(Props){
        super(Props);
        this.state ={
            score:64,
            foundAllDiamond:false,
            gameOver:false
        }
    }
   diamondPositons = [{row:Math.floor(Math.random()*SIZE),col:Math.floor(Math.random()*SIZE)}];


    componentWillMount(){
        while(this.diamondPositons.length < SIZE){
            let row = Math.floor(Math.random()*SIZE);
            let col = Math.floor(Math.random()*SIZE);
            if(this.diamondPositons.findIndex((pos)=>pos.col === col && pos.row === row) === -1){
                this.diamondPositons.push({row:row,col:col});
            }
        }
    }
    _decrementCount(){
        this.setState({
            score:this.state.score-1
        });
        if (this.state.score === 0) {
            this.setState({ gameOver: true });
        }
    }
    _removedimondFromArray(row,col){
        this.diamondPositons.splice(
            this.diamondPositons.findIndex(
              diamond => diamond.row === row && diamond.col === col
            ),
            1
          );
         if (this.diamondPositons.length === 0) {
            this.setState({ foundAllDiamond: true });
          }
    }
    rendersqureBox(row){
        
        let cols = [];
        for(let i = 0 ;i<SIZE;i++){
            cols.push(<SqureBox
                removedimondFromArray = {()=>this._removedimondFromArray(row,i)}
                decrementCount={()=>this._decrementCount()} row={row} col={i} key={i} diamondPositons = {this.diamondPositons}></SqureBox>); 
        }
        return cols;
    }
    renderRows(){
        let rows = [];
        for(let i = 0 ;i<SIZE;i++){
              rows.push(
                <div className="row" key={i}>
                <div className="col-md-8 d-flex flex-wrap justify-content-center">
                    {this.rendersqureBox(i)}
                </div>
                </div>
          );  
        }    
        return rows;
    }
    GameOver(){
        return <h2>Game Over</h2>
    }
    render(){
        return (
        <div className="container ">
                <h2>Diamond Sweeper</h2>
                <div className="container border">
                {this.state.gameOver || this.state.foundAllDiamond
                ? this.GameOver()
                : this.renderRows()}
                </div>

                <h2>Score: {this.state.score}</h2>
        </div>     
        )
    }
}

export default SquereBoxContainer;