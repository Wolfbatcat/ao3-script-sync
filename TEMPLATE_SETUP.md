# Template Google Sheet Setup Instructions

**For Repository Owner: Setting Up the Master Template**

This guide is for creating the original template Google Sheet that users will copy. Users will not need to create sheets from scratch - they'll just make a copy of your template.

---

## 📋 Creating the Template Sheet

### Step 1: Create New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Rename it to **"AO3 Universal Script Sync - TEMPLATE"**
4. **Important**: This will be the master template that you share publicly

---

## 📑 Sheet Structure

### Sheet 1: Instructions

1. Rename **"Sheet1"** to **"Instructions"**
2. In cell **A1**, add a large header (Font size: 18-20, Bold):
   ```
   🔄 AO3 Universal Script Sync - Setup Instructions
   ```

3. Format cell A1:
   - Merge cells A1:D1
   - Set background color: #900 (AO3 red) or #4285f4 (Google blue)
   - Set text color: White
   - Center alignment
   - Padding: 10px

4. In cell **A3**, add the following formatted content:

```
Welcome to Universal Script Sync for AO3!

This Google Sheet stores your AO3 userscript localStorage data and syncs it across all your devices.

⚠️ IMPORTANT SECURITY NOTE:
• Keep your deployed script URL PRIVATE
• Anyone with your deployment URL can access your synced data
• Never share the URL publicly or post it in forums/issues
• Treat the URL like a password

📊 SHEET STRUCTURE:

• Instructions (this sheet) - Setup guide and documentation
• Storage - Your localStorage key-value pairs (auto-populated)
• Settings - Sync configuration (auto-populated)

🚀 QUICK START:

1. You already have this sheet ✓ (you made a copy of the template)
2. Deploy the Google Apps Script (see below)
3. Configure the userscript on AO3

---

📝 STEP 1: Deploy Google Apps Script

1. In this Google Sheet, click: Extensions → Apps Script
2. You'll see 5 pre-configured script files (config, utils, sheet, routes, handlers)
3. Click: Deploy → New deployment
4. Click the ⚙️ gear icon next to "Select type"
5. Choose: Web app
6. Configure:
   • Description: "AO3 Script Sync API"
   • Execute as: Me (your email)
   • Who has access: Anyone ⚠️ (required for userscript access)
7. Click: Deploy
8. Authorize access (if prompted):
   • Click "Authorize access"
   • Choose your Google account
   • Click "Advanced" → "Go to [Unsafe]"
   • Click "Allow"
9. COPY THE WEB APP URL that appears
   Format: https://script.google.com/macros/s/AKfycbxxxxxxxxx/exec

---

📝 STEP 2: Install & Configure Userscript

1. Install the userscript from:
   https://github.com/Wolfbatcat/ao3-script-sync

2. Go to ArchiveOfOurOwn.org

3. Click: Userscripts → Universal Script Sync

4. Select which localStorage keys to sync:
   • Check boxes next to keys you want synced
   • Click "Save Sync Selection"

5. Connect to your Google Sheet:
   • Paste your Web App URL (from Step 1)
   • Click "Test Connection" (should see green success message)
   • Click "Initialize Google Sheet"
   • Wait for "Successfully initialized!" message

6. Enable automatic sync:
   • Check "Enable Automatic Sync"
   • Set interval (recommended: 60 seconds)
   • Check "Show Sync Widget" to see sync status
   • Click "Save Settings"

You should see a floating sync widget in bottom-left corner! ✅

---

📝 STEP 3: Add Additional Devices

On each additional device:
1. Install the userscript
2. Go to AO3 → Userscripts → Universal Script Sync
3. Paste the SAME Web App URL from Step 1
4. Click "Test Connection" then "Initialize Google Sheet"
   (Your existing data will automatically download!)
5. Enable "Enable Automatic Sync"
6. Click "Save Settings"

All your devices are now syncing! 🎉

---

💡 TIPS & BEST PRACTICES:

What to Sync ✅
• Script preferences and settings
• Feature toggles
• Custom filter lists
• UI customization options
• Reading history/bookmarks (if not too large)

What NOT to Sync ❌
• Authentication tokens or passwords
• Session data or temporary cache
• Very large datasets (>50,000 characters per key)
• Data that changes every page load

Recommended Sync Interval:
• 60 seconds - Good balance (recommended)
• 30 seconds - More responsive, higher quota usage
• 120+ seconds - Lower quota usage, slower updates

---

🔧 TROUBLESHOOTING:

"Connection test failed"
→ Check URL format: https://script.google.com/macros/s/.../exec
→ Verify deployment: "Who has access" must be "Anyone"
→ Try opening URL in browser with ?action=ping

"Database already initialized"
→ This is normal if you've already set it up
→ To reset: Click "Reset Sync Settings" then re-initialize

Changes not syncing between devices
→ Ensure "Enable Automatic Sync" is checked on all devices
→ Verify keys are selected in "Save Sync Selection"
→ Wait for sync interval (or click "Sync Now")
→ Check browser console (F12) for errors

Widget stuck on "Syncing..."
→ Wait 30 seconds, then click "Sync Now"
→ Check browser console (F12) for error messages
→ Verify Google Sheet is accessible

---

📖 MORE HELP:

• Full Documentation: https://github.com/Wolfbatcat/ao3-script-sync
• Report Issues: https://github.com/Wolfbatcat/ao3-script-sync/issues
• Browser Console: Press F12, look for messages starting with "USS:"

---

✨ You're all set! Enjoy seamless syncing across all your devices!
```

5. Format the Instructions sheet:
   - Wrap text in column A
   - Set column A width to ~800 pixels
   - Use monospaced font (Courier New or Consolas) for URLs and code blocks
   - Optional: Add alternating row colors for sections

---

### Sheet 2: Storage

1. Create new sheet, rename to **"Storage"**

2. Row 1 - Headers:
   - Cell **A1**: `Key` (Bold, Background: #f3f3f3)
   - Cell **B1**: `Value` (Bold, Background: #f3f3f3)

3. Formatting:
   - Freeze row 1: View → Freeze → 1 row
   - Column A width: 300 pixels (for key names)
   - Column B width: 700 pixels (for values)
   - Set both columns to wrap text: Format → Text wrapping → Wrap

4. Optional - Add example data in Row 2 (users will see this initially):
   - Cell **A2**: `_example_key`
   - Cell **B2**: `This row will be replaced with your actual localStorage data when you initialize the sync.`
   - Make this row light gray to indicate it's a placeholder

---

### Sheet 3: Settings

1. Create new sheet, rename to **"Settings"**

2. Row 1 - Headers:
   - Cell **A1**: `Setting Key` (Bold, Background: #f3f3f3)
   - Cell **B1**: `Value` (Bold, Background: #f3f3f3)

3. Add initial configuration rows:

| Row | Column A | Column B | Notes |
|-----|----------|----------|-------|
| 2 | `_last_modified` | *(leave empty)* | Will be auto-populated on first sync |
| 3 | `_connected_to_AO3` | `FALSE` | Will change to TRUE on initialization |
| 4 | `_sync_enabled_keys` | *(leave empty)* | Will contain comma-separated key list |

4. Formatting:
   - Freeze row 1: View → Freeze → 1 row
   - Column A width: 300 pixels
   - Column B width: 500 pixels
   - Set both columns to wrap text
   - Make cells in column A bold (for setting keys)

5. Optional - Add descriptions in Column C:
   - Cell **C1**: `Description` (Bold, Background: #f3f3f3)
   - Cell **C2**: `ISO timestamp of last successful sync`
   - Cell **C3**: `Indicates if database has been initialized`
   - Cell **C4**: `Comma-separated list of localStorage keys being synced`

---

### Sheet 4 (Optional): Error Log

For advanced debugging, you can add an error log sheet:

1. Create new sheet, rename to **"ErrorLog"**
2. Row 1 headers:
   - A1: `Timestamp`
   - B1: `Context`
   - C1: `Error Message`
3. This will only be used if you uncomment the error logging code in `utils.gs`

---

## 🔧 Apps Script Setup

### Step 1: Open Apps Script Editor

1. In your template sheet, click **Extensions → Apps Script**
2. Delete the default `Code.gs` file (select it, click ⋮ → Remove)

### Step 2: Create Script Files

Create these 5 files by clicking **+ → Script**:

1. **config.gs** - Copy entire content from `Universal Sync Backend/config.gs`
2. **utils.gs** - Copy entire content from `Universal Sync Backend/utils.gs`
3. **sheet.gs** - Copy entire content from `Universal Sync Backend/sheet.gs`
4. **routes.gs** - Copy entire content from `Universal Sync Backend/routes.gs`
5. **handlers.gs** - Copy entire content from `Universal Sync Backend/handlers.gs`

### Step 3: Save Project

1. Click the project name (top-left) to rename it:
   - Name: **"AO3 Universal Script Sync Backend"**
2. Save all files: File → Save all (or Ctrl+S)

### Step 4: Test the Scripts

1. In the toolbar, select function: `handlePing`
2. Click **Run** (▶️ button)
3. First run will ask for authorization:
   - Click **Review permissions**
   - Choose your Google account
   - Click **Advanced → Go to [Unsafe]**
   - Click **Allow**
4. Check execution log (bottom) - should complete without errors

---

## 🚀 Deploy Web App (For Testing)

**Note**: Users will deploy their own instances when they copy the sheet. This deployment is just for you to test.

1. Click **Deploy → Test deployments**
2. This creates a temporary deployment URL for testing
3. Copy the test URL and append `?action=ping`
4. Open in browser - should see:
   ```json
   {
     "status": "success",
     "data": "Connection established!",
     "timestamp": "2026-02-13T..."
   }
   ```

**Do NOT create a permanent deployment** of the template! Each user will deploy their own.

---

## 📤 Sharing the Template

### Step 1: Set Sharing Permissions

1. Click **Share** button (top-right of sheet)
2. Under "General access" → Click **Restricted**
3. Choose **"Anyone with the link"**
4. Set permission to **"Viewer"** (not Editor!)
   - This allows users to make copies but not modify your template
5. Click **Done**

### Step 2: Get Shareable Link

1. Click **Share** → **Copy link**
2. Your link will look like:
   ```
   https://docs.google.com/spreadsheets/d/1ABC...XYZ/edit?usp=sharing
   ```

### Step 3: Create Template Copy Link

For easier user experience, create a direct "Make a copy" link:

Replace `/edit` with `/copy` in your URL:
```
https://docs.google.com/spreadsheets/d/1ABC...XYZ/copy
```

When users visit this link, Google will automatically prompt them to make a copy!

---

## 📝 Add Template Link to Repository

Add the template link to your README.md and SETUP_GUIDE.md:

```markdown
## Quick Start

### 1. Copy the Template Google Sheet
👉 [Click here to make a copy](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/copy)

This will create your own copy with all the Apps Script code included.
```

---

## 🧪 Testing the Template

Before sharing publicly, test the full workflow:

### Test 1: Copy Template
1. Open your `/copy` link in an incognito window
2. Should prompt to "Make a copy"
3. Verify all 3 sheets are present
4. Verify Apps Script files are included

### Test 2: Deploy & Initialize
1. In the copied sheet, deploy the Apps Script
2. Install the userscript on AO3
3. Test connection with deployment URL
4. Initialize the database
5. Verify Storage sheet populates with data
6. Verify Settings sheet updates `_connected_to_AO3` to TRUE

### Test 3: Multi-Device Sync
1. On a second device/browser, install userscript
2. Use the same deployment URL
3. Initialize (should download existing data)
4. Make a change on device 1
5. Wait for sync interval
6. Verify change appears on device 2

---

## ✅ Template Maintenance Checklist

Before sharing the template:
- [ ] All 3 sheets created and formatted
- [ ] Instructions sheet has complete setup guide
- [ ] Storage sheet has headers and example row
- [ ] Settings sheet has 3 initial configuration rows
- [ ] All 5 Apps Script files added and saved
- [ ] Project renamed to "AO3 Universal Script Sync Backend"
- [ ] Test deployment successful (ping returns success)
- [ ] Sheet sharing set to "Anyone with link" as Viewer
- [ ] `/copy` URL tested in incognito mode
- [ ] Full workflow tested: copy → deploy → initialize → sync

---

## 🔄 Updating the Template

When you update the Apps Script code:

1. Update the code in your template sheet
2. Users with existing copies will NOT automatically get updates
3. Users need to either:
   - **Option A**: Make a fresh copy and redeploy (loses their data)
   - **Option B**: Manually update Apps Script code in their copy

**Best Practice**: Version your releases and provide update instructions in release notes.

---

## 📋 Template Metadata

Add these to Sheet Properties (File → Spreadsheet settings):

- **Title**: AO3 Universal Script Sync - TEMPLATE
- **Locale**: United States (or your preference)
- **Time zone**: (GMT-05:00) Eastern Time
- **Calculation**: On change and every hour

---

**Your template is ready to share! 🎉**

Users will just need to:
1. Click your `/copy` link
2. Deploy the Apps Script in their copy
3. Configure the userscript with their deployment URL

Much simpler than building from scratch!
