// Editorial Full Case Study definitions for all 7 portfolio projects.
// Every project shares the same Worachet-inspired full-screen reader shell
// (264px sticky TOC sidebar, flush-top 486px full-width cover, 720px text column,
// 864px media breakout) while telling its own authentic visual and process story.

export type CaseCover =
  | {
      kind: 'photo';
      image: string;
      alt: string;
      bg: string;
      position?: string;
    }
  | {
      kind: 'framed';
      image: string;
      alt: string;
      bg: string;
      maxWidth?: number;
    }
  | {
      kind: 'trio';
      images: [string, string, string];
      alts: [string, string, string];
      bg: string;
      aspect?: string;
    }
  | {
      kind: 'logo';
      logoFile: string;
      alt: string;
      bg: string;
    };

export type CaseBlock =
  | {
      kind: 'figure';
      image: string;
      alt: string;
      caption?: string;
      aspect?: string;
    }
  | {
      kind: 'grid';
      cols: 2 | 3;
      items: { image: string; alt: string; label?: string }[];
      caption?: string;
      fit?: 'cover' | 'contain';
      aspect?: string;
    }
  | {
      kind: 'palette';
      caption?: string;
    }
  | {
      kind: 'video';
      name: string;
      label: string;
      poster?: string;
      caption?: string;
    }
  | {
      kind: 'model';
      name: string;
      label: string;
      poster?: string;
      caption?: string;
    }
  | {
      kind: 'map';
      name: string;
      label: string;
      caption?: string;
    }
  | {
      kind: 'sybil-world';
    }
  | {
      kind: 'sybil-tiers';
    }
  | {
      kind: 'sybil-live';
      liveUrl: string;
    };

export interface CaseSection {
  id: string;
  tocLabel: string;
  heading: string;
  paragraphs: string[];
  blocks: CaseBlock[];
}

export interface CaseStudy {
  slug: string;
  sidebarName: string;
  subtitle: string;
  meta: { label: string; value: string }[];
  liveUrl?: { href: string; label: string };
  cover: CaseCover;
  overviewParagraphs: string[];
  challenge: {
    paragraphs: string[];
    callouts: { title: string; body: string }[];
  };
  sections: CaseSection[];
  outcome: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  k2o: {
    slug: 'k2o',
    sidebarName: 'K2O Songkran',
    subtitle:
      'An underwater neon campaign identity for K2O Songkran Music Festival under S2O Festival—spanning key visuals, artist posters, BTS Plan B OOH motion, wearable merch, 3D logo craft, and an interactive festival map.',
    meta: [
      { label: 'Client', value: 'S2O Festival' },
      { label: 'Event & Scale', value: '14 April 2026 · S2O Land, Bangkok' },
      { label: 'Role', value: 'Key Visual, OOH Motion, Merch & Map' },
    ],
    cover: {
      kind: 'photo',
      image: '01-k2o-planb-poster',
      alt: 'K2O Songkran Music Festival panoramic BTS Asok Plan B digital OOH takeover',
      bg: '#051026',
      position: 'center center',
    },
    overviewParagraphs: [
      "Developed under S2O Festival for Songkran's flagship water music celebration, K2O fuses high-energy K-pop and T-pop performances with an electric underwater visual direction. Every touchpoint—from citywide transit screens to printed fabric wristbands—speaks the same high-contrast language of deep Atlantic blue, neon red glass, and refracted cyan light.",
    ],
    challenge: {
      paragraphs: [
        'Music festivals demand an identity system elastic enough to hold completely different artists, ultra-wide transit screens, physical apparel, and dense venue wayfinding without losing recognition in a crowd.',
        'The core design challenge was balancing dramatic underwater mood with instant legibility—whether someone is glancing up at a moving BTS Asok LED wall for three seconds or navigating S2O Land in the middle of a water fight.',
      ],
      callouts: [
        {
          title: '01 · High-contrast underwater palette',
          body: 'Anchored the campaign in Deep Atlantic Blue (#051026) punctuated by Neon Red (#FF0033) and Neon Cyan (#00F2FF) so typography and logos pop across dark venues and bright outdoor screens.',
        },
        {
          title: '02 · End-to-end festival ecosystem',
          body: 'Extended a single visual system seamlessly across 2D lineup posters, 3D Blender glass renders, multi-panel OOH animation, apparel graphics, and layered spatial wayfinding.',
        },
      ],
    },
    sections: [
      {
        id: 'identity',
        tocLabel: 'Identity & lineup',
        heading: 'Visual identity & artist posters',
        paragraphs: [
          'The key visual submerges a glowing red glass K2O emblem above a Bangkok skyline beneath rippling water caustics. From that anchor piece, the system scales across six headliner posters—adapting lighting tint and framing to each act while preserving consistent grid rhythm and festival branding.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 3,
            items: [
              { image: '01-k2o-kv', alt: 'K2O Songkran Music Festival main underwater key visual', label: 'Key Visual' },
              { image: '01-k2o-logo', alt: 'K2O monochrome primary emblem mark', label: 'Primary Mark' },
              { image: '01-k2o-logo-water', alt: 'K2O red neon glass emblem submerged underwater', label: 'Neon Glass Render' },
            ],
            fit: 'contain',
            caption: 'Main key visual paired with the flat vector mark and refractive underwater glass treatment.',
          },
          {
            kind: 'palette',
            caption: 'Six-color underwater festival system anchored by Neon Red and Deep Atlantic Blue.',
          },
          {
            kind: 'grid',
            cols: 3,
            items: [
              { image: '01-k2o-poster-bus', alt: 'K2O artist poster for BUS', label: 'BUS' },
              { image: '01-k2o-poster-daou', alt: 'K2O artist poster for DAOU with special guest Offroad', label: 'DAOU ft. Offroad' },
              { image: '01-k2o-poster-fiftyfifty', alt: 'K2O artist poster for FIFTY FIFTY', label: 'FIFTY FIFTY' },
              { image: '01-k2o-poster-kissoflife', alt: 'K2O artist poster for KISS OF LIFE', label: 'KISS OF LIFE' },
              { image: '01-k2o-poster-lngshot', alt: 'K2O artist poster for LNGSHOT', label: 'LNGSHOT' },
              { image: '01-k2o-poster-riize', alt: 'K2O artist poster for RIIZE', label: 'RIIZE' },
            ],
            aspect: '4 / 5',
            caption: 'Artist announcement poster series sharing consistent water-refraction framing and typography.',
          },
        ],
      },
      {
        id: 'ooh-motion',
        tocLabel: 'Plan B OOH motion',
        heading: 'Plan B digital OOH takeover',
        paragraphs: [
          'For Bangkok transit screens across BTS Asok, the static campaign was choreographed into a synchronized panoramic motion loop—sweeping across five connected panels to showcase the glowing K2O mark, artist spotlights, festival dates, and scannable ticket QR calls to action.',
        ],
        blocks: [
          {
            kind: 'video',
            name: '01-k2o-planb',
            label: 'K2O Songkran Music Festival — Plan B OOH Screen Animation',
            poster: '01-k2o-planb-poster',
            caption: 'Multi-screen Plan B Media transit animation engineered for rapid commuter legibility.',
          },
        ],
      },
      {
        id: 'merch-3d',
        tocLabel: 'Merch & 3D logo',
        heading: 'Merchandise & interactive 3D emblem',
        paragraphs: [
          'Off the screen, the identity translated into a wearable K2O + S2O capsule—including oversized festival tees ("Water!", tie-dye "Wet Me!", and "Free Water" editions) alongside color-coded woven wristbands for Artist, Owner’s Box, Sponsor, Vendor, Influencer, and Re-entry tiers.',
          'The hero K2O logo was also modeled and shaded in Blender as refractive red neon glass, exported here as an interactive real-time WebGL viewer with procedural water reflection.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 3,
            items: [
              { image: '01-k2o-merch-tee', alt: 'Light blue K2O festival T-shirt front and back lineup', label: 'K2O Lineup Tee' },
              { image: '01-k2o-merch-tiedye', alt: 'Tie-dye S2O Wet Me T-shirt', label: 'S2O Tie-Dye Tee' },
              { image: '01-k2o-merch-black', alt: 'Black S2O Free Water T-shirts front and back', label: 'Free Water Tee' },
            ],
            fit: 'contain',
            caption: 'Apparel series designed for both K2O and sister S2O festival collections.',
          },
          {
            kind: 'grid',
            cols: 2,
            items: [
              { image: '01-k2o-merch-wristband', alt: 'Single K2O woven fabric festival wristband', label: 'General Admission Band' },
              { image: '01-k2o-merch-wristbands', alt: 'Color-coded wristbands for Artist, Sponsor, Owner Box, Vendor, Influencer', label: 'All-Access Tier Set' },
            ],
            fit: 'contain',
            caption: 'Color-coded fabric wristband architecture for fast gate verification across attendee tiers.',
          },
          {
            kind: 'model',
            name: '01-k2o-logo',
            label: 'K2O 3D neon glass logo, interactive viewer',
            poster: '01-k2o-logo-water',
            caption: 'Interactive 3D Blender emblem — drag to orbit, zoom, or expand full screen.',
          },
        ],
      },
      {
        id: 'festival-map',
        tocLabel: 'Festival map',
        heading: 'Interactive layered festival map',
        paragraphs: [
          'To help thousands of festivalgoers navigate S2O Land intuitively, I illustrated an isometric venue map organizing the Main Stage, Wet Zone, Speed Stage, Food Zone, entrances, medical stations, and emergency exits into distinct visual layers.',
          'Use the layer slider below to inspect the Illustrator build order step by step, or hover any legend category to spotlight matching pins across the grounds.',
        ],
        blocks: [
          {
            kind: 'map',
            name: '01-k2o-map',
            label: 'K2O interactive festival map: stages, wet zone, entrances, food zone, and facilities',
            caption: 'Interactive layered map built directly from production Illustrator artwork.',
          },
        ],
      },
    ],
    outcome:
      'Delivered a complete, production-ready festival visual system spanning key artwork, six artist posters, panoramic BTS OOH motion, wearable merch and tiered wristbands, an interactive 3D emblem, and a full isometric venue map.',
  },

  'startup-standup': {
    slug: 'startup-standup',
    sidebarName: 'Startup Standup',
    subtitle:
      'A high-energy event identity and cross-channel promotional campaign for Startup Standup Comedy—fusing startup investment talks with stand-up comedy through bold display type, electric cyan, and motion graphics.',
    meta: [
      { label: 'Client', value: 'Enter to Start' },
      { label: 'Deliverables', value: 'Key Visual, OOH, Print & Intro Motion' },
      { label: 'Role', value: 'Brand Identity, Signage & Motion' },
    ],
    cover: {
      kind: 'photo',
      image: '02-standup-billboard',
      alt: 'Startup Standup Comedy roadside billboard campaign mockup',
      bg: '#003C58',
      position: 'center 35%',
    },
    overviewParagraphs: [
      'Startup Standup Comedy brought founders, investors, and comedians onto the same stage to unpack startup life with punchlines instead of pitch decks. Created for Enter to Start, the identity balances playful late-night comedy club attitude with crisp editorial structure across print, outdoor billboards, social promos, and stage motion.',
    ],
    challenge: {
      paragraphs: [
        'Business and investment events usually default to sterile navy grids and stock photography, while comedy flyers often become chaotic and hard to read.',
        'The challenge was inventing a typographic voice that immediately signaled both worlds—stacking condensed bold headlines with a hand-lettered script accent so the event stood out on city billboards and venue roll-ups alike.',
      ],
      callouts: [
        {
          title: '01 · Pitch meets punchline',
          body: 'Paired towering condensed "START UP / STAND UP" display typography with a loose electric-cyan script "Comedy" overlay and expressive mascot icons.',
        },
        {
          title: '02 · Modular venue adaptability',
          body: 'Engineered one scalable layout system that re-composed cleanly from vertical speaker posters and roll-up banners to horizontal roadside billboards and 16:9 stage screens.',
        },
      ],
    },
    sections: [
      {
        id: 'identity',
        tocLabel: 'Identity & key visual',
        heading: 'Key visual, logo & color system',
        paragraphs: [
          'At the heart of the campaign sits a stacked wordmark where the shared "UP" links Startup and Standup in Vivid Yellow (#FCD700). Layered over Deep Ocean (#003C58) and Electric Cyan (#06C5F2), the palette delivers electric stage energy while keeping speaker names, dates, and ticket info razor sharp.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 2,
            items: [
              { image: '02-standup-kv', alt: 'Startup Standup Comedy primary key visual featuring speaker with microphone', label: 'Primary Key Visual' },
              { image: '02-standup-logo', alt: 'Startup Standup Comedy official logo lockup on dark background', label: 'Event Logo Lockup' },
            ],
            fit: 'contain',
            caption: 'Primary campaign key visual alongside the official stacked logo guideline.',
          },
          {
            kind: 'palette',
            caption: 'High-visibility four-color event palette built for both print banners and bright LED projection.',
          },
        ],
      },
      {
        id: 'rollout',
        tocLabel: 'OOH & print rollout',
        heading: 'Billboards, banners & speaker posters',
        paragraphs: [
          'The visual system rolled out across every physical attendee touchpoint: roadside billboards for citywide awareness, standing X-banners at venue entry, wall-mounted speaker highlight posters, and framed lineup prints.',
        ],
        blocks: [
          {
            kind: 'figure',
            image: '02-standup-wall-posters',
            alt: 'Three Startup Standup Comedy speaker posters mounted on a brick wall',
            caption: 'Brick-wall poster series spotlighting individual founders and comedians on the lineup.',
          },
          {
            kind: 'grid',
            cols: 2,
            items: [
              { image: '02-standup-banners', alt: 'Two standing roll-up banners featuring Startup Standup Comedy artwork', label: 'Venue Roll-Up Banners' },
              { image: '02-standup-poster-mockup', alt: 'Framed full speaker lineup poster mockup', label: 'Full Lineup Poster' },
            ],
            fit: 'contain',
            caption: 'On-site signage and framed event print collaterals.',
          },
        ],
      },
      {
        id: 'motion',
        tocLabel: 'Stage intro motion',
        heading: 'Event intro motion graphic',
        paragraphs: [
          'To open the show on stage and promote ticket drops on social feeds, the static typography and brand icons were animated in After Effects into a punchy 5-second bumper—timed to hit with rhythmic kinetic pops before the first speaker walks out.',
        ],
        blocks: [
          {
            kind: 'video',
            name: '02-standup-motion',
            label: 'Startup Standup Comedy 5-second intro motion graphic',
            poster: '02-standup-motion-poster',
            caption: '1280×720 looping stage & social intro animation built in After Effects.',
          },
        ],
      },
    ],
    outcome:
      'Delivered a cohesive, high-energy event brand spanning logo guidelines, key visual, billboard and venue roll-ups, speaker poster series, and stage intro motion—giving Enter to Start a distinctive non-corporate event identity.',
  },

  'thumbnails-posters': {
    slug: 'thumbnails-posters',
    sidebarName: 'Thumbnails & Posters',
    subtitle:
      'High-converting YouTube thumbnails and vertical entertainment posters created in collaboration with MollageBKK—including original social content for Netflix Thailand and MasterChef The Professionals Thailand.',
    meta: [
      { label: 'Client', value: 'MollageBKK / Netflix Thailand' },
      { label: 'Formats', value: '16:9 YouTube & 9:16 Vertical Posters' },
      { label: 'Role', value: 'Concept, Photo Compositing & Type' },
    ],
    cover: {
      kind: 'framed',
      image: '03-thumbs-netflix-snow',
      alt: 'Netflix Thailand snow challenge Sapporo trip YouTube thumbnail',
      bg: 'radial-gradient(circle at 50% 35%, #2b1316 0%, #141312 76%)',
      maxWidth: 820,
    },
    overviewParagraphs: [
      'In streaming and entertainment feeds, a thumbnail has less than a second to communicate premise, cast chemistry, and emotional stakes. Working alongside MollageBKK, I crafted photo-composited thumbnails and show posters for Netflix Thailand originals, variety episodes, and culinary competitions.',
    ],
    challenge: {
      paragraphs: [
        'Raw studio stills rarely share matching lighting, camera angles, or energy—especially when assembling eight or more cast members inside a single frame.',
        'Each piece required seamless multi-subject retouching, unified rim-lighting and atmospheric effects (snow, frost, studio gels), and custom Thai display lettering engineered to stay punchy even at 160px mobile thumbnail width.',
      ],
      callouts: [
        {
          title: '01 · 1-second feed readability',
          body: 'Structured focal hierarchy around expressive close-ups, high-contrast color separation, and bold Thai headline lockups that survive heavy feed compression.',
        },
        {
          title: '02 · Seamless multi-cast compositing',
          body: 'Matched skin tones, directional lighting, snow particles, and depth-of-field across disparate talent cutouts to build cohesive key art.',
        },
      ],
    },
    sections: [
      {
        id: 'posters',
        tocLabel: 'Vertical posters',
        heading: 'Vertical key posters (9:16)',
        paragraphs: [
          'For social promos, vertical stories, and show announcements, each poster builds a playful narrative scene around the cast—from frozen ice-cube word games and playful jail-bar challenges to commanding judge compositions for MasterChef The Professionals Thailand.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 3,
            items: [
              { image: '03-thumbs-poster-ice', alt: 'Thai word-game vertical poster with cast among ice cubes', label: 'Ice Word-Game Poster' },
              { image: '03-thumbs-poster-jail', alt: 'Cast behind prison bars vertical variety show poster', label: '1-Minute Jargon Challenge' },
              { image: '03-thumbs-masterchef', alt: 'MasterChef The Professionals Thailand vertical key poster with four judges', label: 'MasterChef Thailand' },
            ],
            aspect: '9 / 16',
            caption: 'Vertical 1080×1920 entertainment posters combining custom compositing and stylized Thai typography.',
          },
        ],
      },
      {
        id: 'netflix',
        tocLabel: 'Netflix thumbnails',
        heading: 'Netflix Thailand YouTube thumbnails (16:9)',
        paragraphs: [
          'Across recurring Netflix Thailand formats—including Playback, What’s ศัพท์, Backstage specials, and challenge episodes—each thumbnail balances recognizable channel energy with bespoke thematic props, expressive talent framing, and punchy Thai hooks.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 2,
            items: [
              { image: '03-thumbs-netflix-snow', alt: 'Netflix Thailand snow challenge Sapporo trip thumbnail', label: 'Snow Challenge · Sapporo' },
              { image: '03-thumbs-netflix-codex', alt: 'Netflix Thailand six technologies helpful or harmful thumbnail', label: 'Tech Codex Breakdown' },
              { image: '03-thumbs-netflix-whats', alt: 'Netflix Thailand What is Sap episode 17 thumbnail', label: "What's ศัพท์ · Ep.17" },
              { image: '03-thumbs-netflix-playback', alt: 'Netflix Thailand Playback reaction show thumbnail', label: 'Netflix Playback' },
              { image: '03-thumbs-netflix-backstage', alt: 'Netflix Thailand behind-the-scenes backstage thumbnail', label: 'Backstage Special' },
              { image: '03-thumbs-netflix-yaya', alt: 'Netflix Thailand Playback episode featuring Yaya', label: 'Playback ft. Yaya' },
            ],
            aspect: '16 / 9',
            caption: 'Selected 1920×1080 Netflix Thailand thumbnails crafted in collaboration with MollageBKK.',
          },
        ],
      },
    ],
    outcome:
      'Delivered a library of scroll-stopping 16:9 thumbnails and 9:16 key posters for MollageBKK and Netflix Thailand—combining rapid turnaround production with studio-grade compositing and Thai display typography.',
  },

  'visual-content': {
    slug: 'visual-content',
    sidebarName: 'Visual Content',
    subtitle:
      'An editorial social media visual series for Enter to Start (plus campaign work for Binance TH)—using bold mixed-media collage and sharp Thai typography to turn finance, AI, and crypto into scroll-stopping stories.',
    meta: [
      { label: 'Client', value: 'Enter to Start / Binance TH' },
      { label: 'Format', value: 'Editorial Social & IG Carousels' },
      { label: 'Role', value: 'Art Direction, Collage & Final Art' },
    ],
    cover: {
      kind: 'trio',
      images: ['04-content-chatgpt', '04-content-buyback', '04-content-call-center'],
      alts: [
        'ChatGPT vs Google Translate editorial collage',
        'Crypto buyback and token burn flaming Bitcoin editorial',
        'Call-center scam psychology red hooded figure editorial',
      ],
      bg: 'radial-gradient(circle at 50% 35%, #2a241f 0%, #141312 75%)',
      aspect: '1 / 1',
    },
    overviewParagraphs: [
      'Finance, cryptocurrency, and macro-tech news can feel intimidating when presented as dry charts or walls of text. For Enter to Start, I designed an ongoing series of editorial social visuals that borrow the tactile grit of print magazines and surreal photo collage to hook everyday readers in the first glance.',
    ],
    challenge: {
      paragraphs: [
        'Each topic—from Ethereum Layer 2 architecture and token buyback burns to home-loan payoff strategies and call-center scam psychology—required a fresh visual metaphor produced on tight social newsroom timelines.',
        'The challenge was maintaining a recognizable editorial personality across wildly different subject matters while keeping Thai headlines clean, scannable, and balanced inside square and vertical Instagram frames.',
      ],
      callouts: [
        {
          title: '01 · Visual metaphor over stock clichés',
          body: 'Translated abstract mechanics into single unmistakable images—a half-flaming Bitcoin for token burns, tumbling orange dice for probability, or torn newsprint for breaking trader stories.',
        },
        {
          title: '02 · Magazine-grade social typography',
          body: 'Treated every Instagram square like a miniature editorial cover with deliberate contrast, focal framing, and disciplined headline hierarchy.',
        },
      ],
    },
    sections: [
      {
        id: 'ig-editorial',
        tocLabel: 'Instagram editorials',
        heading: 'Featured Instagram editorial stories',
        paragraphs: [
          'Long-form story carousels open with high-concept editorial covers designed to feel distinct inside a crowded Instagram feed—combining newspaper collage textures, tactile lighting, and bold color contrasts.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 2,
            items: [
              { image: '04-content-post-tree-of-alpha', alt: 'Instagram post: newspaper collage about crypto trader Tree of Alpha', label: 'Tree of Alpha · Trader Profile' },
              { image: '04-content-post-luck', alt: 'Instagram post: orange dice on green, The Mechanism of Luck', label: 'The Mechanism of Luck' },
            ],
            fit: 'contain',
            caption: 'Instagram editorial cover posts crafted for high save and share rates.',
          },
        ],
      },
      {
        id: 'topics',
        tocLabel: 'Editorial archive',
        heading: 'Crypto, AI & personal finance archive',
        paragraphs: [
          'Across nine distinct topics—from Korean Webtoon soft power and ChatGPT vs. Google Translate to dynamic NFTs, mortgage tactics, first-jobber credit cards, and a Binance TH World Cup game promo—each piece adapts its color mood and collage style to match the narrative tone of the article.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 3,
            items: [
              { image: '04-content-webtoon', alt: 'Social post about investing in Webtoon as Korean soft power', label: 'Webtoon Soft Power' },
              { image: '04-content-chatgpt', alt: 'Social post comparing ChatGPT and Google Translate', label: 'ChatGPT vs Translate' },
              { image: '04-content-mortgage', alt: 'Social post: three techniques to pay off a home loan faster', label: 'Home Loan Tactics' },
              { image: '04-content-dnft', alt: 'Social post explaining dynamic NFTs', label: 'Dynamic NFTs' },
              { image: '04-content-buyback', alt: 'Social post explaining crypto buyback and token burn', label: 'Buyback & Token Burn' },
              { image: '04-content-layer2', alt: 'Social post on how Layer 2 will change Ethereum', label: 'Ethereum Layer 2' },
              { image: '04-content-call-center', alt: 'Social post on call-center scam psychology', label: 'Scam Psychology' },
              { image: '04-content-credit-card', alt: 'Social post: credit cards for first jobbers', label: 'First-Jobber Credit' },
              { image: '04-content-binance-worldcup', alt: 'Binance TH Strike and Earn FIFA World Cup game post', label: 'Binance TH · World Cup' },
            ],
            aspect: '1 / 1',
            caption: 'Square editorial poster library — click any artwork to inspect full-resolution detail.',
          },
        ],
      },
    ],
    outcome:
      'Built an unmistakable collage-driven visual identity for Enter to Start’s social publishing—making complex crypto, tech, and personal finance stories visually magnetic and easy to share.',
  },

  infographic: {
    slug: 'infographic',
    sidebarName: 'Infographic',
    subtitle:
      'Seven illustrated 4:5 editorial infographics for Enter to Start—transforming multi-year Bitcoin timelines, Ethereum upgrades, EV market sales, and business lessons into structured, scannable visual guides.',
    meta: [
      { label: 'Client', value: 'Enter to Start' },
      { label: 'Collection', value: '7 Editorial Infographics (4:5)' },
      { label: 'Role', value: 'Information Design & Illustration' },
    ],
    cover: {
      kind: 'trio',
      images: ['05-info-ev-sales', '05-info-bitcoin-timeline', '05-info-ethereum'],
      alts: [
        'Thailand EV prices and sales comparison infographic',
        'Bitcoin price timeline 2020 to 2023 infographic',
        'Five stages of the Ethereum roadmap infographic',
      ],
      bg: 'radial-gradient(circle at 50% 35%, #182a2e 0%, #111314 76%)',
    },
    overviewParagraphs: [
      'Great infographics don’t just decorate numbers—they edit complexity down to a clear visual path. Designed for Enter to Start’s digital channels, this seven-piece collection distills market comparisons, blockchain roadmaps, and practical career/investing lessons into save-worthy 4:5 posters.',
    ],
    challenge: {
      paragraphs: [
        'Each graphic packed significant research—multi-year price swings, five-phase protocol upgrades, or nine structured takeaways—into a single vertical frame meant to be read comfortably on a phone screen.',
        'The challenge was establishing clear typographic pacing, custom vector illustrations, and numbered visual anchors so readers never felt overwhelmed by data density.',
      ],
      callouts: [
        {
          title: '01 · Scannable visual pathways',
          body: 'Used winding timelines, comparative charts, and numbered modular grids so readers can grasp the big picture in 3 seconds and zoom in for details.',
        },
        {
          title: '02 · Custom icons & storytelling art',
          body: 'Illustrated bespoke vehicle silhouettes, Pixar references, skill badges, and roadmap metaphors in Illustrator to give every topic its own visual identity.',
        },
      ],
    },
    sections: [
      {
        id: 'crypto-roadmaps',
        tocLabel: 'Crypto & timelines',
        heading: 'Crypto timelines & protocol roadmaps',
        paragraphs: [
          'Blockchain history and technical roadmaps can quickly lose casual readers. These pieces turn Bitcoin’s 2020–2023 cycle, Ethereum’s five-stage upgrade path (The Merge through The Splurge), and five must-watch crypto documentaries into cohesive illustrated journeys.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 3,
            items: [
              { image: '05-info-bitcoin-timeline', alt: 'Timeline of major Bitcoin price events from 2020 to 2023', label: 'Bitcoin Timeline (2020–2023)' },
              { image: '05-info-ethereum', alt: 'Five stages of the Ethereum roadmap infographic', label: 'Ethereum 5-Stage Roadmap' },
              { image: '05-info-documentaries', alt: 'Five crypto documentaries worth watching infographic', label: '5 Crypto Documentaries' },
            ],
            aspect: '4 / 5',
            caption: 'High-resolution 4:5 crypto education guides — click any card to view full size.',
          },
        ],
      },
      {
        id: 'business-guides',
        tocLabel: 'Business & EV guides',
        heading: 'EV market data, business & career guides',
        paragraphs: [
          'Beyond Web3, the system extended into broader consumer and business storytelling—comparing electric vehicle pricing and market share in Thailand, breaking down nine creative principles from Pixar, mapping nine in-demand hard and soft skills, and outlining a beginner’s guide to investing.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 2,
            items: [
              { image: '05-info-ev-sales', alt: 'Infographic comparing electric car prices and sales in Thailand', label: 'Thailand EV Prices & Sales' },
              { image: '05-info-pixar', alt: 'Infographic: nine business lessons from Pixar', label: '9 Business Lessons from Pixar' },
              { image: '05-info-skills', alt: 'Infographic: nine hard and soft skills companies look for', label: '9 Hard & Soft Skills' },
              { image: '05-info-investing', alt: 'Infographic: a beginner guide to investing', label: "Beginner's Guide to Investing" },
            ],
            aspect: '4 / 5',
            caption: 'Data visualization and editorial listicle posters formatted for high mobile readability.',
          },
        ],
      },
    ],
    outcome:
      'Delivered seven illustrated 4:5 infographics combining clean information architecture, custom vector iconography, and cohesive typographic hierarchy—turning complex research into bookmarkable social content.',
  },

  '16-personalities': {
    slug: '16-personalities',
    sidebarName: '16 Personalities',
    subtitle:
      'An illustrated editorial print book visualizing all 16 MBTI personality types—pairing 16 original characters, custom environmental spreads, and a four-family color architecture.',
    meta: [
      { label: 'Category', value: 'Editorial Book & Illustration' },
      { label: 'Scope', value: 'Cover, 16 Characters & 16 Spreads' },
      { label: 'Role', value: 'Book Layout, Character Design & Print' },
    ],
    cover: {
      kind: 'framed',
      image: '06-16p-all-spreads',
      alt: 'All sixteen 16 Personalities illustrated book spreads grouped into four color families',
      bg: '#181715',
      maxWidth: 960,
    },
    overviewParagraphs: [
      '16 Personalities Book Design reimagines the Myers–Briggs Type Indicator (MBTI) as a tactile, collectible illustrated book. Rather than presenting personality traits as dry textbook profiles, every single type receives an original character, a tailored thematic environment, and a dedicated double-page spread.',
    ],
    challenge: {
      paragraphs: [
        'Illustrating 16 unique personalities risks turning a book into 16 disconnected posters if proportions, line weight, and typographic grids drift apart.',
        'The challenge was building a disciplined editorial grid and character design language that gave each MBTI archetype unmistakable charm while uniting the entire book under four instantly recognizable color families.',
      ],
      callouts: [
        {
          title: '01 · Four-family color architecture',
          body: 'Color-coded the publication into Analysts (Orchid Purple), Diplomats (Meadow Green), Sentinels (Lagoon Blue), and Explorers (Sunshine Yellow) for instant navigation.',
        },
        {
          title: '02 · Character-first double-page grid',
          body: 'Anchored each spread with an environmental illustration on the left flowing seamlessly into Thai trait profiles, strengths, and career tags on the right.',
        },
      ],
    },
    sections: [
      {
        id: 'cover-cast',
        tocLabel: 'Cover & characters',
        heading: 'Book cover, 16-character cast & color system',
        paragraphs: [
          'The book cover introduces the playful spirit immediately with vibrant, rounded multi-color display typography. Inside, all 16 original characters share unified geometric proportions and expressive silhouettes—allowing readers to spot their own type at a glance.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 2,
            items: [
              { image: '06-16p-cover', alt: 'Stack of printed 16 Personalities books with colorful rounded cover type', label: 'Printed Book Cover' },
              { image: '06-16p-characters', alt: 'Complete lineup of all 16 original MBTI characters', label: 'Complete 16-Character Cast' },
            ],
            fit: 'contain',
            caption: 'Physical cover edition paired with the full 16-character illustrated cast.',
          },
          {
            kind: 'palette',
            caption: 'Four signature MBTI group colors guiding chapter tabs, character accents, and spread lighting.',
          },
        ],
      },
      {
        id: 'spreads',
        tocLabel: 'Editorial spreads',
        heading: 'Color-coded double-page spreads',
        paragraphs: [
          'Each personality group carries its own atmospheric setting—scientific labs and debate stages for Purple Analysts, enchanted forests and castles for Green Diplomats, crisp structured offices and winter scenes for Blue Sentinels, and sunlit deserts and stages for Yellow Explorers.',
        ],
        blocks: [
          {
            kind: 'grid',
            cols: 2,
            items: [
              { image: '06-16p-spread-purple', alt: 'Purple book spread for INTP personality with lab and DNA illustration', label: 'Analysts · INTP (Purple)' },
              { image: '06-16p-spread-green', alt: 'Green book spread for INFJ wizard character', label: 'Diplomats · INFJ (Green)' },
              { image: '06-16p-spread-blue', alt: 'Blue book spread with winter scene environment', label: 'Sentinels · Winter Scene (Blue)' },
              { image: '06-16p-spread-yellow', alt: 'Yellow book spread featuring desert adventurer character', label: 'Explorers · Adventurer (Yellow)' },
            ],
            fit: 'contain',
            caption: 'Representative spreads across all four MBTI personality groups.',
          },
          {
            kind: 'figure',
            image: '06-16p-all-spreads',
            alt: 'Complete matrix of all sixteen illustrated book spreads grouped by color family',
            caption: 'Complete 16-spread editorial overview showing visual consistency across every chapter.',
          },
        ],
      },
    ],
    outcome:
      'Completed print-ready editorial layouts, cover design, 16 original illustrated characters, and 16 custom environmental spreads—turning personality psychology into an inviting visual book experience.',
  },

  'sybil-husky': {
    slug: 'sybil-husky',
    sidebarName: 'Sybil Husky',
    subtitle:
      'A Web3 NFT collectible brand and airdrop farming platform built around Arctic folklore—spanning vector branding, tiered husky companions, dual Day/Night worlds, and a shipped Next.js website.',
    meta: [
      { label: 'Client', value: 'SybilHusky Collective' },
      { label: 'Stack & Delivery', value: 'Figma → Next.js 16 + React' },
      { label: 'Role', value: 'Visual Identity, Character Design & UI' },
    ],
    liveUrl: {
      href: 'https://sybil-husky.vercel.app',
      label: 'Visit live site',
    },
    cover: {
      kind: 'logo',
      logoFile: 'media/07-sybil-logo-mark.webp',
      alt: 'Sybil Husky brand mark and wordmark',
      bg: 'linear-gradient(180deg, #bbdefb 0%, #ffffff 100%)',
    },
    overviewParagraphs: [
      'In the wintry landscapes of the crypto world, SybilHusky reimagines cryptocurrency airdrop farming through loyal husky companions. Collectors mint tiered SybilHusky NFTs—unlocking higher rune multipliers and greater shares of farming rewards as their pack levels up.',
    ],
    challenge: {
      paragraphs: [
        'DeFi and airdrop farming tools often intimidate newcomers with dense spreadsheets and generic dark dashboards. Meanwhile, many NFT projects rely on cluttered mascots that break down at small UI sizes.',
        'The design challenge was twofold: craft an iconic, minimal husky emblem that scales cleanly from favicon to hero banner, and wrap real utility—Mint Tier selection, 38-month Airdrop Estimator math, and FAQ onboarding—inside an inviting storybook world.',
      ],
      callouts: [
        {
          title: '01 · Approachable Web3 utility',
          body: 'Replaced abstract APY tables with interactive tier cards, rune counts, and a draggable duration slider showing exact reward projections.',
        },
        {
          title: '02 · Seamless Day & Night worlds',
          body: 'Designed matching sunrise and aurora landscapes so switching Light/Dark theme transforms the entire Arctic scene, not just text colors.',
        },
      ],
    },
    sections: [
      {
        id: 'world',
        tocLabel: 'World & environment',
        heading: 'Dual Day & Night Arctic world',
        paragraphs: [
          'Set at the foot of an Arctic fortress surrounded by frosted pines, the key environment was illustrated in two full-resolution (1920×1080) lighting states that power the Theme Toggle on the live site—transitioning between crisp golden alpine sunrise and glowing northern-lights twilight.',
        ],
        blocks: [{ kind: 'sybil-world' }],
      },
      {
        id: 'tiers',
        tocLabel: 'Character & NFT tiers',
        heading: 'Character & NFT tiers',
        paragraphs: [
          'Built a progression ladder of four core SybilHusky ranks—from Siberian Apprentice (100 Runes / $100) up to Siberian Supreme (1,820 Runes / $1,400 with +30% bonus)—plus two Baby Husky community editions. Each tier escalates magical headgear, crystal staff detail, and rarity aura while keeping silhouettes readable on mobile.',
        ],
        blocks: [{ kind: 'sybil-tiers' }],
      },
      {
        id: 'landing',
        tocLabel: 'Live landing page',
        heading: 'Live landing page experience',
        paragraphs: [
          'Beyond static Figma frames, the entire design was engineered and deployed as a production Next.js 16 + React application at sybil-husky.vercel.app—featuring a live Day/Night switch, Mint NFT tier checkout cards, an interactive 38-month Airdrop Estimator slider, and accordion FAQs. Explore the live website directly below or toggle to the full overview mockup.',
        ],
        blocks: [{ kind: 'sybil-live', liveUrl: 'https://sybil-husky.vercel.app' }],
      },
    ],
    outcome:
      'Delivered a complete end-to-end visual package and production Next.js 16 front-end—preserving crisp vector logo geometry, dual 1920×1080 environmental artwork, six character rarity tiers, and interactive calculator/mint controls ready for Web3 launch.',
  },
};
