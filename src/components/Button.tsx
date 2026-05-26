import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "rounded-full whitespace-nowrap transition-all duration-300 flex items-center justify-center font-medium";
  
  const variants = {
    primary: "bg-white text-[#030D12] px-7 py-3 shadow-md hover:bg-slate-100 active:scale-95",
    secondary: "bg-[#0D212C]/85 text-[#F6FCFF] border border-white/10 px-7 py-3 hover:bg-[#0D212C] active:scale-95",
    tertiary: "bg-[#F6FCFF] text-[#030D12] px-7 py-3 hover:bg-white active:scale-95",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
