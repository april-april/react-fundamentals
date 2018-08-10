import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const isActive = (history, path) => {
    if (history.location.pathname == path)
        return {color: '#ff4081'}
    else
        return {color: '#ffffff'}
}

const Menu = withRouter(() => (
    <AppBar position="static">
            <Typography type="title" color="inherit">
                Testing 12345
            </Typography>
            <Link to="/">
                <IconButton aria-label="Home" style={isActive(history, "/")}>
                    <HomeIcon/>
                </IconButton>
            </Link>
            <Link to="/users">
                <Button style={isActive(history, "/users")}>Users</Button>
            </Link>
    </AppBar>
))

export default Menu