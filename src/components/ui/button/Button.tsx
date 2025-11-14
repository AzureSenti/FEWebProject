import React from 'react';


import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: 'White' | 'LightSeaGreen' | '';
}

export function Button({ children, color = 'White', className = '', ...props }: ButtonProps) {

}