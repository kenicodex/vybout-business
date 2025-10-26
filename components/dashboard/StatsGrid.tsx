import { Users, Heart, Video, Wallet, Briefcase, Brain } from 'lucide-react'

const stats = [
  { title: 'Page Views', value: '12,580', change: '+8%', icon: Users },
  { title: 'Post Engagements', value: '2,431', change: '+5%', icon: Heart },
  { title: 'Video Views', value: '14,920', change: '+12%', icon: Video },
  { title: 'Revenue', value: '₦450,000', change: '+16%', icon: Wallet },
  { title: 'Creator Hires', value: '22', change: '+4%', icon: Briefcase },
  { title: 'AI Recs', value: '158', change: '+7%', icon: Brain },
]

const Card = ({ title, value, change, icon: Icon }: { title: string; value: string; change: string; icon: React.ElementType }) => (
  <div className="flex items-center justify-between p-4 bg-white shadow rounded-xl border border-gray-200">
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-green-600">{change}</p>
    </div>
    <div className="p-2 bg-blue-100 rounded-full text-blue-600">
      <Icon size={22} />
    </div>
  </div>
)

export default function StatsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((s, i) => (
        <Card key={i} {...s} />
      ))}
    </div>
  )
}
