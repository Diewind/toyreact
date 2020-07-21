import ToyReact,{Component} from './ToyReact';

class Square extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:null
        }
    }
    render() {
        return (
            <button className="square" style='width:20px;height:20px;' onClick={()=>{this.setState({value:'x'})}}>
                {this.state.value ? this.state.value : ""}
            </button>
        )
    }
}
  
class Board extends Component {
    renderSquare(i) {
      return (
        <Square
          value={i}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}
const app = <Board />;
ToyReact.render(app, document.body);