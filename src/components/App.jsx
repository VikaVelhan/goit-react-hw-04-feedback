//import React, { Component } from 'react';
import { useState } from 'react';
import Statistics from '..//components/Statistics/Statistics';
import FeedbackOptions from '..//components/FeedbackOptions/FeedbackOptions';
import Section from '..//components/Section/Section';
import Notification from '..//components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = e => {
    if (e === 'Good') {
      setGood(prevState => prevState + 1);
    } else if (e === 'Neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (e === 'Bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = bad + neutral + good;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() !== 0) {
      const positivePercentage = Math.round(
        (good / countTotalFeedback()) * 100
      );
      return positivePercentage;
    } else return 0;
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={countFeedback}
        />
      </Section>
      {
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      }
    </div>
  );
}

/*export class oldApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    if (e === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (e === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (e === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countFeedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    console.log('клик по гуд');
  };

  countFeedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    console.log('клик по нейтрал');
  };

  countFeedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    console.log('клик по бед');
  };

  countTotalFeedback = () => {
    const total = this.state.bad + this.state.neutral + this.state.good;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() !== 0) {
      const positivePercentage = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      );
      return positivePercentage;
    } else return 0;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}*/
