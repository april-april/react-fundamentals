import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import beachImg from './../assets/images/beachv2.jpg'
import { Link } from 'react-router-dom'

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
      minHeight: 350
    }
})

class Home extends Component {
    render() {
      const { classes } = this.props
      return (
        <Card className={classes.card}>
            <Typography type="headline" component="h2" className={classes.title}>
              Home Page<br/>
              <Link to="/users">Users<br/>></Link>
              <Link to="/Signup">Sign Up<br/></Link>
              <Link to="/Signin">Sign in<br/></Link>
            </Typography>
            <CardMedia className={classes.media} image={beachImg} title="beachboy"/>
            <CardContent>
                <Typography type="body1" component="p">
                    Welcome and Hello World
                </Typography>
            </CardContent>
        </Card>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)