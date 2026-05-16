import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {action}
    </div>
  );
}

interface StatCardProps {
  icon: ReactNode;
  iconBg: string;
  value: string | number;
  label: string;
  badge?: string;
  badgeColor?: string;
}

export function StatCard({ icon, iconBg, value, label, badge, badgeColor = 'bg-slate-100 text-slate-600' }: StatCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        {badge && (
          <span className={`text-xs font-medium ${badgeColor} px-2 py-0.5 rounded-full`}>
            {badge}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </Card>
  );
}

interface ActionCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description?: string;
  desc?: string;
  color: 'indigo' | 'purple' | 'emerald' | 'amber';
}

const actionColors = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-900', textLight: 'text-indigo-600' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-900', textLight: 'text-purple-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-900', textLight: 'text-emerald-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-900', textLight: 'text-amber-600' },
};

export function ActionCard({ href, icon, title, description, desc, color }: ActionCardProps) {
  const c = actionColors[color];
  return (
    <a
      href={href}
      className={`flex items-center gap-3 p-4 ${c.bg} hover:opacity-90 rounded-lg transition-colors border ${c.border}`}
    >
      <span className={c.textLight}>{icon}</span>
      <div>
        <p className={`font-medium ${c.text} text-sm`}>{title}</p>
        <p className={`text-xs ${c.textLight}`}>{description || desc}</p>
      </div>
    </a>
  );
}

export function EmptyState({ icon, title, description }: { icon: ReactNode; title: string; description?: string }) {
  return (
    <div className="text-center py-8 text-gray-400">
      <div className="w-12 h-12 mx-auto mb-3 opacity-30">{icon}</div>
      <p className="text-sm font-medium">{title}</p>
      {description && <p className="text-xs mt-1">{description}</p>}
    </div>
  );
}

export function LoadingSpinner({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon,
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}) {
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50',
    secondary: 'bg-white border border-slate-300 text-gray-700 hover:bg-slate-50',
    danger: 'text-red-600 hover:bg-red-50',
    ghost: 'text-indigo-600 hover:text-indigo-700',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
