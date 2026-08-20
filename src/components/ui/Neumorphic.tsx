'use client';

import React from 'react';

// 1. Neumorphic Button
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
    'group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-sans text-xs font-bold tracking-widest uppercase transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1A28] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3ECE0]';

  const variantStyles = {
    primary:
      'neu-raised text-[#5C1A28] hover:text-[#400414] active:neu-pressed active:text-[#400414]',
    secondary:
      'neu-flat text-[#534344] hover:text-[#400414] hover:border-[#5C1A28]/25 active:neu-pressed',
    maroon:
      'bg-[#5C1A28] text-[#FAF6EE] shadow-[4px_4px_12px_rgba(92,26,40,0.35),-4px_-4px_10px_rgba(255,253,248,0.8)] border border-[#7A2436]/40 hover:bg-[#400414] active:shadow-[inset_3px_3px_6px_rgba(43,13,20,0.6)] active:translate-y-0',
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

// 2. Neumorphic Chip / Skill Pill
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
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 select-none ${
        active ? 'neu-chip-active font-semibold' : 'neu-chip text-[#400414]'
      } ${isClickable ? 'cursor-pointer hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#5C1A28]' : 'cursor-default'} ${className}`}
    >
      <span>{label}</span>
      {tag && (
        <span
          className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded ${
            active ? 'bg-[#5C1A28] text-[#FAF6EE]' : 'bg-[#FAF6EE] text-[#7A2436] border border-[#5C1A28]/10'
          }`}
        >
          {tag}
        </span>
      )}
    </span>
  );
}

// 3. Neumorphic Icon Container Well
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

  const baseStyles = `inline-flex items-center justify-center rounded-xl transition-all duration-150 ${
    active ? 'neu-pressed text-[#5C1A28]' : 'neu-raised text-[#5C1A28] hover:text-[#400414]'
  } ${sizeMap[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`${baseStyles} hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#5C1A28]`}
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

// 4. Inset Neumorphic Form Input
interface NeuInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function NeuInput({ label, id, className = '', ...props }: NeuInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-[#400414] mb-2">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 rounded-xl neu-inset text-sm text-[#1E1B14] placeholder-[#867274]/70 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1A28] ${className}`}
        {...props}
      />
    </div>
  );
}

// 5. Inset Neumorphic Form Textarea
interface NeuTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function NeuTextarea({ label, id, className = '', ...props }: NeuTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-[#400414] mb-2">
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full px-4 py-3 rounded-xl neu-inset text-sm text-[#1E1B14] placeholder-[#867274]/70 transition-all duration-150 resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1A28] ${className}`}
        {...props}
      />
    </div>
  );
}
