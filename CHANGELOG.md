## 1.0.4

- **Fix:** Sync widget and FicTracker widget no longer overlap — SS now absorbs FicTracker widget into its own unified indicator
- **Fix:** Preferences page no longer endlessly loads when both SS and FT sync widgets are enabled simultaneously
- **Fix:** Sync retries automatically after 10s when the server is busy (reduces device timestamp divergence)
- **Improvement:** Sync timer uses a small random offset (±15s) to reduce simultaneous multi-device lock contention
- **Improvement:** Unified widget distinguishes between SS sync failures, FT sync failures, and both failing at once
