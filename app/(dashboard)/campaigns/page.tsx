"use client";
import { useState } from 'react';
import { Text } from '@/components/ui/Typography';
import { DataTable } from '@/components/table';
import { Button } from '@/components/ui/Button';
import Status, { getStatusVariant } from '@/components/ui/Status';

// Sample campaign data
const campaigns = [
  {
    id: '1',
    title: 'Summer Sale Promotion',
    startDate: '2023-07-01',
    endDate: '2023-07-31',
    platform: 'Instagram, Facebook',
    status: 'Active',
    budget: '$5,000',
    engagement: '12.5K'
  },
  {
    id: '2',
    title: 'Product Launch Campaign',
    startDate: '2023-08-15',
    endDate: '2023-09-15',
    platform: 'All Platforms',
    status: 'Scheduled',
    budget: '$10,000',
    engagement: 'N/A'
  },
  {
    id: '3',
    title: 'Holiday Special',
    startDate: '2023-12-01',
    endDate: '2023-12-31',
    platform: 'Email, Social Media',
    status: 'Draft',
    budget: '$7,500',
    engagement: 'N/A'
  },
  {
    id: '4',
    title: 'Brand Awareness',
    startDate: '2023-06-01',
    endDate: '2023-06-30',
    platform: 'YouTube, TikTok',
    status: 'Completed',
    budget: '$8,000',
    engagement: '45.2K'
  },
  {
    id: '5',
    title: 'Customer Loyalty Program',
    startDate: '2023-09-01',
    endDate: '2023-12-31',
    platform: 'Email, App',
    status: 'Active',
    budget: '$12,000',
    engagement: '8.7K'
  },
];

// Column definitions for the DataTable
const columns = [
  {
    accessorKey: 'title',
    header: 'Campaign Name',
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
  },
  {
    accessorKey: 'endDate',
    header: 'End Date',
  },
  {
    accessorKey: 'platform',
    header: 'Platform',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return <Status variant={getStatusVariant(status)} label={status} />;
    },
  },
  {
    accessorKey: 'budget',
    header: 'Budget',
  },
  {
    accessorKey: 'engagement',
    header: 'Engagement',
  },
];

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Text variant="h1" className="text-2xl font-bold">Campaigns</Text>
        <Button variant="primary" href="/campaigns/create">
          Create Campaign
        </Button>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
        <DataTable 
          data={campaigns} 
          columns={columns} 
          pageSize={5}
          searchable={true}
        />
      </div>
    </div>
  );
}