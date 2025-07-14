# Atlantic Blue Coast Realty

Atlantic Blue Coast Realty is a real estate web application for Atlantic Blue Coast Realty LLC, based in Whiteville, NC. The platform allows users to browse featured listings, search MLS properties, view property details, contact the agency, and learn about the company and its community involvement.

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Directory Structure](#directory-structure)
- [Setup & Usage](#setup--usage)
- [Backend API Endpoints](#backend-api-endpoints)
- [Legal Notice](#legal-notice)

## Project Overview

Atlantic Blue Coast Realty provides a modern, mobile-friendly interface for real estate browsing and agency contact. It is designed to serve clients in Columbus, Bladen, and Brunswick Counties, NC, and highlights the agency's community involvement and local expertise.

## Key Features

- **Home Page:** Highlights featured listings, a simple search, and special sections like "The Spillway."
- **Property Listings:** Browse, search, and filter real estate listings.
- **Property Details:** View detailed information and photos for each property.
- **Contact Forms:** Email forms for inquiries, powered by a backend Node.js mailer.
- **Community & About:** Information about the company, its owner, and community involvement.
- **Legal Compliance:** NCRMLS legal notice and compliance information.
- **Document Downloads:** Access to important real estate documents.
- **Responsive Design:** Modern, mobile-friendly UI.

## Technologies Used

- **Frontend:** Angular 7, TypeScript, RxJS, Bootstrap (CSS classes), jQuery (minimal usage)
- **Backend:** Node.js (custom HTTP server), nodemailer for email, file-based data for listings and legal info
- **Testing:** Karma/Jasmine (Angular default)

## Directory Structure (Key Parts)

```
/atlantic-blue-coast/
  src/
    app/           # Angular components, services, models
    backEnd/       # Node.js backend server and API logic
    assets/        # Static assets (images, documents, JSON data)
    environments/  # Angular environment configs
```

## Setup & Usage

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run frontend (Angular):**
   ```bash
   ng serve
   # App runs at http://localhost:4200
   ```
3. **Run backend (Node.js):**
   ```bash
   node src/backEnd/server.js
   # API runs at http://localhost:4040
   ```
4. **Run unit tests:**
   ```bash
   ng test
   ```
5. **Build for production:**
   ```bash
   ng build --prod
   ```

## Backend API Endpoints

- `/getFeaturedListings` — Get featured property listings
- `/getAbcListings` — Get paginated agency listings
- `/getFilteredListings` — Get filtered property listings
- `/getSelectedListing` — Get details for a specific listing
- `/getStandardFieldMetadata` — Get listing field metadata
- `/sendMail` — Send contact/inquiry email
- `/photoService` — Serve property photos

## Legal Notice

NCRMLS. All rights reserved. North Carolina Regional Multiple Listing Service, (NCRMLS), provides content displayed here (“provided content”) on an “as is” basis and makes no representations or warranties regarding the provided content, including, but not limited to those of non-infringement, timeliness, accuracy, or completeness. Individuals and companies using information presented are responsible for verification and validation of information they utilize and present to their customers and clients. NCRMLS will not be liable for any damage or loss resulting from use of the provided content or the products available through Portals, IDX, VOW, and/or Syndication. Recipients of this information shall not resell, redistribute, reproduce, modify, or otherwise copy any portion thereof without the expressed written consent of NCRMLS. Data last updated.

---

For more information, contact Atlantic Blue Coast Realty at AtlanticBlueCoast@gmail.com or (910) 625-8199.
