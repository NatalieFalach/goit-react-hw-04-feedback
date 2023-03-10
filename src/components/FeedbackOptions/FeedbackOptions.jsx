import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  return (
    <div className={styles.btnWrapper}>
        {options.map(option => {
          return (
            <button className={styles.btn} key={option} onClick={() => onLeaveFeedback(option)}>{ option }</button>
          )
        })}
      </div>
  )
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}; 

export default FeedbackOptions;