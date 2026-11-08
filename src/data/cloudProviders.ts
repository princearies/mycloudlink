import { CloudProvider } from '../App';

export const cloudProviders: CloudProvider[] = [
  // Popular
  { id: 'google-drive', name: 'Google Drive', category: 'popular', icon: '🔵', color: '#4285F4', description: 'Google cloud storage and file sync', popular: true },
  { id: 'onedrive', name: 'OneDrive', category: 'popular', icon: '🔷', color: '#0078D4', description: 'Microsoft cloud storage', popular: true },
  { id: 'dropbox', name: 'Dropbox', category: 'popular', icon: '📦', color: '#0061FF', description: 'File hosting and sync service', popular: true },
  { id: 'box', name: 'Box', category: 'popular', icon: '📁', color: '#0061D5', description: 'Enterprise content management', popular: true },
  { id: 'mega', name: 'Mega', category: 'popular', icon: '🟢', color: '#D9272E', description: 'Encrypted cloud storage', popular: true },
  { id: 'pcloud', name: 'pCloud', category: 'popular', icon: '🔹', color: '#0D47A1', description: 'Swiss cloud storage', popular: true },

  // Storage
  { id: 'google-photos', name: 'Google Photos', category: 'storage', icon: '📸', color: '#EA4335', description: 'Photo storage and sharing' },
  { id: 'google-takeout', name: 'Google Takeout', category: 'storage', icon: '📤', color: '#34A853', description: 'Google data export tool' },
  { id: 'shared-drive', name: 'Shared Drive', category: 'storage', icon: '👥', color: '#FBBC04', description: 'Google Workspace shared drives' },
  { id: 'onedrive-business', name: 'OneDrive Business', category: 'storage', icon: '💼', color: '#0078D4', description: 'Microsoft 365 business storage' },
  { id: 'sharepoint', name: 'SharePoint', category: 'storage', icon: '🌐', color: '#038387', description: 'Microsoft collaboration platform' },
  { id: 'icloud-drive', name: 'iCloud Drive', category: 'storage', icon: '☁️', color: '#3693F5', description: 'Apple cloud storage' },
  { id: 'icloud-photos', name: 'iCloud Photos', category: 'storage', icon: '🍎', color: '#A2AAAD', description: 'Apple photo storage' },
  { id: 'yandex', name: 'Yandex Disk', category: 'storage', icon: '🟡', color: '#FC3F1D', description: 'Yandex cloud storage' },
  { id: 'proton-drive', name: 'ProtonDrive', category: 'storage', icon: '🟣', color: '#6D4AFF', description: 'Encrypted Swiss cloud storage' },
  { id: 'zoho-workdrive', name: 'Zoho WorkDrive', category: 'storage', icon: '🟠', color: '#E42527', description: 'Zoho team file storage' },
  { id: 'terabox', name: 'TeraBox', category: 'storage', icon: '📦', color: '#00B4D8', description: 'Free cloud storage' },
  { id: 'internxt', name: 'Internxt', category: 'storage', icon: '🔒', color: '#5361F6', description: 'Private encrypted cloud' },
  { id: 'degoo', name: 'Degoo', category: 'storage', icon: '💾', color: '#6C63FF', description: 'Cloud backup service' },
  { id: 'koofr', name: 'Koofr', category: 'storage', icon: '📂', color: '#2196F3', description: 'European cloud storage' },

  // Object Storage
  { id: 'aws-s3', name: 'AWS S3', category: 'object', icon: '🟧', color: '#FF9900', description: 'Amazon Simple Storage Service' },
  { id: 'gcs', name: 'Google Cloud Storage', category: 'object', icon: '🔶', color: '#4285F4', description: 'Google Cloud object storage' },
  { id: 'cloudflare-r2', name: 'Cloudflare R2', category: 'object', icon: '🟠', color: '#F38020', description: 'Cloudflare object storage' },
  { id: 'backblaze-b2', name: 'Backblaze B2', category: 'object', icon: '⬛', color: '#000000', description: 'Affordable cloud storage' },
  { id: 'wasabi', name: 'Wasabi', category: 'object', icon: '🟩', color: '#56B83E', description: 'Hot cloud storage' },
  { id: 'digitalocean', name: 'DigitalOcean Spaces', category: 'object', icon: '🔵', color: '#0080FF', description: 'DigitalOcean object storage' },
  { id: 'storj', name: 'Storj', category: 'object', icon: '🟣', color: '#2683FF', description: 'Decentralized cloud storage' },
  { id: 'idrive', name: 'iDrive', category: 'object', icon: '🔷', color: '#0073CF', description: 'Online backup service' },
  { id: 'scaleway', name: 'Scaleway', category: 'object', icon: '🔶', color: '#4F0599', description: 'Scaleway object storage' },
  { id: 'hetzner', name: 'Hetzner Storage', category: 'object', icon: '🟥', color: '#D50C2D', description: 'Hetzner object storage' },
  { id: 's3-compatible', name: 'S3 Compatible', category: 'object', icon: '🔗', color: '#FF9900', description: 'Any S3-compatible storage' },

  // Protocol
  { id: 'ftp', name: 'FTP', category: 'protocol', icon: '📡', color: '#607D8B', description: 'File Transfer Protocol' },
  { id: 'sftp', name: 'SFTP', category: 'protocol', icon: '🔐', color: '#455A64', description: 'SSH File Transfer Protocol' },
  { id: 'webdav', name: 'WebDAV', category: 'protocol', icon: '🌍', color: '#795548', description: 'Web Distributed Authoring' },
  { id: 'nas', name: 'NAS', category: 'protocol', icon: '💿', color: '#424242', description: 'Network Attached Storage' },

  // Self-hosted
  { id: 'nextcloud', name: 'Nextcloud', category: 'selfhosted', icon: '🔵', color: '#0082C9', description: 'Self-hosted cloud platform' },
  { id: 'owncloud', name: 'ownCloud', category: 'selfhosted', icon: '🟢', color: '#041E42', description: 'Open source file sync' },
  { id: 'seafile', name: 'Seafile', category: 'selfhosted', icon: '🌊', color: '#FDAC52', description: 'Open source cloud storage' },

  // Other
  { id: '1fichier', name: '1fichier', category: 'other', icon: '📄', color: '#FF6600', description: 'French file hosting' },
  { id: 'pikpak', name: 'PikPak', category: 'other', icon: '📦', color: '#6366F1', description: 'Cloud storage for files' },
  { id: 'telebox', name: 'TeleBox', category: 'other', icon: '📱', color: '#2196F3', description: 'Cloud file management' },
  { id: 'opendrive', name: 'OpenDrive', category: 'other', icon: '🔓', color: '#4CAF50', description: 'Online storage service' },
  { id: 'premiumize', name: 'Premiumize.me', category: 'other', icon: '⭐', color: '#FFC107', description: 'Premium cloud service' },
  { id: 'hidrive', name: 'HiDrive', category: 'other', icon: '🚀', color: '#00BCD4', description: 'STRATO cloud storage' },
  { id: 'putio', name: 'Put.io', category: 'other', icon: '🟣', color: '#9C27B0', description: 'Cloud storage for downloads' },
  { id: 'sugarsync', name: 'SugarSync', category: 'other', icon: '🍬', color: '#96BF0D', description: 'Cloud sync and backup' },
  { id: 'smugmug', name: 'SmugMug', category: 'other', icon: '📷', color: '#FDC016', description: 'Photo sharing platform' },
  { id: 'jottacloud', name: 'Jottacloud', category: 'other', icon: '🇳🇴', color: '#FF6900', description: 'Norwegian cloud storage' },
  { id: '4shared', name: '4shared', category: 'other', icon: '🔗', color: '#65C15D', description: 'File hosting service' },
  { id: 'icedrive', name: 'Icedrive', category: 'other', icon: '🧊', color: '#00A3FF', description: 'Cloud storage service' },
  { id: 'fastmail', name: 'Fastmail Files', category: 'other', icon: '✉️', color: '#3388FF', description: 'Fastmail file storage' },
  { id: 'synology-c2', name: 'Synology C2', category: 'other', icon: '🔵', color: '#213159', description: 'Synology cloud storage' },
  { id: 'filelu', name: 'FileLU', category: 'other', icon: '📁', color: '#2196F3', description: 'Cloud file hosting' },
  { id: 'telia', name: 'Telia Cloud', category: 'other', icon: '🔴', color: '#990AE3', description: 'Telia cloud storage' },
  { id: 'drime', name: 'Drime', category: 'other', icon: '📸', color: '#FF5722', description: 'Photo cloud storage' },
  { id: 'filen', name: 'Filen', category: 'other', icon: '🔒', color: '#6C63FF', description: 'Encrypted cloud storage' },
  { id: 'gofile', name: 'Gofile', category: 'other', icon: '📤', color: '#1E88E5', description: 'Free file hosting' },
  { id: 'pixeldrain', name: 'Pixeldrain', category: 'other', icon: '🎮', color: '#1B1B1B', description: 'File sharing platform' },
  { id: 'shade', name: 'Shade', category: 'other', icon: '🌑', color: '#2D2D2D', description: 'Private cloud storage' },
];

export const categories = [
  { id: 'all', name: 'All', icon: '🌐' },
  { id: 'popular', name: 'Popular', icon: '⭐' },
  { id: 'storage', name: 'Cloud Storage', icon: '☁️' },
  { id: 'object', name: 'Object Storage', icon: '📦' },
  { id: 'protocol', name: 'Protocol', icon: '🔗' },
  { id: 'selfhosted', name: 'Self-hosted', icon: '🏠' },
  { id: 'other', name: 'Other', icon: '📋' },
];
