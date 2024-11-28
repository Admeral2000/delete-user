
// app/components/ui/input.tsx

import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${props.className}`}
    />
  );
}
