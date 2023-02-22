import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      }
    })
  };
  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  };
  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      }
    })
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  }
  countPositiveFeedbackPercentage() {
    return Math.round(this.state.good * 100 / this.countTotalFeedback())
  }
  render() {
    const { good, neutral, bad } = this.state;

    return (<div>

      <Section title={"Please leave feedback"}>
        <div>
          <button type="button" onClick={this.handleClickGood}>Good</button>
          <button type="button" onClick={this.handleClickNeutral}>Neutral</button>
          <button type="button" onClick={this.handleClickBad}>Bad</button></div>
        {/* <FeedbackOptions options={ } onLeaveFeedback={ } /> */}
      </Section>
      <Section title={"Statistics"} >
        <Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} /> </Section>
    </div>)
  }
}
