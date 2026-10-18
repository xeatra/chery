/* =====================================================================
   DATA LAYER (demo) — CHERY · Demo Auto (București · Cluj · Constanța)
   In production every block below is published from Sales Partner via API.
   Model, version, price, colour, technical and equipment data come from the
   importer price lists (Chery Romania — Auto Italia Global S.R.L., 2026).
   Dealer, people, addresses and stock are fictitious (demo).
   Bilingual fields are { ro, en }.
   ===================================================================== */
window.SP = window.SP || {};

SP.DEALER = {
  name: 'CHERY Demo Auto',
  short: 'CHERY Demo Auto',
  legal: {
    company: 'Demo Auto Dealer S.R.L.', address: 'Bd. Theodor Pallady 900, Sector 3, București',
    reg: 'J40/0000/2026', cui: 'RO00000000', capital: '200 RON', email: 'contact@chery-demo.ro'
  },
  importer: {
    company: 'AUTO ITALIA GLOBAL S.R.L.', brand: 'Chery Romania', address: 'Bd. Timișoara nr. 102, Sector 6, București',
    reg: 'J2011000290403', cui: '27897154', vat: 'RO', web: 'cheryromania.ro',
    infoline: '021 9443', infolineHours: { ro: 'Luni – Vineri, 09:00 – 18:00', en: 'Monday – Friday, 09:00 – 18:00' },
    maker: 'Chery Automobile Co., Ltd.'
  },
  phone: '+40 21 555 02 00', phoneService: '+40 21 555 02 10', whatsapp: '+40 722 000 400',
  email: 'vanzari@chery-demo.ro', emailService: 'service@chery-demo.ro',
  hours: [
    { d: { ro: 'Luni – Vineri', en: 'Monday – Friday' }, h: '09:00 – 19:00' },
    { d: { ro: 'Sâmbătă', en: 'Saturday' }, h: '10:00 – 15:00' },
    { d: { ro: 'Duminică', en: 'Sunday' }, h: null }
  ],
  social: { fb: '#', ig: '#', yt: '#', tt: '#', in: '#' }
};

SP.TEAM = {
  am: { name: 'Andrei Marinescu', role: { ro: 'Director General', en: 'General Manager' } },
  ic: { name: 'Ioana Constantin', role: { ro: 'Consilier vânzări · București', en: 'Sales advisor · Bucharest' }, phone: '+40 722 000 401' },
  rd: { name: 'Radu Dobre', role: { ro: 'Consilier flote & leasing', en: 'Fleet & leasing advisor' }, phone: '+40 722 000 402' },
  mp: { name: 'Mihaela Pop', role: { ro: 'Director showroom · Cluj', en: 'Showroom manager · Cluj' } },
  ab: { name: 'Alexandru Bota', role: { ro: 'Consilier vânzări · Cluj', en: 'Sales advisor · Cluj' }, phone: '+40 722 000 411' },
  es: { name: 'Elena Stan', role: { ro: 'Director showroom · Constanța', en: 'Showroom manager · Constanța' } },
  cn: { name: 'Cristian Nedelcu', role: { ro: 'Consilier vânzări · Constanța', en: 'Sales advisor · Constanța' }, phone: '+40 722 000 421' },
  gv: { name: 'George Vasile', role: { ro: 'Șef Service', en: 'Head of Service' } },
  lt: { name: 'Laura Tudor', role: { ro: 'Consilier service', en: 'Service advisor' }, phone: '+40 722 000 430' }
};

SP.LOCATIONS = [
  { id: 'bucuresti', name: { ro: 'CHERY București', en: 'CHERY Bucharest' }, short: { ro: 'CHERY București', en: 'CHERY Bucharest' }, city: { ro: 'București', en: 'Bucharest' },
    address: 'Bd. Theodor Pallady 900, Sector 3, București', phone: '+40 21 555 02 00', email: 'bucuresti@chery-demo.ro',
    lat: 44.4128, lng: 26.1982, img: 'assets/img/t9csh/hero.webp', types: ['sales', 'service', 'parts', 'charging'],
    services: { ro: ['Vânzări CHERY — toată gama TIGGO', 'Test drive pentru toate modelele', 'Service autorizat benzină, hibrid și CSH', 'Piese & accesorii originale', 'Stație de încărcare DC', 'Finanțare, leasing, flote'],
                en: ['CHERY sales — the whole TIGGO range', 'Test drives for every model', 'Authorised petrol, hybrid and CSH service', 'Genuine parts & accessories', 'DC charging station', 'Finance, leasing, fleets'] },
    team: ['am', 'ic', 'rd', 'gv', 'lt'] },
  { id: 'cluj', name: { ro: 'CHERY Cluj', en: 'CHERY Cluj' }, short: { ro: 'CHERY Cluj', en: 'CHERY Cluj' }, city: { ro: 'Cluj-Napoca', en: 'Cluj-Napoca' },
    address: 'Str. Traian Vuia 900, Cluj-Napoca', phone: '+40 264 555 020', email: 'cluj@chery-demo.ro',
    lat: 46.7783, lng: 23.6318, img: 'assets/img/t8csh/hero.webp', types: ['sales', 'service', 'parts'],
    services: { ro: ['Showroom CHERY', 'Test drive', 'Service autorizat & recepție', 'Piese & accesorii originale'],
                en: ['CHERY showroom', 'Test drives', 'Authorised service & reception', 'Genuine parts & accessories'] },
    team: ['mp', 'ab'] },
  { id: 'constanta', name: { ro: 'CHERY Constanța', en: 'CHERY Constanța' }, short: { ro: 'CHERY Constanța', en: 'CHERY Constanța' }, city: { ro: 'Constanța', en: 'Constanța' },
    address: 'Bd. Aurel Vlaicu 900, Constanța', phone: '+40 241 555 020', email: 'constanta@chery-demo.ro',
    lat: 44.1946, lng: 28.6164, img: 'assets/img/t7csh/hero2.webp', types: ['sales', 'service'],
    services: { ro: ['Showroom CHERY', 'Test drive', 'Recepție service & predare mașini'],
                en: ['CHERY showroom', 'Test drives', 'Service reception & handovers'] },
    team: ['es', 'cn'] }
];

/* ---------------------------------------------------------------- spec labels */
SP.SPEC_LABELS = {
  engine: { ro: 'Motor', en: 'Engine' }, trans: { ro: 'Transmisie', en: 'Transmission' }, drive: { ro: 'Tracțiune', en: 'Drive' },
  power: { ro: 'Putere', en: 'Power' }, sysPower: { ro: 'Putere sistem', en: 'System power' }, torque: { ro: 'Cuplu maxim', en: 'Max torque' },
  vmax: { ro: 'Viteză maximă', en: 'Top speed' },
  cons: { ro: 'Consum mixt*', en: 'Combined consumption*' }, energy: { ro: 'Consum energie*', en: 'Energy consumption*' },
  co2: { ro: 'Emisii CO₂*', en: 'CO₂ emissions*' }, evRange: { ro: 'Autonomie electrică*', en: 'Electric range*' },
  battery: { ro: 'Baterie', en: 'Battery' }, charge: { ro: 'Încărcare', en: 'Charging' },
  dims: { ro: 'Dimensiuni L × l × h', en: 'Dimensions L × W × H' }, wb: { ro: 'Ampatament', en: 'Wheelbase' },
  trunk: { ro: 'Portbagaj', en: 'Boot' }, seats: { ro: 'Locuri', en: 'Seats' }, tank: { ro: 'Rezervor', en: 'Fuel tank' },
  weight: { ro: 'Masă vehicul', en: 'Kerb weight' }, wheels: { ro: 'Jante / anvelope', en: 'Wheels / tyres' },
  modes: { ro: 'Moduri de condus', en: 'Drive modes' }, tow: { ro: 'Masă remorcabilă', en: 'Towing capacity' },
  len: { ro: 'Lungime', en: 'Length' }, screen: { ro: 'Ecran tactil', en: 'Touchscreen' }
};
SP.FUEL = {
  ice: { ro: 'Benzină', en: 'Petrol' }, hev: { ro: 'Full Hybrid', en: 'Full Hybrid' },
  phev: { ro: 'Super Hybrid (CSH)', en: 'Super Hybrid (CSH)' }
};

/* ---------------------------------------------------------------- families (menu, configurator step 1) */
SP.FAMILIES = [
  { id: 'tiggo4', name: 'TIGGO 4', models: ['t4hev'], tagline: { ro: 'SUV compact, urban, full hybrid', en: 'Compact urban full-hybrid SUV' }, len: '4.320 mm' },
  { id: 'tiggo7', name: 'TIGGO 7', models: ['t7hev', 't7csh'], tagline: { ro: 'SUV de familie, hibrid sau plug-in hybrid', en: 'Family SUV, hybrid or plug-in hybrid' }, len: '4.553 mm' },
  { id: 'tiggo8', name: 'TIGGO 8', models: ['t8', 't8csh'], tagline: { ro: 'SUV cu 7 locuri, benzină sau plug-in hybrid', en: '7-seat SUV, petrol or plug-in hybrid' }, len: '4.725 mm' },
  { id: 'tiggo9', name: 'TIGGO 9', models: ['t9csh'], tagline: { ro: 'Flagship cu 7 locuri, AWD, 428 CP', en: '7-seat AWD flagship, 428 hp' }, len: '4.810 mm' }
];

/* ---------------------------------------------------------------- MODELS (importer data) */
const C = (code, ro, en, group, price, hex) => ({ code, name: { ro, en }, group, price, hex });
const STD = 'std', EXTRA = 'extra', BI = 'bitone';

SP.MODELS = [
  { id: 't4hev', family: 'tiggo4', name: 'TIGGO 4 HEV', fuel: 'hev', pdf: 'chery-tiggo-4-hev-lista-preturi.pdf', validFrom: '2026-01-01',
    tagline: { ro: 'SUV urban full hybrid, 163 CP', en: '163 hp urban full-hybrid SUV' },
    intro: { ro: 'Primul full hybrid Chery în România: transmisie DHT, 163 CP și un consum mixt de 5,3 l/100 km. Display digital de 12,3", ADAS complet și Apple CarPlay & Android Auto wireless din echiparea de bază.', en: 'Chery’s first full hybrid in Romania: DHT transmission, 163 hp and 5.3 l/100 km combined. A 12.3" digital display, full ADAS and wireless Apple CarPlay & Android Auto as standard.' },
    key: [['163', 'CP', 'sysPower'], ['5,3', 'l/100', 'cons'], ['430', 'L', 'trunk'], ['4.320', 'mm', 'len']],
    versions: [
      { id: 'comfort', name: 'Comfort', engine: { ro: 'Full Hybrid 1.5 GDI · DHT · 163 CP', en: 'Full Hybrid 1.5 GDI · DHT · 163 hp' }, code: '4150U51', list: 22990, net: 19000,
        hi: { ro: ['Sistem full hybrid DHT, 163 CP', 'Display digital 12,3"', 'Cameră spate și senzori parcare spate', 'ADAS: ACC, TJA, BSD, AEB, LCA', 'Climatizare automată Dual-Zone', 'Apple CarPlay & Android Auto wireless'], en: ['163 hp DHT full-hybrid system', '12.3" digital display', 'Rear camera and rear parking sensors', 'ADAS: ACC, TJA, BSD, AEB, LCA', 'Dual-zone automatic climate control', 'Wireless Apple CarPlay & Android Auto'] } },
      { id: 'unique', name: 'Unique', engine: { ro: 'Full Hybrid 1.5 GDI · DHT · 163 CP', en: 'Full Hybrid 1.5 GDI · DHT · 163 hp' }, code: '4151U51', list: 23990, net: 19826,
        hi: { ro: ['Tapițerie din piele sintetică', 'Cameră 360° și senzori parcare față', 'Scaune față încălzite, scaun șofer electric', 'Audio 6 difuzoare, lumini ambientale', 'Oglinzi rabatabile electric, geamuri fumurii', 'Geamuri cu deschidere de la distanță'], en: ['Synthetic leather upholstery', '360° camera and front parking sensors', 'Heated front seats, power driver’s seat', '6-speaker audio, ambient lighting', 'Power-folding mirrors, privacy glass', 'Remote window opening'] } }
    ],
    specs: { engine: { ro: '1.5 GDI benzină, 1.498 cm³ + motor electric', en: '1.5 GDI petrol, 1,498 cc + electric motor' }, power: { ro: 'Termic 70 kW / 95 CP · electric 150 kW / 203 CP', en: 'Engine 70 kW / 95 hp · motor 150 kW / 203 hp' }, sysPower: '120 kW / 163 CP', trans: 'DHT', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, battery: '1,83 kWh', cons: '5,3 l/100 km', co2: '120 g/km', tank: '51 L', dims: '4.320 × 1.831 × 1.646 mm', wb: '2.610 mm', trunk: '430 L', seats: '5', weight: '1.550 kg', wheels: '17" · 215/60 R17', modes: 'Eco / Sport' },
    colors: [C('NLM', 'Roșu', 'Red', STD, 0, '#B3141E'), C('GXM', 'Tech Gray', 'Tech Gray', EXTRA, 500, '#6B6E72'), C('KUM', 'Moonlight Silver', 'Moonlight Silver', EXTRA, 500, '#BABDC1'), C('CLM', 'Carbon Crystal Black', 'Carbon Crystal Black', EXTRA, 500, '#17181A')],
    interiors: [{ id: 'stofa', name: { ro: 'Stofă neagră', en: 'Black fabric' }, price: 0, hex: '#2A2A2C', trims: ['comfort'] }, { id: 'piele', name: { ro: 'Piele sintetică neagră', en: 'Black synthetic leather' }, price: 0, hex: '#151517', trims: ['unique'] }],
    gallery: ['hero', 'hero2'] },

  { id: 't7hev', family: 'tiggo7', name: 'TIGGO 7 HEV', fuel: 'hev', pdf: 'chery-tiggo-7-hev-lista-preturi.pdf', validFrom: '2026-01-01',
    tagline: { ro: 'SUV de familie full hybrid, 220 CP', en: '220 hp full-hybrid family SUV' },
    intro: { ro: 'Full hybrid cu motor 1.5 TGDI și transmisie DHT: 220 CP, 5,7 l/100 km și 484 L portbagaj. Volan și scaune față încălzite din standard, ADAS complet și două ecrane de 12,3".', en: 'Full hybrid with a 1.5 TGDI engine and DHT: 220 hp, 5.7 l/100 km and a 484 L boot. Heated steering wheel and front seats as standard, full ADAS and twin 12.3" screens.' },
    key: [['220', 'CP', 'sysPower'], ['5,7', 'l/100', 'cons'], ['484', 'L', 'trunk'], ['175', 'km/h', 'vmax']],
    versions: [
      { id: 'comfort', name: 'Comfort', engine: { ro: 'Full Hybrid 1.5 TGDI · DHT · 220 CP', en: 'Full Hybrid 1.5 TGDI · DHT · 220 hp' }, code: '71505H1', list: 28990, net: 23959,
        hi: { ro: ['Full hybrid 220 CP, 5,7 l/100 km', 'Volan și scaune față încălzite', 'Display 12,3" + ecran tactil 12,3"', 'Cameră spate, senzori parcare spate', 'ADAS complet cu ACC și TJA', 'Climatizare automată Dual-Zone'], en: ['220 hp full hybrid, 5.7 l/100 km', 'Heated steering wheel and front seats', '12.3" display + 12.3" touchscreen', 'Rear camera, rear parking sensors', 'Full ADAS with ACC and TJA', 'Dual-zone automatic climate control'] } },
      { id: 'unique', name: 'Unique', engine: { ro: 'Full Hybrid 1.5 TGDI · DHT · 220 CP', en: 'Full Hybrid 1.5 TGDI · DHT · 220 hp' }, code: '71515H1', list: 30990, net: 25612,
        hi: { ro: ['Piele sintetică, scaune electrice cu memorie', 'Scaune față ventilate', 'Audio SONY cu 8 difuzoare', 'Cameră 540° și senzori față', 'Plafon panoramic, hayon electric', 'Încărcător wireless 50 W'], en: ['Synthetic leather, power seats with memory', 'Ventilated front seats', 'SONY audio, 8 speakers', '540° camera and front sensors', 'Panoramic roof, power tailgate', '50 W wireless charger'] } }
    ],
    specs: { engine: { ro: '1.5 TGDI benzină, 1.499 cm³ + motor electric', en: '1.5 TGDI petrol, 1,499 cc + electric motor' }, sysPower: '162 kW / 220 CP', torque: { ro: '215 Nm (motor termic)', en: '215 Nm (engine)' }, trans: 'DHT', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, vmax: '175 km/h', battery: '1,83 kWh', cons: '5,7 l/100 km', co2: '129 g/km', tank: '51 L', dims: '4.553 × 1.862 × 1.696 mm', wb: '2.670 mm', trunk: '484 L', seats: '5', weight: '1.617 kg', wheels: '18" · 225/60 R18', modes: 'Eco / Sport', tow: { ro: '750 kg (fără frână)', en: '750 kg (unbraked)' } },
    colors: [C('GXM', 'Tech Gray', 'Tech Gray', STD, 0, '#7A7D81'), C('GVM', 'Phantom Gray', 'Phantom Gray', EXTRA, 600, '#4C4F53'), C('CLM', 'Carbon Crystal Black', 'Carbon Crystal Black', EXTRA, 600, '#17181A'), C('ZEM', 'Pearl White / Black', 'Pearl White / Black', BI, 600, '#ECECEA')],
    interiors: [{ id: 'stofa', name: { ro: 'Stofă neagră', en: 'Black fabric' }, price: 0, hex: '#2A2A2C', trims: ['comfort'] }, { id: 'piele', name: { ro: 'Piele sintetică neagră', en: 'Black synthetic leather' }, price: 0, hex: '#151517', trims: ['unique'] }],
    gallery: ['hero', 'hero2'] },

  { id: 't7csh', family: 'tiggo7', name: 'TIGGO 7 CSH', fuel: 'phev', pdf: 'chery-tiggo-7-csh-lista-preturi.pdf', validFrom: '2026-05-01', photoColors: true,
    tagline: { ro: 'Plug-in hybrid 279 CP, 90 km electric', en: '279 hp plug-in hybrid, 90 km electric' },
    intro: { ro: 'Chery Super Hybrid: 279 CP, până la 90 km 100% electric (WLTP) și încărcare DC de 40 kW, 10–80% în maximum 25 de minute. Piele sintetică, audio SONY și cameră 540° din echiparea Luxury.', en: 'Chery Super Hybrid: 279 hp, up to 90 km fully electric (WLTP) and 40 kW DC charging, 10–80% in 25 minutes or less. Synthetic leather, SONY audio and a 540° camera from the Luxury trim.' },
    key: [['279', 'CP', 'sysPower'], ['90', 'km EV', 'evRange'], ['54', 'g/km', 'co2'], ['≤25', 'min DC', 'charge']],
    versions: [
      { id: 'luxury', name: 'Luxury', engine: { ro: 'Super Hybrid 1.5 TGDI · DHT · 279 CP', en: 'Super Hybrid 1.5 TGDI · DHT · 279 hp' }, code: '7151P71', list: 34990, net: 28917,
        hi: { ro: ['Plug-in hybrid 279 CP, 90 km electric', 'Încărcare DC 40 kW: 10–80% în ≤ 25 min', 'Piele sintetică, audio SONY 8 difuzoare', 'Cameră 540°, senzori față și spate', 'Încărcător wireless 50 W', 'ADAS complet cu ACC, TJA, ICA'], en: ['279 hp plug-in hybrid, 90 km electric', '40 kW DC charging: 10–80% in ≤ 25 min', 'Synthetic leather, SONY 8-speaker audio', '540° camera, front and rear sensors', '50 W wireless charger', 'Full ADAS with ACC, TJA, ICA'] } },
      { id: 'unique', name: 'Unique', engine: { ro: 'Super Hybrid 1.5 TGDI · DHT · 279 CP', en: 'Super Hybrid 1.5 TGDI · DHT · 279 hp' }, code: '7152P71', list: 37990, net: 31397,
        hi: { ro: ['Scaune față încălzite și ventilate', 'Scaun șofer electric cu memorie', 'Volan încălzit', 'Plafon panoramic și hayon electric', 'Lumini ambientale multicolore', 'Oglindă electrocromă, geamuri fumurii'], en: ['Heated and ventilated front seats', 'Power driver’s seat with memory', 'Heated steering wheel', 'Panoramic roof and power tailgate', 'Multicolour ambient lighting', 'Auto-dimming mirror, privacy glass'] } }
    ],
    specs: { engine: { ro: '1.5 TGDI benzină, 1.499 cm³ + motor electric', en: '1.5 TGDI petrol, 1,499 cc + electric motor' }, sysPower: '205 kW / 279 CP', torque: { ro: '215 Nm termic / 310 Nm electric', en: '215 Nm engine / 310 Nm motor' }, trans: 'DHT', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, vmax: '175 km/h', evRange: { ro: 'până la 90 km (WLTP)', en: 'up to 90 km (WLTP)' }, energy: '16,3 kWh/100 km', cons: '6 l/100 km', co2: '54 g/km', battery: { ro: '18,3 kWh LiFePO4', en: '18.3 kWh LiFePO4' }, charge: { ro: 'DC 40 kW: 10–80% ≤ 25 min · AC 10–100% ≤ 3,3 h', en: 'DC 40 kW: 10–80% ≤ 25 min · AC 10–100% ≤ 3.3 h' }, tank: '60 L', dims: '4.535 × 1.864 × 1.702 mm', wb: '2.670 mm', seats: '5', weight: '1.788 kg', wheels: '18" · 225/60 R18', modes: 'Eco / Normal / Sport · EV / HEV', tow: { ro: '750 kg (fără frână)', en: '750 kg (unbraked)' } },
    colors: [C('GXM', 'Tech Gray', 'Tech Gray', STD, 0, '#7A7D81'), C('KHM', 'Nasdaq Silver', 'Nasdaq Silver', EXTRA, 600, '#B5B8BB'), C('WEM', 'Emerald Blue', 'Emerald Blue', EXTRA, 600, '#1F5C62'), C('CLM', 'Carbon Crystal Black', 'Carbon Crystal Black', EXTRA, 600, '#17181A')],
    interiors: [{ id: 'piele', name: { ro: 'Piele sintetică neagră', en: 'Black synthetic leather' }, price: 0, hex: '#151517' }],
    gallery: ['hero', 'hero2'] },

  { id: 't8', family: 'tiggo8', name: 'TIGGO 8', fuel: 'ice', pdf: 'chery-tiggo-8-lista-preturi.pdf', validFrom: '2026-01-01',
    tagline: { ro: '7 locuri, 1.6 TGDI de 147 CP', en: '7 seats, 147 hp 1.6 TGDI' },
    intro: { ro: 'SUV cu 7 locuri și motor 1.6 TGDI cu cutie automată cu dublu ambreiaj în 7 trepte. Ecran tactil de 15,6", audio SONY, cameră 360° și purificare a aerului cu filtru N95, într-o singură versiune complet echipată.', en: '7-seat SUV with a 1.6 TGDI engine and 7-speed dual-clutch automatic. 15.6" touchscreen, SONY audio, 360° camera and N95 air purification in one fully equipped version.' },
    key: [['7', { ro: 'locuri', en: 'seats' }, 'seats'], ['147', 'CP', 'power'], ['889', 'L', 'trunk'], ['15,6', '"', 'screen']],
    versions: [
      { id: 'luxury', name: 'Luxury', engine: { ro: '1.6 TGDI · 7DCT · 147 CP', en: '1.6 TGDI · 7DCT · 147 hp' }, code: '6472C81', list: 31990, net: 26438,
        hi: { ro: ['7 locuri, rândul 3 rabatabil 50:50', 'Ecran tactil 15,6" + display 10,25"', 'Audio SONY cu 8 difuzoare', 'Cameră 360°, senzori față și spate', 'Scaun șofer electric, scaune față încălzite', 'Încărcător wireless 50 W, filtru N95'], en: ['7 seats, 50:50 folding third row', '15.6" touchscreen + 10.25" display', 'SONY 8-speaker audio', '360° camera, front and rear sensors', 'Power driver’s seat, heated front seats', '50 W wireless charger, N95 filter'] } }
    ],
    specs: { engine: { ro: '1.6 TGDI benzină, 1.598 cm³', en: '1.6 TGDI petrol, 1,598 cc' }, power: '108 kW / 147 CP @ 5.500 rpm', torque: '275 Nm @ 2.000 – 4.000 rpm', trans: { ro: '7DCT, dublu ambreiaj', en: '7-speed dual clutch' }, drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, dims: '4.725 × 1.860 × 1.705 mm', wb: '2.710 mm', trunk: { ro: '117 L (7 locuri) / 889 L (rândul 3 rabatat)', en: '117 L (7 seats) / 889 L (row 3 folded)' }, seats: '7', wheels: '19" · 235/50 R19', modes: 'Eco / Normal / Sport' },
    colors: [C('UMM', 'Bamboo Gray', 'Bamboo Gray', STD, 0, '#6E8580'), C('SJM', 'Aurora Green', 'Aurora Green', EXTRA, 600, '#1E5B4D'), C('BWM', 'Khaki White', 'Khaki White', EXTRA, 600, '#E8E7E2'), C('CLM', 'Carbon Crystal Black', 'Carbon Crystal Black', EXTRA, 600, '#17181A')],
    interiors: [{ id: 'piele', name: { ro: 'Piele sintetică neagră', en: 'Black synthetic leather' }, price: 0, hex: '#151517' }],
    gallery: ['hero', 'hero2'] },

  { id: 't8csh', family: 'tiggo8', name: 'TIGGO 8 CSH', fuel: 'phev', pdf: 'chery-tiggo-8-csh-lista-preturi.pdf', validFrom: '2026-01-01',
    tagline: { ro: '7 locuri, plug-in hybrid 279 CP', en: '7 seats, 279 hp plug-in hybrid' },
    intro: { ro: 'SUV-ul cu 7 locuri și tehnologie Chery Super Hybrid: 279 CP, până la 90 km electric (NEDC) și 56 g/km CO₂. Ecran de 15,6", audio SONY, cameră 540° și interior din piele neagră sau maro.', en: 'The 7-seat SUV with Chery Super Hybrid technology: 279 hp, up to 90 km electric (NEDC) and 56 g/km CO₂. 15.6" screen, SONY audio, 540° camera and black or brown leather interior.' },
    key: [['7', { ro: 'locuri', en: 'seats' }, 'seats'], ['279', 'CP', 'sysPower'], ['90', 'km EV', 'evRange'], ['56', 'g/km', 'co2']],
    versions: [
      { id: 'luxury', name: 'Luxury', engine: { ro: 'Super Hybrid 1.5 TGDI · DHT · 279 CP', en: 'Super Hybrid 1.5 TGDI · DHT · 279 hp' }, code: '6471J61', list: 39490, net: 32636,
        hi: { ro: ['7 locuri, plug-in hybrid 279 CP', 'Până la 90 km în mod electric (NEDC)', 'Ecran 15,6" + display 10,25"', 'Audio SONY cu 10 difuzoare', 'Cameră 540°, încărcător wireless 50 W', 'Purificare aer cu filtru N95'], en: ['7 seats, 279 hp plug-in hybrid', 'Up to 90 km electric (NEDC)', '15.6" screen + 10.25" display', 'SONY 10-speaker audio', '540° camera, 50 W wireless charger', 'N95 air purification'] } },
      { id: 'unique', name: 'Unique', engine: { ro: 'Super Hybrid 1.5 TGDI · DHT · 279 CP', en: 'Super Hybrid 1.5 TGDI · DHT · 279 hp' }, code: '6472J61', list: 43290, net: 35777,
        hi: { ro: ['Head-Up Display', 'Audio SONY cu 12 difuzoare', 'Scaune față încălzite și ventilate, masaj pasager', 'Volan încălzit, memorie scaun șofer', 'Plafon panoramic, hayon electric', 'Parbriz încălzit'], en: ['Head-up display', 'SONY 12-speaker audio', 'Heated and ventilated front seats, passenger massage', 'Heated steering wheel, driver’s seat memory', 'Panoramic roof, power tailgate', 'Heated windscreen'] } }
    ],
    specs: { engine: { ro: '1.5 TGDI benzină, 1.499 cm³ + motor electric', en: '1.5 TGDI petrol, 1,499 cc + electric motor' }, sysPower: '205 kW / 279 CP', torque: { ro: '215 Nm termic / 310 Nm electric', en: '215 Nm engine / 310 Nm motor' }, trans: 'DHT', drive: { ro: 'Față (FWD)', en: 'Front (FWD)' }, evRange: { ro: 'până la 90 km (NEDC)', en: 'up to 90 km (NEDC)' }, energy: '15,4 kWh/100 km', cons: '6 l/100 km', co2: '56 g/km', battery: { ro: '18,3 kWh LiFePO4', en: '18.3 kWh LiFePO4' }, charge: { ro: 'DC 40 kW: 10–80% ≤ 25 min · AC 10–100% ≤ 3,3 h', en: 'DC 40 kW: 10–80% ≤ 25 min · AC 10–100% ≤ 3.3 h' }, tank: '60 L', dims: '4.725 × 1.860 × 1.705 mm', wb: '2.710 mm', seats: '7', weight: '1.884 kg', wheels: '19" · 235/50 R19', modes: 'Eco / Normal / Sport · EV / HEV', tow: '750 kg' },
    colors: [C('UMM', 'Bamboo Gray', 'Bamboo Gray', STD, 0, '#6E8580'), C('SJM', 'Aurora Green', 'Aurora Green', EXTRA, 600, '#1E5B4D'), C('BWM', 'Khaki White', 'Khaki White', EXTRA, 600, '#E8E7E2'), C('CLM', 'Carbon Crystal Black', 'Carbon Crystal Black', EXTRA, 600, '#17181A')],
    interiors: [{ id: 'ch2', name: { ro: 'Piele neagră (CH2)', en: 'Black leather (CH2)' }, price: 0, hex: '#151517', img: 'int1' }, { id: 'ch3', name: { ro: 'Piele maro (CH3)', en: 'Brown leather (CH3)' }, price: 0, hex: '#8A5B3D', img: 'int2' }],
    gallery: ['hero', 'hero2', 'int1', 'int2'] },

  { id: 't9csh', family: 'tiggo9', name: 'TIGGO 9 CSH', fuel: 'phev', pdf: 'chery-tiggo-9-csh-lista-preturi.pdf', validFrom: '2026-01-01',
    tagline: { ro: 'Flagship cu 7 locuri, 428 CP, AWD', en: '7-seat flagship, 428 hp, AWD' },
    intro: { ro: 'Flagship-ul Chery: plug-in hybrid cu tracțiune integrală, 428 CP și 580 Nm, până la 143 km electric (NEDC) și încărcare DC de 71 kW. Piele perforată, scaune față cu masaj, audio SONY cu 14 difuzoare și Head-Up Display.', en: 'Chery’s flagship: all-wheel-drive plug-in hybrid with 428 hp and 580 Nm, up to 143 km electric (NEDC) and 71 kW DC charging. Perforated leather, massage front seats, 14-speaker SONY audio and a head-up display.' },
    key: [['428', 'CP', 'sysPower'], ['143', 'km EV', 'evRange'], ['AWD', '4×4', 'drive'], ['7', { ro: 'locuri', en: 'seats' }, 'seats']],
    versions: [
      { id: 'unique', name: 'Unique', engine: { ro: 'Super Hybrid 1.5 TGDI · 3DHT · AWD · 428 CP', en: 'Super Hybrid 1.5 TGDI · 3DHT · AWD · 428 hp' }, code: '6480N61', list: 47000, net: 38843,
        hi: { ro: ['428 CP, tracțiune integrală AWD', '143 km electric (NEDC), DC 71 kW', 'Piele perforată, masaj față, rândul 2 încălzit și ventilat', 'Audio SONY 14 difuzoare, Head-Up Display', 'Ecran 15,6", cameră 540°', 'Parbriz încălzit, plafon panoramic, hayon electric'], en: ['428 hp, all-wheel drive', '143 km electric (NEDC), 71 kW DC', 'Perforated leather, front massage, heated and ventilated row 2', 'SONY 14-speaker audio, head-up display', '15.6" screen, 540° camera', 'Heated windscreen, panoramic roof, power tailgate'] } }
    ],
    specs: { engine: { ro: '1.5 TGDI benzină, 1.499 cm³ + motoare electrice', en: '1.5 TGDI petrol, 1,499 cc + electric motors' }, sysPower: '315 kW / 428 CP', torque: '580 Nm', trans: '3DHT', drive: { ro: 'Integrală AWD (4×4)', en: 'All-wheel drive (4×4)' }, evRange: { ro: 'până la 143 km (NEDC)', en: 'up to 143 km (NEDC)' }, cons: '7 l/100 km', co2: '40 g/km', battery: { ro: '34,46 kWh NCM', en: '34.46 kWh NCM' }, charge: 'AC 6,6 kW · DC 71 kW', tank: '70 L', dims: '4.810 × 1.925 × 1.741 mm', wb: '2.800 mm', trunk: { ro: '819 L (rândul 3 rabatat)', en: '819 L (row 3 folded)' }, seats: '7', weight: '2.308 kg', wheels: '20" · 245/50 R20', modes: 'Eco / Normal / Sport + Snow / Mud / Off-Road / Sand · EV / HEV', tow: { ro: '1.500 kg cu frână / 750 kg fără frână', en: '1,500 kg braked / 750 kg unbraked' } },
    colors: [C('SJM', 'Aurora Green', 'Aurora Green', STD, 0, '#1E5B4D'), C('GXM', 'Tech Gray', 'Tech Gray', EXTRA, 800, '#A3A6AA'), C('UEM', 'Universe Gray', 'Universe Gray', EXTRA, 800, '#3E4550'), C('CLM', 'Pine Black', 'Pine Black', EXTRA, 800, '#141618')],
    interiors: [{ id: 'piele', name: { ro: 'Piele perforată', en: 'Perforated leather' }, price: 0, hex: '#9A6847', img: 'int1' }],
    gallery: ['hero', 'int1', 'int2', 'hero2'] }
];
SP.MODELS.forEach(m => {
  m.img = n => 'assets/img/' + m.id + '/' + n + '.webp';
  m.colorImg = code => 'assets/img/' + m.id + '/colors/' + code + '.webp';
  m.versions.forEach(v => { v.launch = v.list; });
  m.from = Math.min.apply(null, m.versions.map(v => v.list));
  m.fam = SP.FAMILIES.find(f => f.id === m.family);
});
SP.family = id => SP.FAMILIES.find(f => f.id === id);
SP.FAMILIES.forEach(f => { f.from = Math.min.apply(null, f.models.map(id => SP.MODELS.find(m => m.id === id).from)); });

/* ---------------------------------------------------------------- CONFIGURATOR: dealer accessories (demo prices) */
SP.ACCESSORIES = [
  { id: 'mats', name: { ro: 'Set covorașe premium', en: 'Premium floor mat set' }, price: 149, fits: 'all' },
  { id: 'tray', name: { ro: 'Tavă portbagaj', en: 'Boot liner' }, price: 89, fits: 'all' },
  { id: 'film', name: { ro: 'Folie protecție vopsea (față)', en: 'Paint protection film (front)' }, price: 590, fits: 'all' },
  { id: 'tow', name: { ro: 'Cârlig remorcare detașabil, montat', en: 'Detachable tow bar, fitted' }, price: 790, fits: 'all' },
  { id: 'wallbox', name: { ro: 'Wallbox 7 kW, montaj inclus', en: '7 kW wallbox, installed' }, price: 990, fits: ['phev'] },
  { id: 'winter', name: { ro: 'Set roți iarnă complete', en: 'Complete winter wheel set' }, price: 1390, fits: 'all' },
  { id: 'service', name: { ro: 'Pachet revizii 3 ani', en: '3-year service plan' }, price: 690, fits: 'all' }
];

/* ---------------------------------------------------------------- STOCK (demo — live: Sales Partner API) */
(function () {
  const rows = [
    ['CH-2601', 't4hev', 'comfort', 'NLM', 'stock', 0, 0, 'bucuresti', 'ic'],
    ['CH-2602', 't4hev', 'unique', 'GXM', 'stock', 0, 500, 'cluj', 'ab'],
    ['CH-2603', 't4hev', 'unique', 'KUM', 'transit', 0, 0, 'constanta', 'cn'],
    ['CH-2604', 't7hev', 'comfort', 'GXM', 'stock', 0, 0, 'bucuresti', 'ic'],
    ['CH-2605', 't7hev', 'unique', 'ZEM', 'stock', 0, 800, 'constanta', 'cn'],
    ['CH-2606', 't7csh', 'luxury', 'WEM', 'stock', 0, 1000, 'bucuresti', 'ic'],
    ['CH-2607', 't7csh', 'unique', 'KHM', 'demo', 2900, 2500, 'cluj', 'ab'],
    ['CH-2608', 't7csh', 'luxury', 'GXM', 'transit', 0, 0, 'bucuresti', 'rd'],
    ['CH-2609', 't8', 'luxury', 'UMM', 'stock', 0, 0, 'bucuresti', 'ic'],
    ['CH-2610', 't8', 'luxury', 'BWM', 'stock', 0, 700, 'cluj', 'ab'],
    ['CH-2611', 't8csh', 'luxury', 'SJM', 'stock', 0, 0, 'bucuresti', 'rd'],
    ['CH-2612', 't8csh', 'unique', 'CLM', 'stock', 0, 1500, 'constanta', 'cn', 'ch3'],
    ['CH-2613', 't8csh', 'unique', 'BWM', 'transit', 0, 0, 'cluj', 'ab', 'ch3'],
    ['CH-2614', 't9csh', 'unique', 'SJM', 'stock', 0, 0, 'bucuresti', 'ic'],
    ['CH-2615', 't9csh', 'unique', 'UEM', 'demo', 3400, 3000, 'bucuresti', 'rd'],
    ['CH-2616', 't9csh', 'unique', 'CLM', 'transit', 0, 0, 'constanta', 'cn']
  ];
  SP.STOCK = rows.map(r => {
    const [id, mid, vid, code, status, km, extra, loc, adv, intId] = r;
    const m = SP.MODELS.find(x => x.id === mid), v = m.versions.find(x => x.id === vid);
    const color = m.colors.find(c => c.code === code);
    const interior = (intId && m.interiors.find(i => i.id === intId)) || m.interiors.find(i => !i.trims || i.trims.includes(vid));
    const options = color.price + interior.price;
    return {
      id, modelId: mid, versionId: vid, model: m, version: v, brand: 'chery', year: 2026, km, status, color, interior,
      vin: 'LVVDB' + (m.fuel === 'phev' ? '41B' : '21B') + 'TRD' + id.slice(-4) + '00',
      priceList: v.list + options, price: v.list + options - extra, extraDiscount: extra, location: loc, advisor: adv,
      img: m.colorImg(code), gallery: [m.colorImg(code)].concat(m.gallery.map(g => m.img(g)))
    };
  });
})();

/* ---------------------------------------------------------------- OFFERS (SP Campaigns, demo — dealer offers) */
SP.OFFERS = [
  { id: 'tiggo-8-csh-familie', model: 't8csh', cat: 'auto', img: 'assets/img/t8csh/hero.webp', tag: '7 locuri · CSH',
    title: { ro: 'TIGGO 8 CSH — 7 locuri, plug-in hybrid', en: 'TIGGO 8 CSH — 7 seats, plug-in hybrid' },
    lead: { ro: 'De la 39.490 € cu TVA. Test drive de weekend și evaluarea mașinii tale la schimb, în aceeași zi.', en: 'From €39,490 incl. VAT. Weekend test drive and a trade-in valuation of your car on the same day.' }, valid: '2026-12-31', featured: true },
  { id: 'tiggo-4-hev', model: 't4hev', cat: 'auto', img: 'assets/img/t4hev/hero2.webp', tag: '22.990 €',
    title: { ro: 'TIGGO 4 HEV de la 22.990 €', en: 'TIGGO 4 HEV from €22,990' },
    lead: { ro: 'SUV urban full hybrid de 163 CP, cu ADAS complet și display digital de 12,3" din echiparea Comfort.', en: '163 hp urban full-hybrid SUV with full ADAS and a 12.3" digital display from the Comfort trim.' }, valid: '2026-12-31' },
  { id: 'stoc-disponibil', model: 't7csh', cat: 'auto', img: 'assets/img/t7csh/hero2.webp', tag: 'Stoc',
    title: { ro: 'Mașini din stoc, livrare imediată', en: 'Stock cars, immediate delivery' },
    lead: { ro: 'Discount de dealer pentru mașinile din stoc în București, Cluj și Constanța. Vezi lista actualizată.', en: 'Dealer discount on stock cars in Bucharest, Cluj and Constanța. See the live list.' }, valid: '2026-12-31' },
  { id: 'garantie-7-ani', model: null, cat: 'service', img: 'assets/img/t9csh/hero.webp', tag: '7 ani',
    title: { ro: 'Garanție CHERY 7 ani sau 150.000 km', en: 'CHERY 7-year or 150,000 km warranty' },
    lead: { ro: 'Plus 8 ani sau 160.000 km pentru baterie, motor și componentele electronice ale modelelor Super Hybrid.', en: 'Plus 8 years or 160,000 km on the battery, motor and electronics of Super Hybrid models.' }, valid: '2026-12-31' },
  { id: 'leasing-flote', model: null, cat: 'finance', img: 'assets/img/t8/hero.webp', tag: 'Leasing',
    title: { ro: 'Leasing pentru persoane juridice și flote', en: 'Leasing for companies and fleets' },
    lead: { ro: 'Avans de la 10%, rate fixe, ofertă în 24 de ore de la consilierul de flote.', en: 'From 10% down payment, fixed instalments, a quote within 24 hours from our fleet advisor.' }, valid: '2026-12-31' },
  { id: 'verificare-iarna', model: null, cat: 'service', img: 'assets/img/t7hev/hero.webp', tag: 'Service',
    title: { ro: 'Verificare de iarnă', en: 'Winter check' },
    lead: { ro: 'Verificare baterie, anvelope, lumini și climatizare în orice service CHERY Demo Auto. Programare online.', en: 'Battery, tyres, lights and climate check at any CHERY Demo Auto service. Book online.' }, valid: '2026-12-31' }
];

/* ---------------------------------------------------------------- NEWS (CMS) */
SP.NEWS = [
  { id: 'black-sea-safety-challenge', date: '2026-09-24', img: 'assets/img/t9csh/hero.webp',
    title: { ro: 'Black Sea Safety Challenge: prima ediție europeană a avut loc în România', en: 'Black Sea Safety Challenge: the first European edition took place in Romania' },
    lead: { ro: 'Chery a testat siguranța modelelor sale pe litoralul românesc, în cadrul Global Safety Challenge.', en: 'Chery tested the safety of its models on the Romanian Black Sea coast, as part of the Global Safety Challenge.' } },
  { id: 'tiggo-9-flagship', date: '2026-09-11', img: 'assets/img/t9csh/int1.webp',
    title: { ro: 'Noul TIGGO 9 CSH. Flagship-ul Chery a sosit', en: 'The new TIGGO 9 CSH. Chery’s flagship has arrived' },
    lead: { ro: 'SUV premium cu 7 locuri, 428 CP și tracțiune integrală, disponibil pentru test drive în București.', en: 'Premium 7-seat SUV with 428 hp and all-wheel drive, available for test drives in Bucharest.' } },
  { id: 'tehnologia-csh', date: '2026-08-20', img: 'assets/img/t8csh/hero.webp',
    title: { ro: 'Tehnologia Chery Super Hybrid, pe înțelesul tuturor', en: 'Chery Super Hybrid technology, explained' },
    lead: { ro: 'Cum combină CSH motorul pe benzină cu motorul electric și de ce poți face zilnic naveta fără benzină.', en: 'How CSH combines the petrol engine and the electric motor, and why your daily commute can be petrol-free.' } },
  { id: 'showroom-constanta', date: '2026-07-15', img: 'assets/img/t7csh/hero2.webp',
    title: { ro: 'CHERY Demo Auto deschide showroom-ul din Constanța', en: 'CHERY Demo Auto opens its Constanța showroom' },
    lead: { ro: 'A treia locație a rețelei, după București și Cluj: vânzări, test drive și recepție service.', en: 'The network’s third location after Bucharest and Cluj: sales, test drives and service reception.' } }
];
SP.NEWS_BODY = {
  ro: ['Chery este prezentă în România prin importatorul oficial AUTO ITALIA GLOBAL S.R.L. Gama TIGGO cuprinde SUV-uri cu motoare pe benzină, full hybrid (HEV) și plug-in hybrid Chery Super Hybrid (CSH).', 'Toate modelele beneficiază de garanția CHERY de 7 ani sau 150.000 km (sau 2 ani fără limită de kilometri), iar pentru modelele Super Hybrid bateria, motorul și componentele electronice au garanție de 8 ani sau 160.000 km.', 'Te așteptăm în showroom-urile CHERY Demo Auto din București, Cluj și Constanța pentru un test drive sau o ofertă personalizată.'],
  en: ['Chery is represented in Romania by the official importer AUTO ITALIA GLOBAL S.R.L. The TIGGO range covers petrol, full-hybrid (HEV) and Chery Super Hybrid (CSH) plug-in hybrid SUVs.', 'Every model comes with the CHERY 7-year or 150,000 km warranty (or 2 years with unlimited mileage), and Super Hybrid models get 8 years or 160,000 km on the battery, motor and electronics.', 'Visit the CHERY Demo Auto showrooms in Bucharest, Cluj and Constanța for a test drive or a personalised offer.']
};
