import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  //Calculating rating average
  let averageRating =
    feedback.reduce((acc, current) => {
      return acc + current.rating
    }, 0) / feedback.length

  return (
    <div className='Feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating:{' '}
        {(isNaN(averageRating) ? 0 : averageRating)
          .toFixed(1)
          .replace(/[.,]0$/, '')}
      </h4>
    </div>
  )
}

export default FeedbackStats
