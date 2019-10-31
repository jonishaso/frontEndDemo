import React from 'react'
import PropTypes from 'prop-types'
import { fetchUser } from '../actions/index'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'

class UserName extends React.Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId)
	}
	render() {
		let { userInfo } = this.props
		return (
			<Typography component="p">
				Author: {userInfo === null ? 'loading' : userInfo.name}
			</Typography>
		)
	}
}
UserName.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		username: PropTypes.string,
		phone: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		website: PropTypes.string.isRequired,
		address: PropTypes.any,
		company: PropTypes.any
	})
}

const mapStateToProps = (state, ownProps) => {
	return { userInfo: state.user }
}
export default connect(
	mapStateToProps,
	{ fetchUser }
)(UserName)
