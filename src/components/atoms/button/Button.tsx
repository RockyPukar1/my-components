/* @flow */
import React from 'react';
import { ReactNode, ReactElement } from 'react';

type ButtonType = 'button' | 'reset' | 'submit';
type Props = {
  /**
   * Options are button, reset, submit
   */
  type: ButtonType,

  /**
   * Event when the mouse is clicked
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>,

  /**
   * The element of button
   */
  children: ReactNode,

  /**
   * Tailwindcss classes for styling with naxatw- as prefix
   */
  className?: string,

  /**
   * Grey Styling for disabled button
   */
  disabled?: boolean,
}

const Button = (props: Props): ReactElement => {
  const { type, onClick, children, className, disabled } = props;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`naxatw-bg-blue-600 naxatw-text-white ${className} ${type === 'reset' ? 'naxatw-bg-red-700' : (type === 'submit' ? 'naxatw-bg-green-400' : '')} ${disabled && 'disabled:naxatw-opacity-75 naxatw-bg-slate-300 naxatw-text-black naxatw-p-2'}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  children: 'Label Button',
  onClick: () => {},
}

export default Button
