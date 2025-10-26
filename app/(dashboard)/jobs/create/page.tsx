"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';

// Validation schema
const jobSchema = yup.object({
  title: yup.string().required('Job title is required'),
  company: yup.string().required('Company name is required'),
  location: yup.string().required('Location is required'),
  type: yup.string().required('Job type is required'),
  salaryMin: yup.string().required('Minimum salary is required'),
  salaryMax: yup.string().required('Maximum salary is required'),
  description: yup.string().required('Job description is required').min(50, 'Description must be at least 50 characters'),
  responsibilities: yup.string().required('Responsibilities are required'),
  requirements: yup.string().required('Requirements are required'),
  benefits: yup.string().required('Benefits are required'),
  status: yup.string().required('Status is required'),
});

export default function CreateJobPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(jobSchema),
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  // Define the form data type based on our schema
  type JobFormData = yup.InferType<typeof jobSchema>;
  
  const onSubmit = (data: JobFormData) => {
    // In a real app, you would submit the form data to an API
    console.log('Form data:', data);
    console.log('Image file:', imageFile);
    // Redirect to the jobs page after successful submission
    // router.push('/jobs');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center">
        <div className="space-y-1">
          <Link href="/jobs" className="text-blue-600 hover:text-blue-800">
            ← Back to Jobs
          </Link>
          <Text variant="h1" className="text-2xl font-bold">Post New Job</Text>
        </div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
          <Text variant="h2" className="text-xl font-semibold mb-4">Basic Information</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Job Title"
              placeholder="e.g., Senior Frontend Developer"
              {...register('title')}
              error={errors.title?.message}
            />
            <Input
              label="Company"
              placeholder="e.g., TechCorp Inc."
              {...register('company')}
              error={errors.company?.message}
            />
            <Input
              label="Location"
              placeholder="e.g., San Francisco, CA or Remote"
              {...register('location')}
              error={errors.location?.message}
            />
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Type
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register('type')}
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.type && (
                <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Input
              label="Minimum Salary"
              placeholder="e.g., $80,000"
              {...register('salaryMin')}
              error={errors.salaryMin?.message}
            />
            <Input
              label="Maximum Salary"
              placeholder="e.g., $100,000"
              {...register('salaryMax')}
              error={errors.salaryMax?.message}
            />
          </div>
        </div>
        
        {/* Job Details */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
          <Text variant="h2" className="text-xl font-semibold mb-4">Job Details</Text>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Description
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="Provide a detailed description of the job..."
                {...register('description')}
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Responsibilities
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="List the key responsibilities for this role (one per line)..."
                {...register('responsibilities')}
              ></textarea>
              {errors.responsibilities && (
                <p className="mt-1 text-sm text-red-600">{errors.responsibilities.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Requirements
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="List the requirements for this role (one per line)..."
                {...register('requirements')}
              ></textarea>
              {errors.requirements && (
                <p className="mt-1 text-sm text-red-600">{errors.requirements.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Benefits
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="List the benefits offered (one per line)..."
                {...register('benefits')}
              ></textarea>
              {errors.benefits && (
                <p className="mt-1 text-sm text-red-600">{errors.benefits.message}</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Company Logo */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
          <Text variant="h2" className="text-xl font-semibold mb-4">Company Logo</Text>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Logo (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-sm text-gray-500">
              Recommended size: 400x400px. Max file size: 2MB.
            </p>
          </div>
        </div>
        
        {/* Job Status */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
          <Text variant="h2" className="text-xl font-semibold mb-4">Job Status</Text>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register('status')}
            >
              <option value="">Select Status</option>
              <option value="Draft">Draft - Save but don&apos;t publish</option>
              <option value="Active">Active - Publish immediately</option>
              <option value="Scheduled">Scheduled - Publish later</option>
            </select>
            {errors.status && (
              <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
            )}
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" className="border-gray-300" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Post Job
          </Button>
        </div>
      </form>
    </div>
  );
}