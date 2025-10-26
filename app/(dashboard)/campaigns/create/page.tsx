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
const campaignSchema = yup.object({
  title: yup.string().required('Campaign title is required'),
  startDate: yup.string().required('Start date is required'),
  endDate: yup.string().required('End date is required'),
  platform: yup.string().required('Platform is required'),
  budget: yup.number().positive('Budget must be positive').required('Budget is required'),
  description: yup.string().required('Description is required'),
  objectives: yup.string().required('Objectives are required'),
  targetAudience: yup.string().required('Target audience is required'),
  status: yup.string().required('Status is required'),
});

type CampaignFormData = yup.InferType<typeof campaignSchema>;

export default function CreateCampaignPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  const { control, handleSubmit, formState: { errors } } = useForm<CampaignFormData>({
    resolver: yupResolver(campaignSchema),
    defaultValues: {
      title: '',
      startDate: '',
      endDate: '',
      platform: '',
      budget: 0,
      description: '',
      objectives: '',
      targetAudience: '',
      status: 'draft',
    }
  });

  const onSubmit = (data: CampaignFormData) => {
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
          <Link href="/campaigns" className="text-blue-600 hover:text-blue-800">
            ← Back to Campaigns
          </Link>
          <Text variant="h1" className="text-2xl font-bold">Create New Campaign</Text>
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
                  label="Campaign Title"
                  placeholder="Enter campaign title"
                  error={errors.title?.message}
                />
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    label="Start Date"
                    error={errors.startDate?.message}
                  />
                )}
              />
              
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    label="End Date"
                    error={errors.endDate?.message}
                  />
                )}
              />
            </div>
            
            <Controller
              name="platform"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Platforms"
                  placeholder="e.g. Instagram, Facebook, Email"
                  error={errors.platform?.message}
                />
              )}
            />
            
            <Controller
              name="budget"
              control={control}
              render={({ field: { value, onChange, ...field } }) => (
                <Input
                  {...field}
                  type="number"
                  value={value.toString()}
                  onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                  label="Budget ($)"
                  placeholder="Enter campaign budget"
                  error={errors.budget?.message}
                />
              )}
            />
          </div>
          
          {/* Campaign Details */}
          <div className="space-y-4">
            <Text variant="h2" className="text-xl font-semibold">Campaign Details</Text>
            
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
                      placeholder="Enter campaign description"
                    />
                    {errors.description && (
                      <span className="text-xs text-red-500 mt-1">{errors.description.message}</span>
                    )}
                  </>
                )}
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Objectives</label>
              <Controller
                name="objectives"
                control={control}
                render={({ field }) => (
                  <>
                    <textarea
                      {...field}
                      rows={3}
                      className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.objectives ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter campaign objectives (comma separated)"
                    />
                    {errors.objectives && (
                      <span className="text-xs text-red-500 mt-1">{errors.objectives.message}</span>
                    )}
                  </>
                )}
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Target Audience</label>
              <Controller
                name="targetAudience"
                control={control}
                render={({ field }) => (
                  <>
                    <textarea
                      {...field}
                      rows={3}
                      className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.targetAudience ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Describe your target audience (comma separated)"
                    />
                    {errors.targetAudience && (
                      <span className="text-xs text-red-500 mt-1">{errors.targetAudience.message}</span>
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
                      <option value="scheduled">Scheduled</option>
                      <option value="active">Active</option>
                      <option value="completed">Completed</option>
                    </select>
                    {errors.status && (
                      <span className="text-xs text-red-500 mt-1">{errors.status.message}</span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          
          {/* Campaign Creative */}
          <div className="space-y-4">
            <Text variant="h2" className="text-xl font-semibold">Campaign Creative</Text>
            
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Upload Creative Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  {imageFile && (
                    <p className="text-sm text-green-600 mt-2">
                      Selected: {imageFile.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-4">
            <Button variant="outline" className="border-gray-300" href="/campaigns">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Create Campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}