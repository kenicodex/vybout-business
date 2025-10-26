import { Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Status, { getStatusVariant } from '@/components/ui/Status';

// Sample campaign data - in a real app, this would come from an API
const campaignDetails = {
  id: '1',
  title: 'Summer Sale Promotion',
  startDate: '2023-07-01',
  endDate: '2023-07-31',
  platform: 'Instagram, Facebook',
  status: 'Active',
  budget: '$5,000',
  engagement: '12.5K',
  description: 'A summer-themed promotional campaign targeting our existing customers and new potential customers through social media platforms. The campaign focuses on seasonal products with special discounts.',
  objectives: 'Increase summer sales by 20%, Boost social media engagement, Attract new customers',
  targetAudience: 'Ages 18-35, Urban areas, Interest in fashion and lifestyle',
  metrics: {
    impressions: '250K',
    clicks: '15K',
    conversions: '3.2K',
    roi: '185%'
  },
  creatives: [
    {
      title: 'Hero Banner',
      url: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ]
};

export default function CampaignDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the campaign details based on the ID
  const campaignId = params.id;
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <Link href="/campaigns" className="text-blue-600 hover:text-blue-800">
            ← Back to Campaigns
          </Link>
          <Text variant="h1" className="text-2xl font-bold">{campaignDetails.title}</Text>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-300">
            Edit Campaign
          </Button>
          <Button variant="primary">
            View Analytics
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Campaign creative */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden">
            <img 
              src={campaignDetails.creatives[0].url} 
              alt={campaignDetails.creatives[0].title} 
              className="w-full h-64 object-cover"
            />
          </div>
          
          {/* Campaign description */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <Text variant="h2" className="text-xl font-semibold mb-4">About This Campaign</Text>
            <Text variant="p" className="text-gray-700 leading-relaxed mb-4">
              {campaignDetails.description}
            </Text>
            
            <Text variant="h3" className="text-lg font-semibold mt-6 mb-2">Objectives</Text>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {campaignDetails.objectives.split(', ').map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
            
            <Text variant="h3" className="text-lg font-semibold mt-6 mb-2">Target Audience</Text>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {campaignDetails.targetAudience.split(', ').map((audience, index) => (
                <li key={index}>{audience}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Campaign details */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <Text variant="h2" className="text-xl font-semibold mb-4">Campaign Details</Text>
            <div className="space-y-4">
              <div>
                <Text variant="p" className="text-sm text-gray-500">Duration</Text>
                <Text variant="p" className="font-medium">{campaignDetails.startDate} to {campaignDetails.endDate}</Text>
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Platforms</Text>
                <Text variant="p" className="font-medium">{campaignDetails.platform}</Text>
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Budget</Text>
                <Text variant="p" className="font-medium">{campaignDetails.budget}</Text>
              </div>
              <div>
                <Text variant="p" className="text-sm text-gray-500">Status</Text>
                <Status variant={getStatusVariant(campaignDetails.status)} label={campaignDetails.status} />
              </div>
            </div>
          </div>
          
          {/* Performance metrics */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <Text variant="h2" className="text-xl font-semibold mb-4">Performance Metrics</Text>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <Text variant="p" className="text-sm text-gray-500">Impressions</Text>
                <Text variant="p" className="text-xl font-bold text-blue-600">{campaignDetails.metrics.impressions}</Text>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <Text variant="p" className="text-sm text-gray-500">Clicks</Text>
                <Text variant="p" className="text-xl font-bold text-green-600">{campaignDetails.metrics.clicks}</Text>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <Text variant="p" className="text-sm text-gray-500">Conversions</Text>
                <Text variant="p" className="text-xl font-bold text-purple-600">{campaignDetails.metrics.conversions}</Text>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <Text variant="p" className="text-sm text-gray-500">ROI</Text>
                <Text variant="p" className="text-xl font-bold text-orange-600">{campaignDetails.metrics.roi}</Text>
              </div>
            </div>
          </div>
          
          {/* Engagement summary */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <Text variant="h2" className="text-xl font-semibold mb-4">Engagement</Text>
            <div className="flex items-center justify-center p-4">
              <div className="text-center">
                <Text variant="p" className="text-3xl font-bold text-blue-600">{campaignDetails.engagement}</Text>
                <Text variant="p" className="text-sm text-gray-500">Total Engagement</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}