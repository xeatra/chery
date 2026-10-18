# CHERY Demo Auto — Dealer website POC

Interactive HTML proof-of-concept for an authorised **CHERY** dealer with three showrooms: București, Cluj and Constanța. Built on the Sales Partner Dealer WebKit structure, the same engine as `omoda-jaecoo/` (same OEM group).
Use it to validate design and flows with the client, and as the reference for the CakePHP 4 implementation.

> **Demo only.** The dealer details are fictitious: name, company, addresses, phones, people and stock.
> The following come from the Chery Romania price lists (2026):
> - models, versions and list prices
> - colours and paint surcharges
> - technical data and equipment
>
> The importer is AUTO ITALIA GLOBAL S.R.L., with legal data taken from cheryromania.ro.
> Accessory prices are illustrative. Rabla prices are intentionally not shown.

## Run it

- **Locally:** double-click `index.html`. No build step or server is needed.
- **Vercel:** create a new Vercel project from the same GitHub repo.
  - **Root Directory:** `chery`
  - **Framework:** Other
  - **Build command:** none
  - `vercel.json` sends `X-Robots-Tag: noindex`, and `robots.txt` blocks crawlers.
- **Language:** the site opens in RO. Switch with the RO/EN toggle or add `?lang=en` to the URL.

## Design

The design follows the Chery Romania corporate identity:

| Element | Value |
|---|---|
| Font | Poppins (self-hosted, OFL) |
| Text colour | charcoal `#343434` |
| Background | light grey `#F1F1F1` and sand `#DBD8D6` gradients |
| Accent | bronze `#A4896C` |
| Buttons | uppercase bold, 5px radius |

All of these tokens are in `assets/css/tokens.css`. The Chery-specific overrides are at the end of `assets/css/site.css`, under "CHERY THEME LAYER".

## Structure

Chery sells **model families with several powertrains**, so the site is organised by family:

| Family | Models |
|---|---|
| TIGGO 4 | HEV |
| TIGGO 7 | HEV, CSH |
| TIGGO 8 | petrol, CSH |
| TIGGO 9 | CSH |

```
index.html                Home: hero slider, TIGGO model selector, 3 showrooms, CSH band, stock, offers, global presence, news
modele.html               All models grouped by family, powertrain filter
model.html?m=…            Model: powertrain switch (e.g. TIGGO 7 HEV ↔ CSH), versions & list prices, colours, gallery, specs, equipment, stock, PDF
configurator.html?m=&v=   5 steps: Model (family) → Powertrain → Version → Exterior → Interior & options → summary + lead
stoc.html?m=…             Stock with location tabs (București / Cluj / Constanța) + filters
vehicul.html?id=…         Stock car + FULL version sheet (highlights, specs, equipment for that version, PDF)
preturi.html              Price list: all versions, net / gross prices, Sincom codes, paint surcharges, PDFs
tehnologie.html           Chery Super Hybrid explained + CSH comparison + HEV models
oferte.html / oferta.html Dealer offers (demo)
service.html              4-step booking (location selectable), CHERY warranty, INFO LINE 021 9443, recalls, manuals, accessories
brosuri.html              Price list / spec sheet PDFs by family
locatii.html / locatie.html?id=bucuresti|cluj|constanta
stiri.html / stire.html, contact.html, solicita.html?tip=test-drive|oferta|suna (with showroom choice)
legal.html?doc=termeni|confidentialitate|cookies|mentiune-legala|anpc, sitemap.html, 404.html
assets/js/data.js         DEALER, LOCATIONS (3), TEAM, FAMILIES, MODELS, ACCESSORIES, STOCK, OFFERS, NEWS
assets/js/equipment.js    equipment per model & version, parsed from the importer PDFs (RO)
assets/js/logos.js        CHERY wordmark + emblem (vectorised from the PDFs)
```

## Data source for stock & vehicle detail

Each car lives in **Sales Partner**, with data received from the importer, and is published to the website via API. The POC does not assume how that publication works (push, pull or sync).

Per car, the website needs:
- vehicle data: model, version, VIN, colour code, interior, location, status, price
- version data: specs and equipment, held in `SP.MODELS` + `SP.EQUIP`

## Mapping to the CakePHP implementation

| POC piece | Production |
|---|---|
| `SP.header()` / `SP.footer()` / `SP.actionbar()` | `templates/element/header.php`, `footer.php`, `action-bar.php` |
| `SP.leadForm()` + configurator summary + request page | `POST /api/leads` → SP Lead Collector (source = Website, type, model, location, config code) |
| Service wizard | `POST /api/service-bookings` → SP AfterSales appointment (location → branch) |
| `SP.STOCK` | Stock published from Sales Partner (one dealer, several locations/branches) |
| `SP.FAMILIES`, `SP.MODELS`, `SP.EQUIP`, PDFs | Model/version catalogue from SP (importer data) |
| `SP.OFFERS` | SP Campaigns · `SP.NEWS` and legal pages → CMS |

Every integration point is marked in the JS with a comment starting `Integration point:`.

## Notes for production

- **Logos:** they were vectorised from the PDFs. Use the official SVGs from the importer.
- **Images:** they come from the importer PDFs, marked "Imagini cu titlu de prezentare" (images for illustration only). TIGGO 7 CSH colour images are scene photos, not cutouts.
- **Equipment list:** Romanian only, as in the PDFs.
- **TIGGO 8 (petrol):** the price list has no consumption or CO₂ values, so the site shows none.
- **Maps:** the Google Maps embeds need internet.
