"use client";
import { useState } from 'react';
import { Text } from '@/components/ui/Typography';
import { DataTable } from '@/components/table';
import { Button } from '@/components/ui/Button';
import Status, { getStatusVariant } from '@/components/ui/Status';

// Sample jobs data
const jobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    postedDate: '2023-06-15',
    status: 'Active',
    applicants: 45
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'Creative Solutions',
    location: 'Remote',
    type: 'Contract',
    salary: '$80,000 - $100,000',
    postedDate: '2023-07-01',
    status: 'Active',
    applicants: 32
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'Cloud Systems',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $130,000',
    postedDate: '2023-06-20',
    status: 'Filled',
    applicants: 28
  },
  {
    id: '4',
    title: 'Product Manager',
    company: 'Innovate Labs',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    postedDate: '2023-07-10',
    status: 'Active',
    applicants: 18
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'Chicago, IL',
    type: 'Part-time',
    salary: '$90,000 - $110,000',
    postedDate: '2023-06-25',
    status: 'Paused',
    applicants: 22
  },
];

// Column definitions for the DataTable
const columns = [
  {
    accessorKey: 'title',
    header: 'Job Title',
  },
  {
    accessorKey: 'company',
    header: 'Company',
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
    accessorKey: 'type',
    header: 'Job Type',
  },
  {
    accessorKey: 'salary',
    header: 'Salary Range',
  },
  {
    accessorKey: 'postedDate',
    header: 'Posted Date',
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
    accessorKey: 'applicants',
    header: 'Applicants',
  },
];

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Text variant="h1" className="text-2xl font-bold">Jobs</Text>
        <Button variant="primary" href="/jobs/create">
          Post New Job
        </Button>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
        <DataTable 
          data={jobs} 
          columns={columns} 
          pageSize={5}
          searchable={true}
        />
      </div>
    </div>
  );
}