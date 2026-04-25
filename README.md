# AO3: Script Sync

Sync any AO3 userscript's data and settings across multiple devices using Google Sheets as the storage backend. Also view, export, import, and delete data stored by any userscript.

---

## ✨ Features

- **Universal Sync** – Works with any AO3 userscript that uses localStorage.
- **Selective Syncing** – Choose exactly which localStorage keys to sync.
- **Automatic Updates** – Configure sync intervals (default: 60 seconds).
- **Visual Feedback** – Floating widget shows sync status and countdown.
- **Multi-Device** – Seamlessly sync across unlimited devices.
- **Data Management** – View, export, import, and delete data stored by any userscript.
- **Free** – Uses free Google Sheets as storage (no server costs).
- **Privacy** – Your data stays in your Google account.

<img src="https://cdn.jsdelivr.net/gh/Wolfbatcat/ao3-userscripts@refs/heads/main/images/image_script-sync-1.png" width="900" alt="AO3: Script Sync">


---

## 🎯 Use Cases

Perfect for syncing data from:
- [AO3: Advanced Blocker](https://greasyfork.org/en/scripts/549942) and other blacklist scripts.
- [AO3: Quick Hide's](https://greasyfork.org/en/scripts/564383) collapsed work/bookmark history.
- [AO3: No Re-Kudos](https://greasyfork.org/en/scripts/551623)'s rekudos history.

---

## 📋 How to Use

>  **⚠️ Important for Chromium-based browsers:** If you're using Chrome, Brave, Vivaldi, or Microsoft Edge on PC, an extra activation step is required. [Follow these instructions.](https://www.tampermonkey.net/faq.php?locale=en#Q209)

### 1. Install the Userscript

Install `AO3: Script Sync` with a userscript manager:
- **Tampermonkey**
  - [Chrome/Chromium](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
  - [Safari](https://apps.apple.com/us/app/tampermonkey/id6738342400)
  - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### 2. Copy the Template Google Sheet

👉 **[Click here to make a copy](https://docs.google.com/spreadsheets/d/1woW-QxlQY-vWx7t3h7ytd8NfzK9qhyA68A-LFNZ6ufk/copy)**

This creates your own copy with all the Apps Script code pre-configured.

### 3. Deploy as Web App

1. In your copied sheet: **Extensions → Apps Script**
2. Click **Deploy → New deployment**, then select **Web app** as the deployment type
3. Set "Execute as: Me" and "Who has access: Anyone", then click **Deploy**
4. In the resulting window, copy the link at the bottom — this is your deployment URL

### 4. Configure the Script

> **🚨 Important:** Initialize on the device that holds your most up-to-date userscript data. For example, if your phone has your most recent Advanced Blocker config, run the steps below on your phone first.

1. On the AO3 homepage, click **Userscripts → Script Sync**
2. Select the localStorage keys you want to sync
3. Paste your deployment URL into the **Google Script URL** field and click **Test Connection**
4. If the connection is successful, click **Initialize** — you're all set! 🎉

**To set up on additional devices:** Just install the script, enter the same Google Script URL, and press **Initialize**.

**For TamperMonkey users:** If you get the following window, press **Always allow**. If you press the wrong option, the window should reappear if you press **Test Connection** again.

<img src="https://cdn.jsdelivr.net/gh/Wolfbatcat/ao3-userscripts@refs/heads/main/images/image_script-sync-2.png" width="600" alt="Tampermonkey Permissions">


---

## 🐛 FAQ & Troubleshooting

**Which device should I initialize on first?**

Initialize on the device with your most up-to-date data. The first device uploads its local data to the sheet; additional devices download from it.

**Connection test fails**

- Verify URL format: `https://script.google.com/macros/s/.../exec`
- Check deployment settings: "Who has access" must be **Anyone**
- Try opening the URL in a browser with `?action=ping` appended — you should see a JSON response, not an error page
- Check the Tampermonkey permissions note above. If the permissions window doesn't reappear, delete and reinstall the script

**I toggled sync off for a key. Is the data still on the Google Sheet?**

Yes. Toggling sync off just stops syncing — it doesn't delete anything from the sheet. Re-enable it anytime and the data will still be there.

**I re-enabled sync for a key after making local changes. Which version wins?**

Your local data wins. When you re-enable a key, Script Sync queues your local value for upload with the current timestamp, which is newer than what's on the sheet. **Note:** if you also made changes on another device while sync was off here, re-enabling on this device will overwrite those. Script Sync doesn't merge — it's last-write-wins.

**Does the Delete button remove data from the Google Sheet?**

No. Delete only removes data from your browser's local storage. The sheet is untouched, and if sync is still enabled for that key, the next sync will restore it from the sheet. To remove data from the sheet, delete the row directly in Google Sheets.

**Does "Reset Sync Settings" wipe my Google Sheet?**

No. It only clears Script Sync's configuration from your browser (URL, selected keys, sync state). Your sheet and all its data are untouched. You'll need to re-enter your URL and re-initialize to reconnect.

**How do I completely remove a script's data from my device and the Google Sheet?**

The Delete button only clears local storage — it won't touch the sheet. To remove data everywhere:

1. Toggle sync **off** for the key in the Script Sync UI — this stops it from syncing back down
2. Select the key's checkbox and click **Delete** — removes it from your browser's local storage
3. Open your Google Sheet directly, go to the Storage tab, and delete the row for that key

Step 3 requires going into Google Sheets manually, as there's no in-script option to delete data from the sheet.

**How do I merge data from two devices (e.g. combine two blocklists)?**

Script Sync doesn't have a built-in merge tool. To do it manually:

1. Use **Export** on both devices to download their data as JSON files
2. Merge the two files in a text editor or JSON editor
3. Use **Import** on either device to import the merged file — it will automatically upload to the sheet

---

## 🙌 Credits

Big thanks to:
- [AO3 FicTracker](https://greasyfork.org/en/scripts/513435) by infiniMotis (sync architecture)
- [AO3: Import & Export Script Storage](https://greasyfork.org/en/scripts/545336) by escctrl (import/export architecture and UI design)

---

## 📜 Check Out My Other Scripts

- [AO3: Advanced Blocker](https://greasyfork.org/en/scripts/549942) – Block works on AO3 based on tags, authors, titles, word counts, and more.
- [AO3: Quick Hide](https://greasyfork.org/en/scripts/564383) - Quickly hide works, bookmarks, and comments while browsing AO3.
- [AO3: Reading Time & Quality Score](https://greasyfork.org/en/scripts/551106) – See reading time and engagement scores at a glance.
- [AO3: Site Wizard](https://greasyfork.org/en/scripts/550537) – Customize fonts, sizes, and work spacing site-wide.
- [AO3: Skin Switcher](https://greasyfork.org/en/scripts/551820) – Quickly switch between AO3 site skins.
- [AO3: Chapter Shortcuts](https://greasyfork.org/en/scripts/549571) – Quick links to the latest chapter of any work.
- [AO3: No Re-Kudos](https://greasyfork.org/en/scripts/551623) – Prevent accidentally re-kudosing works.
- [AO3: Reorder Ship Tags](https://greasyfork.org/en/scripts/562812) – Automatically reorder romantic ships (/) before platonic ships (&).
- [AO3: Auto Pseud](https://greasyfork.org/en/scripts/556232) – Auto-select pseuds based on fandom when commenting and bookmarking.
