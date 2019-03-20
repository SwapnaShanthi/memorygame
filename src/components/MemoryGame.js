import React, { Component } from 'react';
import GameBoard from './GameBoard';
import GameStatus from './GameStatus';

class MemoryGame extends Component {

  constructor(props){
     super(props);
     this.previousTileClicked=[];
     this.clickCount=0;
     this.isWaiting=false;
     this.boardStatus="Start Game";
     this.tileArray=[[{isLocked:false,number:1,color:"grey", onClickColor:"red"},{isLocked:false,number:2,color:"grey", onClickColor:"green"},{isLocked:false,number:3,color:"grey", onClickColor:"yellow"},{isLocked:false,number:4,color:"grey", onClickColor:"pink"}],
                     [{isLocked:false,number:5,color:"grey", onClickColor:"yellow"},{isLocked:false,number:6,color:"grey", onClickColor:"red"},{isLocked:false,number:7,color:"grey", onClickColor:"blue"},{isLocked:false,number:8,color:"grey", onClickColor:"purple"}],
                     [{isLocked:false,number:9,color:"grey",onClickColor:"pink"},{isLocked:false,number:10,color:"grey",onClickColor:"purple"},{isLocked:false,number:11,color:"grey",onClickColor:"green"},{isLocked:false,number:12,color:"grey",onClickColor:"blue"}]];
     this.state={TileArray:this.tileArray,
                 ClickCount:this.clickCount,
                 PreviousTileClicked:this.previousTileClicked,
                 Iswaiting:this.isWaiting,
                 BoardStatus:this.boardStatus};

  
  }
  shuffle = (array) => {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  };
  
  changeBoardStatus=(status)=>{
    this.boardStatus=status;
    this.setState({BoardStatus:this.boardStatus}); 
  }

  playerBoard=()=>{
    this.tileArray=[[{isLocked:false,number:1,color:"grey", onClickColor:"red"},{isLocked:false,number:2,color:"grey", onClickColor:"green"},{isLocked:false,number:3,color:"grey", onClickColor:"yellow"},{isLocked:false,number:4,color:"grey", onClickColor:"pink"}],
                     [{isLocked:false,number:5,color:"grey", onClickColor:"yellow"},{isLocked:false,number:6,color:"grey", onClickColor:"red"},{isLocked:false,number:7,color:"grey", onClickColor:"blue"},{isLocked:false,number:8,color:"grey", onClickColor:"purple"}],
                     [{isLocked:false,number:9,color:"grey",onClickColor:"pink"},{isLocked:false,number:10,color:"grey",onClickColor:"purple"},{isLocked:false,number:11,color:"grey",onClickColor:"green"},{isLocked:false,number:12,color:"grey",onClickColor:"blue"}]];
   
    this.setState({TileArray:this.tileArray}); 
  }

  displayFullBoard=()=>{
    this.tileArray=[[{isLocked:true,number:1,color:"red", onClickColor:"red"},{isLocked:true,number:2,color:"green", onClickColor:"green"},{isLocked:true,number:3,color:"yellow", onClickColor:"yellow"},{isLocked:true,number:4,color:"pink", onClickColor:"pink"}],
                    [{isLocked:true,number:5,color:"yellow", onClickColor:"yellow"},{isLocked:true,number:6,color:"red", onClickColor:"red"},{isLocked:true,number:7,color:"blue", onClickColor:"blue"},{isLocked:true,number:8,color:"purple", onClickColor:"purple"}],
                    [{isLocked:true,number:9,color:"pink",onClickColor:"pink"},{isLocked:true,number:10,color:"purple",onClickColor:"purple"},{isLocked:true,number:11,color:"green",onClickColor:"green"},{isLocked:true,number:12,color:"blue",onClickColor:"blue"}]];
    this.changeBoardStatus("You have 3 secs to memorize");
    this.setState({TileArray:this.tileArray}); 
    setTimeout(()=>this.playerBoard(), 3000);
    setTimeout(()=>this.changeBoardStatus("Play Again"), 3000);
   

  }
  resetBoard=(boardStatus)=>{
    if((boardStatus!=="Get ready to memorize cells in 3 sec") && (boardStatus!=="You have 3 secs to memorize")){
      this.tileArray=[[{isLocked:true,number:1,color:"grey", onClickColor:"red"},{isLocked:true,number:2,color:"grey", onClickColor:"green"},{isLocked:true,number:3,color:"grey", onClickColor:"yellow"},{isLocked:true,number:4,color:"grey", onClickColor:"pink"}],
                      [{isLocked:true,number:5,color:"grey", onClickColor:"yellow"},{isLocked:true,number:6,color:"grey", onClickColor:"red"},{isLocked:true,number:7,color:"grey", onClickColor:"blue"},{isLocked:true,number:8,color:"grey", onClickColor:"purple"}],
                      [{isLocked:true,number:9,color:"grey",onClickColor:"pink"},{isLocked:true,number:10,color:"grey",onClickColor:"purple"},{isLocked:true,number:11,color:"grey",onClickColor:"green"},{isLocked:true,number:12,color:"grey",onClickColor:"blue"}]];
      this.setState({TileArray:this.tileArray}); 
      

      this.changeBoardStatus("Get ready to memorize cells in 3 sec");
      setTimeout(()=>this.displayFullBoard(), 3000);
    }

  }
  resetTiles=(tile)=>{

    for(let i=0;i<this.tileArray.length;i++){
      for(let j=0;j<this.tileArray[i].length;j++){
        if(this.tileArray[i][j].number === tile.number ){
          this.tileArray[i][j].color="grey";
          this.tileArray[i][j].isLocked=false;
        }
        if(this.tileArray[i][j].number === this.state.PreviousTileClicked[1] ){
          this.tileArray[i][j].color="grey";
          this.tileArray[i][j].isLocked=false;
        }
      }
    }
    this.isWaiting=false;
    this.setState({IsWaiting:this.isWaiting});
    this.setState({TileArray:this.tileArray});
    this.previousTileClicked=[];
    this.setState({PreviousTileClicked:this.previousTileClicked});
  }

  changeTileStatus=(tilenumber)=>{
      
      for(let i=0;i<this.tileArray.length;i++){
            
          for(let j=0;j<this.tileArray[i].length;j++){
                if(this.tileArray[i][j].number === tilenumber ){
                 
                  if(!this.tileArray[i][j].isLocked && !this.state.isWaiting){
                    let color=this.tileArray[i][j].onClickColor;
                    this.tileArray[i][j].color=color;
                    let count=this.state.ClickCount;
                    this.clickCount=count+1;
                   

                    if(this.previousTileClicked.length>0){

                        if((this.tileArray[i][j].color === this.state.PreviousTileClicked[0]) && this.clickCount>1){

                          this.tileArray[i][j].isLocked=true;
                          this.previousTileClicked=[];
                          
                        }else if((this.tileArray[i][j].color != this.state.PreviousTileClicked[0]) && this.clickCount>1){
                          
                          this.tileArray[i][j].isLocked=true;
                          this.isWaiting=true;
                          this.setState({IsWaiting:this.isWaiting});
                         
                          setTimeout(()=>this.resetTiles( this.tileArray[i][j]), 1000);
                          
                        }
                    }else{
                        this.tileArray[i][j].isLocked=true;
                        this.previousTileClicked.push(this.tileArray[i][j].color);
                        this.previousTileClicked.push(this.tileArray[i][j].number);

                    }
                     
                    
                    
                    break;
                  }
                }
          }

      }

        console.log(this.clickCount);
        this.setState({PreviousTileClicked:this.previousTileClicked});
       
        this.setState({ClickCount:this.clickCount});
        this.setState({TileArray:this.tileArray});
  }

  
  render() {
    return (

        <div>
          <div className="headerdiv">Memory Game</div>
          <GameBoard TileArray={this.state.TileArray} changeTileStatus={this.changeTileStatus}/>
          <GameStatus TileArray={this.state.TileArray} resetBoard={this.resetBoard} previousTileClicked={this.state.previousTileClicked} BoardStatus={this.boardStatus}/>

        </div>
    );
  }
}

export default MemoryGame;