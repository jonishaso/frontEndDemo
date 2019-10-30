import React from 'react'
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

const mapStateToProps = (state, ownProps) => {
	return { userInfo: state.user }
}
export default connect(
	mapStateToProps,
	{ fetchUser }
)(UserName)
