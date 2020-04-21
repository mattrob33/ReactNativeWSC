'use strict';

import React, {Component} from 'react';
import {
  View,
  Button,
  FlatList,
  TextInput
} from 'react-native';
import styles from './Styles';
import wsc from './data/wsc.json'
import Flashcard, {Side} from './components/Card'

interface AppProps {
  
}

interface AppState {
  questionNum: number
  side: Side
}

export default class App extends Component<AppProps, AppState> {

  constructor(props) {
    super(props)

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

  returnToTop() {
    (this.refs._flatList as any).scrollToOffset({offset: 0, animated: true})
  }

  jumpTo(to: number) {
    (this.refs._flatList as any).scrollToIndex({index: '' + to, animated: true})
  }

  getItemLayout (data, index) {
    const height = 300
    return {
      length: height,
      offset: height * index + height,
      index
    }
  }
  
  render() {
    return(
      <View style={styles.container}>
        <Button
            title='Back to Top'
            onPress={() => this.returnToTop() }
            />

        <FlatList
          ref='_flatList'
          data={Object.keys(wsc)}
          getItemLayout={this.getItemLayout}
          renderItem={({item, index}) =>
            <Flashcard
              key={index + 1}
              questionNum={index + 1}
              questionText={this.getText(index + 1, Side.Question)}
              answerText={this.getText(index + 1, Side.Answer)}
              />
          }
          keyExtractor={(item, index) => (index + 1) + ''}
          />

        
        <View style={styles.footer}>
          <TextInput
            ref='gotoText'
            style={styles.jumpToText}
            placeholder='0'
            keyboardType='numeric'
            />
          <Button
              title='    Go    '
              onPress={() => this.jumpTo((this.refs.gotoText as any)._lastNativeText) }
              />
        </View>
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