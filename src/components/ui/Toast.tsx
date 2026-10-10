'use client';

import React from 'react';
import { useApp } from '@/lib/context/app-context';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

export function Toast() {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className={`px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border text-sm font-medium ${
        toast.type === 'success' 
          ? 'bg-slate-900 text-white border-rose-500/50' 
          : toast.type === 'error'
          ? 'bg-rose-900 text-white border-rose-400'
          : 'bg-amber-900 text-white border-amber-400'
      }`}>
        {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />}
        {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-300 shrink-0" />}
        {toast.type === 'info' && <Info className="w-5 h-5 text-amber-300 shrink-0" />}
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
