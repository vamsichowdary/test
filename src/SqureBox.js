import React ,{Component} from 'react';
import './assets/styles.css';
import diamond from './assets/diamond.png';
import arrow from './assets/arrow.png';
import question from './assets/question.png';
import { SIZE } from './Constants';

class SqureBox extends Component{

    constructor(Props){
        super(Props);
        this.boxClickHandler = this.boxClickHandler.bind(this);
        this.state = {
            isDiamond:false,
            isPressed:false,
            removeButton:false
        }
    }
    __resetsquerebox(){
        if (!this.state.isDiamond && this.state.isPressed) {
            this.setState({ removeButton: true });
        }
    }
    boxClickHandler(){
        this.props.decrementCount();
       let isDiamond = false;
        if(this.props.diamondPositons.findIndex((pos)=>pos.row === this.props.row && pos.col === this.props.col)!== -1){
            isDiamond = true;
        }else{
            
        }
        if(isDiamond){
            this.props.removedimondFromArray();
        }else{
            setTimeout(()=>this.__resetsquerebox(),2000)
        }
        setTimeout(
            () =>
              this.setState({isDiamond }, () => {
                this.setState({ isPressed: true });
              }),
            100
          );
    }

    render(){
        if(!this.state.isPressed)
            return(
                <div className="squerbox" id='squerebox${this.props.row}${this.props.col}' onClick={this.boxClickHandler}>
                    <img src={question} className='img-fluid'/>
                </div>
            );
        
        if(this.state.isDiamond)
           return( <div className="squerbox">
                <img src={diamond} className='img-fluid'/>
            </div>
           );
        if(this.state.removeButton)
           return( <div className="squerbox" style={{cursor:'default'}}></div>);   
        return <div className ="squerbox">
         <img src= {arrow} className='img-fluid'/>
        </div>  
    }

}

export default SqureBox;