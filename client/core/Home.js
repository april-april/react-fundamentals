import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import beachImg from './../assets/images/beach.jpg'

const styles = theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      marginTop: theme.spacing.unit * 5
    },
    title: {
      padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
      color: theme.palette.text.secondary
    },
    media: {
      minHeight: 330
    }
})