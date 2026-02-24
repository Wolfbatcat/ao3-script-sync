# Universal AO3 Script Sync - Setup Guide

> **👤 This guide is for end users.** If you're the repository owner setting up the template sheet for the first time, see [TEMPLATE_SETUP.md](TEMPLATE_SETUP.md) instead.

## 📋 Overview

Universal AO3 Script Sync allows you to synchronize any AO3 userscript's localStorage data across multiple devices using Google Sheets as the storage backend. Select which settings to sync, configure automatic sync intervals, and seamlessly keep your userscript data consistent across all your devices.

---

## 🚀 Quick Start (3 Steps)

### Step 1: Copy the Template Google Sheet
### Step 2: Deploy Google Apps Script
### Step 3: Configure Userscript

---

## 📊 Step 1: Copy the Template Google Sheet

### 1.1 Make Your Copy

👉 **[Click here to copy the template](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/copy)**

> **Note**: Replace `YOUR_SHEET_ID` with the actual template sheet ID once available.

1. The link will open Google Sheets
2. Click **"Make a copy"** when prompted
3. The copy will open automatically
4. Optional: Rename it to something like "My AO3 Script Sync"

**That's it!** Your copy includes:
- ✅ All 3 required sheets (Instructions, Storage, Settings)
- ✅ All 5 Google Apps Script files pre-configured
- ✅ Proper formatting and headers
- ✅ Setup instructions right in the sheet

### 1.2 Verify Your Copy

Check that your copy has these 3 sheets (tabs at bottom):
- **Instructions** - Setup guide and documentation
- **Storage** - Will store your localStorage data (currently has example row)
- **Settings** - Configuration settings (has initial values)

If all three sheets are present, you're ready for Step 2! ✅

---

## ⚙️ Step 2: Deploy Google Apps Script

The template you copied already includes all the necessary Apps Script code. You just need to deploy it as a web app.

### 2.1 Open Apps Script Editor

1. In your Google Sheet copy, click **Extensions** → **Apps Script**
2. You'll see 5 script files already there:
   - `config.gs` - Configuration management
   - `utils.gs` - Utility functions  
   - `sheet.gs` - Sheet operations
   - `routes.gs` - HTTP routing
   - `handlers.gs` - Request handlers

**Do NOT modify the code** - it's pre-configured and ready to use!

### 2.2 Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the **⚙️ gear icon** next to "Select type"
3. Choose **Web app**
4. Configure deployment settings:
   - **Description**: "AO3 Script Sync API" (or any name you prefer)
   - **Execute as**: **Me** (your-email@gmail.com)
   - **Who has access**: **Anyone**
     - ⚠️ **Important**: This must be "Anyone" so the userscript can access it without Google login
5. Click **Deploy**

### 2.3 Authorize Access

On your first deployment, you'll see an authorization screen:

1. Click **Authorize access**
2. Choose your Google account
3. You may see a warning: **"Google hasn't verified this app"**
   - This is normal for personal scripts
   - Click **Advanced** (bottom-left)
   - Click **"Go to AO3 Script Sync API (unsafe)"**
4. Review the permissions requested:
   - See, edit, create, and delete all your Google Sheets spreadsheets
   - Connect to an external service
5. Click **Allow**

### 2.4 Copy Your Web App URL

After authorization, you'll see a deployment confirmation:

**Copy the Web App URL** that appears. It looks like:
```
https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxxxxxxxxxxxxx/exec
```

⚠️ **KEEP THIS URL PRIVATE!** 
- Anyone with this URL can access your synced data
- Don't share it publicly or post in forums/issues
- Treat it like a password

### 2.5 Test the Deployment

1. Open a new browser tab
2. Paste your Web App URL and add `?action=ping` to the end:
   ```
   https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec?action=ping
   ```
3. Press Enter
4. You should see a JSON response:
   ```json
   {
     "status": "success",
     "data": "Connection established!",
     "timestamp": "2026-02-13T12:34:56.789Z"
   }
   ```

✅ **If you see this, your backend is working correctly!**

❌ **If you see an error:**
- Check that the URL ends with `/exec` (not `/dev`)
- Verify "Who has access" is set to "Anyone"
- Wait a minute and try again (deployments can take a moment)

---

## 🔧 Step 3: Configure Userscript

> **💡 Quick Tip**: Your copied Google Sheet has detailed setup instructions in the **Instructions** sheet. You can follow those instead of this guide - they contain the same information!

### 3.1 Install the Userscript

1. Make sure you have a userscript manager installed:
   - **Tampermonkey** (Chrome, Firefox, Edge, Safari, Opera)
   - **Violentmonkey** (Chrome, Firefox, Edge)
   - **Greasemonkey** (Firefox)

2. Install the script:
   - Visit the script file `ao3_universal_sync.user.js`
   - Your userscript manager should prompt you to install it
   - Click **Install**

### 3.2 First-Time Setup on Main Device

1. Go to [ArchiveOfOurOwn.org](https://archiveofourown.org)
2. In the top navigation bar, find **"Userscripts"** menu
3. Click **Userscripts** → **Universal Script Sync**
4. You'll see a table showing all your localStorage data

#### **Select Keys to Sync**
1. Check the boxes next to the keys you want to sync across devices
   - ✅ Tip: Sync settings/preferences, not temporary data
   - ❌ Avoid: Authentication tokens, temporary cache data
2. Click **"Save Sync Selection"**

#### **Connect to Google Sheet**
1. In the **"🔧 Sync Settings"** section below the table:
2. Paste your **Web App URL** into the **"Google Apps Script URL"** field
3. Click **"Test Connection"**
4. You should see: ✅ **"Connection successful!"**
5. Click **"Initialize Google Sheet"**
6. Wait for confirmation: ✅ **"Successfully initialized!"**

#### **Enable Automatic Sync**
1. Check **"Enable Automatic Sync"**
2. Set **"Sync Interval"** (recommended: 60 seconds)
3. Check **"Show Sync Widget"** to see sync status
4. Adjust **"Widget Opacity"** if desired
5. Click **"Save Settings"**

You should now see a floating widget in the bottom-left showing sync countdown! 🎉

### 3.3 Setup on Additional Devices

1. Install the userscript (same as Step 3.1)
2. Go to AO3 → **Userscripts** → **Universal Script Sync**
3. Paste the **same Web App URL** you used before
4. Click **"Test Connection"**
5. Click **"Initialize Google Sheet"**
   - The script will automatically download all synced data!
6. Enable **"Enable Automatic Sync"**
7. Click **"Save Settings"**

Your settings are now syncing across devices! ⚡

---

## 🎯 Features & Usage

### Sync Widget

The floating widget (bottom-left) shows:
- **🔄 Countdown**: Time until next sync
- **Badge**: Number of pending changes
- **Click**: Trigger immediate sync

States:
- 🔄 **Normal**: Counting down to next sync
- 🔄 **Syncing**: Upload/download in progress (spinning)
- ✓ **Success**: Sync completed (green, 2 seconds)
- ✗ **Error**: Sync failed (red)
- ⚠️ **Offline**: No internet connection (gray)

### Manual Export/Import

Even with sync enabled, you can create manual backups:

1. Go to **Universal Script Sync** page
2. Select keys to export
3. Click **"Export All"**
4. Save the `.json` file

To import on any device:
1. Click **"Import"**
2. Select the `.json` file
3. All keys will be restored

### Changing Synced Keys

1. Go to **Universal Script Sync** page
2. Check/uncheck keys in the table
3. Click **"Save Sync Selection"**
4. Server will update automatically
5. Other devices will sync the new selection on next sync

### Resetting Everything

If you need to start over:
1. Click **"Reset Sync Settings"**
2. Confirm
3. All local sync data is cleared
4. You can re-initialize with same or different URL

---

## 🔒 Security & Privacy

### Important Security Notes

⚠️ **Your Web App URL is your authentication!**
- Anyone with the URL can read and modify your synced data
- Do NOT share the URL publicly
- Do NOT post it in forums, GitHub issues, etc.
- Treat it like a password

### What Gets Synced?

- ✅ Settings, preferences, configurations
- ✅ Feature toggles, custom lists
- ✅ Non-sensitive display options
- ❌ **Never sync**: passwords, API keys, auth tokens

### Multi-User Consideration

This system is designed for **one person, multiple devices**. 
- All devices using the same URL share the same data
- Last sync wins (no conflict resolution)
- Not suitable for multiple people sharing one sheet

### Revoking Access

To revoke all access:
1. Go to your Google Apps Script project
2. Delete the deployment
3. Create a new deployment (generates new URL)
4. Update all your devices with new URL

---

## 🐛 Troubleshooting

### "Connection test failed"

**Causes:**
- URL is incorrect
- Deployment is not set to "Anyone can access"
- Script has authorization errors

**Solutions:**
1. Check URL format: `https://script.google.com/macros/s/.../exec`
2. Re-deploy with "Who has access" = **Anyone**
3. Try opening URL in browser with `?action=ping`

### "Database already initialized"

**Cause:** You're trying to initialize twice

**Solution:** 
- This is normal if already set up
- To reset: Click **"Reset Sync Settings"** then re-initialize

### Sync Widget Stuck on "Syncing..."

**Causes:**
- Network error
- Script execution timeout
- Sheet is locked by another process

**Solutions:**
1. Wait 30 seconds, try **"Sync Now"**
2. Check browser console for errors (F12)
3. Verify Google Sheet is accessible (not deleted)

### Changes Not Syncing Between Devices

**Checklist:**
- ✅ Both devices have "Enable Automatic Sync" checked
- ✅ Both devices show the sync widget
- ✅ The key is selected in "Save Sync Selection" on both devices
- ✅ Wait for the sync interval to pass (60 seconds default)
- ✅ Try clicking "Sync Now" manually

### Quota Exceeded Errors

Google Apps Script has daily quotas:
- **URL Fetch calls**: 20,000/day (consumer accounts)

If syncing every 60 seconds:
- 1,440 syncs/day per device (well under limit)
- Multiple devices share the same quota

**Solution:** 
- Increase sync interval (e.g., 120 seconds)
- Reduce number of devices
- Wait until daily quota resets

---

## 📊 Understanding the Google Sheet

### Storage Sheet

Each row contains:
- **Column A**: localStorage key name
- **Column B**: localStorage value (as string)

You can manually view/edit data here, but changes won't sync until next sync cycle.

### Settings Sheet

- **`_last_modified`**: ISO timestamp of last sync (auto-updated)
- **`_connected_to_AO3`**: `TRUE` when initialized
- **`_sync_enabled_keys`**: Comma-separated list of selected keys

### Reading the Data

All data is stored as plain text strings, exactly as it appears in localStorage. 
- JSON objects are stored as JSON strings
- Arrays are stored as JSON strings
- Simple values are stored as-is

---

## 🔄 How Sync Works

### Sync Flow

1. **Local Changes Detected**
   - When a userscript modifies a synced key
   - Change is queued in "pending changes"
   - Badge shows pending count

2. **Sync Timer Triggers**
   - Every X seconds (default: 60)
   - Only when tab is visible
   - Only when online

3. **Sync Request**
   - Send all pending changes to Google Sheet
   - Server processes changes atomically (with lock)
   - Server returns complete current state

4. **Local Update**
   - Receive all synced keys from server
   - Overwrite local localStorage with server values
   - Clear pending changes
   - Update "Last Sync" timestamp

### Conflict Resolution

**Strategy**: **Server Always Wins (Last-Write-Wins)**

Example scenario:
- Device A changes key `glossary` to value `A` at 12:00:30
- Device B changes key `glossary` to value `B` at 12:00:35
- Device B syncs first → server has value `B`
- Device A syncs second → tries to set value `A`, but immediately gets `B` back from server
- Result: Both devices end with value `B`

⚠️ **Limitation**: Very close simultaneous edits may lose data. Sync system is designed for settings/preferences that don't change frequently, not real-time collaborative editing.

---

## 💡 Tips & Best Practices

### What to Sync ✅

- Color preferences, theme settings
- Feature enable/disable toggles
- Custom filter lists
- Reading history, bookmarks (if not too large)
- UI customization preferences

### What NOT to Sync ❌

- Authentication tokens
- Session data
- Temporary cache (expires quickly)
- Very large datasets (>50,000 characters)
- Data that changes every page load

### Optimal Sync Interval

- **60 seconds** (recommended): Good balance
- **30 seconds**: More responsive, higher quota usage
- **120+ seconds**: Lower quota usage, slower updates

### Managing Storage Size

Google Sheets cell limit: **50,000 characters per cell**

If a key's value is too large:
- Export it manually for backup
- Exclude it from sync selection
- Consider splitting into multiple keys

---

## 🆘 Getting Help

### Check the Console

1. Press **F12** to open browser developer tools
2. Go to **Console** tab
3. Look for messages starting with `USS:`
4. These show sync activity and errors

### Common Console Messages

```
USS: Universal Script Sync initialized
```
✅ Script loaded successfully

```
USS: Sync successful
```
✅ Sync completed without errors

```
USS: Offline, skipping sync
```
⚠️ No internet connection

```
USS: Sync error: [error message]
```
❌ Something went wrong

### Report Issues

If you encounter bugs or have feature requests:
1. Go to [GitHub Issues](https://github.com/Wolfbatcat/ao3-script-sync/issues)
2. Click **New Issue**
3. Include:
   - Browser and userscript manager
   - Console error messages
   - Steps to reproduce
   - **DO NOT** include your Web App URL

---

## 📝 Changelog

### Version 1.0.0 (2026-02-13)
- ✨ Initial release
- ✅ Google Sheets sync backend
- ✅ localStorage table with selection
- ✅ Automatic sync with configurable interval
- ✅ Sync widget with countdown
- ✅ Manual export/import
- ✅ Multi-device support

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🙏 Credits

Inspired by [AO3 FicTracker](https://greasyfork.org/en/scripts/513435) by infiniMotis.

UI elements adapted from [AO3: Import & Export Script Storage](https://greasyfork.org/en/scripts/545336) by escctrl.

---

**Enjoy syncing your AO3 userscript settings across all your devices! 🎉**
