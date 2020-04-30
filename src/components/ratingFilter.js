import React from 'react'
import Rating from './rating'
import { minRating } from '../redux/actions/actions'
import { connect } from 'react-redux'

const RatingFilter = ({ countRating, minRating}) => {

return (<div>
    <Rating count={countRating} change={minRating} />
</div>)
}

const mapDispatchToProps = dispatch => ({
    minRating : (star)=> dispatch(minRating(star))
})
const mapStateToProps = state => ({
    countRating : state.countRating
})
export default connect(mapStateToProps, mapDispatchToProps) (RatingFilter) 