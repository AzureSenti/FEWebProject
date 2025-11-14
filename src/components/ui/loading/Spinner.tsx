import React from 'react';
import './spinner.css'

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: 'loader1' | 'loader2';
}

export function Spinner({ type = "loader1", className = "", ...props }: SpinnerProps) {
    const finalClassName = `${type} ${className}`.trim();
    return <div className={finalClassName} {...props}></div>;
}