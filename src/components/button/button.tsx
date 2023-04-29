import classNames from "classnames";
import React, { ReactNode } from "react";

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export interface BaseButtonProps {
  className?: string;
  disbaled?: boolean;
  type?: ButtonType,
  size?: ButtonSize,
  children: ReactNode,
  href?: string;
  disabled?: boolean;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    className,
    disbaled,
    type,
    size,
    href,
    disabled,
    children
  } = props

  const classes = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    [`${disbaled}`]: (type === 'link') && disbaled,
  })


  if (type === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  }


  return <button
    className={classes}
    disabled={disabled}
  >
    {children}
  </button>
}

Button.defaultProps = {
  disabled: false,
  type: 'default'
}

export default Button
