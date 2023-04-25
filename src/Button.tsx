import React, { HTMLAttributes, ReactNode } from 'react';
import './index.css';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Provide a text for the button
   */
  children: ReactNode;

  /**
   * Which variant look would you like to use
   */
  variant: 'primary' | 'secondary';
}

/**
 * This is a special button!!!
 */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray ',
        color: 'white',
        border: 'none',
        borderRadius: 100,
        padding: 10,
        cursor: 'pointer',
      }}
    >
      <div className="text-red-500 p-4 rounded-lg shadow-lg">
        This is a sample component with TailwindCSS styles.
      </div>
      {children}
    </button>
  );
};
