const DIRECTORY_NAME = 'logs';
export const FILE_TRANSPORT_CONFIG = {
  DIRECTORY_NAME,
  AUDIT_FILE: `${DIRECTORY_NAME}/audit.log`,
  FILE_NAME: '%DATE%.log',
  DATE_FORMAT: 'YYYY-MM-DD',
  MAX_SIZE: '20m',
  MAX_FILES: 30,
};