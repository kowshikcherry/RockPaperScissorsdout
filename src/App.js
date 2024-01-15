import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    testid: 'rockButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    testid: 'scissorsButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    testid: 'paperButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
import ReactPopUp from './components/rules'

import Imagebutton from './components/buttonimages'

import {Component} from 'react'

class App extends Component {
  state = {
    score: 0,
    threesection: true,
    randomurl: '',
    userurl: '',
    stateforgame: '',
  }

  componentDidMount() {
    this.backendprocess()
  }

  backendprocess = () => {
    let random_number = Math.floor(Math.random() * 3)
    this.setState({randomurl: choicesList[random_number].imageUrl})
  }

  onchangewnorloose = userurl => {
    const {randomurl} = this.state
    if (randomurl === choicesList[0].imageUrl) {
      if (
        randomurl === choicesList[0].imageUrl &&
        userurl === choicesList[2].imageUrl
      ) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          stateforgame: 'YOU WON',
        }))
      } else if (randomurl === userurl) {
        this.setState({stateforgame: 'IT IS DRAW'})
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          stateforgame: 'YOU LOSE',
        }))
      }
    } else if (randomurl === choicesList[1].imageUrl) {
      if (
        randomurl === choicesList[1].imageUrl &&
        userurl === choicesList[0].imageUrl
      ) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          stateforgame: 'YOU WON',
        }))
      } else if (randomurl === userurl) {
        this.setState({stateforgame: 'IT IS DRAW'})
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          stateforgame: 'YOU LOSE',
        }))
      }
    } else if (randomurl === choicesList[2].imageUrl) {
      if (
        randomurl === choicesList[2].imageUrl &&
        userurl === choicesList[1].imageUrl
      ) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          stateforgame: 'YOU WON',
        }))
      } else if (randomurl === userurl) {
        this.setState({stateforgame: 'IT IS DRAW'})
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          stateforgame: 'YOU LOSE',
        }))
      }
    }

    this.setState({threesection: false, userurl})
  }

  renderthree = () => {
    return (
      <ul className="ulforimagebuttons">
        {choicesList.map(each => {
          return (
            <li className="liforimagebuttons" key={each.id}>
              <Imagebutton
                onchangewnorloose={this.onchangewnorloose}
                each={each}
              />
            </li>
          )
        })}
      </ul>
    )
  }

  againplay = () => {
    this.backendprocess()

    this.setState({threesection: true})
  }

  renderplayclicksection = () => {
    const {randomurl, userurl, stateforgame} = this.state
    return (
      <>
        <div className="ulforplayagain">
          <div>
            <h1>YOU</h1>
            <img alt="your choice" className="afterimage" src={userurl} />
          </div>
          <div>
            <h1>Opponient</h1>
            <img alt="opponent choice" className="afterimage" src={randomurl} />
          </div>
        </div>
        <p>{stateforgame}</p>
        <button onClick={this.againplay}>PLAY AGAIN</button>
      </>
    )
  }

  render() {
    const {score, threesection} = this.state
    return (
      <div className="bg1">
        <div className="mainheading">
          <h1>Rock Paper Scissors</h1>
          <div>
            <p>Score</p>
            <p className="scorepara">{score}</p>
          </div>
        </div>
        <div>
          {threesection ? this.renderthree() : this.renderplayclicksection()}
        </div>
        <ReactPopUp />
      </div>
    )
  }
}

export default App
