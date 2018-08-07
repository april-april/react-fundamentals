import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'


class Signup extends Component {
    state = {
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }
}