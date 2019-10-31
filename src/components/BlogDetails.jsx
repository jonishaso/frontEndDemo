import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleBlog } from '../actions/index'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import UserName from './UserName'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
	root: {padding : '20px'}
})

const Blog = props => {
	const { id, userId, title, body } = props.blog
	const classes = useStyles()
	return (
		<Paper className={classes.root}>
			<Typography gutterBottom variant="h5" component="h3">
				{`#${id} - ${title}`}
			</Typography>
			<Typography gutterBottom variant="h5" component="h3">
				<UserName userId={userId} />
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
				{body}
			</Typography>
		</Paper>
	)
}

class BlogDetail extends React.Component {
	componentDidMount() {
		const { blogId } = this.props
		this.props.fetchSingleBlog(blogId)
	}
	render() {
    console.log(this.props)
		const blog = this.props.blog
		return blog === null ? <CircularProgress /> : <Blog blog={blog} />
	}
}

const mapStateToProps = state => ({
	blog: state.selectedBlog
})

export default connect(
	mapStateToProps,
	{ fetchSingleBlog}
)(BlogDetail)
