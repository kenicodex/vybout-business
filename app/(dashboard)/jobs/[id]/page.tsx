import { Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Status, { getStatusVariant } from '@/components/ui/Status';

// Sample job data - in a real app, this would come from an API
const jobDetails = {
  id: '1',
  title: 'Senior Frontend Developer',
  company: 'TechCorp Inc.',
  location: 'San Francisco, CA',
  type: 'Full-time',
  salary: '$120,000 - $150,000',
  postedDate: '2023-06-15',
  status: 'Active',
  applicants: 45,
  description: 'We are looking for an experienced Frontend Developer to join our team. The ideal candidate will have strong experience with React, TypeScript, and modern frontend frameworks.',
  responsibilities: [
    'Develop and maintain responsive web applications',
    'Collaborate with UX/UI designers to implement designs',
    'Write clean, maintainable, and efficient code',
    'Optimize applications for maximum speed and scalability',
    'Participate in code reviews and contribute to team knowledge sharing'
  ],
  requirements: [
    '5+ years of experience in frontend development',
    'Strong proficiency in JavaScript, TypeScript, HTML, and CSS',
    'Experience with React and related libraries',
    'Understanding of responsive design principles',
    'Knowledge of version control systems (Git)',
    'Bachelor&apos;s degree in Computer Science or related field'
  ],
  benefits: [
    'Competitive salary and equity options',
    'Health, dental, and vision insurance',
    'Flexible work schedule and remote options',
    '401(k) matching',
    'Professional development budget',
    'Paid time off and parental leave'
  ],
  applicationStats: {
    viewed: 320,
    applied: 45,
    inReview: 12,
    interviewed: 8,
    offered: 0
  }
};

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the job details based on the ID
  const jobId = params.id;
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <Link href="/jobs" className="text-blue-600 hover:text-blue-800">
            ← Back to Jobs
          </Link>
          <Text variant="h1" className="text-2xl font-bold">{jobDetails.title}</Text>
          <Text variant="p" className="text-gray-600">{jobDetails.company} • {jobDetails.location}</Text>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300">
            Edit Job
          </Button>
          <Button variant="primary">
            View Applicants
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job description */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <Text variant="h2" className="text-xl font-semibold mb-4">Job Description</Text>
            <Text variant="p" className="text-gray-700 leading-relaxed mb-6">
              {jobDetails.description}
            </Text>
            
            <Text variant="h3" className="text-lg font-semibold mt-6 mb-2">Responsibilities</Text>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
              {jobDetails.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <Text variant="h3" className="text-lg font-semibold mt-6 mb-2">Requirements</Text>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
              {jobDetails.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <Text variant="h3" className="text-lg font-semibold mt-6 mb-2">Benefits</Text>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {jobDetails.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Job details */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <Text variant="h2" className="text-xl font-semibold mb-4">Job Details</Text>
            <div className="space-y-4">
              <div>
                <Text variant="p" className="text-sm text-gray-500">Job Type</Text>
                <Text variant="p" className="font-medium">{jobDetails.type}</Text>
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Salary Range</Text>
                <Text variant="p" className="font-medium">{jobDetails.salary}</Text>
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Posted Date</Text>
                <Text variant="p" className="font-medium">{jobDetails.postedDate}</Text>
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Status</Text>
                <Status variant={getStatusVariant(jobDetails.status)} label={jobDetails.status} />
              </div>
            </div>
          </div>
          
          {/* Application stats */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <Text variant="h2" className="text-xl font-semibold mb-4">Application Stats</Text>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Text variant="p" className="text-sm">Job Views</Text>
                <Text variant="p" className="font-medium">{jobDetails.applicationStats.viewed}</Text>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="p" className="text-sm">Applications</Text>
                <Text variant="p" className="font-medium">{jobDetails.applicationStats.applied}</Text>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="p" className="text-sm">In Review</Text>
                <Text variant="p" className="font-medium">{jobDetails.applicationStats.inReview}</Text>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="p" className="text-sm">Interviewed</Text>
                <Text variant="p" className="font-medium">{jobDetails.applicationStats.interviewed}</Text>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="p" className="text-sm">Offers Extended</Text>
                <Text variant="p" className="font-medium">{jobDetails.applicationStats.offered}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}