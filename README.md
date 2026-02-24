# Universal AO3 Script Sync

Sync any AO3 userscript's localStorage data across multiple devices using Google Sheets as the storage backend.

## 🌟 Features

- ✅ **Universal Sync**: Works with any AO3 userscript that uses localStorage
- ✅ **Selective Syncing**: Choose exactly which localStorage keys to sync
- ✅ **Automatic Updates**: Configure sync intervals (default: 60 seconds)
- ✅ **Visual Feedback**: Floating widget shows sync status and countdown
- ✅ **Multi-Device**: Seamlessly sync across unlimited devices
- ✅ **Manual Backup**: Export/import functionality for manual backups
- ✅ **Free**: Uses free Google Sheets as storage (no server costs)
- ✅ **Privacy**: Your data stays in your Google account

## 📋 Quick Start

### 1. Copy the Template Google Sheet
👉 **[Click here to make a copy](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/copy)**

This creates your own copy with all the Apps Script code pre-configured.

### 2. Deploy as Web App
1. In your copied sheet: **Extensions → Apps Script**
2. Click **Deploy → New deployment → Web app**
3. Set "Execute as: Me" and "Who has access: Anyone"
4. Copy the deployment URL (keep it private!)

### 3. Install & Configure Userscript
1. Install `ao3_universal_sync.user.js` in your userscript manager
2. On AO3, click **Userscripts → Universal Script Sync**
3. Select keys to sync, paste your deployment URL
4. Click **Test Connection**, then **Initialize Google Sheet**
5. Enable **Automatic Sync**

**For detailed step-by-step instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md)**

## 🎯 Use Cases

Perfect for syncing:
- Script preferences and settings
- Custom filter lists
- Feature toggles
- UI customization options
- Reading history/progress (if not too large)

Works with popular AO3 userscripts:
- AO3 FicTracker
- AO3 Kudosed and seen history
- AO3 Tracking
- AO3 Glossary Definition Previews
- AO3 Comment Formatting
- And many more!

## 📁 Project Structure

```
ao3-script-sync/
├── Universal Sync Backend/    # Google Apps Script files
│   ├── config.gs             # Configuration management
│   ├── utils.gs              # Utility functions
│   ├── sheet.gs              # Sheet operations
│   ├── routes.gs             # HTTP routing
│   └── handlers.gs           # Request handlers
├── ao3_universal_sync.user.js  # Main userscript
├── SETUP_GUIDE.md            # Detailed user setup instructions
├── TEMPLATE_SETUP.md         # Instructions for creating the template (repo owner)
└── README.md                 # This file
```

> **Note for Repository Owner**: See [TEMPLATE_SETUP.md](TEMPLATE_SETUP.md) for detailed instructions on creating and maintaining the template Google Sheet.

## 🔒 Security

⚠️ **Important**: Your Web App URL is your authentication key!
- Keep the URL private (treat it like a password)
- Anyone with the URL can access your synced data
- Do not share publicly or post in issues/forums

This system is designed for **single-user, multi-device** scenarios. All devices using the same URL share the same data with no isolation.

## 🐛 Troubleshooting

### Connection Test Fails
- Verify URL format: `https://script.google.com/macros/s/.../exec`
- Check deployment settings: "Who has access" must be **Anyone**
- Try opening URL in browser with `?action=ping` appended

### Changes Not Syncing
- Ensure "Enable Automatic Sync" is checked on all devices
- Verify the key is selected in "Save Sync Selection"
- Wait for sync interval to pass (or click "Sync Now")
- Check browser console (F12) for `USS:` messages

### See [SETUP_GUIDE.md](SETUP_GUIDE.md#-troubleshooting) for more solutions

## 🔄 How It Works

1. **Local Change**: Userscript modifies localStorage → queued in "pending changes"
2. **Sync Timer**: Every X seconds, send pending changes to Google Sheet
3. **Server Update**: Apps Script updates Storage sheet atomically (with lock)
4. **Server Response**: Returns complete current state of all synced keys
5. **Local Update**: Overwrite local localStorage with server values

**Conflict Resolution**: Server always wins (last-write-wins strategy)

## 📊 Technical Details

- **Backend**: Google Apps Script (v8 runtime)
- **Storage**: Google Sheets (free tier: 10M cells)
- **API Quota**: 20,000 URL Fetch calls/day
- **Cell Limit**: 50,000 characters per cell
- **Sync Method**: HTTP POST with JSON payloads
- **CORS**: Handled by Apps Script with open access

## 🛠️ Development

### File Descriptions

**Backend (Google Apps Script):**
- `config.gs` - Manages settings with 5-minute cache
- `utils.gs` - Response builders, lock management, error handling
- `sheet.gs` - Direct sheet read/write operations
- `routes.gs` - HTTP routing (doGet, doPost, doOptions)
- `handlers.gs` - Business logic for sync, initialize, ping

**Userscript:**
- `StorageManager` - localStorage wrapper with USS_ prefix
- `RemoteSyncManager` - Sync engine, widget, pending queue
- `UIManager` - Storage table, settings panel, event handlers
- `StyleManager` - CSS injection

## 📝 Changelog

### v1.0.0 (2026-02-13)
- Initial release
- Core sync functionality
- localStorage table UI
- Sync widget with countdown
- Manual export/import
- Multi-device support

## 🙏 Credits

Inspired by:
- [AO3 FicTracker](https://greasyfork.org/en/scripts/513435) by infiniMotis (sync architecture)
- [AO3: Import & Export Script Storage](https://greasyfork.org/en/scripts/545336) by escctrl (UI design)

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/Wolfbatcat/ao3-script-sync/issues)
- **Documentation**: [SETUP_GUIDE.md](SETUP_GUIDE.md)
- **Console Logs**: Press F12, look for `USS:` messages

---

**Happy syncing! 🎉**
