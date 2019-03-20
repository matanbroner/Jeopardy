import React from 'react'
import '../assets/styles.css'

class Card extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            question: false
        }

        this.generateQuestion = this.generateQuestion.bind(this)
    }

    componentDidMount(){
        this.setState({ question: this.props.question })
    }

    generateQuestion(e){
        if(!this.state.question.solved)
            {
                this.props.handleClick(this.state.question)
            }
    }

    render(){

        return(
            <div className="col-md-2">
                <div className="cardBody" onClick={this.generateQuestion}>
                    <div className={this.state.question.solved ? "solvedCard" : "cardContent"}>
                        <span className="col-md-12 cardPoints">
                            {this.state.question["points"]}
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card