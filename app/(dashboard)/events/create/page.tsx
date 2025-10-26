"use client";
import { Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

// Validation schema
const eventSchema = yup.object({
  title: yup.string().required('Event title is required'),
  date: yup.string().required('Date is required'),
  time: yup.string().required('Time is required'),
  location: yup.string().required('Location is required'),
  organizer: yup.string().required('Organizer is required'),
  description: yup.string().required('Description is required'),
  category: yup.string().required('Category is required'),
  status: yup.string().required('Status is required'),
  ticketPrice: yup.number().min(0, 'Price must be positive').required('Ticket price is required'),
  capacity: yup.number().positive('Capacity must be positive').integer('Capacity must be a whole number').required('Capacity is required'),
});

type EventFormData = yup.InferType<typeof eventSchema>;

export default function CreateEventPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  const { control, handleSubmit, formState: { errors } } = useForm<EventFormData>({
    resolver: yupResolver(eventSchema),
    defaultValues: {
      title: '',
      date: '',
      time: '',
      location: '',
      organizer: '',
      description: '',
      category: '',
      status: 'draft',
      ticketPrice: 0,
      capacity: 100,
    }
  });

  const onSubmit = (data: EventFormData) => {
    console.log('Form data:', data);
    console.log('Image file:', imageFile);
    // Here you would typically send the data to your API
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <Link href="/events" className="text-blue-600 hover:text-blue-800">
            ← Back to Events
          </Link>
          <Text variant="h1" className="text-2xl font-bold">Create New Event</Text>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Basic Information */}
          <div className="space-y-4">
            <Text variant="h2" className="text-xl font-semibold">Basic Information</Text>
            
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Event Title"
                  placeholder="Enter event title"
                  error={errors.title?.message}
                />
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    label="Date"
                    error={errors.date?.message}
                  />
                )}
              />
              
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="time"
                    label="Time"
                    error={errors.time?.message}
                  />
                )}
              />
            </div>
            
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Location"
                  placeholder="Enter event location"
                  error={errors.location?.message}
                />
              )}
            />
            
            <Controller
              name="organizer"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Organizer"
                  placeholder="Enter organizer name"
                  error={errors.organizer?.message}
                />
              )}
            />
          </div>
          
          {/* Event Details */}
          <div className="space-y-4">
            <Text variant="h2" className="text-xl font-semibold">Event Details</Text>
            
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Description</label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <>
                    <textarea
                      {...field}
                      rows={4}
                      className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.description ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter event description"
                    />
                    {errors.description && (
                      <span className="text-xs text-red-500 mt-1">{errors.description.message}</span>
                    )}
                  </>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <>
                      <select
                        {...field}
                        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.category ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select a category</option>
                        <option value="music">Music</option>
                        <option value="business">Business</option>
                        <option value="food">Food & Drink</option>
                        <option value="arts">Arts</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                      </select>
                      {errors.category && (
                        <span className="text-xs text-red-500 mt-1">{errors.category.message}</span>
                      )}
                    </>
                  )}
                />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Status</label>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <>
                      <select
                        {...field}
                        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.status ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="draft">Draft</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="open">Open</option>
                      </select>
                      {errors.status && (
                        <span className="text-xs text-red-500 mt-1">{errors.status.message}</span>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="ticketPrice"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    min="0"
                    step="0.01"
                    label="Ticket Price ($)"
                    placeholder="0.00"
                    error={errors.ticketPrice?.message}
                  />
                )}
              />
              
              <Controller
                name="capacity"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    min="1"
                    label="Capacity"
                    placeholder="Enter maximum attendees"
                    error={errors.capacity?.message}
                  />
                )}
              />
            </div>
          </div>
          
          {/* Event Image */}
          <div className="space-y-4">
            <Text variant="h2" className="text-xl font-semibold">Event Image</Text>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="space-y-2">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <Text variant="p" className="text-sm text-gray-500">
                  {imageFile ? imageFile.name : "Drag and drop an image, or click to select"}
                </Text>
                <Text variant="p" className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </Text>
              </div>
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                id="event-image"
                onChange={handleImageChange}
              />
              <button
                type="button"
                onClick={() => document.getElementById('event-image')?.click()}
                className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Upload Image
              </button>
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <Button variant="outline" className="border-gray-300" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}