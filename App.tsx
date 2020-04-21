'use strict';

import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import styles from './Styles';
import wsc from './data/wsc.json'
import Flashcard from './components/Card'

export enum Side {
  Question,
  Answer
}

interface AppProps {
  
}

interface AppState {
  questionNum: number
  side: Side
}

export default class App extends Component<AppProps, AppState> {

  constructor(props) {
    super(props)

    this.state = {
      questionNum: 1,
      side: Side.Question
    }

    this.onTap = this.onTap.bind(this)
    this.onSwipeLeft = this.onSwipeLeft.bind(this)
    this.onSwipeRight = this.onSwipeRight.bind(this)

    this.restart = this.restart.bind(this)
  }

  onSwipeLeft(questionNum) {
    let newQuestionNum = questionNum + 1
        if (newQuestionNum > getMaxNumQuestions())
          newQuestionNum = getMaxNumQuestions()

    this.setState({
      side: Side.Question,
      questionNum: newQuestionNum
    })
  }

  onSwipeRight(questionNum) {
    let newQuestionNum = questionNum - 1
        if (newQuestionNum < 1)
          newQuestionNum = 1

    this.setState({
      side: Side.Question,
      questionNum: newQuestionNum
    })
  }

  onTap(side: Side) {
    let newSide = Side.Question
    if (side == Side.Question)
      newSide = Side.Answer
    this.setState({
      side: newSide
    })
  }

  restart() {
    this.setState({
      questionNum: 1,
      side: Side.Question
    })
  }

  render() {
    let cardList = []

    for (let qNum = 1; qNum <= getMaxNumQuestions(); qNum++) {
      cardList.push(
        <Flashcard
          questionNum={qNum}
          questionText={this.getText(qNum, Side.Question)}
          answerText={this.getText(qNum, Side.Answer)}
          />
        )
    }
    
    return(
      <View style={styles.container}>
        <ScrollView>
            {cardList}
        </ScrollView>
      </View>
    )
  }

  getText(qNum: number, side: Side): string {
    let sideNum = 0
    if (side == Side.Answer)
      sideNum = 1

    let text = wsc[qNum][sideNum]
    if (side == Side.Question)
      text = qNum + '. ' + text
    
      return text
  }
}

function getMaxNumQuestions() {
  return 107
}