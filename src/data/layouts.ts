// Desktop slide layouts, traced from the PDF pages (port-beta-6, 1280x720).
// Every box is [x0, y0, x1, y1] in those page pixels. The site turns them
// into percentages, so a real 2x export with the same name drops straight
// into its box. scripts/make-standins.mjs crops the stand-in images from
// the same boxes, so the two can't drift apart.
//
// The first slide of a project is the intro page: text column on the left,
// media in INTRO_REGION on the right. Later slides use the whole page.

export type Box = [number, number, number, number];

export type LayoutItem =
  | { name: string; box: Box } // an image from the project's media list
  | { video: string; box: Box } // an explicit video slot placed on a slide
  | { model: string; box: Box } // an explicit 3D model slot placed on a slide
  | { map: string; box: Box } // an explicit interactive map placed on a slide
  | { palette: true; box: Box }
  | { label: string; sub?: string; box: Box }; // section heading with a rule

export interface SlideLayout {
  frame: string; // PDF page / frame id the boxes were traced from
  region?: Box; // optional custom coordinate region (defaults to INTRO_REGION on slide 0, FULL_REGION otherwise)
  items: LayoutItem[];
}

export const FRAME_W = 1280;
export const FRAME_H = 720;
/** Media area of an intro page (right of the text column). */
export const INTRO_REGION: Box = [310, 25, 1250, 695];
/** Later pages use the full page. */
export const FULL_REGION: Box = [0, 0, FRAME_W, FRAME_H];

export const layouts: Record<string, SlideLayout[]> = {
  k2o: [
    {
      frame: '4a',
      items: [
        { name: '01-k2o-kv', box: [325, 45, 668, 472] },
        { name: '01-k2o-poster-bus', box: [678, 45, 862, 277] },
        { name: '01-k2o-poster-daou', box: [869, 45, 1053, 277] },
        { name: '01-k2o-poster-fiftyfifty', box: [1060, 45, 1245, 277] },
        { name: '01-k2o-poster-kissoflife', box: [678, 284, 862, 515] },
        { name: '01-k2o-poster-lngshot', box: [869, 284, 1053, 515] },
        { name: '01-k2o-poster-riize', box: [1060, 284, 1245, 515] },
        { name: '01-k2o-logo', box: [325, 483, 493, 667] },
        { name: '01-k2o-logo-water', box: [500, 483, 668, 667] },
        { palette: true, box: [677, 526, 1246, 668] },
      ],
    },
    {
      frame: '4a-motion',
      region: [0, 0, 1280, 435],
      items: [
        { label: 'OOH Motion', sub: '(Plan B Media)', box: [50, 16, 1243, 64] },
        { video: '01-k2o-planb', box: [50, 82, 1243, 423] },
      ],
    },
    {
      frame: '4b',
      items: [
        // order = reading order on mobile (each heading before its images)
        { label: 'Merchandise', sub: '(K2O+S2O)', box: [54, 40, 783, 92] },
        { name: '01-k2o-merch-tee', box: [50, 110, 300, 645] },
        { name: '01-k2o-merch-tiedye', box: [313, 108, 563, 410] },
        { name: '01-k2o-merch-black', box: [313, 430, 563, 645] },
        { name: '01-k2o-merch-wristband', box: [575, 108, 768, 240] },
        { name: '01-k2o-merch-wristbands', box: [575, 253, 768, 645] },
        { label: '3D Logo', sub: '(Interactive)', box: [814, 40, 1243, 92] },
        { model: '01-k2o-logo', box: [810, 108, 1243, 645] },
      ],
    },
  ],
  'startup-standup': [
    {
      frame: '5',
      items: [
        { name: '02-standup-kv', box: [323, 38, 700, 508] },
        { name: '02-standup-banners', box: [712, 38, 918, 395] },
        { name: '02-standup-billboard', box: [930, 38, 1243, 395] },
        { name: '02-standup-logo', box: [323, 522, 480, 677] },
        { palette: true, box: [491, 524, 700, 675] },
        { name: '02-standup-wall-posters', box: [712, 410, 997, 675] },
        { name: '02-standup-poster-mockup', box: [1008, 410, 1243, 675] },
      ],
    },
  ],
  'thumbnails-posters': [
    {
      frame: '6',
      items: [
        { name: '03-thumbs-poster-ice', box: [325, 25, 710, 572] },
        { name: '03-thumbs-netflix-snow', box: [723, 25, 1004, 183] },
        { name: '03-thumbs-poster-jail', box: [723, 193, 1004, 695] },
        { name: '03-thumbs-masterchef', box: [1016, 25, 1230, 307] },
        { name: '03-thumbs-netflix-codex', box: [1016, 318, 1230, 435] },
        { name: '03-thumbs-netflix-whats', box: [1016, 446, 1230, 563] },
        { name: '03-thumbs-netflix-playback', box: [1016, 573, 1230, 692] },
        { name: '03-thumbs-netflix-backstage', box: [325, 587, 512, 692] },
        { name: '03-thumbs-netflix-yaya', box: [521, 587, 710, 692] },
      ],
    },
  ],
  'visual-content': [
    {
      frame: '7',
      items: [
        { name: '04-content-post-tree-of-alpha', box: [320, 36, 556, 352] },
        { name: '04-content-post-luck', box: [320, 368, 556, 684] },
        { name: '04-content-webtoon', box: [578, 36, 786, 244] },
        { name: '04-content-chatgpt', box: [797, 36, 1006, 244] },
        { name: '04-content-mortgage', box: [1017, 36, 1226, 244] },
        { name: '04-content-dnft', box: [578, 255, 786, 464] },
        { name: '04-content-buyback', box: [797, 255, 1006, 464] },
        { name: '04-content-layer2', box: [1017, 255, 1226, 464] },
        { name: '04-content-call-center', box: [578, 475, 786, 684] },
        { name: '04-content-credit-card', box: [797, 475, 1006, 684] },
        { name: '04-content-binance-worldcup', box: [1017, 475, 1226, 684] },
      ],
    },
  ],
  infographic: [
    {
      frame: '8',
      items: [
        { name: '05-info-bitcoin-timeline', box: [310, 45, 812, 675] },
        { name: '05-info-documentaries', box: [820, 50, 1066, 355] },
        { name: '05-info-ev-sales', box: [820, 365, 1066, 675] },
        { name: '05-info-ethereum', box: [1071, 48, 1236, 248] },
        { name: '05-info-investing', box: [1071, 258, 1236, 420] },
        { name: '05-info-pixar', box: [1071, 470, 1236, 675] },
        { name: '05-info-skills', box: [820, 365, 1066, 675] },
      ],
    },
  ],
  '16-personalities': [
    {
      frame: '9a',
      items: [
        { name: '06-16p-cover', box: [315, 52, 722, 412] },
        { name: '06-16p-spread-green', box: [735, 52, 1018, 295] },
        { name: '06-16p-spread-purple', box: [1023, 52, 1241, 295] },
        { name: '06-16p-characters', box: [315, 423, 722, 670] },
        { name: '06-16p-spread-blue', box: [735, 308, 948, 566] },
        { name: '06-16p-spread-yellow', box: [955, 308, 1241, 566] },
        { palette: true, box: [734, 576, 1241, 670] },
      ],
    },
    {
      frame: '9c',
      items: [{ name: '06-16p-all-spreads', box: [40, 60, 1240, 660] }],
    },
  ],
  'sybil-husky': [
    {
      frame: '10a',
      items: [
        { name: '07-sybil-logo', box: [320, 65, 832, 380] },
        { name: '07-sybil-environment', box: [846, 65, 1222, 380] },
        { name: '07-sybil-tiers', box: [320, 408, 1222, 655] },
      ],
    },
    {
      frame: '10b',
      items: [{ name: '07-sybil-landing', box: [0, 0, 1280, 720] }],
    },
  ],
};

/** Page layout for the generated "Motion & 3D" slide (interactive map / video, 3D model). */
export const motionBoxes = (hasMain: boolean, hasModel: boolean, isMap = false) => ({
  label: [54, 40, 1243, 92] as Box,
  // the map is portrait (2000 x 2240) with its panel beside it, so it takes the full height
  main: (isMap ? (hasModel ? [54, 112, 958, 688] : [50, 112, 1243, 688]) : hasModel ? [54, 120, 870, 579] : [200, 120, 1080, 615]) as Box,
  model: (isMap ? [978, 112, 1226, 688] : hasMain ? [890, 120, 1226, 579] : [380, 120, 900, 640]) as Box,
});
