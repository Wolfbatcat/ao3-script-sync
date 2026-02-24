/**
 * Sheet Operations for ScriptSync
 * Direct interaction with Storage and Settings sheets
 */

/**
 * Get all storage data from the Storage sheet
 * @returns {Object} Key-value pairs from storage
 */
function getStorageData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const storageSheet = ss.getSheetByName(STORAGE_SHEET_NAME);
  
  if (!storageSheet) {
    throw new Error('Storage sheet not found');
  }
  
  const lastRow = storageSheet.getLastRow();
  if (lastRow < 2) {
    return {};
  }
  
  const data = storageSheet.getRange(2, 1, lastRow - 1, 2).getValues();
  const storage = {};
  
  for (let i = 0; i < data.length; i++) {
    const key = data[i][0];
    const value = data[i][1];
    if (key) {
      storage[key] = value !== null && value !== undefined ? value.toString() : '';
    }
  }
  
  return storage;
}

/**
 * Get a specific storage value
 * @param {string} key - Storage key
 * @returns {string|null} Storage value or null if not found
 */
function getStorageValue(key) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const storageSheet = ss.getSheetByName(STORAGE_SHEET_NAME);
  
  if (!storageSheet) {
    return null;
  }
  
  const lastRow = storageSheet.getLastRow();
  if (lastRow < 2) {
    return null;
  }
  
  const data = storageSheet.getRange(2, 1, lastRow - 1, 2).getValues();
  
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === key) {
      return data[i][1] !== null && data[i][1] !== undefined ? data[i][1].toString() : '';
    }
  }
  
  return null;
}

/**
 * Set a storage value (update existing or append new)
 * @param {string} key - Storage key
 * @param {string} value - Storage value
 */
function setStorageValue(key, value) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const storageSheet = ss.getSheetByName(STORAGE_SHEET_NAME);
  
  if (!storageSheet) {
    throw new Error('Storage sheet not found');
  }
  
  // Convert value to string
  const stringValue = value !== null && value !== undefined ? value.toString() : '';
  
  // Find existing row or append new one
  const lastRow = storageSheet.getLastRow();
  const data = lastRow >= 2 ? storageSheet.getRange(2, 1, lastRow - 1, 1).getValues() : [];
  
  let rowIndex = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === key) {
      rowIndex = i + 2; // +2 because we start from row 2
      break;
    }
  }
  
  if (rowIndex > 0) {
    // Update existing row
    storageSheet.getRange(rowIndex, 2).setValue(stringValue);
  } else {
    // Append new row
    storageSheet.appendRow([key, stringValue]);
  }
}

/**
 * Delete a storage key
 * @param {string} key - Storage key to delete
 * @returns {boolean} True if key was found and deleted
 */
function deleteStorageKey(key) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const storageSheet = ss.getSheetByName(STORAGE_SHEET_NAME);
  
  if (!storageSheet) {
    return false;
  }
  
  const lastRow = storageSheet.getLastRow();
  if (lastRow < 2) {
    return false;
  }
  
  const data = storageSheet.getRange(2, 1, lastRow - 1, 1).getValues();
  
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === key) {
      storageSheet.deleteRow(i + 2); // +2 because we start from row 2
      return true;
    }
  }
  
  return false;
}

/**
 * Set multiple storage values at once
 * @param {Object} keyValuePairs - Object with key-value pairs
 */
function setMultipleStorageValues(keyValuePairs) {
  if (!keyValuePairs || typeof keyValuePairs !== 'object') {
    return;
  }
  
  for (const key in keyValuePairs) {
    if (keyValuePairs.hasOwnProperty(key)) {
      setStorageValue(key, keyValuePairs[key]);
    }
  }
}

/**
 * Clear all data from the Storage sheet (keeps header row if exists)
 */
function clearStorageSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const storageSheet = ss.getSheetByName(STORAGE_SHEET_NAME);
  
  if (!storageSheet) {
    return;
  }
  
  const lastRow = storageSheet.getLastRow();
  if (lastRow >= 2) {
    storageSheet.deleteRows(2, lastRow - 1);
  }
}

/**
 * Get the list of enabled sync keys from Settings
 * @returns {Array} Array of enabled key names
 */
function getEnabledSyncKeys() {
  const keysString = getConfigValue('_sync_enabled_keys', '');
  return parseCommaSeparated(keysString);
}

/**
 * Set the list of enabled sync keys in Settings
 * @param {Array} keys - Array of key names to enable
 */
function setEnabledSyncKeys(keys) {
  if (!Array.isArray(keys)) {
    keys = [];
  }
  
  const keysString = arrayToCommaSeparated(keys);
  setConfigValue('_sync_enabled_keys', keysString);
}

/**
 * Check if database is initialized
 * @returns {boolean} True if initialized
 */
function isDatabaseInitialized() {
  const connectedFlag = getConfigValue('_connected_to_AO3', false);
  return connectedFlag === true || connectedFlag === 'TRUE' || connectedFlag === 'true';
}
