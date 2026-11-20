// Project content, verbatim from the Drive portfolio frames (port-beta-6).
// Media names follow the asset convention NN-slug-asset (see README).
// Where each image sits on the desktop slides lives in ./layouts.ts.
// `client` is used for the [CHECK RIGHTS] list in HANDOFF.md, not rendered.
import type { ToolId } from './site';

export type Media =
  | { kind: 'image'; name: string; alt: string }
  | { kind: 'video'; name: string; label: string; poster?: string }
  | { kind: 'model'; name: string; label: string; poster?: string }
  | { kind: 'map'; name: string; label: string } // interactive map (FestivalMap)
  | { kind: 'embed'; provider: 'youtube' | 'vimeo' | 'sketchfab'; id: string; label: string; poster?: string };

export interface Swatch {
  hex: string;
  name: string;
}

export interface Project {
  no: string;
  slug: string;
  title: string;
  indexTitle?: string;
  client?: string;
  description: string | string[]; // string[] renders as bullets
  role: string[];
  tools: ToolId[];
  palette?: Swatch[];
  // Bookshelf book: short spine label + book color (bright, to stand off the dark page)
  spine: { label: string; bg: string; ink: string };
  media: Media[];
}

export const projects: Project[] = [
  {
    no: '01',
    slug: 'k2o',
    spine: { label: 'K2O Songkran', bg: '#FF2A44', ink: '#111111' },
    title: 'K2O Songkran Music Festival',
    client: 'S2O Festival',
    description:
      "A visual campaign for K2O Songkran Music Festival, developed under S2O Festival. Inspired by Songkran's water celebrations, the project extends a bold underwater visual direction across key visuals, artist posters, merchandise, and on-site festival materials.",
    role: ['Key visual and artist posters', 'K2O and S2O merchandise design', 'Festival map and event artwork'],
    tools: ['ps', 'ai', 'ae', 'pr', 'blender'],
    palette: [
      { hex: '#FF0033', name: 'Neon Red' },
      { hex: '#051026', name: 'Deep Atlantic Blue' },
      { hex: '#00F2FF', name: 'Neon Cyan' },
      { hex: '#245F84', name: 'Ocean Blue' },
      { hex: '#C0C0C0', name: 'Silver Grey' },
      { hex: '#FFFFFF', name: 'White' },
    ],
    media: [
      { kind: 'image', name: '01-k2o-kv', alt: 'K2O key visual: a glowing red neon K2O logo submerged underwater above a Bangkok skyline, dated 14 April 2026, S2O Land' },
      { kind: 'image', name: '01-k2o-poster-bus', alt: 'K2O artist poster for BUS in the underwater festival style' },
      { kind: 'image', name: '01-k2o-poster-daou', alt: 'K2O artist poster for DAOU with special guest Offroad' },
      { kind: 'image', name: '01-k2o-poster-fiftyfifty', alt: 'K2O artist poster for FIFTY FIFTY' },
      { kind: 'image', name: '01-k2o-poster-kissoflife', alt: 'K2O artist poster for KISS OF LIFE' },
      { kind: 'image', name: '01-k2o-poster-lngshot', alt: 'K2O artist poster for LNGSHOT' },
      { kind: 'image', name: '01-k2o-poster-riize', alt: 'K2O artist poster for RIIZE' },
      { kind: 'image', name: '01-k2o-logo', alt: 'K2O Songkran Music Festival logo, white on black' },
      { kind: 'image', name: '01-k2o-logo-water', alt: 'K2O logo rendered as red neon glass underwater' },
      { kind: 'model', name: '01-k2o-logo', label: 'K2O logo, 3D (Blender)', poster: '01-k2o-logo-water' },
      { kind: 'video', name: '01-k2o-planb', label: 'K2O Songkran Music Festival — Plan B OOH Screen Animation', poster: '01-k2o-planb-poster' },
      { kind: 'image', name: '01-k2o-merch-tee', alt: 'Light blue K2O festival T-shirt, front "Water!" print and back artist line-up' },
      { kind: 'image', name: '01-k2o-merch-tiedye', alt: 'Tie-dye S2O "Wet Me!" T-shirt' },
      { kind: 'image', name: '01-k2o-merch-black', alt: 'Black S2O "Free Water" T-shirts, front and back' },
      { kind: 'image', name: '01-k2o-merch-wristband', alt: 'Single K2O fabric festival wristband' },
      { kind: 'image', name: '01-k2o-merch-wristbands', alt: 'Festival wristbands for Owner\'s Box, Artist, Sponsor, Vendor, Re-entry and Influencer' },
      { kind: 'map', name: '01-k2o-map', label: 'K2O festival map, interactive: main stage, wet zone, speed stage, entrance, food zone and facilities' },
    ],
  },
  {
    no: '02',
    slug: 'startup-standup',
    spine: { label: 'Startup Standup', bg: '#FF8A1F', ink: '#111111' },
    title: 'Startup Standup Comedy',
    client: 'Enter to Start',
    description:
      'A visual identity and promotional campaign for Startup Standup Comedy, an event combining investment insights with stand-up comedy. The design brings both worlds together through bold typography, vibrant colors, and playful visuals.',
    role: [
      'Developed the key visual and supporting graphics.',
      'Designed promotional materials for print and digital platforms.',
      'Adapted the visual identity across posters, banners, and event signage.',
    ],
    tools: ['ps', 'ai', 'ae', 'pr'],
    palette: [
      { hex: '#06C5F2', name: 'Electric Cyan' },
      { hex: '#003C58', name: 'Deep Ocean' },
      { hex: '#FCD700', name: 'Vivid Yellow' },
      { hex: '#FFFFFF', name: 'White' },
    ],
    media: [
      { kind: 'image', name: '02-standup-kv', alt: 'Startup Standup Comedy key visual: a smiling comedian with a microphone over bold yellow and white type, 18 Aug 2023' },
      { kind: 'image', name: '02-standup-banners', alt: 'Two roll-up banners using the Startup Standup Comedy key visual' },
      { kind: 'image', name: '02-standup-billboard', alt: 'Billboard mockup of the Startup Standup Comedy campaign' },
      { kind: 'image', name: '02-standup-wall-posters', alt: 'Three speaker posters mounted on a brick wall' },
      { kind: 'image', name: '02-standup-poster-mockup', alt: 'Framed event poster with the speaker line-up' },
      { kind: 'image', name: '02-standup-logo', alt: 'Startup Standup Comedy logo, white on black' },
      { kind: 'video', name: '02-standup-motion', label: 'Startup Standup Comedy motion piece', poster: '02-standup-kv' },
    ],
  },
  {
    no: '03',
    slug: 'thumbnails-posters',
    spine: { label: 'Thumbnails & Posters', bg: '#FFD21F', ink: '#111111' },
    title: 'Thumbnails & Posters',
    client: 'MollageBKK / Netflix Thailand',
    description:
      'A collection of digital thumbnails and promotional visuals created in collaboration with MollageBKK, including entertainment content for Netflix Thailand. Each design combines photo compositing, retouching, and typography to create engaging, attention-grabbing visuals tailored to different content formats.',
    role: ['Visual Concept & Composition', 'Photo Compositing & Retouching', 'Typography & Final Artwork'],
    tools: ['ps', 'ai'],
    media: [
      { kind: 'image', name: '03-thumbs-poster-ice', alt: 'Thai word-game poster: a cast of eight posing among ice cubes, with bold Thai headline type' },
      { kind: 'image', name: '03-thumbs-poster-jail', alt: 'Poster of a group of men behind prison bars, Thai headline about guessing job jargon in one minute' },
      { kind: 'image', name: '03-thumbs-netflix-snow', alt: 'Netflix Thailand thumbnail: a snow challenge with a Sapporo trip prize' },
      { kind: 'image', name: '03-thumbs-masterchef', alt: 'MasterChef The Professionals Thailand thumbnail with four judges' },
      { kind: 'image', name: '03-thumbs-netflix-codex', alt: 'Netflix Thailand thumbnail about six technologies, helpful or harmful' },
      { kind: 'image', name: '03-thumbs-netflix-whats', alt: 'Netflix Thailand "What\'s ศัพท์" episode 17 thumbnail' },
      { kind: 'image', name: '03-thumbs-netflix-playback', alt: 'Netflix Thailand Playback thumbnail' },
      { kind: 'image', name: '03-thumbs-netflix-backstage', alt: 'Netflix Thailand behind-the-scenes thumbnail' },
      { kind: 'image', name: '03-thumbs-netflix-yaya', alt: 'Netflix Thailand Playback thumbnail featuring Yaya' },
    ],
  },
  {
    no: '04',
    slug: 'visual-content',
    spine: { label: 'Visual Content', bg: '#2BD46B', ink: '#111111' },
    title: 'Visual Content Design',
    client: 'Enter to Start (includes one Binance TH post)',
    description:
      'A collection of editorial-style social media visuals for Enter to Start, covering finance, cryptocurrency, and technology topics. Each design combines bold typography, collage-style graphics, and visual storytelling to make complex subjects more approachable and engaging.',
    role: [
      'Developed visual concepts for editorial content.',
      'Designed collage-based graphics and compositions.',
      'Translated complex topics into clear visual narratives.',
      'Prepared final artwork for social media publishing.',
    ],
    tools: ['ps', 'ai'],
    media: [
      { kind: 'image', name: '04-content-post-tree-of-alpha', alt: 'Instagram post: newspaper collage about the trader Tree of Alpha' },
      { kind: 'image', name: '04-content-post-luck', alt: 'Instagram post: orange dice on green, "The Mechanism of Luck"' },
      { kind: 'image', name: '04-content-webtoon', alt: 'Social post about investing in Webtoon as Korean soft power' },
      { kind: 'image', name: '04-content-chatgpt', alt: 'Social post comparing ChatGPT and Google Translate' },
      { kind: 'image', name: '04-content-mortgage', alt: 'Social post: three techniques to pay off a home loan faster' },
      { kind: 'image', name: '04-content-dnft', alt: 'Social post explaining dynamic NFTs' },
      { kind: 'image', name: '04-content-buyback', alt: 'Social post explaining crypto buyback and token burn, half Bitcoin coin in flames' },
      { kind: 'image', name: '04-content-layer2', alt: 'Social post on how Layer 2 will change Ethereum' },
      { kind: 'image', name: '04-content-call-center', alt: 'Social post on call-center scam psychology, hooded figure in red' },
      { kind: 'image', name: '04-content-credit-card', alt: 'Social post: credit cards for first jobbers' },
      { kind: 'image', name: '04-content-binance-worldcup', alt: 'Binance TH "Strike and Earn" FIFA World Cup game post' },
    ],
  },
  {
    no: '05',
    slug: 'infographic',
    spine: { label: 'Infographic', bg: '#00C2CF', ink: '#111111' },
    title: 'Infographic',
    client: 'Enter to Start',
    description:
      'A collection of editorial infographics covering cryptocurrency, finance, technology, and business. Combining data visualization, illustration, and structured layouts, each design presents complex information in a clear, engaging, and accessible format.',
    role: [
      'Designed editorial infographics and visual layouts.',
      'Organized information through typography and visual hierarchy.',
      'Created illustrations, icons, and supporting graphics.',
      'Prepared final artwork for digital publishing.',
    ],
    tools: ['ps', 'ai'],
    media: [
      { kind: 'image', name: '05-info-ev-sales', alt: 'Infographic comparing electric car prices and sales in Thailand' },
      { kind: 'image', name: '05-info-pixar', alt: 'Infographic: nine business lessons from Pixar' },
      { kind: 'image', name: '05-info-bitcoin-timeline', alt: 'Long infographic: timeline of Bitcoin price events from 2020 to 2023' },
      { kind: 'image', name: '05-info-documentaries', alt: 'Infographic: five crypto documentaries worth watching' },
      { kind: 'image', name: '05-info-ethereum', alt: 'Infographic: the five stages of the Ethereum roadmap' },
      { kind: 'image', name: '05-info-investing', alt: 'Infographic: a beginner\'s guide to investing' },
    ],
  },
  {
    no: '06',
    slug: '16-personalities',
    spine: { label: '16 Personalities', bg: '#1EA7FF', ink: '#111111' },
    title: '16 Personalities Book Design',
    indexTitle: '16 Personalities',
    description:
      'An illustrated editorial book exploring the 16 MBTI personality types through original character designs and visual storytelling. Each personality features a distinct character, color palette, and thematic environment, bringing all 16 personalities to life through playful illustrations and engaging layouts.',
    role: [
      "Designed the book's editorial layout and visual identity.",
      'Illustrated 16 personality-inspired characters.',
      'Created thematic graphics and supporting illustrations.',
      'Prepared print-ready artwork for production.',
    ],
    tools: ['ps', 'ai', 'ae', 'id'],
    palette: [
      { hex: '#C47ACC', name: 'Orchid Purple' },
      { hex: '#8FCC52', name: 'Meadow Green' },
      { hex: '#52BBCC', name: 'Lagoon Blue' },
      { hex: '#F7C64B', name: 'Sunshine Yellow' },
    ],
    media: [
      { kind: 'image', name: '06-16p-cover', alt: 'Stack of 16 Personalities books with a colorful rounded type cover' },
      { kind: 'image', name: '06-16p-spread-green', alt: 'Green book spread: a wizard character for the INFJ type' },
      { kind: 'image', name: '06-16p-spread-purple', alt: 'Purple book spread for the INTP type with DNA graphics' },
      { kind: 'image', name: '06-16p-spread-blue', alt: 'Blue book spread with a winter scene' },
      { kind: 'image', name: '06-16p-spread-yellow', alt: 'Yellow book spread: an adventurer character in a desert' },
      { kind: 'image', name: '06-16p-characters', alt: 'Line-up of 16 original characters, one per MBTI type' },
      { kind: 'image', name: '06-16p-all-spreads', alt: 'All sixteen book spreads, grouped by color family' },
      { kind: 'video', name: '06-16p-flip', label: 'Book flip-through', poster: '06-16p-cover' },
    ],
  },
  {
    no: '07',
    slug: 'sybil-husky',
    spine: { label: 'Sybil Husky', bg: '#9D6BFF', ink: '#111111' },
    title: 'Sybil Husky',
    client: '[TODO] confirm client / project owner',
    description: [
      'Developed the visual identity and overall art direction.',
      'Designed six character tiers and collectible card visuals.',
      'Created fantasy-inspired environments and illustrations.',
      'Designed the landing page interface and supporting visual assets.',
    ],
    role: ['Visual Identity', 'Character Design', 'Illustration', 'Landing Page UI', 'NFT Card Design', 'Art Direction'],
    tools: ['ps', 'ai', 'lr', 'figma', 'procreate'],
    media: [
      { kind: 'image', name: '07-sybil-logo', alt: 'Sybil Husky logo: a minimal husky head mark above the wordmark' },
      { kind: 'image', name: '07-sybil-environment', alt: 'Illustrated snowy mountain landscape with a castle under the northern lights' },
      { kind: 'image', name: '07-sybil-tiers', alt: 'Six husky character cards: Apprentice, Mage, Sorcerer, Supreme, Special, Super Special' },
      { kind: 'image', name: '07-sybil-landing', alt: 'Sybil Husky landing page UI shown on laptops and as a section overview' },
      { kind: 'model', name: '07-sybil-card', label: 'Character card, 3D', poster: '07-sybil-tiers' },
      { kind: 'video', name: '07-sybil-prototype', label: 'Landing page prototype walkthrough', poster: '07-sybil-landing' },
    ],
  },
];
