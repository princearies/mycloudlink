import { useState } from 'react';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { icon: 'fa-home', label: 'Dashboard', active: false },
    { icon: 'fa-cloud-arrow-up', label: 'Transfer', active: false },
    { icon: 'fa-arrows-rotate', label: 'Sync', active: false },
    { icon: 'fa-plus-circle', label: 'Add Cloud', active: true },
    { icon: 'fa-list-check', label: 'Tasks', active: false },
    { icon: 'fa-clock-rotate-left', label: 'History', active: false },
  ];

  const connectedClouds = [
    { name: 'Google Drive', icon: '🔵', status: 'connected' },
    { name: 'OneDrive', icon: '🔷', status: 'connected' },
    { name: 'Dropbox', icon: '📦', status: 'connected' },
  ];

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300 h-full`}>
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-cloud text-white text-sm"></i>
          </div>
          {!collapsed && (
            <span className="font-bold text-gray-800 text-lg">CloudsLinker</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <i className={`fa-solid ${item.icon} w-5 text-center ${item.active ? 'text-blue-600' : 'text-gray-400'}`}></i>
                {!collapsed && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>

        {/* Connected Clouds */}
        {!collapsed && (
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Connected
            </h3>
            <ul className="space-y-1">
              {connectedClouds.map((cloud) => (
                <li key={cloud.name}>
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    <span className="text-lg">{cloud.icon}</span>
                    <span className="truncate">{cloud.name}</span>
                    <span className="ml-auto w-2 h-2 bg-green-400 rounded-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Bottom */}
      <div className="border-t border-gray-100 p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <i className={`fa-solid ${collapsed ? 'fa-angles-right' : 'fa-angles-left'}`}></i>
          {!collapsed && <span>Collapse</span>}
        </button>
        {!collapsed && (
          <div className="flex items-center gap-3 px-3 py-2 mt-1">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-user text-gray-500 text-sm"></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-700 truncate">User</p>
              <p className="text-xs text-gray-400 truncate">Free Plan</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <i className="fa-solid fa-gear text-sm"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
