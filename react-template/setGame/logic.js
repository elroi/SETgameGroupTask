//REACT
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Board className="cardsWrapper" />
            </div>
        )
    }
}
class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var array = window.set.chosenCards;
        return (
            <div className="grid">
                    <Card cardColor={array[0][0]} cardTexture={array[0][1]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                    <Card cardColor={array[1][0]} cardTexture={array[1][1]} cardShape={array[1][2]} cardNumber={array[1][3]}></Card>
                    <Card cardColor={array[2][0]} cardTexture={array[2][1]} cardShape={array[2][2]} cardNumber={array[2][3]}></Card>
                    <Card cardColor={array[3][0]} cardTexture={array[3][1]} cardShape={array[3][2]} cardNumber={array[3][3]}></Card>

                    <Card cardColor={array[4][0]} cardTexture={array[4][1]} cardShape={array[4][2]} cardNumber={array[4][3]}></Card>
                    <Card cardColor={array[5][0]} cardTexture={array[5][1]} cardShape={array[5][2]} cardNumber={array[5][3]}></Card>
                    <Card cardColor={array[6][0]} cardTexture={array[6][1]} cardShape={array[6][2]} cardNumber={array[6][3]}></Card>
                    <Card cardColor={array[7][0]} cardTexture={array[7][1]} cardShape={array[7][2]} cardNumber={array[7][3]}></Card>

                    <Card cardColor={array[8][0]} cardTexture={array[8][1]} cardShape={array[8][2]} cardNumber={array[8][3]}></Card>
                    <Card cardColor={array[9][0]} cardTexture={array[9][1]} cardShape={array[9][2]} cardNumber={array[9][3]}></Card>
                    <Card cardColor={array[10][0]} cardTexture={array[10][1]} cardShape={array[10][2]} cardNumber={array[10][3]}></Card>
                    <Card cardColor={array[11][0]} cardTexture={array[11][0]} cardShape={array[11][2]} cardNumber={array[11][3]}></Card>
            </div>

        )
    }
}
class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var numShapes = [];
        for (let i=0; i<this.props.cardNumber; i++) {
            numShapes.push(<div className={this.props.cardColor+" "+this.props.cardTexture+" "+this.props.cardShape} key={numShapes[i]}></div>);
        }
        return (
            <div className="card">
                {numShapes}
            </div>
        )
    }
}

function render() {
    console.log("render");
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    )
}

render();
