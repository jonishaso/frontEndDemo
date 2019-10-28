import React from 'react'
import { fetchUser } from '../actions/index'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2)
	}
}))

const UserDetail = ({ user }) => {
	const classes = useStyles()
	return (
		<div>
			<Paper className={classes.root}>
				<Typography variant="h5" component="h3">
					Author: {user.name}
				</Typography>
				<Typography component="p">{user.email}</Typography>
			</Paper>
		</div>
	)
}

class User extends React.Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId)
	}
	render() {
		// return <UserDetail user={this.props.user} />
		return <Typography component="p">Author: {this.props.userInfo.name}</Typography>
	}
}

const mapStateToProps = (state, ownProps) => {
	let userInfo = state.users.find(i => i.id === ownProps.userId)
	if (userInfo === undefined) return { userInfo: { name: 'loading' } }
	return { userInfo: userInfo }
}
export default connect(
	mapStateToProps,
	{ fetchUser }
)(User)
