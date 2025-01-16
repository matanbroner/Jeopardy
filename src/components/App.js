import React from 'react'
import appData from '../assets/data.json'
import logo from '../assets/logo.png'
import Table from './Table'

class App extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            questionData: null,
            play: false
        }
        document.body.style.zoom = "80%" 
    }

    componentDidMount(){
        this.setState({
            questionData: appData["data"]
        })
    }

    renderTitleScreen(){
        return(
            <div className="col-md-12 titleScreen">
                <img className="titleLogo" src={logo}/>
                <br/>
                <div className="playScreenText">Welcome to Hebrew Week Jeopardy!</div>
                <br/>
                <button className="playScreenButton" onClick={() => this.setState({ play: true })}>Start Game</button>
            </div>
        )
    }

    renderGameScreen(){
        return(
            <div>
                <h1 className="gameTitle col-md-12">Hebrew Week Jeopardy! <img className="headerLogo" src={logo}/></h1>
                {this.state.questionData
                    ? <Table data={this.state.questionData}/> 
                    : null}
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.state.play ? this.renderGameScreen() : this.renderTitleScreen()}
            </div>
        )
    }
}

export default App