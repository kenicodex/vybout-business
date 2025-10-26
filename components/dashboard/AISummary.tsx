import { Brain } from 'lucide-react';
import { Text } from '@/components/ui/Typography';

export default function AISummary() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-300">
      <h2 className="font-semibold flex items-center gap-3">
        <Brain size={24} className="text-blue-500" />
        <Text variant="h2" className="text-lg">AI Summary</Text>
      </h2>
      <Text variant="p" className="text-gray-700 mt-3 text-sm leading-relaxed">
        Engagement up <span className="text-green-600 font-semibold">8%</span> this week, driven by creator posts.
        Peak hours: <b>Fri 6–9 PM</b>. Post more during that window for better reach.
      </Text>
    </div>
  );
}
