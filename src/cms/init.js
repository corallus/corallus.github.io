import CMS from 'netlify-cms-app'
import FileSystemBackend from 'netlify-cms-backend-fs'

// If running in development
if(process.env.NODE_ENV === 'development') {
  window.CMS_ENV = 'development_overrides' // Set the CMS_ENV to the development_ overrides.
  CMS.registerBackend('file-system', FileSystemBackend) // Register the FileSystemBackend.
}

// Start NetlifyCMS
CMS.init()