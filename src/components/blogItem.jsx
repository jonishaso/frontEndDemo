import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/index'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import UserItem from './UserItem'

const useStyles = makeStyles({
	card: {
		maxWidth: 345,
		height: 400
	},
	media: {
		height: 140
	},
	textContent: {
		height: 185,
		overflow:'scroll'
	}
})

const BlogDetail = ({ id, userId, title, body }) => {
	const classes = useStyles()
	return (
		<Grid item xs={4}>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="/puppy.jpg"
						title="Contemplative Reptile"
					/>
					<CardContent className={classes.textContent}>
						<Typography gutterBottom variant="h5" component="h4">
							{title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{body}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						<UserItem userId={userId}/>
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

const mapStateToProps = state => ({
	currentUser: state.user
})

export default connect(
	mapStateToProps,
	{ fetchUser }
)(BlogDetail)
