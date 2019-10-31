import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/index'

import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
	root: { padding: '20px' }
})
const CommentListDetails = props => {
	const comments = props.comments
	const classes = useStyles()
	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					Comments
				</ListSubheader>
			}
			className={classes.root}
		>
			{comments.map(i => (
				<ListItem key={i.id} button>
					<ListItemAvatar>
						<Avatar>{i.email.slice(0, 1)}</Avatar>
					</ListItemAvatar>
					<ListItemText primary={i.body} />
				</ListItem>
			))}
		</List>
	)
}
CommentListDetails.prototype = {
	comment: PropTypes.shape({
		postId: PropTypes.number.isRequired,
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
	})
}
class CommentList extends React.Component {
	componentDidMount() {
		const { blogId } = this.props
		this.props.fetchComments(blogId)
	}
	F
	render() {
		const comments = this.props.comments
		return comments.length === 0 ? (
			<CircularProgress />
		) : (
			<CommentListDetails comments={comments} />
		)
	}
}
const mapStateToProps = state => ({
	comments: state.commentList
})
export default connect(
	mapStateToProps,
	{ fetchComments }
)(CommentList)
