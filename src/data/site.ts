// Profile content. Source of truth: Drive portfolio frames (port-beta-6).
// Notion Career Hub is supporting material only. Do not add claims that are
// not in those sources; mark unknowns with [TODO].

export const site = {
  url: 'https://example.vercel.app', // [TODO] set once the Vercel domain is decided
  title: 'Tutphong "Pun" Mungkalakul — Graphic & Visual Designer',
  description:
    'Portfolio of Tutphong "Pun" Mungkalakul, a Thai Graphic & Visual Designer growing into UI and web design. Key visuals, campaigns, editorial and character work.',
  lang: 'en',
};

export const profile = {
  fullName: 'Tutphong Mungkalakul',
  fullNameTh: 'ทัตพงศ์ มงคลกุล',
  nickname: 'Pun',
  nicknameTh: 'ปั้น',
  role: 'Graphic & Visual Designer',
  direction: 'growing into UI and web',
  availability: 'Open to work · Visual, Graphic & UI/Web roles',
  heroSummary:
    'I design key visuals, brand identities, infographics, motion graphics, and web interfaces — crafting campaigns for S2O & K2O, MollageBKK / Netflix Thailand, and Binance TH.',
  // About text verbatim from Frame 1
  about: [
    "My name is Tutphong Mungkalakul, but you can call me Pun.",
    "I graduated with a degree in Fine and Applied Arts (Graphic Design) from Sripatum University. I'm passionate about visual communication especially in areas like infographics, motion graphics, and UX/UI design. I'm always eager to learn new tools and improve my skills to create better, smarter design solutions.",
  ],
  aboutTh: [
    'สวัสดีครับ ผมชื่อ ทัตพงศ์ มงคลกุล เรียกสั้น ๆ ว่า ปั้น นะครับ',
    'สำเร็จการศึกษาจากคณะศิลปกรรมศาสตร์ สาขาการออกแบบกราฟิก มหาวิทยาลัยศรีปทุม มีความหลงใหลในงานสื่อสารด้วยภาพ (Visual Communication) โดยเฉพาะสาย Infographic, Motion Graphics และการออกแบบ UX/UI พร้อมเรียนรู้เครื่องมือใหม่ ๆ และพัฒนาทักษะอยู่เสมอ เพื่อสร้างสรรค์งานออกแบบที่ฉลาดและตอบโจทย์ยิ่งขึ้น',
  ],
};

export const contact = {
  email: 'tutphong.mun@gmail.com',
  linkedin: { label: 'linkedin.com/in/tutphong', href: 'https://www.linkedin.com/in/tutphong/' },
  behance: { label: 'behance.net/tutphong', href: 'https://www.behance.net/tutphong' },
  github: { label: 'github.com/tutphongmun-wq', href: 'https://github.com/tutphongmun-wq' },
  // Phone is intentionally not published. Pun must approve before adding it.
};

export interface Job {
  period: string;
  title: string;
  company: string;
  summary: string;
  summaryTh: string;
}

// Frame 2. Enter to Start summary lightly rewritten from first person to
// match the others (same facts, nothing added) — approved by Pun.
export const experience: Job[] = [
  {
    period: 'Dec 2025 – Sep 2026',
    title: 'Graphic Designer',
    company: 'S2O Festival',
    summary:
      'Developed key visual concepts, festival branding, and merchandise designs for S2O and K2O Songkran Music Festival campaigns, creating visual assets across digital, print, and event applications.',
    summaryTh:
      'ออกแบบและพัฒนาคอนเซปต์ Key Visual ระบบภาพลักษณ์เทศกาล รวมถึงสินค้าที่ระลึก (Merchandise) สำหรับแคมเปญ S2O และ K2O Songkran Music Festival ครอบคลุมทั้งสื่อดิจิทัล สิ่งพิมพ์ และชิ้นงานหน้างานจริง',
  },
  {
    period: 'Jan – Apr 2025',
    title: 'Freelance Graphic Designer',
    company: 'MollageBKK',
    summary:
      'Created visual artwork and thumbnails for MollageBKK, a creative media house behind film, ad, and branded content projects with international clients like Netflix Thailand.',
    summaryTh:
      'สร้างสรรค์ภาพ Artwork และ Thumbnail ให้กับ MollageBKK โปรดักชันเฮาส์เบื้องหลังโปรเจกต์ภาพยนตร์ โฆษณา และ Branded Content สำหรับลูกค้าระดับสากลอย่าง Netflix Thailand',
  },
  {
    period: 'Mar – Aug 2024',
    title: 'Outsource Graphic Designer',
    company: 'Binance TH',
    summary:
      "Created campaign visuals and social media assets for Thailand's leading cryptocurrency exchange, collaborating with marketing teams to support promotional campaigns.",
    summaryTh:
      'ออกแบบภาพแคมเปญการตลาดและชิ้นงานโซเชียลมีเดียให้กับกระดานเทรดคริปโตชั้นนำของไทย ร่วมงานใกล้ชิดกับทีมการตลาดเพื่อสนับสนุนแคมเปญโปรโมตต่าง ๆ',
  },
  {
    period: '2022 – 2024',
    title: 'Visual & Graphic Designer',
    company: 'Enter to Start Co., Ltd.',
    summary:
      'Created artwork for social media posts, events, and video projects, including illustrations, infographics, posters, banners, and motion graphics.',
    summaryTh:
      'สร้างสรรค์ชิ้นงานกราฟิกสำหรับโซเชียลมีเดีย อีเวนต์ และโปรเจกต์วิดีโอ ทั้งภาพประกอบ Infographic โปสเตอร์ แบนเนอร์ และ Motion Graphics',
  },
];

export const education = [
  {
    period: '2020 – 2022',
    school: 'Sripatum University',
    program: 'Fine and Applied Arts (Graphic Design)',
  },
  {
    period: '2015 – 2020',
    school: 'Viboon Business Administration Technological College Ramindra (VBAC)',
    program: 'Computer Graphic',
  },
];

// Skills: from the Resume (Notion, supporting source). Tools: Frame 2.
export const skills = [
  'Branding',
  'Key Visual Design',
  'Visual Identity',
  'Campaign Design',
  'Motion Graphics',
  'Social Media Design',
  'UI Design',
];

export type ToolId = 'ps' | 'ai' | 'ae' | 'pr' | 'lr' | 'id' | 'blender' | 'figma' | 'procreate';

export const tools: Record<ToolId, { abbr: string; name: string }> = {
  ps: { abbr: 'Ps', name: 'Photoshop' },
  ai: { abbr: 'Ai', name: 'Illustrator' },
  ae: { abbr: 'Ae', name: 'After Effects' },
  pr: { abbr: 'Pr', name: 'Premiere Pro' },
  lr: { abbr: 'Lr', name: 'Lightroom' },
  id: { abbr: 'Id', name: 'InDesign' },
  blender: { abbr: 'Bl', name: 'Blender' },
  figma: { abbr: 'Fg', name: 'Figma' },
  procreate: { abbr: 'Pc', name: 'Procreate' },
};

export const profileTools: ToolId[] = ['ps', 'ai', 'ae', 'pr', 'lr', 'blender', 'figma'];
