import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.statisticsList}>
    <li className={css.statisticsListItem}>Good:{good}</li>
    <li className={css.statisticsListItem}>Neutral:{neutral}</li>
    <li className={css.statisticsListItem}>Bad:{bad}</li>
    <li className={css.statisticsListItem}>Total:{total}</li>
    <li className={css.statisticsListItem}>
      Positive feedbac:{positivePercentage}%
    </li>
  </ul>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
