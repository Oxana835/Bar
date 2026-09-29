# Mos Eisley Cantina — Design Brief

## Stack and implementation
- Semantic HTML with Tailwind CSS Play CDN (`https://cdn.tailwindcss.com`). Keep lightweight custom CSS and vanilla JavaScript for the responsive menu and audio-reactive image effect.
- Mobile-first, responsive single-page layout. Use the existing `tailwind.config.js` for project animation tokens where applicable.

## Visual direction
- A lively sci-fi cantina at night: atmospheric, immersive, and readable rather than a generic dashboard or marketing template.
- Dark palette: `bg-slate-950`, subtle violet and amber atmosphere (`bg-gradient-to-br from-slate-950 via-violet-950/40 to-amber-950/30`), light slate text, and restrained pink neon accents.
- Header: translucent dark surface with `backdrop-blur-md`; brand badge and name at left; horizontal navigation on desktop and an accessible hamburger menu on small screens.
- Hero: responsive two-column layout, `grid gap-10 px-6 py-16 md:grid-cols-2 md:items-center`; concise text and calls to action beside a large cantina photo.
- Content cards: `grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-16`. Use one semantic `<article>` per card, each with one icon box, one `<h3>`, and one paragraph.
- Card surface: `bg-white/[0.03] border border-white/10 backdrop-blur`. Lift on hover with `hover:-translate-y-1`; use a restrained violet border/glow on card hover.
- Icon box: `size-12 rounded-xl bg-violet-500/10 ring-1 ring-violet-400/20`, with centered symbol. On hover, use pink neon, a subtle dark glyph outline, and a soft glow.
- Links must have clear `focus-visible` outlines/rings. Keep interactive controls keyboard accessible and sufficiently large on mobile.

## Image, audio, and motion
- Give the cantina photo a visible pink neon outline and a gentle pulse synchronized with the lounge track `lounge musique.mp3`; let the pink glow respond to the audio where Web Audio analysis is available.
- Use a native audio player with controls, no autoplay, and lazy media loading. Announce it with an accessible label.
- Respect `prefers-reduced-motion`: replace pulsing with a steady neon outline while keeping audio controls available.
- Keep the responsive navigation usable on touch screens; update its expanded state and close it after a navigation link is selected.

## Exact on-page copy

### Page title and header
- Page title: `Mos Eisley Cantina. Tatooine's busiest watering hole`
- Brand: `Mos Eisley Cantina`
- Navigation: `Features`, `Menu`, `Live music`, `Sign in`
- Header call to action: `Reserve a booth`

### Hero
- Eyebrow: `Open every night, 3 ABY`
- Heading: `Find your watering hole on Tatooine`
- Description: `Experience the lively atmosphere of Tatooine's most famous cantina, where you can enjoy exotic drinks, live music, and a diverse crowd of patrons from across the galaxy.`
- Buttons: `Reserve a booth`; `See Live music`
- Image alt text: `Cantina interior`
- Image caption: `Musique lounge de la cantina`

### Feature introduction
- Heading: `What you find inside ?`
- Subheading: `A bouth for every kind of trouble`
- Supporting line: `Three things you can count on, every night you walk through the door`

### Feature cards
- `Live music nightly` — `Sunset to sunrise, loud enough to drown out a bounty hunter.`
- `Smugglers welcome` — `No questions asked. Back booths, no records kept.`
- `Droids: see house policy` — `Limits on the floor. Power-down recommended.`

### Audio player
- Accessible label: `Lecteur de musique lounge de la cantina`
- Fallback text: `Votre navigateur ne prend pas en charge la lecture audio.`
