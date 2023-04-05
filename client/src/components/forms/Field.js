import React from 'react'
import Icon from '../Icon'

const Field = (props) => {

    return (
        <div className="container-input">
            {props.icon && <Icon icon={props.icon} />}
            <input {...props} className='input' />
        </div>
    )
}

export default Field