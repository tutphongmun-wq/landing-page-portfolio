// Contact background: ReactDrops Topographic Flow. The Contact content is
// passed as children (as the component intends) so pointer moves over the
// text still reach it for the hover.
//
// Saved settings, switch with ACTIVE:
//   brandRed  site red, two-red elevation gradient, light contours, grain 0.4
//   ember     the component's "Ember · gradient" preset (coral to orange,
//             cream contours), flow speed 4
// Notes: grain only renders over an elevation gradient (2+ gradientColors),
// and backgroundImage must stay unset: "none" makes the component ignore
// gradientColors.
import type { ReactNode } from 'react';
import { TopographicFlow, type TopographicFlowProps } from './reactdrops/topographic-flow';

const SETTINGS = {
  brandRed: {
    scale: 480,
    density: 5,
    speed: 1.5,
    distortion: 2.4,
    lineWidth: 1,
    opacity: 1,
    dashLength: 7,
    dashGap: 8,
    seed: 42,
    gradientDiffusion: 0,
    hover: 0.85,
    hoverRadius: 260,
    hoverFollow: 0.16,
    hoverFade: 0.8,
    hoverEffect: 'rings',
    backgroundColor: '#ff2b2b',
    gradientColors: ['#c3141d', '#e2262f'],
    grain: 0.4,
    lineColor: '#ff9da1',
    accentColor: '#ffd6d8',
    lineStyle: 'solid',
  },
  ember: {
    preset: 'ember',
    scale: 140,
    density: 5,
    distortion: 2.4,
    seed: 42,
    lineStyle: 'solid',
    lineWidth: 1.25,
    opacity: 0.9,
    backgroundColor: '#f55e42',
    lineColor: '#fff1dc',
    accentColor: '#fff1dc',
    gradientColors: ['#e34a42', '#f55e42', '#ff8047'],
    gradientDiffusion: 0.35,
    grain: 0.55,
    speed: 4,
    hover: 0.6, // push away
    hoverRadius: 200,
    hoverFollow: 0.16,
    hoverFade: 0.8,
    hoverEffect: 'rings',
  },
} satisfies Record<string, TopographicFlowProps>;

const ACTIVE: keyof typeof SETTINGS = 'ember';

/** Shown behind the content until the component hydrates. */
export const contactTopoBackground = SETTINGS[ACTIVE].backgroundColor;

export default function ContactTopo({ children }: { children?: ReactNode }) {
  return (
    <TopographicFlow {...SETTINGS[ACTIVE]} paused={false}>
      {children}
    </TopographicFlow>
  );
}
