import { useMemo } from 'react';
import { CloudProvider } from '../App';
import { cloudProviders, categories } from '../data/cloudProviders';

interface CloudGridProps {
  searchQuery: string;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onCloudClick: (cloud: CloudProvider) => void;
}

export default function CloudGrid({
  searchQuery,
  activeCategory,
  onCategoryChange,
  onCloudClick,
}: CloudGridProps) {
  const filteredProviders = useMemo(() => {
    let filtered = cloudProviders;

    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return cloudProviders.length;
    return cloudProviders.filter((p) => p.category === categoryId).length;
  };

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              activeCategory === cat.id ? 'bg-blue-500 text-blue-100' : 'bg-gray-100 text-gray-500'
            }`}>
              {getCategoryCount(cat.id)}
            </span>
          </button>
        ))}
      </div>

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-circle-info text-blue-600"></i>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Connect your cloud storage</h3>
            <p className="text-sm text-gray-600 mt-0.5">
              Select a cloud provider below to connect it to your workspace. You can then transfer and sync files between any connected clouds.
            </p>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">
          {filteredProviders.length} cloud{filteredProviders.length !== 1 ? 's' : ''} available
          {searchQuery && <span> for "<strong className="text-gray-700">{searchQuery}</strong>"</span>}
        </p>
      </div>

      {/* Cloud Grid */}
      {filteredProviders.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProviders.map((cloud) => (
            <CloudCard key={cloud.id} cloud={cloud} onClick={() => onCloudClick(cloud)} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <i className="fa-solid fa-cloud-slash text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-1">No clouds found</h3>
          <p className="text-sm text-gray-500">
            Try adjusting your search or category filter
          </p>
        </div>
      )}
    </div>
  );
}

function CloudCard({ cloud, onClick }: { cloud: CloudProvider; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group bg-white border border-gray-200 rounded-xl p-4 text-left hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <div className="flex items-start gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform"
          style={{ backgroundColor: `${cloud.color}15` }}
        >
          {cloud.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 text-sm group-hover:text-blue-700 transition-colors truncate">
            {cloud.name}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
            {cloud.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
        <span className="text-xs text-gray-400 capitalize">{cloud.category === 'object' ? 'Object Storage' : cloud.category === 'selfhosted' ? 'Self-hosted' : cloud.category}</span>
        <span className="text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          Connect <i className="fa-solid fa-arrow-right text-[10px]"></i>
        </span>
      </div>
    </button>
  );
}
