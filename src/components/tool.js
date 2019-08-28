import React from 'react'
import { Icon } from '@iconify/react'
import reactIcon from '@iconify/icons-simple-icons/react'
import angularIcon from '@iconify/icons-simple-icons/angular'
import sassIcon from '@iconify/icons-simple-icons/sass'
import bootstrapIcon from '@iconify/icons-simple-icons/bootstrap'
import djangoIcon from '@iconify/icons-simple-icons/django'
import wordpressIcon from '@iconify/icons-simple-icons/wordpress'
import gulpIcon from '@iconify/icons-simple-icons/gulp'
import webpackIcon from '@iconify/icons-simple-icons/webpack'
import gatsbyIcon from '@iconify/icons-simple-icons/gatsby'
import jQueryIcon from '@iconify/icons-simple-icons/jquery'
import awsIcon from '@iconify/icons-simple-icons/amazonaws'
import firebaseIcon from '@iconify/icons-simple-icons/firebase'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default (props) => {
    const icons = {
        react: reactIcon,
        angular: angularIcon,
        bootstrap: bootstrapIcon,
        django: djangoIcon,
        gulp: gulpIcon,
        wordpress: wordpressIcon,
        gatsby: gatsbyIcon,
        webpack: webpackIcon,
        jquery: jQueryIcon,
        aws: awsIcon,
        sass: sassIcon,
        firebase: firebaseIcon
    }
    const icon = icons[props.tool]
    return (
        <OverlayTrigger
            key="top"
            placement="bottom"
            overlay={
                <Tooltip id='tooltip-top'>
                    {props.tool}
                </Tooltip>
            }
        >
            <Icon icon={icon} {...props} className="tool-icon" />
        </OverlayTrigger>
    )
}