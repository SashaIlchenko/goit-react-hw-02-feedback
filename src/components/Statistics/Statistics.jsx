import PropTypes from 'prop-types';
import { StatItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <><StatItem>Good: {good}</StatItem>
            <StatItem>Neutral: {neutral}</StatItem>
            <StatItem>Bad:  {bad}</StatItem>
            <StatItem>Total: {total}</StatItem>
            <StatItem>Positive feedback: {positivePercentage}%</StatItem></>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}