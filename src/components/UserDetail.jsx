import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchUser, fetchUserBlog } from '../actions/index'
import BlogList from './BlogList'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Avatar from '@material-ui/core/Avatar'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PhoneIcon from '@material-ui/icons/LocalPhone'
import EmailIcon from '@material-ui/icons/Email'
import WebIcon from '@material-ui/icons/Web'
import FingerprintIcon from '@material-ui/icons/Fingerprint'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2)
	}
}))

const UserDetail = ({ user }) => {
	const classes = useStyles()
	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					User Details
				</ListSubheader>
			}
			className={classes.root}
		>
			<ListItem button>
				<ListItemAvatar>
					<Avatar>{user.name.slice(0, 1)}</Avatar>
				</ListItemAvatar>
				<ListItemText primary={user.name} />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<FingerprintIcon />
				</ListItemIcon>
				<ListItemText primary={user.id} />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<PhoneIcon />
				</ListItemIcon>
				<ListItemText primary={user.phone} />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<EmailIcon />
				</ListItemIcon>
				<ListItemText primary={user.email} />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<WebIcon />
				</ListItemIcon>
				<ListItemText primary={user.website} />
			</ListItem>
		</List>
	)
}
UserDetail.propTypes = {
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
class User extends React.Component {
	state = { isValidId: true }
	componentDidMount() {
		const {
			match: { params }
		} = this.props
		let { userId } = params
		if (Number.isInteger(Number(userId)) && 1 <= userId && userId <= 10) {
			this.props.fetchUser(userId)
			this.props.fetchUserBlog(userId)
		} else this.setState({ isValidId: false })
	}
	render() {
		let { userInfo, userBlogs } = this.props
		if (this.state.isValidId)
			return (
				<Grid container spacing={2} alignItems="flex-start" justify="spread-around">
					<Grid item md={4} sm={12}>
						{userInfo === null ? <CircularProgress /> : <UserDetail user={userInfo} />}
					</Grid>
					<Grid item md={8} sm={12}>
						<BlogList blogs={userBlogs} />
					</Grid>
				</Grid>
			)
		else return <h2> Err: invalid User id </h2>
	}
}
User.propTypes = {
	userInfo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		username: PropTypes.string,
		phone: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		website: PropTypes.string.isRequired,
		address: PropTypes.any,
		company: PropTypes.any
	}),
	userBlogs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			userId: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired
		})
	)
}
const mapStateToProps = (state, ownProps) => {
	return {
		userInfo: state.user,
		userBlogs: state.blogList
	}
}
export default connect(
	mapStateToProps,
	{ fetchUser, fetchUserBlog }
)(User)
