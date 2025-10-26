'use client';
import * as React from 'react';

type Props = {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export function DebouncedInput({ value: initialValue, onChange, debounce = 500, ...props }: Props) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => setValue(initialValue), [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => onChange(value), debounce);
    return () => clearTimeout(timeout);
  }, [value, debounce]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`border p-2 rounded ${props.className ?? ''}`}
    />
  );
}
