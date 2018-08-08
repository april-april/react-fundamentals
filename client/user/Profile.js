import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Edit from 'material-ui-icons/Edit'
import Person from 'material-ui-icons/Person'
import Divider from 'material-ui/Divider'
import DeleteUser from './DeleteUser'
import auth from './../auth/auth-helper'
import {read} from './api-user.js'
import {Redirect, Link} from 'react-router-dom'

const styles = theme => ({
  root: theme.mixins.gutters({
	maxWidth: 600,
	margin: 'auto',
	padding: theme.spacing.unit * 3,
	marginTop: theme.spacing.unit * 5
  }),
  title: {
	margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,
	color: theme.palette.protectedTitle
  }
})

class Profile extends Component {
	constructor({match}) {
		super()
		this.state = {
		user: '',
		redirectToSignin: false
		}
		this.match = match
	}
	init = (userId) => {
		const jwt = auth.isAuthenticated()
		read({
		userId: userId
		}, {t: jwt.token}).then((data) => {
		if (data.error) {
			this.setState({redirectToSignin: true})
		} else {
			this.setState({user: data})
		}
		})
	}
	componentWillReceiveProps = (props) => {
		this.init(props.match.params.userId)
	}
	componentDidMount = () => {
		this.init(this.match.params.userId)
	}
	
}

Profile.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile)
