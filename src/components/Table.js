import React from 'react'
import Card from './Card'
import '../assets/styles.css'
import SkyLight from 'react-skylight';

var uniqid = require('uniqid') // for custom array keys

var modalStyles = {
    backgroundColor: '#7db2e0',
    color: '#ffffff',
    padding: '50px',
    height: '500px',
    marginTop: '-300px',
    borderRadius: '10px'
  };


var teams = [
    {
        name: "קבוצה האדומה",
        color: "#FF0000",
        points: 0
    },
    {
        name: "קבוצה הכחולה",
        color: "#0000FF",
        points: 0
    }
]

var optionalTeams = [
    {
        name: "קבוצה הכתומה",
        color: "#ff8e1c",
        points: 0
    },
    {
        name: "קבוצה הסגולה",
        color: "#b91bf9",
        points: 0
    },
    {
        name: "קבוצה הורודה",
        color: "#ff00b4",
        points: 0
    }
]


class Table extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            data: null,
            categories: null,
            rows: null,
            modal: {
                reveal: false,
                question: null,
                answer: null,
                points: null,
                id: null
            },
            tally:{
                questionCount: 0,
                solvedQuestions: 0
            }
        }
        this.handleCardClick = this.handleCardClick.bind(this)
        this.resetModal = this.resetModal.bind(this)
        this.addTeam = this.addTeam.bind(this)
        this.removeTeam = this.removeTeam.bind(this)
    }

    componentDidMount(){
        let categories = []
        let count = 0
        let data = this.props.data
        data.forEach(category => {
            categories.push(category["category"])
            category["questions"].forEach(question => { count++; question.solved = false; question.id = uniqid() })
        }) 
        this.setState({
            categories: [].concat(categories),
            data: data,
            teams: [].concat(teams),
            tally: {...this.state.tally, questionCount: count},
        }, function(){
            this.createGrid()
        })
    }

    handleCardClick(question){
        let modal = {...this.state.modal}
        modal.question = question.question
        modal.answer = question.answer
        modal.points = question.points
        modal.id = question.id;
        this.setState({ modal })
        this.questionModal.show()
    }

    resetModal(){
        this.setState({
            modal: {...this.state.modal, reveal: false}
        })
    }

    renderModal(){
        let teamButtons = this.state.teams.map(team => {
            return(
                <button 
                onClick={() => this.addPoints(team.name)}
                key={team.color}
                className="modalButton" 
                style={{backgroundColor: `${team.color}`}}>{team.name}</button>
            )
        })
        teamButtons.push(
            <button 
            onClick={() => this.addPoints()}
            key={uniqid()}
            className="modalButton" 
            style={{backgroundColor: "#909090"}}>אין נקודות</button>
        )
        return(
            <div>
                <SkyLight 
                ref={ref => this.questionModal = ref} 
                title={<h4 className="modalTitle">{this.state.modal.points} Points</h4>}
                transitionDuration={1000} 
                closeButtonStyle={{display: "none"}}
                dialogStyles={modalStyles}
                afterClose={this.resetModal}
                >
                    <div className="modalQuestion">שאלה: {this.state.modal.question}</div>
                    <hr className="modalHorizontalRule"/>
                    <div className={this.state.modal.reveal 
                    ?"answerReveal"
                    :"answerHidden"
                    }>
                    <div className="col-md-12 modalAnswer">תשובה: {this.state.modal.answer}</div>
                    
                    </div>
                    <div className="modalButtonRow">
                        {this.state.modal.reveal 
                        ? teamButtons 
                        : <button 
                            style={{backgroundColor: "#17b559"}}
                            className="modalButton"  
                            onClick={() => this.setState({modal: {...this.state.modal, reveal: true}})}>
                            גלה תשובה
                            </button>
                        }
                    </div>
                </SkyLight>
            </div>
        )
    }

    renderCategories(){
        if(this.state.categories){
            let headers = this.state.categories.map(c => {
                // style aspect centers short headers
            return <h5 key={uniqid()} className="col-md-2 header" style={{left: `${c.length <= 10 ? '1%' : '0%'}`}}>{c}</h5>
            })
            return(
                <div className="col-md-11 tableRow">
                    {headers}
                </div>
            )
        }
    }

    renderTeams(){
        if(this.state.teams)
        {
            let teamsPoints = this.state.teams.map(team => {
            return(
                <div key={team.color} className="col-md-2">
                    <div className="pointsMain">
                        <div className="pointsHeader">
                            <span style={{marginRight: "10px"}}>{team.name}</span>
                            <i 
                            style={{color: `${team.color}`, fontSize: "20px"}}
                            className="fa fa-user" 
                            aria-hidden="true"></i>
                        </div>
                        <div className="pointsDisplay">
                            {team.points}
                        </div>
                    </div>
                </div>
            )
        })

        return teamsPoints
        }
    }

    renderGameArea(){
        return(
            <div className="mainGameArea">
                {this.renderCategories()}
                {this.state.rows}
            </div>
        )
    }
    
    renderWinnerArea(){
        let renderTiedTeams = (teams) => {
            teams = [...new Set(teams)]
            return teams.map(team => {
                return (
                    <div className="col" style={{backgroundColor:`${team.color}`}} key={uniqid()}>
                        <div className="col-md-12 winnerText">{team.name} tied! <i className="fa fa-thumbs-up" aria-hidden="true"></i></div>
                    </div>
                )
            })
        }
        let isTie = false
        let tiedTeams = []
        let winner = null
        this.state.teams.forEach(team => {
            if(!winner)
                winner = team
            else if(team.points === winner.points) {
                isTie = true
                tiedTeams.push(winner, team)
                winner = team
            }
            else if (team.points > winner.points){
                isTie = false
                tiedTeams = []
                winner = team
            }
        })
        return(
            !isTie 
            ? <div className="winnerArea col-md-12" style={{backgroundColor:`${winner.color}`}}>
                <div className="col-md-12 winnerText">ה{winner.name} נצחה! <i className="fa fa-trophy" aria-hidden="true"></i></div>
            </div>
            
            : <div className="winnerArea">
                <div className="row">
                    {renderTiedTeams(tiedTeams)}
                </div>
            </div>
        )
    }

    addPoints(teamName= null){
        let currentTeams = [].concat(this.state.teams)
        if(teamName){
            // Add points to team
            let teamIndex = this.state.teams.findIndex(team => team.name === teamName)
            currentTeams[teamIndex].points += this.state.modal.points;
        }
        
        // Eliminate question
        let categoryIndex, questionIndex
        for (let i = 0; i < this.state.categories.length; i++){
            let temp = this.state.data[i].questions.findIndex(question => question.id === this.state.modal.id)
            if(temp >= 0){
                questionIndex = temp
                categoryIndex = i
                break
            }
        }
        let data = [].concat(this.state.data)
        data[categoryIndex].questions[questionIndex].solved = true

        //Tally solved question and save all data
        let solved = this.state.tally.solvedQuestions
        this.setState({teams: currentTeams, data: data, tally: {...this.state.tally, solvedQuestions: ++solved}}, function() {this.createGrid()})

        this.questionModal.hide()
    }

    addTeam(){
        if(this.state.teams.length < (teams.length + optionalTeams.length)){
            let newTeamIndex = this.state.teams.length - teams.length;
            let currentTeams = [...this.state.teams]
            currentTeams.push(optionalTeams[newTeamIndex])
            this.setState({
                teams: [...currentTeams]
            })
        }
    }

    removeTeam(){
        if(this.state.teams.length > 2){
            let currentTeams = [...this.state.teams]
            currentTeams.pop()
            this.setState({teams: [...currentTeams]})
        }
    }

    createGrid(){
        // get first question set, take last question, check max points, divide by 100 for row count
        let numRows = (this.state.data[0]["questions"].slice(-1)[0]["points"]) / 100
        let rows = []
        for (let j= 0; j < numRows; j++){
            let newRow = []
            for (let i= 0; i < this.state.categories.length; i++){
                let item = this.state.data[i]["questions"][j]
                newRow.push(item)
            }
            rows.push(this.createCards(newRow))
        }
        this.setState({ rows: rows })
    }

    createCards(cardsData){
        let cards = cardsData.map(question => {
            return <Card key={uniqid()} question= {question} handleClick={this.handleCardClick}/>
        })

        return (
            <div key={uniqid()} className="col-md-11 tableRow">
                {cards}
            </div>
        )
    }

    render(){
        let solved = this.state.tally.solvedQuestions
        return(
            <div>
                {this.state.teams ? this.renderModal() : null}
                <div className="pointsBar col-md-12">
                <div className="teamChange" onClick={this.removeTeam}><i className="fa fa-minus-circle" aria-hidden="true"></i></div>
                    {this.renderTeams()}
                <div className="teamChange" onClick={this.addTeam}><i className="fa fa-plus-circle" aria-hidden="true"></i></div>
                </div>
                {  solved !== this.state.tally.questionCount || solved === 0
                    ? this.renderGameArea()
                    : this.renderWinnerArea()
                }
            </div>
        )
    }
}

export default Table