import { DataTable } from '@/components/table';

const posts = [
  { name: 'Summer Vibes', views: 3200, likes: 560, comments: 120, shares: 45, date: 'Oct 24' },
  { name: 'Afro Brunch', views: 1800, likes: 240, comments: 60, shares: 18, date: 'Oct 20' },
];

const columns = [
  {
    accessorKey: 'name',
    header: 'Post',
  },
  {
    accessorKey: 'views',
    header: 'Views',
  },
  {
    accessorKey: 'likes',
    header: 'Likes',
  },
  {
    accessorKey: 'comments',
    header: 'Comments',
  },
  {
    accessorKey: 'shares',
    header: 'Shares',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
];

export default function PostTable() {
  return (
    <div className="p-5 bg-white rounded-xl shadow border border-gray-200">
      <h2 className="font-semibold mb-3">Post Performance</h2>
      <DataTable data={posts} columns={columns} pageSize={5} searchable={true} />
    </div>
  );
}
