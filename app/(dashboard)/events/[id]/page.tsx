import { Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Status, { getStatusVariant } from '@/components/ui/Status';

// Sample event data - in a real app, this would come from an API
const eventDetails = {
  id: '1',
  title: 'Summer Music Festival',
  date: '2023-07-15',
  time: '12:00 PM - 10:00 PM',
  location: 'Central Park, New York, NY',
  description: 'Join us for a day of amazing music featuring top artists from around the world. Food vendors, art installations, and more will be available throughout the venue.',
  status: 'Upcoming',
  attendees: 1200,
  organizer: 'City Events Co.',
  ticketPrice: '$45.00',
  categories: ['Music', 'Festival', 'Outdoor'],
  image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
};

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the event details based on the ID
  const eventId = params.id;
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <Link href="/events" className="text-blue-600 hover:text-blue-800">
            ← Back to Events
          </Link>
          <Text variant="h1" className="text-2xl font-bold">{eventDetails.title}</Text>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300">
            Edit Event
          </Button>
          <Button variant="primary">
            Manage Attendees
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Event image */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden">
            <img 
              src={eventDetails.image} 
              alt={eventDetails.title} 
              className="w-full h-64 object-cover"
            />
          </div>
          
          {/* Event description */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <Text variant="h2" className="text-xl font-semibold mb-4">About This Event</Text>
            <Text variant="p" className="text-gray-700 leading-relaxed">
              {eventDetails.description}
            </Text>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Event details */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <Text variant="h2" className="text-xl font-semibold mb-4">Event Details</Text>
            <div className="space-y-4">
              <div>
                <Text variant="p" className="text-sm text-gray-500">Date & Time</Text>
                <Text variant="p" className="font-medium">{eventDetails.date}, {eventDetails.time}</Text>
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Location</Text>
                <Text variant="p" className="font-medium">{eventDetails.location}</Text>
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Organizer</Text>
                <Text variant="p" className="font-medium">{eventDetails.organizer}</Text>
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Ticket Price</Text>
                <Text variant="p" className="font-medium">{eventDetails.ticketPrice}</Text>
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Status</Text>
                <Status variant={getStatusVariant(eventDetails.status)} label={eventDetails.status} />
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Categories</Text>
                <div className="flex flex-wrap gap-2 mt-1">
                  {eventDetails.categories.map((category, index) => (
                    <Status key={index} variant="default" label={category} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Attendee stats */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <Text variant="h2" className="text-xl font-semibold mb-4">Attendance</Text>
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <Text variant="p" className="text-3xl font-bold text-blue-600">{eventDetails.attendees}</Text>
                <Text variant="p" className="text-sm text-gray-500">Registered Attendees</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}