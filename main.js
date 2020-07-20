import ToyReact,{Component} from './ToyReact';

class MyComponent extends Component{
    render(){
        return (
            <div>
                <span>hello</span>
                <p>toyreact</p>
                <div>
                    {false}
                    {this.children}
                </div>
            </div>
        )
    }
}

const App = (
    <MyComponent name="toy" id="toyreact">
      <div>hello world</div>
    </MyComponent>
  );
ToyReact.render(App, document.body);