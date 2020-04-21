import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from '../Styles';

export enum Side {
    Question,
    Answer
  }

interface AppProps {
    questionNum: number
    questionText: string
    answerText: string
}

interface AppState {
    questionNum: number
    side: Side
}

export default class Flashcard extends Component<AppProps, AppState> {

  constructor(props) {
    super(props)

    this.state = {
        questionNum: this.props.questionNum,
        side: Side.Question
    }

    this.onTap = this.onTap.bind(this)
  }

  onTap(side: Side) {
    let newSide = Side.Question
    if (side == Side.Question)
      newSide = Side.Answer
    this.setState({
      side: newSide
    })
  }

  getTextForSide(side: Side) {
    if (side == Side.Question)
      return this.props.questionText
    return this.props.answerText
  }

  render() {
    return(
        <Text style={styles.flashcard} onPress={() => this.onTap(this.state.side)}>
            {this.getTextForSide(this.state.side)}
        </Text>
    )
  }
}