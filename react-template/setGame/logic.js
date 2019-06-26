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
        this.validateChange = this.validateChange.bind(this);
        this.state = {
            selectedCards: []
        }
    }

    validateChange(cardSelected) {
        if (this.state.selectedCards.length < 2) {
            var card1 = cardSelected.split(":")
            var cardArray = this.state.selectedCards
            cardArray.push(card1);
            this.setState({
                selectedCards: cardArray
            })
        }
        else if(this.state.selectedCards.length == 2) {
            debugger;
            var card1 = cardSelected.split(":")
            var cardArray = this.state.selectedCards
            cardArray.push(card1);
            if(window.set.compareCards(cardArray)){
                console.log('match');
            }
            else{
                console.log('not a match');
            }
            var empty = [];
            this.setState({
                selectedCards: empty
            })
            
           
        }
        

    }

    render() {
        var array = window.set.chosenCards;
        return (
            <div className="grid">
                <Card handleChange={this.validateChange} cardColor={array[0][0]} cardTexture={array[0][1]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                <Card handleChange={this.validateChange} cardColor={array[1][0]} cardTexture={array[1][1]} cardShape={array[1][2]} cardNumber={array[1][3]}></Card>
                <Card handleChange={this.validateChange} cardColor={array[2][0]} cardTexture={array[2][1]} cardShape={array[2][2]} cardNumber={array[2][3]}></Card>
                <Card handleChange={this.validateChange} cardColor={array[3][0]} cardTexture={array[3][1]} cardShape={array[3][2]} cardNumber={array[3][3]}></Card>

                <Card handleChange={this.validateChange} cardColor={array[4][0]} cardTexture={array[4][1]} cardShape={array[4][2]} cardNumber={array[4][3]}></Card>
                <Card handleChange={this.validateChange} cardColor={array[5][0]} cardTexture={array[5][1]} cardShape={array[5][2]} cardNumber={array[5][3]}></Card>
                <Card handleChange={this.validateChange} cardColor={array[6][0]} cardTexture={array[6][1]} cardShape={array[6][2]} cardNumber={array[6][3]}></Card>
                <Card handleChange={this.validateChange} cardColor={array[7][0]} cardTexture={array[7][1]} cardShape={array[7][2]} cardNumber={array[7][3]}></Card>

                <Card handleChange={this.validateChange} cardColor={array[8][0]} cardTexture={array[8][1]} cardShape={array[8][2]} cardNumber={array[8][3]}></Card>
                <Card handleChange={this.validateChange} cardColor={array[9][0]} cardTexture={array[9][1]} cardShape={array[9][2]} cardNumber={array[9][3]}></Card>
                <Card handleChange={this.validateChange} cardColor={array[10][0]} cardTexture={array[10][1]} cardShape={array[10][2]} cardNumber={array[10][3]}></Card>
                <Card handleChange={this.validateChange} cardColor={array[11][0]} cardTexture={array[11][0]} cardShape={array[11][2]} cardNumber={array[11][3]}></Card>
            </div>

        )
    }
}
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            isMatched: false
        }
        this.selectCard = this.selectCard.bind(this)
    }

    selectCard(event) {
        this.setState({
            isClicked: true
        })
        var color = 
        this.props.handleChange(event.target.getAttribute('data-cardinfo'))

    }


    render() {
        var clicked = this.state.isClicked ? "selected" : " "

        var numShapes = [];
        for (let i = 0; i < this.props.cardNumber; i++) {
            numShapes.push(<div className={this.props.cardColor + " " + this.props.cardTexture + " " + this.props.cardShape} key={numShapes[i]} data-color={this.props.cardColor} data-texture={this.props.cardTexture} data-shape={this.props.cardShape} data-number={this.props.cardNumber}></div>);
        }
        return (
            <div className={"card " + clicked} onClick={this.selectCard} data-color={this.props.cardColor} data-texture={this.props.cardTexture} data-shape={this.props.cardShape} data-number={this.props.cardNumber}>
                {numShapes}
            </div>
        )
    }
}

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    )
}

render();
