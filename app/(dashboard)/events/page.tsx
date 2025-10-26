"use client";
import { useState } from 'react';
import { Text } from '@/components/ui/Typography';
import { DataTable } from '@/components/table';
import { Button } from '@/components/ui/Button';
import Status, { getStatusVariant } from '@/components/ui/Status';

// Sample event data
const events = [
  {
    id: '1',
    title: 'Summer Music Festival',
    date: '2023-07-15',
    location: 'Central Park, NY',
    status: 'Upcoming',
    attendees: 1200,
  },
  {
    id: '2',
    title: 'Tech Conference 2023',
    date: '2023-08-22',
    location: 'Convention Center, SF',
    status: 'Open',
    attendees: 850,
  },
  {
    id: '3',
    title: 'Charity Gala Dinner',
    date: '2023-06-10',
    location: 'Grand Hotel, LA',
    status: 'Completed',
    attendees: 300,
  },
  {
    id: '4',
    title: 'Product Launch Event',
    date: '2023-09-05',
    location: 'Innovation Hub, Seattle',
    status: 'Upcoming',
    attendees: 500,
  },
  {
    id: '5',
    title: 'Annual Business Summit',
    date: '2023-10-12',
    location: 'Business Center, Chicago',
    status: 'Open',
    attendees: 650,
  },
];

// Column definitions for the DataTable
const columns = [
  {
    accessorKey: 'title',
    header: 'Event Name',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'location',
    header: 'Location',
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
    accessorKey: 'attendees',
    header: 'Attendees',
  },
];

export default function EventsPage() {
  return (
    <div className=" space-y-6">
      <div className="flex justify-between items-center">
        <Text variant="h1" className="text-2xl font-bold">Events</Text>
        <Button variant="primary" href="/events/create">
          Create Event
        </Button>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
        <DataTable 
          data={events} 
          columns={columns} 
          pageSize={5}
          searchable={true}
        />
      </div>
    </div>
  );
}