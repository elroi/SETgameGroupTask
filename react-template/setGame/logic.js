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