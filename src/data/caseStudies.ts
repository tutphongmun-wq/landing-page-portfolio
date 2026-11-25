// Editorial Full Case Study definitions for all 7 portfolio projects (Bilingual EN + TH body copy).
// Every project shares the same Worachet-inspired full-screen reader shell
// (256px sticky TOC sidebar, flush-top 486px full-width cover, 720px text column,
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
      captionTh?: string;
      aspect?: string;
    }
  | {
      kind: 'grid';
      cols: 2 | 3;
      items: { image: string; alt: string; label?: string }[];
      caption?: string;
      captionTh?: string;
      fit?: 'cover' | 'contain';
      aspect?: string;
    }
  | {
      kind: 'palette';
      caption?: string;
      captionTh?: string;
    }
  | {
      kind: 'video';
      name: string;
      label: string;
      poster?: string;
      caption?: string;
      captionTh?: string;
    }
  | {
      kind: 'model';
      name: string;
      label: string;
      poster?: string;
      caption?: string;
      captionTh?: string;
    }
  | {
      kind: 'map';
      name: string;
      label: string;
      caption?: string;
      captionTh?: string;
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
    }
  | {
      kind: 'book-flipbook';
      caption?: string;
      captionTh?: string;
    };

export interface CaseSection {
  id: string;
  tocLabel: string;
  heading: string;
  paragraphs: string[];
  paragraphsTh: string[];
  blocks: CaseBlock[];
}

export interface CaseStudy {
  slug: string;
  sidebarName: string;
  subtitle: string;
  subtitleTh: string;
  meta: { label: string; value: string }[];
  liveUrl?: { href: string; label: string };
  cover: CaseCover;
  overviewParagraphs: string[];
  overviewParagraphsTh: string[];
  challenge: {
    paragraphs: string[];
    paragraphsTh: string[];
    callouts: { title: string; titleTh: string; body: string; bodyTh: string }[];
  };
  sections: CaseSection[];
  outcome: string;
  outcomeTh: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  k2o: {
    slug: 'k2o',
    sidebarName: 'K2O Songkran',
    subtitle:
      'An underwater neon campaign identity for K2O Songkran Music Festival under S2O Festival—spanning key visuals, artist posters, BTS Plan B OOH motion, wearable merch, 3D logo craft, and an interactive festival map.',
    subtitleTh:
      'แคมเปญภาพลักษณ์เทศกาลดนตรี K2O Songkran ภายใต้เครือ S2O Festival ที่ผสานโลกนีออนใต้น้ำ ตั้งแต่ Key Visual โปสเตอร์ศิลปิน จอ Plan B BTS สินค้าที่ระลึก โลโก้ 3D จนถึงแผนที่เทศกาลแบบ Interactive',
    meta: [
      { label: 'Category', value: 'Festival & Campaign Identity' },
      { label: 'Scope', value: 'Key Visual, OOH, Merch & Map' },
      { label: 'Year', value: '2026' },
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
    overviewParagraphsTh: [
      'โปรเจกต์ภายใต้เครือ S2O Festival สำหรับเทศกาลดนตรีสงกรานต์ระดับเรือธง K2O ผสมผสานพลังของ K-Pop และ T-Pop เข้ากับทิศทางศิลป์โลกใต้น้ำ ตั้งแต่จอรถไฟฟ้า BTS อโศก ไปจนถึงสายรัดข้อมือผ้าหน้างาน ทุกชิ้นสื่อสารด้วยโทนน้ำเงินลึก Deep Atlantic ตัดกับหลอดไฟแก้วสีแดงนีออนและแสงหักเหสีฟ้าไซแอน',
    ],
    challenge: {
      paragraphs: [
        'Music festivals demand an identity system elastic enough to hold completely different artists, ultra-wide transit screens, physical apparel, and dense venue wayfinding without losing recognition in a crowd.',
        'The core design challenge was balancing dramatic underwater mood with instant legibility—whether someone is glancing up at a moving BTS Asok LED wall for three seconds or navigating S2O Land in the middle of a water fight.',
      ],
      paragraphsTh: [
        'งานเทศกาลดนตรีต้องใช้ระบบอัตลักษณ์ที่ยืดหยุ่นพอจะรองรับศิลปินหลากหลายสไตล์ จอภาพขนาดกว้างพิเศษบนสถานีรถไฟฟ้า สินค้าที่ระลึก ไปจนถึงแผนที่นำทางในพื้นที่จริงโดยไม่สูญเสียเอกลักษณ์',
        'ความท้าทายหลักคือการรักษาบรรยากาศใต้น้ำที่ลุ่มลึกควบคู่กับการอ่านที่คมชัดในเสี้ยววินาที ไม่ว่าผู้ชมจะมองเห็นป้าย BTS แค่ 3 วินาที หรือกำลังหาเวทีท่ามกลางสายน้ำใน S2O Land',
      ],
      callouts: [
        {
          title: '01 · High-contrast underwater palette',
          titleTh: '01 · ชุดสีใต้น้ำคอนทราสต์สูง',
          body: 'Anchored the campaign in Deep Atlantic Blue (#051026) punctuated by Neon Red (#FF0033) and Neon Cyan (#00F2FF) so typography and logos pop across dark venues and bright outdoor screens.',
          bodyTh:
            'วางแกนหลักด้วย Deep Atlantic Blue (#051026) ตัดด้วย Neon Red (#FF0033) และ Neon Cyan (#00F2FF) เพื่อให้โลโก้และตัวอักษรเด่นชัดทั้งในงานกลางคืนและจอกลางแจ้ง',
        },
        {
          title: '02 · End-to-end festival ecosystem',
          titleTh: '02 · ระบบงานครบวงจรทั้ง 2D, 3D และหน้างาน',
          body: 'Extended a single visual system seamlessly across 2D lineup posters, 3D Blender glass renders, multi-panel OOH animation, apparel graphics, and layered spatial wayfinding.',
          bodyTh:
            'เชื่อมโยงอัตลักษณ์เดียวเข้ากับโปสเตอร์ไลน์อัพ 2D โมเดลแก้วเรืองแสง 3D ใน Blender จอ Motion 5 แผงบน BTS เสื้อผ้า Merchandise และแผนที่เทศกาลแบบแยกเลเยอร์',
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
        paragraphsTh: [
          'Key Visual หลักวางสัญลักษณ์แก้ว K2O สีแดงเรืองแสงลอยอยู่เหนือเส้นขอบฟ้ากรุงเทพฯ ใต้ผืนน้ำที่มีคลื่นแสงหักเห ก่อนขยายโครงสร้างนี้ไปยังโปสเตอร์ศิลปินทั้ง 6 วง โดยปรับโทนแสงให้เข้ากับคาแรคเตอร์ศิลปินแต่ยังคงจังหวะกริดเดียวกันทั้งหมด',
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
            captionTh: 'Key Visual หลักคู่กับโลโก้ Flat Vector และเวอร์ชันเรนเดอร์แก้วนีนอนใต้น้ำ',
          },
          {
            kind: 'palette',
            caption: 'Six-color underwater festival system anchored by Neon Red and Deep Atlantic Blue.',
            captionTh: 'ระบบ 6 สีประจำแคมเปญที่จับคู่ Neon Red กับ Deep Atlantic Blue',
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
            captionTh: 'เซ็ตโปสเตอร์เปิดตัวศิลปิน 6 วงที่ใช้กรอบแสงใต้น้ำและโครงสร้าง Typography ร่วมกัน',
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
        paragraphsTh: [
          'สำหรับสื่อจอบนสถานี BTS อโศก งานภาพนิ่งถูกออกแบบจังหวะการเคลื่อนไหวใหม่ให้วิ่งต่อเนื่องข้าม 5 หน้าจอแบบพาโนรามา โชว์โลโก้ K2O สปอตไลต์ศิลปิน วันจัดงาน และ QR Code จองบัตรในลูปเดียว',
        ],
        blocks: [
          {
            kind: 'video',
            name: '01-k2o-planb',
            label: 'K2O Songkran Music Festival — Plan B OOH Screen Animation',
            poster: '01-k2o-planb-poster',
            caption: 'Multi-screen Plan B Media transit animation engineered for rapid commuter legibility.',
            captionTh: 'แอนิเมชันจอ Plan B Media ที่ออกแบบให้ผู้โดยสารมองเห็นข้อมูลสำคัญได้ทันทีระหว่างเดินผ่าน',
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
        paragraphsTh: [
          'นอกจอ อัตลักษณ์ของงานยังถูกพัฒนาต่อเป็นคอลเลกชัน Merchandise ทั้งเสื้อยืดเทศกาล ("Water!", มัดย้อม "Wet Me!", และ "Free Water") รวมถึงสายรัดข้อมือผ้าแยกสีตามสิทธิ์สำหรับ Artist, Owner’s Box, Sponsor, Vendor, Influencer และ Re-entry',
          'ส่วนโลโก้ K2O ถูกปั้นและจัดแสงใน Blender ให้เป็นหลอดแก้วนีนอนโปร่งแสง แล้วนำมาแสดงผลเป็นโมเดล 3D WebGL บนหน้าเว็บให้หมุนดูได้แบบเรียลไทม์พร้อมเงาสะท้อนผิวน้ำ',
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
            captionTh: 'คอลเลกชันเสื้อยืดสำหรับทั้งงาน K2O และ S2O Festival',
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
            captionTh: 'ระบบสายรัดข้อมือทอลายแยกสี ช่วยให้ทีมหน้าประตูตรวจสอบสิทธิ์เข้าโซนต่าง ๆ ได้รวดเร็ว',
          },
          {
            kind: 'model',
            name: '01-k2o-logo',
            label: 'K2O 3D neon glass logo, interactive viewer',
            poster: '01-k2o-logo-water',
            caption: 'Interactive 3D Blender emblem — drag to orbit, zoom, or expand full screen.',
            captionTh: 'โมเดลโลโก้ 3D จาก Blender — ลากเพื่อหมุนดู ซูม หรือเปิดเต็มหน้าจอได้',
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
        paragraphsTh: [
          'เพื่อให้ผู้ร่วมงานนับหมื่นคนเดินเที่ยวใน S2O Land ได้ง่ายที่สุด จึงวาดแผนที่แบบ Isometric แยกโครงสร้างแต่ละส่วนเป็นเลเยอร์ชัดเจน ทั้ง Main Stage, Wet Zone, Speed Stage, Food Zone จุดเข้างาน ปฐมพยาบาล และทางออกฉุกเฉิน',
          'ลองเลื่อนแถบ Layer ด้านล่างเพื่อดูลำดับการวาดจากไฟล์ Illustrator ทีละชั้น หรือชี้ที่หมวดหมู่ทางขวาเพื่อไฮไลต์ตำแหน่งจุดสำคัญบนแผนที่ได้ทันที',
        ],
        blocks: [
          {
            kind: 'map',
            name: '01-k2o-map',
            label: 'K2O interactive festival map: stages, wet zone, entrances, food zone, and facilities',
            caption: 'Interactive layered map built directly from production Illustrator artwork.',
            captionTh: 'แผนที่ Interactive แยกเลเยอร์ที่ดึงมาจากไฟล์ Production Illustrator จริง',
          },
        ],
      },
    ],
    outcome:
      'Delivered a complete, production-ready festival visual system spanning key artwork, six artist posters, panoramic BTS OOH motion, wearable merch and tiered wristbands, an interactive 3D emblem, and a full isometric venue map.',
    outcomeTh:
      'ส่งมอบระบบภาพลักษณ์เทศกาลครบวงจรพร้อมใช้งานจริง ตั้งแต่ Key Visual โปสเตอร์ศิลปิน 6 วง สื่อเคลื่อนไหว BTS OOH ชุดเสื้อผ้าและสายรัดข้อมือ โมเดลโลโก้ 3D จนถึงแผนที่ Isometric ภายในงาน',
  },

  'startup-standup': {
    slug: 'startup-standup',
    sidebarName: 'Startup Standup',
    subtitle:
      'A high-energy event identity and cross-channel promotional campaign for Startup Standup Comedy—fusing startup investment talks with stand-up comedy through bold display type, electric cyan, and motion graphics.',
    subtitleTh:
      'อัตลักษณ์อีเวนต์และแคมเปญโปรโมตงาน Startup Standup Comedy ที่จับเรื่องการลงทุนมาเล่าคู่กับเดี่ยวไมโครโฟน ผ่านตัวอักษรขนาดใหญ่ สีฟ้า Electric Cyan และ Motion Graphics สุดจัดจ้าน',
    meta: [
      { label: 'Category', value: 'Event Identity & Motion' },
      { label: 'Scope', value: 'Key Visual, OOH, Print & Intro Motion' },
      { label: 'Year', value: '2023' },
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
    overviewParagraphsTh: [
      'Startup Standup Comedy คืองานทอล์กโชว์ที่พาผู้ก่อตั้งสตาร์ทอัพ นักลงทุน และนักแสดงตลกมาขึ้นเวทีเดียวกัน เพื่อเล่าเบื้องหลังวงการธุรกิจด้วยมุกตลกแทนสไลด์นำเสนอ งานออกแบบสำหรับ Enter to Start จึงผสมกลิ่นอายคอมเมดี้คลับเข้ากับเลย์เอาต์ที่อ่านชัด ทั้งสื่อสิ่งพิมพ์ บิลบอร์ด โปรโมตออนไลน์ และภาพเปิดเวที',
    ],
    challenge: {
      paragraphs: [
        'Business and investment events usually default to sterile navy grids and stock photography, while comedy flyers often become chaotic and hard to read.',
        'The challenge was inventing a typographic voice that immediately signaled both worlds—stacking condensed bold headlines with a hand-lettered script accent so the event stood out on city billboards and venue roll-ups alike.',
      ],
      paragraphsTh: [
        'งานสัมมนาธุรกิจส่วนใหญ่มักติดภาพจำโทนน้ำเงินทึมดูเคร่งขรึม ในขณะที่โปสเตอร์สายตลกมักรกตาและจัดลำดับข้อมูลยาก',
        'ความท้าทายจึงอยู่ที่การออกแบบคู่ตัวอักษรที่สื่อสารทั้งสองโลกได้ในพริบตา จับฟอนต์หัวข้อหนาแนวตรงมาซ้อนทับด้วยลายมือเขียน (Script) สีฟ้าสว่าง เพื่อให้โดดเด่นทั้งบนป้ายบิลบอร์ดกลางแจ้งและแบนเนอร์หน้างาน',
      ],
      callouts: [
        {
          title: '01 · Pitch meets punchline',
          titleTh: '01 · ผสานคำคมธุรกิจเข้ากับมุกเดี่ยวไมโครโฟน',
          body: 'Paired towering condensed "START UP / STAND UP" display typography with a loose electric-cyan script "Comedy" overlay and expressive mascot icons.',
          bodyTh:
            'จัดวางฟอนต์หนาสูงคำว่า "START UP / STAND UP" โดยเชื่อมด้วยคำว่า "UP" สีเหลืองสด แล้วคาดทับด้วยลายมือเขียน "Comedy" สีฟ้า Electric Cyan พร้อมไอคอนการ์ตูนเสริมอารมณ์',
        },
        {
          title: '02 · Modular venue adaptability',
          titleTh: '02 · ปรับสัดส่วนได้ครบทุกสื่อทั้ง Online และ On-site',
          body: 'Engineered one scalable layout system that re-composed cleanly from vertical speaker posters and roll-up banners to horizontal roadside billboards and 16:9 stage screens.',
          bodyTh:
            'ออกแบบโครงสร้างกริดเดียวที่ยืดหดได้อย่างลงตัว ตั้งแต่โปสเตอร์วิทยากรแนวตั้ง Roll-Up ทางเข้า ไปจนถึงป้ายบิลบอร์ดแนวนอนและจอ LED 16:9 บนเวที',
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
        paragraphsTh: [
          'หัวใจของแคมเปญคือ Wordmark แบบซ้อนสองบรรทัดที่เชื่อมคำว่า Startup และ Standup เข้าด้วยกันด้วยตัว "UP" สีเหลือง Vivid Yellow (#FCD700) ตัดบนพื้น Deep Ocean (#003C58) และ Electric Cyan (#06C5F2) ให้ความรู้สึกสนุกมีพลังพร้อมความคมชัดของวัน เวลา และรายชื่อวิทยากร',
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
            captionTh: 'Key Visual หลักของงานคู่กับ Logo Lockup และ Guideline อย่างเป็นทางการ',
          },
          {
            kind: 'palette',
            caption: 'High-visibility four-color event palette built for both print banners and bright LED projection.',
            captionTh: 'ชุด 4 สีหลักที่คมชัดทั้งงานพิมพ์ป้ายไวนิลและการฉายบนจอ LED',
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
        paragraphsTh: [
          'ระบบภาพทั้งหมดถูกขยายไปใช้ในทุกจุดสัมผัสหน้างาน ตั้งแต่ป้ายบิลบอร์ดริมทางเพื่อสร้างการรับรู้ สแตนดี้ Roll-Up จุดลงทะเบียน โปสเตอร์แนะนำวิทยากรบนผนัง จนถึงกรอบภาพไลน์อัพทั้งหมด',
        ],
        blocks: [
          {
            kind: 'figure',
            image: '02-standup-wall-posters',
            alt: 'Three Startup Standup Comedy speaker posters mounted on a brick wall',
            caption: 'Brick-wall poster series spotlighting individual founders and comedians on the lineup.',
            captionTh: 'ซีรีส์โปสเตอร์แนะนำผู้ก่อตั้งและนักแสดงเดี่ยวไมโครโฟนแต่ละคน',
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
            captionTh: 'ป้าย Roll-Up ทางเข้างานและโปสเตอร์รวมรายชื่อ Speaker ทั้งหมด',
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
        paragraphsTh: [
          'เพื่อใช้เปิดตัวบนเวทีและโปรโมตรอบขายบัตรบนโซเชียลมีเดีย ชุดตัวอักษรและไอคอนทั้งหมดถูกนำไปทำแอนิเมชันใน After Effects เป็น Intro ความยาว 5 วินาที จังหวะกระชับพร้อมเข้าโชว์',
        ],
        blocks: [
          {
            kind: 'video',
            name: '02-standup-motion',
            label: 'Startup Standup Comedy 5-second intro motion graphic',
            poster: '02-standup-motion-poster',
            caption: '1280×720 looping stage & social intro animation built in After Effects.',
            captionTh: 'แอนิเมชันเปิดเวทีและสื่อโซเชียลขนาด 1280×720 จาก After Effects',
          },
        ],
      },
    ],
    outcome:
      'Delivered a cohesive, high-energy event brand spanning logo guidelines, key visual, billboard and venue roll-ups, speaker poster series, and stage intro motion—giving Enter to Start a distinctive non-corporate event identity.',
    outcomeTh:
      'ส่งมอบแบรนด์อีเวนต์ที่สนุกและแตกต่างจากงานธุรกิจทั่วไปอย่างชัดเจน ครอบคลุมตั้งแต่ Logo Guideline, Key Visual, บิลบอร์ด, Roll-Up, โปสเตอร์วิทยากร จนถึงวิดีโอ Intro บนเวที',
  },

  'thumbnails-posters': {
    slug: 'thumbnails-posters',
    sidebarName: 'Thumbnails & Posters',
    subtitle:
      'High-converting YouTube thumbnails and vertical entertainment posters created in collaboration with MollageBKK—including original social content for Netflix Thailand and MasterChef The Professionals Thailand.',
    subtitleTh:
      'รวมงานออกแบบ YouTube Thumbnail และโปสเตอร์รายการบันเทิงแนวตั้งร่วมกับ MollageBKK รวมถึงคอนเทนต์ออริจินัลของ Netflix Thailand และ MasterChef The Professionals Thailand',
    meta: [
      { label: 'Category', value: 'Entertainment & Key Art' },
      { label: 'Scope', value: '16:9 Thumbnails & 9:16 Posters' },
      { label: 'Year', value: '2025' },
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
    overviewParagraphsTh: [
      'บนฟีดสตรีมมิงและ YouTube ภาพปกคลิปมีเวลาไม่ถึง 1 วินาทีในการเล่าคอนเซปต์ เคมีนักแสดง และความน่าติดตาม ในการร่วมงานกับ MollageBKK ผมรับหน้าที่จัดองค์ประกอบ ตัดต่อภาพ และออกแบบ Typography ให้กับคอนเทนต์ของ Netflix Thailand รายการวาไรตี้ และรายการแข่งขันทำอาหารระดับประเทศ',
    ],
    challenge: {
      paragraphs: [
        'Raw studio stills rarely share matching lighting, camera angles, or energy—especially when assembling eight or more cast members inside a single frame.',
        'Each piece required seamless multi-subject retouching, unified rim-lighting and atmospheric effects (snow, frost, studio gels), and custom Thai display lettering engineered to stay punchy even at 160px mobile thumbnail width.',
      ],
      paragraphsTh: [
        'ภาพนิ่งที่ได้จากกองถ่ายมักมีทิศทางแสง มุมกล้อง และอารมณ์ไม่เท่ากัน โดยเฉพาะตอนที่ต้องรวบนักแสดง 8 คนขึ้นไปมาไว้ในเฟรมเดียวกันอย่างเป็นธรรมชาติ',
        'ทุกชิ้นจึงต้องผ่านการไดคัท ปรับสีผิว ไล่แสง Rim Light เพิ่มบรรยากาศอย่างหิมะหรือน้ำแข็ง พร้อมจัดวางฟอนต์หัวข้อภาษาไทยที่ยังคงอ่านขาดแม้โดนย่อเหลือขนาดจิ๋วบนมือถือ',
      ],
      callouts: [
        {
          title: '01 · 1-second feed readability',
          titleTh: '01 · ดึงสายตาและอ่านจบใน 1 วินาที',
          body: 'Structured focal hierarchy around expressive close-ups, high-contrast color separation, and bold Thai headline lockups that survive heavy feed compression.',
          bodyTh:
            'จัดจุดโฟกัสจากสีหน้านักแสดงคู่กับการแยกชั้นสีพื้นหลังและพาดหัวไทยหนาแน่น ชัดเจนแม้ดูผ่านจอโทรศัพท์ขนาดเล็ก',
        },
        {
          title: '02 · Seamless multi-cast compositing',
          titleTh: '02 · รีทัชและจัดแสงรวมทีมนักแสดงให้เป็นเนื้อเดียว',
          body: 'Matched skin tones, directional lighting, snow particles, and depth-of-field across disparate talent cutouts to build cohesive key art.',
          bodyTh:
            'เกลี่ยโทนผิว คุมทิศทางแสงเงา เอฟเฟกต์เกล็ดหิมะ และความชัดลึกให้ตัวละครจากคนละช็อตดูเหมือนถ่ายในฉากเดียวกัน',
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
        paragraphsTh: [
          'สำหรับโพสต์โปรโมตและสตอรีแนวตั้ง โปสเตอร์แต่ละใบถูกปั้นซีนเล่าเรื่องให้เข้ากับโจทย์รายการ ทั้งแก๊งเล่นเกมทายคำกลางก้อนน้ำแข็ง ภารกิจหลังลูกกรง ไปจนถึงองค์ประกอบทรงพลังของคณะกรรมการ MasterChef The Professionals Thailand',
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
            captionTh: 'โปสเตอร์บันเทิงแนวตั้ง 1080×1920 ที่ผสานงาน Photo Compositing เข้ากับ Typography ภาษาไทย',
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
        paragraphsTh: [
          'ในหลากหลายรายการประจำของ Netflix Thailand ทั้ง Playback, What’s ศัพท์, เทปพิเศษเบื้องหลัง และเทปชาเลนจ์ ภาพปกแต่ละตอนต้องรักษาตัวตนของช่องควบคู่กับพร็อพและคำโปรยที่ชวนกดคลิก',
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
            captionTh: 'ตัวอย่างปกคลิป Netflix Thailand ความละเอียด 1920×1080 ที่ร่วมผลิตกับ MollageBKK',
          },
        ],
      },
    ],
    outcome:
      'Delivered a library of scroll-stopping 16:9 thumbnails and 9:16 key posters for MollageBKK and Netflix Thailand—combining rapid turnaround production with studio-grade compositing and Thai display typography.',
    outcomeTh:
      'ส่งมอบชุด Thumbnail 16:9 และโปสเตอร์แนวตั้ง 9:16 สำหรับ MollageBKK และ Netflix Thailand ที่รักษามาตรฐานงานตัดต่อระดับสตูดิโอควบคู่ความเร็วของการผลิตคอนเทนต์ออนไลน์',
  },

  'visual-content': {
    slug: 'visual-content',
    sidebarName: 'Visual Content',
    subtitle:
      'An editorial social media visual series for Enter to Start (plus campaign work for Binance TH)—using bold mixed-media collage and sharp Thai typography to turn finance, AI, and crypto into scroll-stopping stories.',
    subtitleTh:
      'ชุดภาพ Editorial Social Media สำหรับ Enter to Start (และงานแคมเปญ Binance TH) ที่ใช้เทคนิคคอลลาจและตัวอักษรไทยทรงพลัง เปลี่ยนเรื่องการเงิน AI และคริปโตให้เป็นเรื่องน่าติดตามตั้งแต่แรกเห็น',
    meta: [
      { label: 'Category', value: 'Editorial Social Design' },
      { label: 'Scope', value: 'Collage Key Art & IG Carousels' },
      { label: 'Year', value: '2022–2024' },
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
    overviewParagraphsTh: [
      'ข่าวการเงิน คริปโต และเทคโนโลยีมักดูเข้าถึงยากเมื่อมาในรูปกราฟแห้ง ๆ หรือข้อความยาวเหยียด สำหรับเพจ Enter to Start ผมออกแบบภาพชุดสไตล์นิตยสารและการตัดแปะคอลลาจ (Mixed-Media Collage) เพื่อดึงความสนใจผู้อ่านทั่วไปตั้งแต่จังหวะแรกที่เลื่อนฟีด',
    ],
    challenge: {
      paragraphs: [
        'Each topic—from Ethereum Layer 2 architecture and token buyback burns to home-loan payoff strategies and call-center scam psychology—required a fresh visual metaphor produced on tight social newsroom timelines.',
        'The challenge was maintaining a recognizable editorial personality across wildly different subject matters while keeping Thai headlines clean, scannable, and balanced inside square and vertical Instagram frames.',
      ],
      paragraphsTh: [
        'แต่ละหัวข้อมีโจทย์ต่างกันสุดขั้ว ตั้งแต่สถาปัตยกรรม Layer 2, กลไกการเผาเหรียญ, เทคนิคผ่อนบ้าน จนถึงจิตวิทยาแก๊งคอลเซ็นเตอร์ ซึ่งต้องคิดภาพเปรียบเทียบใหม่แทบทุกวันภายใต้เวลาที่จำกัดของสายข่าวโซเชียล',
        'ความท้าทายคือการคงบุคลิกภาพสไตล์ Editorial ให้เพจมีเอกลักษณ์เดียวชัดเจน พร้อมวางพาดหัวภาษาไทยให้อ่านคล่องในกรอบสี่เหลี่ยมจัตุรัสและแนวตั้งของ Instagram',
      ],
      callouts: [
        {
          title: '01 · Visual metaphor over stock clichés',
          titleTh: '01 · ใช้ภาพเปรียบเทียบแทนภาพสต็อกเดิม ๆ',
          body: 'Translated abstract mechanics into single unmistakable images—a half-flaming Bitcoin for token burns, tumbling orange dice for probability, or torn newsprint for breaking trader stories.',
          bodyTh:
            'แปลงเรื่องนามธรรมให้เห็นภาพชัดในช็อตเดียว เช่น เหรียญบิตคอยน์ติดไฟครึ่งซีกแทนการ Burn เหรียญ ลูกเต๋าสีส้มแทนความน่าจะเป็น หรือกระดาษหนังสือพิมพ์ฉีกขาดสำหรับข่าวเทรดเดอร์',
        },
        {
          title: '02 · Magazine-grade social typography',
          titleTh: '02 · จัดวางพาดหัวแบบปกนิตยสาร',
          body: 'Treated every Instagram square like a miniature editorial cover with deliberate contrast, focal framing, and disciplined headline hierarchy.',
          bodyTh:
            'ปฏิบัติต่อโพสต์โซเชียลทุกชิ้นเหมือนการออกแบบปกนิตยสารขนาดย่อม จัดลำดับน้ำหนักพาดหัวหลัก-รองและจังหวะช่องไฟอย่างแม่นยำ',
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
        paragraphsTh: [
          'คอนเทนต์เจาะลึกบน Instagram จะเปิดหัวด้วยปกคอลลาจที่มีพื้นผิวกระดาษ แสงเงาจัดจ้าน และคู่สีเฉพาะตัว เพื่อให้ผู้อ่านหยุดนิ้วและกดอ่านต่อหรือบันทึกเก็บไว้',
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
            captionTh: 'ภาพปกโพสต์ Instagram แนว Editorial ที่ออกแบบมาให้โดดเด่นน่าแชร์บนฟีด',
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
        paragraphsTh: [
          'คลังผลงานทั้ง 9 หัวข้อ ตั้งแต่ซอฟต์พาวเวอร์ Webtoon, เทียบ ChatGPT กับ Google Translate, Dynamic NFTs, ทริคปิดหนี้บ้าน, บัตรเครดิตเด็กจบใหม่ จนถึงกิจกรรมฟุตบอลโลกของ Binance TH แต่ละชิ้นปรับโทนสีและเทคนิคตัดแปะให้ตรงกับอารมณ์ของเรื่องนั้น ๆ',
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
            captionTh: 'คลังโปสเตอร์บทความสี่เหลี่ยมจัตุรัส — คลิกที่ภาพใดก็ได้เพื่อซูมดูรายละเอียดเต็มความละเอียด',
          },
        ],
      },
    ],
    outcome:
      'Built an unmistakable collage-driven visual identity for Enter to Start’s social publishing—making complex crypto, tech, and personal finance stories visually magnetic and easy to share.',
    outcomeTh:
      'สร้างเอกลักษณ์ภาพคอลลาจที่จดจำได้ทันทีให้กับสื่อโซเชียลของ Enter to Start ช่วยย่อยข่าวคริปโต เทคโนโลยี และการเงินส่วนบุคคลให้ชวนคลิกและชวนแชร์มากยิ่งขึ้น',
  },

  infographic: {
    slug: 'infographic',
    sidebarName: 'Infographic',
    subtitle:
      'Seven illustrated 4:5 editorial infographics for Enter to Start—transforming multi-year Bitcoin timelines, Ethereum upgrades, EV market sales, and business lessons into structured, scannable visual guides.',
    subtitleTh:
      'ชุด Infographic ขนาด 4:5 จำนวน 7 ชิ้นสำหรับ Enter to Start ที่เปลี่ยนเส้นทางราคาบิตคอยน์ แผนพัฒนา Ethereum ยอดขายรถไฟฟ้า และบทเรียนธุรกิจให้เป็นคู่มือภาพที่อ่านง่ายในพริบตา',
    meta: [
      { label: 'Category', value: 'Information Design' },
      { label: 'Scope', value: '7 Editorial Infographics (4:5)' },
      { label: 'Year', value: '2022–2024' },
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
    overviewParagraphsTh: [
      'Infographic ที่ดีไม่ใช่แค่การเอาตัวเลขมาตกแต่งสวย ๆ แต่คือการเรียบเรียงข้อมูลซับซ้อนให้กลายเป็นเส้นทางสายตาที่เดินตามได้ง่าย ชุดผลงาน 7 ชิ้นนี้สรุปข้อมูลตลาดรถ EV แผนที่บล็อกเชน และความรู้การลงทุนเป็นภาพสัดส่วน 4:5 ที่คนอ่านนิยมกดเซฟเก็บไว้',
    ],
    challenge: {
      paragraphs: [
        'Each graphic packed significant research—multi-year price swings, five-phase protocol upgrades, or nine structured takeaways—into a single vertical frame meant to be read comfortably on a phone screen.',
        'The challenge was establishing clear typographic pacing, custom vector illustrations, and numbered visual anchors so readers never felt overwhelmed by data density.',
      ],
      paragraphsTh: [
        'ข้อมูลในแต่ละชิ้นมีความหนาแน่นสูง ทั้งเหตุการณ์หลายปีซ้อน ขั้นตอนอัปเกรดทางเทคนิค หรือบทเรียน 9 ข้อ ที่ต้องบีบอัดลงในภาพแนวตั้งใบเดียวและยังอ่านบนหน้าจอมือถือได้สบายตา',
        'หัวใจของการแก้โจทย์คือการจัดจังหวะสายตา วาดภาพประกอบเวกเตอร์เฉพาะเรื่อง และใส่จุดนำสายตาแบบมีลำดับเลขเพื่อไม่ให้ผู้อ่านรู้สึกหนักหรือสับสน',
      ],
      callouts: [
        {
          title: '01 · Scannable visual pathways',
          titleTh: '01 · เส้นนำสายตาที่กวาดอ่านง่ายใน 3 วินาที',
          body: 'Used winding timelines, comparative charts, and numbered modular grids so readers can grasp the big picture in 3 seconds and zoom in for details.',
          bodyTh:
            'ใช้เส้นไทม์ไลน์คดเคี้ยว ตารางเปรียบเทียบ และกริดแบ่งหมวดที่มีเลขกำกับ ช่วยให้เห็นภาพรวมใน 3 วินาทีแรกแล้วค่อยซูมเจาะลึกในแต่ละจุด',
        },
        {
          title: '02 · Custom icons & storytelling art',
          titleTh: '02 · วาดภาพประกอบและไอคอนเฉพาะหัวข้อ',
          body: 'Illustrated bespoke vehicle silhouettes, Pixar references, skill badges, and roadmap metaphors in Illustrator to give every topic its own visual identity.',
          bodyTh:
            'วาดภาพเวกเตอร์เฉพาะชิ้นงานใน Illustrator ทั้งโมเดลรถ EV คาแรคเตอร์อ้างอิง Pixar ไอคอนทักษะ และภาพสัญลักษณ์บล็อกเชนเพื่อให้ทุกแผ่นมีเสน่ห์เฉพาะตัว',
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
        paragraphsTh: [
          'ประวัติศาสตร์และแผนพัฒนาเทคโนโลยีบล็อกเชนมักเข้าใจยากสำหรับผู้เริ่มต้น ภาพชุดนี้จึงแปลงเหตุการณ์ Bitcoin ช่วงปี 2020–2023 แผนอัปเกรด 5 ขั้นตอนของ Ethereum (ตั้งแต่ The Merge ถึง The Splurge) และสารคดีคริปโตน่าดู 5 เรื่อง ให้กลายเป็นการเล่าเรื่องด้วยภาพที่ตามต่อได้ไม่สะดุด',
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
            captionTh: 'คู่มือภาพให้ความรู้สายคริปโตความละเอียดสูง 4:5 — คลิกที่ภาพเพื่อขยายอ่านเต็มขนาด',
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
        paragraphsTh: [
          'นอกจากสายคริปโต ระบบการออกแบบนี้ยังถูกนำไปใช้กับเนื้อหาธุรกิจและไลฟ์สไตล์วงกว้าง ทั้งเปรียบเทียบราคาและยอดจดทะเบียนรถยนต์ไฟฟ้าในไทย 9 บทเรียนธุรกิจจาก Pixar 9 ทักษะการทำงานที่องค์กรต้องการ และคู่มือเริ่มต้นลงทุนสำหรับมือใหม่',
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
            captionTh: 'งานสรุปข้อมูลสถิติและบทความเชิงรายการที่จัดให้อ่านสบายบนหน้าจอมือถือ',
          },
        ],
      },
    ],
    outcome:
      'Delivered seven illustrated 4:5 infographics combining clean information architecture, custom vector iconography, and cohesive typographic hierarchy—turning complex research into bookmarkable social content.',
    outcomeTh:
      'ส่งมอบ Infographic ครบทั้ง 7 ชิ้นที่ผสมผสานสถาปัตยกรรมข้อมูล ภาพประกอบเวกเตอร์ และการจัดลำดับตัวอักษรอย่างลงตัว เปลี่ยนบทวิเคราะห์ซับซ้อนให้กลายเป็นคอนเทนต์ที่คนนิยมกดบันทึกเก็บไว้',
  },

  '16-personalities': {
    slug: '16-personalities',
    sidebarName: '16 Personalities',
    subtitle:
      'An illustrated editorial print book visualizing all 16 MBTI personality types—pairing 16 original characters, custom environmental spreads, and a four-family color architecture.',
    subtitleTh:
      'หนังสือภาพประกอบที่ถ่ายทอดบุคลิกภาพ MBTI ทั้ง 16 แบบ ผ่านคาแรคเตอร์ที่ออกแบบขึ้นใหม่ทั้งหมด ฉากเฉพาะตัวในหน้าคู่ และระบบแยกหมวดหมู่ด้วย 4 กลุ่มสี',
    meta: [
      { label: 'Category', value: 'Editorial Book & Illustration' },
      { label: 'Scope', value: 'Cover, 16 Characters & 16 Spreads' },
      { label: 'Year', value: '2022' },
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
    overviewParagraphsTh: [
      'โปรเจกต์ 16 Personalities Book Design ตีความทฤษฎีบุคลิกภาพ MBTI ออกมาเป็นหนังสือภาพประกอบที่จับต้องและน่าสะสม แทนที่จะเป็นตำราจิตวิทยาที่มีแต่ตัวหนังสือ ทุกบุคลิกภาพจึงถูกสร้างคาแรคเตอร์ประจำตัว ฉากสภาพแวดล้อมเฉพาะโลกของตัวเอง และจัดเลย์เอาต์ลงหน้าคู่แบบเต็มอารมณ์',
    ],
    challenge: {
      paragraphs: [
        'Illustrating 16 unique personalities risks turning a book into 16 disconnected posters if proportions, line weight, and typographic grids drift apart.',
        'The challenge was building a disciplined editorial grid and character design language that gave each MBTI archetype unmistakable charm while uniting the entire book under four instantly recognizable color families.',
      ],
      paragraphsTh: [
        'การวาดคาแรคเตอร์และฉากถึง 16 แบบมีความเสี่ยงที่จะทำให้งานดูหลุดจากกันเหมือนรวมโปสเตอร์คนละเล่ม หากสัดส่วนตัวละคร น้ำหนักเส้น หรือกริดหน้ากระดาษคลาดเคลื่อน',
        'ความท้าทายคือการวางโครงสร้างหน้าหนังสือและมาตรฐานการวาดตัวละครให้เป็นเอกภาพทั้งเล่ม ภายใต้ระบบ 4 กลุ่มสีที่พลิกปุ๊บก็รู้ทันทีว่าอยู่หมวดหมู่ไหน',
      ],
      callouts: [
        {
          title: '01 · Four-family color architecture',
          titleTh: '01 · ระบบแยกกลุ่มบุคลิกด้วย 4 ชุดสี',
          body: 'Color-coded the publication into Analysts (Orchid Purple), Diplomats (Meadow Green), Sentinels (Lagoon Blue), and Explorers (Sunshine Yellow) for instant navigation.',
          bodyTh:
            'จัดหมวดหมู่หนังสือทั้ง 4 กลุ่มด้วยรหัสสีชัดเจน ได้แก่ นักวิเคราะห์ (ม่วง Orchid), นักการทูต (เขียว Meadow), ผู้พิทักษ์ (ฟ้า Lagoon) และนักสำรวจ (เหลือง Sunshine)',
        },
        {
          title: '02 · Character-first double-page grid',
          titleTh: '02 · กริดหน้าคู่ที่เล่าเรื่องด้วยภาพนำข้อความ',
          body: 'Anchored each spread with an environmental illustration on the left flowing seamlessly into Thai trait profiles, strengths, and career tags on the right.',
          bodyTh:
            'วางภาพประกอบคาแรคเตอร์พร้อมฉากขนาดใหญ่ฝั่งซ้าย แล้วไหลต่อเนื่องเข้าสู่คอลัมน์คำอธิบายลักษณะนิสัย จุดเด่น และสายอาชีพที่เหมาะฝั่งขวาอย่างสมดุล',
        },
      ],
    },
    sections: [
      {
        id: 'interactive-book',
        tocLabel: 'Interactive book',
        heading: 'Explore the 60-page interactive book',
        paragraphs: [
          'Flip through the complete 60-page square edition directly below—from cover, preface, and personality quiz to all 16 illustrated character spreads. Click or drag any page edge, use the chapter tabs to jump between the four MBTI color families, or expand fullscreen to read the Thai copy up close.',
        ],
        paragraphsTh: [
          'ลองเปิดพลิกอ่านหนังสือฉบับเต็มทั้ง 60 หน้าขนาด 1:1 ได้จากด้านล่าง ตั้งแต่หน้าปก คำนำ สารบัญ แบบทดสอบบุคลิกภาพ ไปจนถึงหน้าคู่คาแรคเตอร์ครบทั้ง 16 แบบ สามารถคลิกหรือลากมุมหน้ากระดาษ กดข้ามหมวด 4 กลุ่มสี หรือขยายเต็มหน้าจอเพื่ออ่านรายละเอียดได้ทันที',
        ],
        blocks: [
          {
            kind: 'book-flipbook',
            caption: 'Interactive 60-page edition — click, drag a page edge, or use arrow keys (← / →) to flip.',
            captionTh: 'หนังสือแบบ Interactive ครบ 60 หน้า — คลิก ลากมุมหน้า หรือกดลูกศร ← / → เพื่อพลิกหน้า',
          },
        ],
      },
      {
        id: 'cover-cast',
        tocLabel: 'Cover & characters',
        heading: 'Book cover, 16-character cast & color system',
        paragraphs: [
          'The book cover introduces the playful spirit immediately with vibrant, rounded multi-color display typography. Inside, all 16 original characters share unified geometric proportions and expressive silhouettes—allowing readers to spot their own type at a glance.',
        ],
        paragraphsTh: [
          'ปกหนังสือเปิดด้วยตัวอักษรทรงมนหลากสีสันที่สะท้อนความขี้เล่นตั้งแต่แรกเห็น ส่วนภายในเล่ม ตัวละครทั้ง 16 ตัวถูกออกแบบบนสัดส่วนเรขาคณิตชุดเดียวกัน พร้อมพร็อพและท่าทางเฉพาะตัวที่เห็นปุ๊บก็เดาบุคลิกได้ทันที',
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
            captionTh: 'ม็อกอัพปกหนังสือฉบับพิมพ์คู่กับไลน์อัพคาแรคเตอร์ครบทั้ง 16 บุคลิก',
          },
          {
            kind: 'palette',
            caption: 'Four signature MBTI group colors guiding chapter tabs, character accents, and spread lighting.',
            captionTh: 'ชุด 4 สีประจำกลุ่ม MBTI ที่ใช้คุมทั้งแท็บคั่นบท เสื้อผ้าตัวละคร และโทนแสงในแต่ละหน้าคู่',
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
        paragraphsTh: [
          'แต่ละกลุ่มบุคลิกมีบรรยากาศฉากหลังเฉพาะตัว ทั้งห้องทดลองและเวทีโต้วาทีสำหรับกลุ่มสีม่วง ป่าเวทมนตร์และปราสาทสำหรับกลุ่มสีเขียว ห้องทำงานและฉากฤดูหนาวสำหรับกลุ่มสีฟ้า รวมถึงทะเลทรายและเวทีแสงสีสำหรับกลุ่มสีเหลือง',
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
            captionTh: 'ตัวอย่างหน้าคู่ตัวแทนจากทั้ง 4 กลุ่มบุคลิกภาพ',
          },
          {
            kind: 'figure',
            image: '06-16p-all-spreads',
            alt: 'Complete matrix of all sixteen illustrated book spreads grouped by color family',
            caption: 'Complete 16-spread editorial overview showing visual consistency across every chapter.',
            captionTh: 'ภาพรวมหน้าคู่ทั้งหมด 16 หน้าเรียงตามกลุ่มสี แสดงความต่อเนื่องของเลย์เอาต์ทั้งเล่ม',
          },
        ],
      },
    ],
    outcome:
      'Completed print-ready editorial layouts, cover design, 16 original illustrated characters, and 16 custom environmental spreads—turning personality psychology into an inviting visual book experience.',
    outcomeTh:
      'ออกแบบเลย์เอาต์พร้อมส่งพิมพ์ครบทั้งเล่ม ทั้งปกหนังสือ คาแรคเตอร์ทั้ง 16 ตัว และภาพประกอบหน้าคู่ 16 ฉาก เปลี่ยนเนื้อหาจิตวิทยาให้กลายเป็นหนังสือภาพที่อ่านสนุกสำหรับทุกคน',
  },

  'sybil-husky': {
    slug: 'sybil-husky',
    sidebarName: 'Sybil Husky',
    subtitle:
      'A Web3 NFT collectible brand and airdrop farming platform built around Arctic folklore—spanning vector branding, tiered husky companions, dual Day/Night worlds, and a shipped Next.js website.',
    subtitleTh:
      'แบรนด์ NFT และแพลตฟอร์มฟาร์ม Airdrop ในโลกแฟนตาซีขั้วโลก ครอบคลุมตั้งแต่การออกแบบโลโก้ คาแรคเตอร์ฮัสกี้ 6 ระดับ ฉาก Day/Night แบบเต็มจอ จนถึงหน้าเว็บไซต์ Next.js ที่ใช้งานได้จริง',
    meta: [
      { label: 'Category', value: 'Brand Identity & Web UI' },
      { label: 'Scope', value: 'Identity, 6 NFT Tiers & Next.js Site' },
      { label: 'Year', value: '2024' },
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
    overviewParagraphsTh: [
      'ท่ามกลางดินแดนหิมะของโลกคริปโต SybilHusky ตีความการฟาร์ม Airdrop ขึ้นมาใหม่ผ่านฝูงสุนัขฮัสกี้คู่ใจ นักสะสมสามารถ Mint NFT ประจำระดับเพื่อปลดล็อกตัวคูณ Runes และรับส่วนแบ่งรางวัล Airdrop ที่สูงขึ้นตามเลเวลของฝูง',
    ],
    challenge: {
      paragraphs: [
        'DeFi and airdrop farming tools often intimidate newcomers with dense spreadsheets and generic dark dashboards. Meanwhile, many NFT projects rely on cluttered mascots that break down at small UI sizes.',
        'The design challenge was twofold: craft an iconic, minimal husky emblem that scales cleanly from favicon to hero banner, and wrap real utility—Mint Tier selection, 38-month Airdrop Estimator math, and FAQ onboarding—inside an inviting storybook world.',
      ],
      paragraphsTh: [
        'เครื่องมือ DeFi และแพลตฟอร์ม Airdrop ส่วนใหญ่มักเต็มไปด้วยตารางตัวเลขและหน้าจอดำที่ดูเข้าถึงยากสำหรับมือใหม่ ขณะที่โปรเจกต์ NFT หลายแห่งมีมาสคอตลายเส้นเยอะจนดูไม่ออกเมื่อถูกย่อบน UI ขนาดเล็ก',
        'โจทย์การออกแบบจึงมี 2 ด้านคู่กัน คือสร้างโลโก้หัวฮัสกี้แบบมินิมอลที่คมชัดตั้งแต่ขนาด Favicon ยันป้ายแบนเนอร์ใหญ่ และห่อหุ้มฟีเจอร์จริงอย่างการเลือก Mint Tier เครื่องคำนวณ Airdrop 38 เดือน และ FAQ ไว้ในโลกนิทานที่ชวนสำรวจ',
      ],
      callouts: [
        {
          title: '01 · Approachable Web3 utility',
          titleTh: '01 · เปลี่ยนเครื่องมือ Web3 ซับซ้อนให้ใช้ง่าย',
          body: 'Replaced abstract APY tables with interactive tier cards, rune counts, and a draggable duration slider showing exact reward projections.',
          bodyTh:
            'แทนที่ตาราง APY ชวนปวดหัวด้วยการ์ดเลือก Tier ที่เห็นจำนวน Runes ชัดเจน พร้อมสไลเดอร์ลากปรับระยะเวลาเพื่อคำนวณผลตอบแทนทันที',
        },
        {
          title: '02 · Seamless Day & Night worlds',
          titleTh: '02 · โลกกลางวันและกลางคืนที่สอดประสานกับ Theme เว็บ',
          body: 'Designed matching sunrise and aurora landscapes so switching Light/Dark theme transforms the entire Arctic scene, not just text colors.',
          bodyTh:
            'วาดฉากปราสาทขั้วโลกคู่กันทั้งแสงอาทิตย์ยามเช้าและแสงเหนือยามค่ำ เมื่อกดสลับ Light/Dark Theme บนเว็บ ฉากหลังทั้งโลกจะเปลี่ยนตามอย่างกลมกลืน',
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
        paragraphsTh: [
          'ฉากหลังป้อมปราการขั้วโลกที่โอบล้อมด้วยป่าสนหิมะถูกวาดขึ้นในความละเอียดเต็ม 1920×1080 ถึง 2 เวอร์ชัน เพื่อขับเคลื่อนระบบสลับธีมบนเว็บไซต์จริง เปลี่ยนบรรยากาศได้ทันทีระหว่างแสงอาทิตย์ยามเช้าและแสงออโรรายามค่ำคืน',
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
        paragraphsTh: [
          'ออกแบบขั้นบันไดระดับตัวละครหลัก 4 แรงก์ ตั้งแต่ Siberian Apprentice (100 Runes / $100) ไต่ระดับไปจนถึง Siberian Supreme (1,820 Runes / $1,400 พร้อมโบนัส +30%) เสริมด้วยรุ่นพิเศษ Baby Husky อีก 2 แบบ โดยไล่ระดับดีเทลหมวกเวทมนตร์ คทาคริสตัล และออร่าให้ชัดแม้ดูบนมือถือ',
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
        paragraphsTh: [
          'ไม่ได้หยุดแค่ไฟล์ภาพนิ่งใน Figma แต่งานออกแบบทั้งหมดถูกพัฒนาและปล่อยออนไลน์จริงบน Next.js 16 + React ที่ sybil-husky.vercel.app พร้อมสวิตช์สลับกลางวัน/กลางคืน การ์ดเลือก Mint NFT เครื่องคำนวณ Airdrop 38 เดือนแบบเลื่อนได้ และ FAQ ครบวงจร สามารถลองเล่นหน้าเว็บจริงหรือสลับดูภาพ Mockup ด้านล่างได้เลย',
        ],
        blocks: [{ kind: 'sybil-live', liveUrl: 'https://sybil-husky.vercel.app' }],
      },
    ],
    outcome:
      'Delivered a complete end-to-end visual package and production Next.js 16 front-end—preserving crisp vector logo geometry, dual 1920×1080 environmental artwork, six character rarity tiers, and interactive calculator/mint controls ready for Web3 launch.',
    outcomeTh:
      'ส่งมอบงานครบตั้งแต่งานอัตลักษณ์ภาพจนถึงหน้าเว็บไซต์จริงบน Next.js 16 คงความคมชัดของโลโก้เวกเตอร์ ฉากหลัง 1920×1080 ทั้งสองโหมด คาแรคเตอร์ทั้ง 6 ระดับ และหน้าคำนวณ/Mint ที่พร้อมเปิดตัวโปรเจกต์ Web3 ทันที',
  },
};
