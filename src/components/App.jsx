import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statisctics from './Statistics/Statistics';
import styles from './App.module.css'
import { useState } from 'react';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const result = (100 / countTotalFeedback()) * good
    return `${result.toFixed()}%`
  }

  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood((prev) => prev + 1)
        break;
       case 'neutral':
        setNeutral((prev) => prev + 1)
        break;
      case 'bad':
        setBad((prev) => prev + 1)
        break;
      default:
        return;
    }
  }

  return (
    <div className={styles.wrapper}>
        <Section title={'Please levave feedback'}>
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        
        <Section title={'Statistics'}>
          <Statisctics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />
        </Section>
      </div>
  )
}
