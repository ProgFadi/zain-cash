import React from 'react';

export interface ButtonProps {
  label: string;
}
function Button(props:ButtonProps) {
    return (
      <button>Hi</button>
    );
}

export default Button;