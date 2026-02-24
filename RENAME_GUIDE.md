# ScriptSync Rename Implementation Guide

Complete find-and-replace guide to rename "Universal Script Sync" to "ScriptSync" throughout `ao3_universal_sync.user.js`.

## Order of Operations

Perform these replacements in order to avoid conflicts:

### 1. Script Metadata
**Find:** `// @name         AO3: Universal Script Sync`  
**Replace:** `// @name         AO3: ScriptSync`

---

### 2. Console Messages (12 replacements)
**Find:** `'USS: `  
**Replace:** `'[ScriptSync] `

This will update all console.log and console.error messages:
- `console.error('USS: Error parsing` → `console.error('[ScriptSync] Error parsing`
- `console.log('USS: Offline,` → `console.log('[ScriptSync] Offline,`
- `console.log('USS: Already syncing,` → `console.log('[ScriptSync] Already syncing,`
- `console.log('USS: Not initialized,` → `console.log('[ScriptSync] Not initialized,`
- `console.log('USS: Sync successful` → `console.log('[ScriptSync] Sync successful`
- `console.error('USS: Sync error:` → `console.error('[ScriptSync] Sync error:`
- `console.log('USS: Sending request:` → `console.log('[ScriptSync] Sending request:`
- `console.log('USS: Response status:` → `console.log('[ScriptSync] Response status:`
- `console.error('USS: Failed to parse` → `console.error('[ScriptSync] Failed to parse`
- `console.error('USS: Request error:` → `console.error('[ScriptSync] Request error:`
- `console.error('USS: Request timeout` → `console.error('[ScriptSync] Request timeout`
- `console.log('USS: Local storage` → `console.log('[ScriptSync] Local storage`

---

### 3. Initialization Message
**Find:** `console.log('USS: Universal Script Sync initialized');`  
**Replace:** `console.log('[ScriptSync] loaded.');`

---

### 4. LocalStorage Prefix
**Find:** `constructor(prefix = 'USS_') {`  
**Replace:** `constructor(prefix = 'SS_') {`

---

### 5. Comment Update
**Find:** `// Get settings object - all settings stored in single USS_settings key`  
**Replace:** `// Get settings object - all settings stored in single SS_settings key`

---

### 6. Variable Names
**Find:** `const isUSSKey = key.startsWith('USS_');`  
**Replace:** `const isScriptSyncKey = key.startsWith('SS_');`

**Find:** `if (isUSSKey) rowClasses.push('uss-internal-row');`  
**Replace:** `if (isScriptSyncKey) rowClasses.push('ss-internal-row');`

**Find:** `if (!isSelected || isUSSKey) {`  
**Replace:** `if (!isSelected || isScriptSyncKey) {`

**Find:** `const warningIcon = isFicTrackerKey ? '⚠️ ' : (isUSSKey ? '🔧 ' : '');`  
**Replace:** `const warningIcon = isFicTrackerKey ? '⚠️ ' : (isScriptSyncKey ? '🔧 ' : '');`

**Find:** `const toggleTitle = isFicTrackerKey ? ' title="FicTracker data should use FicTracker\'s built-in sync for best results"' : (isUSSKey ? ' title="USS internal data - not syncable"' : '');`  
**Replace:** `const toggleTitle = isFicTrackerKey ? ' title="FicTracker data should use FicTracker\'s built-in sync for best results"' : (isScriptSyncKey ? ' title="ScriptSync internal data - not syncable"' : '');`

**Find:** `const toggleDisabled = isUSSKey ? ' disabled' : '';`  
**Replace:** `const toggleDisabled = isScriptSyncKey ? ' disabled' : '';`

---

### 7. CSS Class Prefix (Replace all `uss-` with `ss-`)

Replace in this exact order to avoid conflicts:

**Find:** `.uss-ft-warning-row`  
**Replace:** `.ss-ft-warning-row`

**Find:** `/* USS internal data styles */`  
**Replace:** `/* ScriptSync internal data styles */`

**Find:** `.uss-internal-row`  
**Replace:** `.ss-internal-row`

**Find:** `.uss-ft-notice-close`  
**Replace:** `.ss-ft-notice-close`

**Find:** `.uss-row-hidden`  
**Replace:** `.ss-row-hidden`

**Find:** `.uss-sync-toggle`  
**Replace:** `.ss-sync-toggle`

**Find:** `.uss-toggle-slider`  
**Replace:** `.ss-toggle-slider`

**Find:** `.uss-unsynced-row`  
**Replace:** `.ss-unsynced-row`

**Find:** `.uss-status-loading`  
**Replace:** `.ss-status-loading`

**Find:** `.uss-status-success`  
**Replace:** `.ss-status-success`

**Find:** `.uss-status-error`  
**Replace:** `.ss-status-error`

---

### 8. CSS Animation Name
**Find:** `@keyframes uss-spin`  
**Replace:** `@keyframes ss-spin`

**Find:** `uss-spin 1s linear infinite`  
**Replace:** `ss-spin 1s linear infinite`

**Find:** `'uss-spin'`  
**Replace:** `'ss-spin'`

**Find:** `@keyframes uss-spin{to{transform:rotate(360deg)}}`  
**Replace:** `@keyframes ss-spin{to{transform:rotate(360deg)}}`

---

### 9. HTML ID Attributes (Replace all `uss-` IDs with `ss-`)

**Find:** `#uss-container`  
**Replace:** `#ss-container`

**Find:** `id="uss-container"`  
**Replace:** `id="ss-container"`

**Find:** `#uss-connection-status`  
**Replace:** `#ss-connection-status`

**Find:** `id="uss-connection-status"`  
**Replace:** `id="ss-connection-status"`

**Find:** `#uss-sync-widget`  
**Replace:** `#ss-sync-widget`

**Find:** `id="uss-sync-widget"`  
**Replace:** `id="ss-sync-widget"`

**Find:** `#uss-sync-badge`  
**Replace:** `#ss-sync-badge`

**Find:** `id="uss-sync-badge"`  
**Replace:** `id="ss-sync-badge"`

**Find:** `#uss-spin`  
**Replace:** `#ss-spin`

**Find:** `id="uss-spin"`  
**Replace:** `id="ss-spin"`

**Find:** `#uss-open-storage`  
**Replace:** `#ss-open-storage`

**Find:** `id="uss-open-storage"`  
**Replace:** `id="ss-open-storage"`

**Find:** `#uss-toggle-unsynced`  
**Replace:** `#ss-toggle-unsynced`

**Find:** `id="uss-toggle-unsynced"`  
**Replace:** `id="ss-toggle-unsynced"`

**Find:** `#uss-select-all`  
**Replace:** `#ss-select-all`

**Find:** `id="uss-select-all"`  
**Replace:** `id="ss-select-all"`

**Find:** `#uss-select-none`  
**Replace:** `#ss-select-none`

**Find:** `id="uss-select-none"`  
**Replace:** `id="ss-select-none"`

**Find:** `#uss-export`  
**Replace:** `#ss-export`

**Find:** `id="uss-export"`  
**Replace:** `id="ss-export"`

**Find:** `#uss-import`  
**Replace:** `#ss-import`

**Find:** `id="uss-import"`  
**Replace:** `id="ss-import"`

**Find:** `#uss-delete`  
**Replace:** `#ss-delete`

**Find:** `id="uss-delete"`  
**Replace:** `id="ss-delete"`

**Find:** `#uss-import-file`  
**Replace:** `#ss-import-file`

**Find:** `id="uss-import-file"`  
**Replace:** `id="ss-import-file"`

**Find:** `#uss-storagelist`  
**Replace:** `#ss-storagelist`

**Find:** `id="uss-storagelist"`  
**Replace:** `id="ss-storagelist"`

**Find:** `#uss-ft-notice`  
**Replace:** `#ss-ft-notice`

**Find:** `id="uss-ft-notice"`  
**Replace:** `id="ss-ft-notice"`

**Find:** `#uss-ft-notice-close`  
**Replace:** `#ss-ft-notice-close`

**Find:** `id="uss-ft-notice-close"`  
**Replace:** `id="ss-ft-notice-close"`

**Find:** `#uss-sync-enabled`  
**Replace:** `#ss-sync-enabled`

**Find:** `id="uss-sync-enabled"`  
**Replace:** `id="ss-sync-enabled"`

**Find:** `#uss-widget-enabled`  
**Replace:** `#ss-widget-enabled`

**Find:** `id="uss-widget-enabled"`  
**Replace:** `id="ss-widget-enabled"`

**Find:** `#uss-sheet-url`  
**Replace:** `#ss-sheet-url`

**Find:** `id="uss-sheet-url"`  
**Replace:** `id="ss-sheet-url"`

**Find:** `for="uss-sheet-url"`  
**Replace:** `for="ss-sheet-url"`

**Find:** `#uss-sync-interval`  
**Replace:** `#ss-sync-interval`

**Find:** `id="uss-sync-interval"`  
**Replace:** `id="ss-sync-interval"`

**Find:** `for="uss-sync-interval"`  
**Replace:** `for="ss-sync-interval"`

**Find:** `#uss-interval-value`  
**Replace:** `#ss-interval-value`

**Find:** `id="uss-interval-value"`  
**Replace:** `id="ss-interval-value"`

**Find:** `#uss-last-sync-time`  
**Replace:** `#ss-last-sync-time`

**Find:** `id="uss-last-sync-time"`  
**Replace:** `id="ss-last-sync-time"`

**Find:** `#uss-next-sync-countdown`  
**Replace:** `#ss-next-sync-countdown`

**Find:** `id="uss-next-sync-countdown"`  
**Replace:** `id="ss-next-sync-countdown"`

**Find:** `#uss-widget-opacity`  
**Replace:** `#ss-widget-opacity`

**Find:** `id="uss-widget-opacity"`  
**Replace:** `id="ss-widget-opacity"`

**Find:** `for="uss-widget-opacity"`  
**Replace:** `for="ss-widget-opacity"`

**Find:** `#uss-opacity-value`  
**Replace:** `#ss-opacity-value`

**Find:** `id="uss-opacity-value"`  
**Replace:** `id="ss-opacity-value"`

**Find:** `#uss-test-connection`  
**Replace:** `#ss-test-connection`

**Find:** `id="uss-test-connection"`  
**Replace:** `id="ss-test-connection"`

**Find:** `#uss-initialize`  
**Replace:** `#ss-initialize`

**Find:** `id="uss-initialize"`  
**Replace:** `id="ss-initialize"`

**Find:** `#uss-clear-server`  
**Replace:** `#ss-clear-server`

**Find:** `id="uss-clear-server"`  
**Replace:** `id="ss-clear-server"`

**Find:** `#uss-sync-now`  
**Replace:** `#ss-sync-now`

**Find:** `id="uss-sync-now"`  
**Replace:** `id="ss-sync-now"`

**Find:** `#uss-save-settings`  
**Replace:** `#ss-save-settings`

**Find:** `id="uss-save-settings"`  
**Replace:** `id="ss-save-settings"`

**Find:** `#uss-reset`  
**Replace:** `#ss-reset`

**Find:** `id="uss-reset"`  
**Replace:** `id="ss-reset"`

---

### 10. HTML Class Attributes

**Find:** `class="uss-sync-check"`  
**Replace:** `class="ss-sync-check"`

**Find:** `class="uss-select-check"`  
**Replace:** `class="ss-select-check"`

**Find:** `class="uss-storage-key"`  
**Replace:** `class="ss-storage-key"`

**Find:** `'.uss-sync-check'`  
**Replace:** `'.ss-sync-check'`

**Find:** `'.uss-select-check'`  
**Replace:** `'.ss-select-check'`

**Find:** `'.uss-unsynced-row'`  
**Replace:** `'.ss-unsynced-row'`

---

### 11. User-Facing Text

**Find:** `<a href="#" id="ss-open-storage">Universal Script Sync</a>`  
**Replace:** `<a href="#" id="ss-open-storage">ScriptSync</a>`

**Find:** `<h2>Universal Script Sync</h2>`  
**Replace:** `<h2>ScriptSync</h2>`

**Find:** `<strong>Universal Script Sync</strong>`  
**Replace:** `<strong>ScriptSync</strong>`

**Find:** `use FicTracker's Google Sheets sync instead of USS.`  
**Replace:** `use FicTracker's Google Sheets sync instead of ScriptSync.`

**Find:** `<strong>Recommended:</strong> Use USS for other scripts' settings`  
**Replace:** `<strong>Recommended:</strong> Use ScriptSync for other scripts' settings`

---

### 12. Global Object

**Find:** `window.USS = {`  
**Replace:** `window.ScriptSync = {`

---

### 13. startsWith Check

**Find:** `if (key.startsWith('USS_')) {`  
**Replace:** `if (key.startsWith('SS_')) {`

---

## Verification Checklist

After completing all replacements:

- [ ] Script name is "AO3: ScriptSync" in metadata
- [ ] All console messages use `[ScriptSync]` prefix
- [ ] Initialization message is `[ScriptSync] loaded.`
- [ ] StorageManager uses `SS_` prefix
- [ ] All CSS classes use `ss-` prefix
- [ ] All HTML IDs use `ss-` prefix
- [ ] Animation is named `ss-spin`
- [ ] Menu shows "ScriptSync"
- [ ] Headings show "ScriptSync"
- [ ] FT warning mentions "ScriptSync" not "USS"
- [ ] Global object is `window.ScriptSync`
- [ ] Variable is `isScriptSyncKey` not `isUSSKey`
- [ ] startsWith checks use `'SS_'` not `'USS_'`
- [ ] Tooltip says "ScriptSync internal data"

## Automated Approach

If using a text editor with regex find-and-replace:

1. Open `ao3_universal_sync.user.js` in VS Code or similar
2. Use Find & Replace (Ctrl+H)
3. Copy each "Find" and "Replace" pair from above
4. Click "Replace All" for each pair in order
5. Save the file

## Testing

After implementation:
1. Load the script in Tampermonkey/Violentmonkey
2. Check console for `[ScriptSync] loaded.` message
3. Open the menu - should show "ScriptSync"
4. Check localStorage - should create `SS_settings` and `SS_pendingChanges`
5. Verify all UI elements work properly
