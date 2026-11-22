// Rare UI Folder Component (https://www.rareui.com/components/foldercomponent)
// Original component by Swami Malode (Rare UI) — licensed under MIT + Commons Clause
// with attribution to https://rareui.com.
// Adapted for Pun Portfolio's "Selected work" section so the project cards sit inside
// the 3D glassmorphic folder, fan out on hover, lift open on click, and jump to the
// clicked project when open.
import React, { useState } from 'react';
import { motion } from 'motion/react';
import type { FanGalleryItem } from './reactdrops/fan-gallery';

const themes = {
  black: {
    backFill: '#0e0e0e',
    backInsetShadow: 'inset 0 0 6px 2px rgba(255,255,255,0.34)',
    flapFill: '#292929',
    flapFillOpacity: 0.32,
    flapStroke: '#979797',
    flapInsetColor: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0',
    cardFill: '#1d1d1d',
    cardStroke: 'rgba(255,255,255,0.22)',
  },
  white: {
    backFill: '#ffffff',
    backInsetShadow: 'inset 0 0 6px 2px rgba(178,178,178,0.25)',
    flapFill: '#f5f5f5',
    flapFillOpacity: 0.85,
    flapStroke: '#d4d4d4',
    flapInsetColor: '0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 0.15 0',
    cardFill: '#262626',
    cardStroke: '#404040',
  },
  blue: {
    backFill: '#50B1FD',
    backInsetShadow: 'inset 0 0 6px 2px rgba(255,255,255,0.35)',
    flapFill: '#3a9ae8',
    flapFillOpacity: 0.45,
    flapStroke: '#7ec8ff',
    flapInsetColor: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0',
    cardFill: '#F1F1F1',
    cardStroke: '#E0E0E0',
  },
} as const;

const sizeScales = {
  sm: 0.65,
  md: 1,
  lg: 1.35,
} as const;

const BASE_WIDTH = 321;
const BASE_HEIGHT = 270;

const FLAP_PATH =
  'M0 25C0 11.1929 11.1929 0 25 0H136.084C143.044 0 149.689 2.90139 154.42 8.00608L178.08 33.5343C182.811 38.639 189.456 41.5404 196.416 41.5404H296C309.807 41.5404 321 52.7333 321 66.5404V216C321 229.807 309.807 241 296 241H25C11.1929 241 0 229.807 0 216V25Z';

type CardPose = {
  rest: { x: number; y: number; rotate: number };
  hover: { x: number; y: number; rotate: number; delay: number };
  open: { x: number; y: number; rotate: number; delay: number };
};

// 5-card fan poses inside the Rare UI folder (outer-right -> outer-left, center on top)
const POSES_5: CardPose[] = [
  // Card 0: Far Right (05 Infographic)
  {
    rest: { x: 56, y: -8, rotate: 13 },
    hover: { x: 86, y: -32, rotate: 19, delay: 0.14 },
    open: { x: 185, y: -150, rotate: 22, delay: 0.12 },
  },
  // Card 1: Far Left (01 K2O)
  {
    rest: { x: -56, y: -12, rotate: -11 },
    hover: { x: -86, y: -38, rotate: -17, delay: 0.1 },
    open: { x: -185, y: -154, rotate: -20, delay: 0.09 },
  },
  // Card 2: Inner Right (04 Visual Content)
  {
    rest: { x: 30, y: -16, rotate: 7 },
    hover: { x: 46, y: -44, rotate: 10, delay: 0.06 },
    open: { x: 94, y: -174, rotate: 11, delay: 0.06 },
  },
  // Card 3: Inner Left (02 Startup Standup)
  {
    rest: { x: -28, y: -20, rotate: -5 },
    hover: { x: -44, y: -48, rotate: -8, delay: 0.03 },
    open: { x: -92, y: -176, rotate: -10, delay: 0.03 },
  },
  // Card 4: Center Front (03 Thumbnails & Posters)
  {
    rest: { x: 2, y: -24, rotate: 1.5 },
    hover: { x: 0, y: -54, rotate: -1, delay: 0 },
    open: { x: 0, y: -190, rotate: -1.5, delay: 0 },
  },
];

// Reorder [01, 02, 03, 04, 05] into the depth stack [05, 01, 04, 02, 03]
// so left-to-right visual order stays 01 -> 02 -> 03 -> 04 -> 05 while center sits cleanly in front.
function buildLayeredItems(items: FanGalleryItem[]) {
  if (items.length >= 5) {
    const pickOrder = [4, 0, 3, 1, 2];
    return pickOrder.map((idx, slot) => ({
      item: items[idx],
      pose: POSES_5[slot],
      badgeNo: String(idx + 1).padStart(2, '0'),
    }));
  }
  return items.map((item, idx) => ({
    item,
    pose: POSES_5[idx % POSES_5.length],
    badgeNo: String(idx + 1).padStart(2, '0'),
  }));
}

export interface FeaturedFanProps {
  items: FanGalleryItem[];
  color?: 'black' | 'white' | 'blue';
  size?: 'sm' | 'md' | 'lg';
}

export default function FeaturedFan({
  items,
  color = 'black',
  size = 'lg',
}: FeaturedFanProps) {
  const theme = themes[color] ?? themes.black;
  const scale = sizeScales[size];
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const layered = buildLayeredItems(items);

  return (
    <div
      data-slot="folder"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: isOpen ? 540 : 420,
        paddingTop: isOpen ? 210 : 112,
        paddingBottom: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'min-height 0.35s cubic-bezier(0.22, 1, 0.36, 1), padding-top 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: BASE_WIDTH * scale,
          height: BASE_HEIGHT * scale,
          cursor: 'pointer',
          userSelect: 'none',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsOpen(false);
          setActiveCard(null);
        }}
        onClick={() => setIsOpen((o) => !o)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-label="Selected work folder — hover to fan project cards, click to open folder"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen((o) => !o);
          }
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: BASE_WIDTH,
            height: BASE_HEIGHT,
            transform: `translate(-50%, -50%) scale(${scale})`,
            perspective: 800 * scale,
          }}
        >
          {/* Back Folder Plate */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              style={{
                width: BASE_WIDTH,
                height: BASE_HEIGHT,
                borderRadius: 25,
                backgroundColor: theme.backFill,
                boxShadow: theme.backInsetShadow,
              }}
            />
          </div>

          {/* Fanned Project Cover Cards inside the Folder */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {layered.map(({ item, pose, badgeNo }) => {
              const isCardHover = activeCard === badgeNo;
              const targetY = isOpen
                ? pose.open.y + (isCardHover ? -14 : 0)
                : isHovered
                  ? pose.hover.y
                  : pose.rest.y;
              const targetX = isOpen ? pose.open.x : isHovered ? pose.hover.x : pose.rest.x;
              const targetRotate = isOpen
                ? pose.open.rotate
                : isHovered
                  ? pose.hover.rotate
                  : pose.rest.rotate;
              const delay = isOpen ? pose.open.delay : isHovered ? pose.hover.delay : 0;

              return (
                <motion.div
                  key={badgeNo}
                  style={{
                    position: 'absolute',
                    zIndex: isOpen && isCardHover ? 30 : undefined,
                  }}
                  animate={{
                    y: targetY,
                    x: targetX,
                    rotate: targetRotate,
                    scale: isOpen && isCardHover ? 1.06 : 1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 13,
                    delay,
                  }}
                  onMouseEnter={() => setActiveCard(badgeNo)}
                  onMouseLeave={() => setActiveCard((c) => (c === badgeNo ? null : c))}
                  onClick={(e) => {
                    if (isOpen && item.href) {
                      e.stopPropagation();
                      const dest = document.querySelector<HTMLElement>(item.href);
                      if (dest) {
                        dest.scrollIntoView({ behavior: 'smooth' });
                        history.pushState(null, '', item.href);
                      } else {
                        window.location.hash = item.href;
                      }
                    }
                  }}
                >
                  <ProjectCard item={item} badgeNo={badgeNo} theme={theme} isOpen={isOpen} />
                </motion.div>
              );
            })}
          </div>

          {/* 3D Tilted Glassmorphic Front Flap */}
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 321,
              height: 241,
              marginTop: 16,
              marginLeft: -160.5,
              marginTop: -104.5,
              transformOrigin: 'bottom center',
              transformStyle: 'preserve-3d',
              pointerEvents: isOpen ? 'none' : 'auto',
            }}
            animate={{ rotateX: isOpen ? -55 : isHovered ? -45 : -15 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                clipPath: `path('${FLAP_PATH}')`,
                WebkitClipPath: `path('${FLAP_PATH}')`,
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'transform',
              }}
            />
            <svg
              style={{ position: 'absolute', inset: 0 }}
              width="321"
              height="241"
              viewBox="0 0 321 241"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g filter="url(#filter0_i_rare_flap)">
                <path
                  d={FLAP_PATH}
                  fill={theme.flapFill}
                  fillOpacity={theme.flapFillOpacity}
                />
                <path
                  d="M25 0.5H136.084C142.905 0.5 149.417 3.3431 154.054 8.3457L177.713 33.874C182.539 39.0808 189.317 42.04 196.416 42.04H296C309.531 42.04 320.5 53.0092 320.5 66.54V216C320.5 229.531 309.531 240.5 296 240.5H25C11.469 240.5 0.5 229.531 0.5 216V25C0.5 11.469 11.469 0.5 25 0.5Z"
                  stroke={theme.flapStroke}
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_rare_flap"
                  x="-25.4"
                  y="-25.4"
                  width="371.8"
                  height="291.8"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.65" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix type="matrix" values={theme.flapInsetColor} />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_rare_flap"
                  />
                </filter>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

type Theme = (typeof themes)[keyof typeof themes];

function ProjectCard({
  item,
  badgeNo,
  theme,
  isOpen,
}: {
  item: FanGalleryItem;
  badgeNo: string;
  theme: Theme;
  isOpen: boolean;
}) {
  return (
    <div
      data-slot="folder-card"
      title={isOpen ? `Open project ${badgeNo}` : undefined}
      style={{
        width: 163,
        height: 213,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: theme.cardFill,
        border: `1px solid ${theme.cardStroke}`,
        boxShadow:
          '0 14px 28px rgba(0, 0, 0, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
      }}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          display: 'block',
          pointerEvents: 'none',
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 10,
          bottom: 10,
          padding: '3px 8px',
          borderRadius: 999,
          background: 'rgba(12, 12, 12, 0.72)',
          backdropFilter: 'blur(6px)',
          color: '#ffffff',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.06em',
          lineHeight: 1.1,
        }}
      >
        {badgeNo}
      </span>
    </div>
  );
}
