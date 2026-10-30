# What changed
Backup of the original is the uploaded zip. Nothing in your Firebase / Cloudinary / gallery code was touched.

NEW: training.html, about.html (process + FAQ + map), quote.html, 404.html, site-extras.js, firestore.rules
EDITED (additive): all category pages (SEO tags, intro text, nav links, lazy images, favicon fix), index.html (JSON-LD, services/training/process/FAQ/map sections, nav), admin.html (noindex only), style.css (new rules appended at the bottom), sitemap.xml, robots.txt, site.webmanifest
REMOVED: public "Admin" nav link (admin still works at gambopat.com/admin.html)
TODO by you: paste firestore.rules into Firebase Console > Firestore > Rules and test admin upload/delete, then Publish.

## Update 2
FIXED: big-picture viewer on all category pages (the click handler called Firebase functions that live in a different script block, so it errored before opening). Viewer now also shows Enquire + Share buttons and closes with Esc.
NEW: custom-fabrication.html (+ "Custom & Repairs" in admin dropdowns and home filter), projects.html (latest work from all categories), tips.html, hearts/saved designs, home search + NEW/FEATURED badges, trust badges, promo banner (banner.json), testimonials (testimonials.json), price guide (prices.json), Google Analytics + WhatsApp click events, offline service worker (sw.js), accessibility labels/focus, footer quick links.
MOVED: unused index.css -> _unused/
See DATA-FILES-README.txt to edit banner / testimonials / prices.
