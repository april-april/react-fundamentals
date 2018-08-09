import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'

class EditProfile extends Component {
    constructor({match}) {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            redirectToProfile: false,
            error: ''
        }
    this.match = match
    }

    componentDidMount = () => {
        const jwt = auth.isAuthenticated()
        read({
          userId: this.match.params.userId
        }, {t: jwt.token}).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                this.setState({name: data.name, email: data.email})
            }
        })
    }
}

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired
}