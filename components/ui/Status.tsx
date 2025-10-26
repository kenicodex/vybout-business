import React from 'react';
import { tv } from 'tailwind-variants';

export type StatusVariant = 'active' | 'scheduled' | 'draft' | 'completed' | 'pending' | 'error' | 'warning' | 'success';

export interface StatusProps {
  variant?: StatusVariant;
  label: string;
  className?: string;
}

const statusStyles = tv({
  base: 'px-2 py-1 rounded-full text-xs font-medium inline-block',
  variants: {
    variant: {
      active: 'bg-green-100 text-green-800',
      scheduled: 'bg-blue-100 text-blue-800',
      draft: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-gray-100 text-gray-800',
      pending: 'bg-purple-100 text-purple-800',
      error: 'bg-red-100 text-red-800',
      warning: 'bg-orange-100 text-orange-800',
      success: 'bg-emerald-100 text-emerald-800',
    }
  },
  defaultVariants: {
    variant: 'pending'
  }
});

export const Status: React.FC<StatusProps> = ({ 
  variant = 'pending',
  label,
  className
}) => {
  return (
    <span className={statusStyles({ variant, className })}>
      {label}
    </span>
  );
};

// Helper function to map string status to variant
export const getStatusVariant = (status: string): StatusVariant => {
  const statusMap: Record<string, StatusVariant> = {
    'Active': 'active',
    'Scheduled': 'scheduled',
    'Draft': 'draft',
    'Completed': 'completed',
    'Pending': 'pending',
    'Error': 'error',
    'Warning': 'warning',
    'Success': 'success',
  };

  return statusMap[status] || 'pending';
};

export default Status;