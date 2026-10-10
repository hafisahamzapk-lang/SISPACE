import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', showTagline = true, size = 'md', variant = 'light' }: LogoProps) {
  const containerHeights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16'
  };

  const isDark = variant === 'dark';

  return (
    <Link href="/" className={`inline-flex items-center group transition-transform hover:scale-[1.02] ${className}`}>
      {/* Official SiSpace Qatar Brand Logo Image */}
      <div className={`relative ${containerHeights[size]} w-auto aspect-[3.2/1] flex items-center ${isDark ? 'bg-white/95 px-3 py-1.5 rounded-xl shadow-md border border-white/20' : ''}`}>
        <Image
          src="/images/sispace_logo.png"
          alt="SiSpace Qatar - Empowering Women's Home Business"
          width={280}
          height={88}
          priority
          className="h-full w-auto object-contain"
        />
      </div>
    </Link>
  );
}
