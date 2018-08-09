import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import DeleteIcon from 'material-ui-icons/Delete'
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog'
import auth from './../auth/auth-helper'
import {remove} from './api-user.js'
import {Redirect, Link} from 'react-router-dom'

class DeleteUser extends Component {
    state = {
        redirect: false,
        open: false
    }
    clickButton = () => {
        this.setState({open: true})
    }
    deleteAccount = () => {
        const jwt = auth.isAuthenticated()
        remove({
            userId: this.props.userId
        }, {t: jwt.token}).then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                auth.signout(() => console.log('deleted'))
                this.setState({redirect: true})
            }
        })
    }
}















export default DeleteUser