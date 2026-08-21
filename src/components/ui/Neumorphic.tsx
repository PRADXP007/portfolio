'use client';

import React from 'react';

// 1. Pure Liquid Glass Button
interface NeuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'maroon';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function NeuButton({
  href,
  variant = 'primary',
  icon,
  children,
  className = '',
  target,
  rel,
  ...props
}: NeuButtonProps) {
  const baseStyles =
    'group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F8FA]';

  const variantStyles = {
    primary: 'glass-btn-primary',
    secondary: 'glass-btn-secondary',
    maroon: 'glass-btn-primary shadow-[0_4px_16px_rgba(0,0,0,0.15)]',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses} onClick={props.onClick as any}>
        {icon && <span className="transition-transform duration-150 group-hover:scale-110">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="transition-transform duration-150 group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

// 2. Pure Liquid Glass Chip / Pill
interface NeuChipProps {
  label: string;
  tag?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function NeuChip({
  label,
  tag,
  active = false,
  onClick,
  className = '',
}: NeuChipProps) {
  const isClickable = !!onClick;

  return (
    <span
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 select-none ${
        active
          ? 'bg-neutral-900 border border-neutral-900 text-white font-semibold shadow-sm'
          : 'glass-chip'
      } ${isClickable ? 'cursor-pointer hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-black' : 'cursor-default'} ${className}`}
    >
      <span>{label}</span>
      {tag && (
        <span
          className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded ${
            active ? 'bg-white text-black' : 'bg-black/5 text-neutral-600 border border-black/5'
          }`}
        >
          {tag}
        </span>
      )}
    </span>
  );
}

// 3. Pure Liquid Glass Icon Well
interface NeuIconWellProps {
  icon: React.ReactNode;
  href?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  active?: boolean;
}

export function NeuIconWell({
  icon,
  href,
  label,
  size = 'md',
  className = '',
  active = false,
}: NeuIconWellProps) {
  const sizeMap = {
    sm: 'w-8 h-8 p-1.5 text-xs',
    md: 'w-10 h-10 p-2 text-sm',
    lg: 'w-12 h-12 p-3 text-base',
  };

  const baseStyles = `inline-flex items-center justify-center rounded-xl liquid-glass transition-all duration-200 text-neutral-700 hover:text-black hover:border-black/20 hover:bg-white ${
    active ? 'bg-black text-white border-black' : ''
  } ${sizeMap[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`${baseStyles} hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-black`}
      >
        {icon}
      </a>
    );
  }

  return (
    <div aria-label={label} className={baseStyles}>
      {icon}
    </div>
  );
}

// 4. Pure Inset Glass Form Input
interface NeuInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function NeuInput({ label, id, className = '', ...props }: NeuInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 rounded-xl glass-input text-sm text-neutral-900 placeholder-neutral-400 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${className}`}
        {...props}
      />
    </div>
  );
}

// 5. Pure Inset Glass Form Textarea
interface NeuTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function NeuTextarea({ label, id, className = '', ...props }: NeuTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full px-4 py-3 rounded-xl glass-input text-sm text-neutral-900 placeholder-neutral-400 transition-all duration-150 resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${className}`}
        {...props}
      />
    </div>
  );
}
