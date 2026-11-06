import { useState } from 'react';
import { CloudProvider } from '../App';

interface AddCloudModalProps {
  cloud: CloudProvider;
  onClose: () => void;
}

export default function AddCloudModal({ cloud, onClose }: AddCloudModalProps) {
  const [step, setStep] = useState<'config' | 'connecting' | 'success'>('config');
  const [accountName, setAccountName] = useState('');
  const [formData, setFormData] = useState<Record<string, string>>({});

  const isProtocol = ['protocol'].includes(cloud.category);
  const isObjectStorage = ['object'].includes(cloud.category);

  const handleConnect = () => {
    setStep('connecting');
    // Simulate connection
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const renderConfigFields = () => {
    if (isProtocol) {
      switch (cloud.id) {
        case 'ftp':
        case 'sftp':
          return (
            <>
              <FormField label="Host" placeholder="ftp.example.com" value={formData.host || ''} onChange={(v) => setFormData({ ...formData, host: v })} />
              <FormField label="Port" placeholder={cloud.id === 'ftp' ? '21' : '22'} value={formData.port || ''} onChange={(v) => setFormData({ ...formData, port: v })} />
              <FormField label="Username" placeholder="username" value={formData.username || ''} onChange={(v) => setFormData({ ...formData, username: v })} />
              <FormField label="Password" placeholder="••••••••" type="password" value={formData.password || ''} onChange={(v) => setFormData({ ...formData, password: v })} />
            </>
          );
        case 'webdav':
          return (
            <>
              <FormField label="Server URL" placeholder="https://example.com/webdav" value={formData.url || ''} onChange={(v) => setFormData({ ...formData, url: v })} />
              <FormField label="Username" placeholder="username" value={formData.username || ''} onChange={(v) => setFormData({ ...formData, username: v })} />
              <FormField label="Password" placeholder="••••••••" type="password" value={formData.password || ''} onChange={(v) => setFormData({ ...formData, password: v })} />
            </>
          );
        case 'nas':
          return (
            <>
              <FormField label="Host / IP" placeholder="192.168.1.100" value={formData.host || ''} onChange={(v) => setFormData({ ...formData, host: v })} />
              <FormField label="Protocol" placeholder="SMB / NFS / WebDAV" value={formData.protocol || ''} onChange={(v) => setFormData({ ...formData, protocol: v })} />
              <FormField label="Username" placeholder="username" value={formData.username || ''} onChange={(v) => setFormData({ ...formData, username: v })} />
              <FormField label="Password" placeholder="••••••••" type="password" value={formData.password || ''} onChange={(v) => setFormData({ ...formData, password: v })} />
            </>
          );
        default:
          return null;
      }
    }

    if (isObjectStorage) {
      return (
        <>
          <FormField label="Access Key ID" placeholder="AKIAIOSFODNN7EXAMPLE" value={formData.accessKey || ''} onChange={(v) => setFormData({ ...formData, accessKey: v })} />
          <FormField label="Secret Access Key" placeholder="••••••••" type="password" value={formData.secretKey || ''} onChange={(v) => setFormData({ ...formData, secretKey: v })} />
          <FormField label="Region" placeholder="us-east-1" value={formData.region || ''} onChange={(v) => setFormData({ ...formData, region: v })} />
          <FormField label="Endpoint (optional)" placeholder="https://s3.amazonaws.com" value={formData.endpoint || ''} onChange={(v) => setFormData({ ...formData, endpoint: v })} />
        </>
      );
    }

    // OAuth-based clouds
    return (
      <div className="bg-gray-50 rounded-lg p-4 text-center">
        <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: `${cloud.color}15` }}>
          {cloud.icon}
        </div>
        <p className="text-sm text-gray-600 mb-1">
          You'll be redirected to <strong>{cloud.name}</strong> to authorize access.
        </p>
        <p className="text-xs text-gray-400">
          CloudsLinker uses OAuth 2.0 — your password is never stored.
        </p>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: `${cloud.color}15` }}>
              {cloud.icon}
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Connect {cloud.name}</h2>
              <p className="text-xs text-gray-400">{cloud.description}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {step === 'config' && (
            <>
              <div className="space-y-4">
                <FormField
                  label="Account Name"
                  placeholder={`My ${cloud.name}`}
                  value={accountName}
                  onChange={setAccountName}
                  helpText="Give this connection a name for easy identification"
                />
                {renderConfigFields()}
              </div>
            </>
          )}

          {step === 'connecting' && (
            <div className="flex flex-col items-center py-8">
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center text-2xl">
                  {cloud.icon}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-700">Connecting to {cloud.name}...</p>
              <p className="text-xs text-gray-400 mt-1">Please wait while we establish the connection</p>
            </div>
          )}

          {step === 'success' && (
            <div className="flex flex-col items-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-check text-green-600 text-2xl"></i>
              </div>
              <p className="text-sm font-medium text-gray-700">Successfully connected!</p>
              <p className="text-xs text-gray-400 mt-1 text-center">
                {cloud.name} is now available for transfers and sync operations.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          {step === 'config' && (
            <>
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConnect}
                className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2"
              >
                <i className="fa-solid fa-plug text-xs"></i>
                Connect
              </button>
            </>
          )}
          {step === 'connecting' && (
            <>
              <div></div>
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
              >
                Cancel
              </button>
            </>
          )}
          {step === 'success' && (
            <>
              <div></div>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Done
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  helpText,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  helpText?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-300"
      />
      {helpText && <p className="text-xs text-gray-400 mt-1">{helpText}</p>}
    </div>
  );
}
