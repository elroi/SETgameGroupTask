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
        if(allCharacteristics[x][0] != allCharacteristics[x][1] && allCharacteristics[x][0] != allCharacteristics[x][2] && allCharacteristics[x][1] != allCharacteristics[x][2]){
            result++
        }
    }
    if(result == 4) {
        return true;
    }
    else{
        return false;
    }
}


//REACT
class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        )
    }
}
class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card">
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)
/*
class Board extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Card></Card>
            </div>
        )
    }
}
class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            </div>
        )
    }
}*/
