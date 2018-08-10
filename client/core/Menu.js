import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const isActive = (history, path) => {
    if (history.location.pathname == path)
        return {color: '#ff4081'}
    else
        return {color: '#ffffff'}
}


export default Menu