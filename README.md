chrome-better-bookmark
======================

Chrome Extension that lets you easily add bookmarks to any category. Includes spotlight-like search with mouse/keyboard support.

(Original Depricated) WebStore URL: https://chrome.google.com/webstore/detail/better-bookmark/pniopfmciclllcpockpkgceikipiibol

**What changed From Original**
===========

Core migration Manifest V2 → Manifest V3
- manifest_version: 3
- Replaced persistent background page with background.service_worker (service-worker.js)
- Switched from browser_action → action (MV3 standard)

Popup & UX
====

 - Fixed popup routing: action.default_popup now points to init.html (MV3 build no longer uses background.html).
 - Rebuilt init.html with proper HTML structure, required elements (#search, #wrapper), and script order (fuse.js then selectCategory.js).
 - Added CSS and fixed size (220×440, background #f9f9f9, visible scrollbar).
 - Removed reliance on inline scripts/handlers (MV3 CSP-friendly).

Permissions
====

Kept minimal: "bookmarks", "storage" (no host permissions).

Version bump
====

Updated "version" to reflect the new build (e.g., 1.3.2).
