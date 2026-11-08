import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CloudGrid from './components/CloudGrid';
import AddCloudModal from './components/AddCloudModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCloud, setSelectedCloud] = useState<CloudProvider | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleCloudClick = (cloud: CloudProvider) => {
    setSelectedCloud(cloud);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCloud(null);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main className="flex-1 overflow-y-auto p-6">
          <CloudGrid
            searchQuery={searchQuery}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            onCloudClick={handleCloudClick}
          />
        </main>
      </div>
      {showModal && selectedCloud && (
        <AddCloudModal cloud={selectedCloud} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export interface CloudProvider {
  id: string;
  name: string;
  category: string;
  icon: string;
  color: string;
  description: string;
  popular?: boolean;
}
