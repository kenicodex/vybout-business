'use client'
import React from 'react'
import StatsGrid from '@/components/dashboard/StatsGrid'
import EngagementChart from '@/components/dashboard/EngagementChart'
import CreatorCampaigns from '@/components/dashboard/CreatorCampaigns'
import PostTable from '@/components/dashboard/PostTable'
import AISummary from '@/components/dashboard/AISummary'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 space-y-8">
      <h1 className="text-2xl font-semibold">Business Insights</h1>
      <StatsGrid />
      <div className="grid lg:grid-cols-2 gap-8">
        <EngagementChart />
        <CreatorCampaigns />
      </div>
      <PostTable />
      <AISummary />
    </div>
  )
}
