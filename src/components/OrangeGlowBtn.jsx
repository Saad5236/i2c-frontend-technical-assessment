import React from 'react'
import { Link } from 'react-router-dom'

function OrangeGlowBtn({ toLink, children }) {
     let classes = "nav-link orange-glow-btn bg-primary rounded-pill fw-bold text-white"
    return (
        toLink ? <Link className={classes} aria-current="page" to="#">{children}</Link> : <button className={classes}>{children}</button>
    )
}

export default OrangeGlowBtn
