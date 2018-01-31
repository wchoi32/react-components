// TODO
class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false
        };
    }

    onListItemHover() {
        this.setState({
            done: !this.state.done
        });
    }


    render() {
        var style = {
            'font-weight': this.state.done ? 'bold': 'normal'
        };

        return (
            <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut ={this.onListItemHover.bind(this)}>{this.props.item}</li>
        );
    }
}

var GroceryList = (props) => (
    <ul>
        {props.items.map(item =>
            <GroceryListItem item={item} />
        )}
    </ul>
);

var App = () => (
    <div>
        <GroceryList items={['beer', 'coffee', 'apple']}/>
    </div>
);

ReactDOM.render (
    <App />, 
    document.getElementById('app')
);

// {props.items.map(item =>
//     <GroceryListItem items={item} />
// )}