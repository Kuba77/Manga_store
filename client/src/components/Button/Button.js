import React from 'react';
import classNames from 'classnames'
import './Button.scss';

const Button = ({ onClick, type, children, size = 's' }) => {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn--small': size === 's',
        'btn--medium': size === 'm',
        'btn--transparent': type === 'transparent'
      });

    return (
        <button
            className={ btnClass }
            onClick={ onClick }
        >
            { children }
        </button>
    )
}
export default Button