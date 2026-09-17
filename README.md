# 👑 Vinay & Kishma — Royal Wedding Invitation

[![Live Website](https://img.shields.io/badge/Live%20Website-www.vinay--weds--kishma.in-4A0E4E?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.vinay-weds-kishma.in/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Sheets](https://img.shields.io/badge/RSVP_Backend-Google_Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)](https://workspace.google.com/products/sheets/)

> **A traditional Indian royal wedding invitation website created for Vinay & Kishma.**  
> Celebrated across **Saturday, 24th October & Sunday, 25th October 2026** at **Tranquil Wedding Venue, Bannerghatta Road, Bangalore**.

---

## 🌐 Live Deployment

The website is live and hosted at:  
👉 **[https://www.vinay-weds-kishma.in](https://www.vinay-weds-kishma.in/)**

---

## 🌟 Visual Theme & Design Language

The design language reimagines centuries-old Mughal and Rajasthani palace stationery for the modern web:

* **Royal Color Palette:**
  * **Imperial Royal Purple:** (`#4A0E4E`, `#3B0764`, `#240046`, `#1B0033`) representing royal heritage, dignity, and auspicious grandeur.
  * **Antique Gold Foil:** (`#C6A66B`, `#DFC48E`, `#F5E0A0`, `#9E7E45`) evoking embossed gold leaf work.
  * **Ivory Paper Grain:** (`#FAF7F2`, `#F4EFE6`) simulating handmade royal parchment.
* **Authentic Indian Architectural Motifs:**
  * Hand-crafted cusped polylobe arches (Mughal cusped arches).
  * Intricate geometric *Jali* lattice watermarks.
  * Full-bloom and crest *Lotus* motifs (*Padma*).
  * Sacred Sanskrit typography and ceremonial headers.
* **Cinematic Experience:** Velvet drapery transitions, glowing particle haloz, interactive cards, and classical ambient background music.

---

## ✨ Features & Architecture

### 1. 🌺 Cinematic Loading & Sacred Blessing (`LoadingScreen`)
* **Sacred Invocation:** Features `॥ श्री गणेशाय नमः ॥` with glowing gold diamond dividers.
* **Animated Sacred Lotus Mandala:** Dual rotating concentric rings with gold-leaf accents, pulsed petal blooms, and balanced spatial geometry.
* **Audio-Unlocking Transition:** Acts as the required user interaction gesture so traditional wedding shehnai & flute music autoplays smoothly without browser blocking.

### 2. 🎭 Royal Velvet Curtain Reveal (`CurtainTransition`)
* Realistic cinematic velvet curtains in deep palace violet/emerald with realistic folding ripples and gold bullion tassels.
* Features a central glowing royal seal monogram (**`V & K` · 24 & 25 · 10 · 2026**).
* Parting animation unveils the wedding invitation below.

### 3. 🏰 Royal Invitation Card (`HeroSection`)
* Multi-layered cusped palace arch frame with dual gold hairlines and keystone finial.
* Grand couple typography with gold foil gradient rendering.
* Auspicious date and venue announcement.
* Live countdown timer ticking down to the sacred Muhurtham ceremony (25th October 2026).
* Floating ambient classical background music controller (Play/Pause/Mute toggle).

### 4. 💍 The Couple & Family Lineage (`CoupleSection` & `WeddingMessageSection`)
* Dedicated royal cards introducing **Vinay** and **Kishma**.
* Family heritage details, blessings from parents and elders, and traditional welcoming verses.

### 5. 🗓️ Ceremony Timeline & Itinerary (`EventsSection`)
Every event is uniquely styled in its own distinctive ceremony color palette without distracting textual announcements:

* **Mehendi (Sat, 24th Oct · 11:00 AM onwards):**
  * *Theme:* **Shades of Green** (Forest Green `#1B4332`, Emerald Green `#2D6A4F`, Sage Green `#84A98C`, Olive Green `#588157`).
  * Styled with emerald-and-forest glowing borders, sage green halo washes, and an emerald timeline lotus ring.
* **Haldi (Sat, 24th Oct · 3:00 PM onwards):**
  * *Theme:* **Shades of Yellow & White** (Sunshine Yellow `#FACC15`, Marigold `#D97706`, Creamy `#FEF08A`, Soft Ivory `#FFFBEB`).
  * Styled with warm golden marigold borders, sunshine yellow aura washes, and an amber timeline lotus ring.
* **Sangeet (Sat, 24th Oct · 7:00 PM onwards):**
  * *Theme:* **Groovy Blues & Fun Purples** (Teal Blue `#0D9488`, Indigo Blue `#3730A3`, Magenta `#C026D3`, Shimmer Gold/Silver `#E2E8F0`).
  * Styled with a groovy multi-tone gradient border, indigo lotus ring, and celebratory teal-indigo-magenta typography.
* **Muhurtham Ceremony (Sun, 25th Oct · 10:00 AM – 11:00 AM):**
  * *Theme:* **Sacred Imperial Purple & Antique Gold** (Highlighted as the primary sacred union).
* **Reception (Sun, 25th Oct · 6:30 PM onwards):**
  * *Theme:* **Regal Champagne Gold & Ivory Banquet**.

### 6. 📅 Interactive Calendar & Sync (`CalendarSection`)
* Custom-rendered royal October 2026 calendar highlighting **24th** and **25th**.
* Color-coded ceremony pills for Mehendi (green), Haldi (marigold), and Sangeet (indigo/magenta).
* **Google Calendar Integration:** One-click button that pre-populates all event details, timings, and venue coordinates directly into the user's Google Calendar.
* **iCal (.ics) Support:** Native Apple / Outlook calendar file download.

### 7. 📋 Live Google Sheets RSVP Portal (`RsvpSection`)
A complete serverless RSVP backend built with Google Apps Script:
* **Guest Inputs:**
  * Full Name
  * Phone Number
  * Number of Guests (1–10)
  * Event Selection Checkboxes (Mehendi, Haldi, Sangeet, Muhurtham, Reception)
* **Backend Connection:**
  * Submits via HTTP GET with URL query parameters to the deployed Google Apps Script Web App endpoint.
  * Bypasses CORS limitations inherent to `fetch(..., { mode: 'no-cors' })` POST requests.
* **Spreadsheet Auto-Formatting:**
  * Automatically creates and styles a dedicated tab named **`📋 RSVP Submissions`**.
  * Inserts bold royal purple header bars (`#4A0E4E`) with white text and frozen rows.
  * Automatically auto-resizes columns to fit guest names and timestamps.

### 8. 📍 Venue & Navigation (`LocationSection`)
* Features **Tranquil Wedding Venue, Bannerghatta Road, Bangalore**.
* Interactive embedded Google Maps preview.
* Direct **"Get Directions"** button opening turn-by-turn Google Maps navigation with full landmark instructions.

### 9. 🪷 Grand Auspicious Curtain Call (`ClosingSection`)
* Full-bloom royal lotus centerpiece flanked by traditional palace leaves.
* Auspicious closing prayer: **`॥ शुभ विवाह ॥`** (*Auspicious Wedding*).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 18 (JSX, Hooks) |
| **Build Tool & Dev Server** | Vite 6 |
| **Styling** | Vanilla CSS + Tailwind CSS 3 with custom royal design tokens |
| **Typography** | Cinzel Decorative, Playfair Display, Cinzel, Cormorant Garamond |
| **Icons & Vectors** | Handcrafted SVG motifs (Lotus, Jali, Palace Arches, Kalash) |
| **RSVP Backend** | Google Apps Script (Web App) connected to Google Sheets |
| **Audio Engine** | Web Audio API / HTML5 Audio (Classical Shehnai & Indian Flute) |
| **Hosting & DNS** | Production deployment at [www.vinay-weds-kishma.in](https://www.vinay-weds-kishma.in/) |

---

## 📂 Project Structure

```text
vinay-kishma-wedding/
├── google-sheets/
│   └── GoogleAppsScript_RsvpForm.js   # Standalone Apps Script code for Google Sheets
├── public/
│   ├── audio/                         # Background classical wedding music
│   └── favicon.ico                    # Royal crest favicon
├── src/
│   ├── components/
│   │   ├── common/                    # BackgroundMusic, RevealOnScroll
│   │   ├── decorative/                # LotusMotif, PalaceArch, JaliBackground, OrnamentalDivider
│   │   ├── hero/                      # HeroSection (Arch card, countdown, title)
│   │   ├── intro/                     # LoadingScreen, EnterSplash
│   │   ├── sections/                  # CoupleSection, EventsSection, CalendarSection,
│   │   │                              # RsvpSection, LocationSection, ClosingSection
│   │   └── transition/                # CurtainTransition (Velvet drapes & seal)
│   ├── data/
│   │   └── weddingData.js             # Centralized wedding itinerary, timings, venue details
│   ├── App.jsx                        # Main application flow state machine
│   ├── index.css                      # Design system, royal colors, jali patterns, typography
│   └── main.jsx                       # React root entry point
├── package.json
└── README.md
```

---

## 🚀 Local Development Setup

To run this project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jamesaathithyandev/Marriage-Invitation-React-Website-.git
   cd Marriage-Invitation-React-Website-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.

---

## 📊 Google Sheets RSVP Integration Setup

If you wish to deploy the RSVP form to your own Google Sheet:

1. Create a new Google Sheet.
2. Open **Extensions > Apps Script**.
3. Copy and paste the script from [`google-sheets/GoogleAppsScript_RsvpForm.js`](google-sheets/GoogleAppsScript_RsvpForm.js).
4. Update `SPREADSHEET_ID` with your Sheet ID.
5. Click **Deploy > New Deployment**:
   * Select type: **Web app**
   * Execute as: **Me**
   * Who has access: **Anyone**
6. Copy the resulting Web App URL and paste it into `src/components/sections/RsvpSection.jsx` as `APPS_SCRIPT_URL`.

---

<p align="center">
  <b>॥ वरवधूभ्यां नमः ॥</b><br/>
  <i>Wishing Vinay & Kishma a lifetime of love, laughter, and togetherness.</i>
</p>
