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
    /*  if (e === 'Good') {
      setGood(prevState => prevState + 1);
    } else if (e === 'Neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (e === 'Bad') {
      setBad(prevState => prevState + 1);
    }*/
    switch (e) {
      case 'Good':
        setGood(good + 1);
        break;

      case 'Neutral':
        setNeutral(neutral + 1);
        break;

      case 'Bad':
        setBad(bad + 1);
        break;

      default:
        return;
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
