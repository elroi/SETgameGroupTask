//LOGIC (JAVASCRIPT)
var set = {};
set.numberOfCards = 12;
set.color = ["red", "blue", "green"];
set.pattern = ["full", "empty", "striped"];
set.shape = ["circle", "square", "triangle"];
set.number = ["one", "two", "three"];
set.cards = [];
set.chosenCards = [];

//creating all posible combinations of cards
set.createCards = function () {
    for (let x = 0; x < set.color.length; x++) {
        for (let y = 0; y < set.pattern.length; y++) {
            for (let z = 0; z < set.shape.length; z++) {
                for (let w = 0; w < set.number.length; w++) {
                    var card = [set.color[x], set.pattern[y], set.shape[z], set.number[w]];
                    this.cards.push(card);
                }
            }
        }
    }
}

//choosing "numberOfCards" from all possible options while making sure they all are different
set.chooseCards = function () {
    var indexes = [];
    for (let i = 0; i < set.numberOfCards; i++) {
        var index = this.getRandomCard();
        while (indexes.includes(index)) {
            var index = this.getRandomCard();
        }
        indexes.push(index);
    }
    for (let m = 0; m < indexes.length; m++) {
        set.chosenCards[m] = set.cards[indexes[m]];
    }
}

//getting a random number according to "numberOfCards"
set.getRandomCard = function () {
    return Math.floor(Math.random() * this.cards.length);
}

//comparing 3 selected cards
set.compareCards = function (selectedCards) {
    var result = 0;
    var colors = [];
    var patterns = [];
    var shapes = [];
    var numbers = [];
    var allCharacteristics = [colors, patterns, shapes, numbers];

    for (let m = 0; m < selectedCards.length; m++) {
        for (let n = 0; n < allCharacteristics.length; n++) {
            allCharacteristics[n][m] = selectedCards[m][n];
        }
    }

    //after this point it is not fully generic, it's working only when there are 3 selected cards
    //checking the equality of characteristics
    for (let x = 0; x < allCharacteristics.length; x++) {
        if (allCharacteristics[x][0] == allCharacteristics[x][1] && allCharacteristics[x][1] == allCharacteristics[x][2]) {
            result++;
        }
    }

    //checking if one characteristic is all different for cards
    for (let x = 0; x < allCharacteristics.length; x++) {
        if (allCharacteristics[x][0] != allCharacteristics[x][1] && allCharacteristics[x][0] != allCharacteristics[x][2] && allCharacteristics[x][1] != allCharacteristics[x][2]) {
            result++
        }
    }
    if (result == 4) {
        return true;
    }
    else {
        return false;
    }
}

//counting the number of matches in chosen cards
set.countMatchesInChosenCards = function () {
    set.numberOfMatchesInChosenCards = 0;
    for (let x = 0; x < (set.numberOfCards - 2); x++) {
        for (let y = (x + 1); y < (set.numberOfCards - 1); y++) {
            for (let z = (y + 1); z < set.numberOfCards; z++) {
                var selected = [this.chosenCards[x], this.chosenCards[y], this.chosenCards[z]];
                if (this.compareCards(selected)) {
                    set.numberOfMatchesInChosenCards++;
                }
            }
        }
    }
    return set.numberOfMatchesInChosenCards;
}

//initializing the game
set.createCards();
set.chooseCards();
set.countMatchesInChosenCards();

//REACT
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Board />
            </div>
        )
    }
}
class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        debugger;
        var array = [
            ["blue", "filled", "pill", 2],
            ["green", "solid", "square", 3],            
            ["green", "solid", "square", 3],
            ["green", "solid", "square", 3],
            ["green", "solid", "square", 3],
            ["green", "solid", "square", 3],
            ["green", "solid", "square", 3],
            ["green", "solid", "square", 3],
            ["green", "solid", "square", 3],
            ["green", "solid", "square", 3],
            ["green", "solid", "square", 3],
            ["green", "solid", "square", 3],



        ]

        return (
            <div>
                <div className="row">
                    <Card cardColor={array[0][0]} cardTexture={array[0][1]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                    <Card cardColor={array[1][0]} cardTexture={array[1][1]} cardShape={array[1][2]} cardNumber={array[0][3]}></Card>
                    <Card cardColor={array[2][0]} cardTexture={array[2][1]} cardShape={array[2][2]} cardNumber={array[0][3]}></Card>
                    <Card cardColor={array[3][0]} cardTexture={array[3][1]} cardShape={array[3][2]} cardNumber={array[0][3]}></Card>
                </div>

                <div className="row">
                    <Card cardColor={array[4][0]} cardTexture={array[4][1]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                    <Card cardColor={array[5][0]} cardTexture={array[5][1]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                    <Card cardColor={array[6][0]} cardTexture={array[6][1]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                    <Card cardColor={array[7][0]} cardTexture={array[7][1]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                </div>
                
                <div className="row">
                    <Card cardColor={array[8][0]} cardTexture={array[8][1]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                    <Card cardColor={array[9][0]} cardTexture={array[9][1]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                    <Card cardColor={array[10][0]} cardTexture={array[10][1]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                    <Card cardColor={array[11][0]} cardTexture={array[11][0]} cardShape={array[0][2]} cardNumber={array[0][3]}></Card>
                </div>
            </div>

        )
    }
}
class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"card " + this.props.cardColor}>
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
