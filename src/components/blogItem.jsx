import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import UserName from './UserName'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
	root: { marginTop: '30px', marginBottom: '30px' },
	card: {
		maxWidth: 345,
		height: 400
	},
	media: {
		height: 140
	},
	textContent: {
		height: 185,
		overflow: 'scroll',
	}
})

const BlogItem = ({ id, userId, title, body }) => {
	const classes = useStyles()
	return (
		<Grid className={classes.root	} item xs={12} sm={6} md={4}>
			<Card className={classes.card}>

					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="/puppy.jpg"
							title="Contemplative Reptile"
						/>
						<CardContent className={classes.textContent}>
							<Typography gutterBottom variant="h5" component="h4">
								{`#${id} - ${title}`}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{body}
							</Typography>
						</CardContent>
					</CardActionArea>
				<CardActions>
					<Link to={`/user/${userId}`} size="small" color="primary">
						<UserName userId={userId} />
					</Link>
					<Link to={`/blog/${id}`}>More>></Link>
				</CardActions>
			</Card>
		</Grid>
	)
}

const mapStateToProps = state => ({
	currentUser: state.user
})

export default connect(mapStateToProps)(BlogItem)
