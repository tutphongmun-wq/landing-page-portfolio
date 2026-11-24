// Hero background: ReactDrops Shape Physics on the site red. Component
// defaults except: twice the figures (count 100), figures 10% smaller (size
// 45), an opaque red background
// (the engine repaints its own background every frame, so it cannot be
// transparent) and its default palette minus the red, which would disappear.
// The PORTFOLIO wordmark is fed in as static obstacles (a portfolio addition
// to the engine), so the figures land on, bounce off and pile around it; the
// rest of the hero text lets them pass.
// Every element marked [data-shape-obstacle] counts; text is measured line by
// line so the figures settle into the gaps around the letters' lines.
// Dragging / click-to-add only with a fine pointer: on touch screens the
// interactive canvas sets touch-action: none and would block scrolling past
// the full-height hero, so there the shapes just fall and pile up.
import { useEffect, useRef, useState } from 'react';
import { ShapePhysics, type ShapePhysicsHandle } from './reactdrops/shape-physics';
import { solidPalette } from './reactdrops/solid-shapes';

export const heroShapesBackground = '#ff2b2b';
const colors = solidPalette.filter((c) => c !== '#ea4044');

type Rect = { x: number; y: number; w: number; h: number };

/** Line boxes of text elements, plain boxes for controls, relative to `origin`. */
function measure(scope: Element, origin: DOMRect): Rect[] {
  const rects: Rect[] = [];
  scope.querySelectorAll<HTMLElement>('[data-shape-obstacle]').forEach((el) => {
    let boxes: DOMRect[];
    if (el.dataset.shapeObstacle === 'box') boxes = [el.getBoundingClientRect()];
    else {
      const range = document.createRange();
      range.selectNodeContents(el);
      boxes = [...range.getClientRects()];
    }
    // merge fragments on the same line into one box per line
    const lines: DOMRect[] = [];
    for (const b of boxes) {
      if (b.width < 1 || b.height < 1) continue;
      const line = lines.find((l) => Math.abs(l.top - b.top) < b.height / 2);
      if (line) {
        const left = Math.min(line.left, b.left),
          right = Math.max(line.right, b.right),
          top = Math.min(line.top, b.top),
          bottom = Math.max(line.bottom, b.bottom);
        lines[lines.indexOf(line)] = new DOMRect(left, top, right - left, bottom - top);
      } else lines.push(b);
    }
    for (const l of lines) rects.push({ x: l.left - origin.left, y: l.top - origin.top, w: l.width, h: l.height });
  });
  return rects;
}

export default function HeroShapes() {
  const [fine, setFine] = useState(false);
  const shapes = useRef<ShapePhysicsHandle>(null);
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setFine(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const hero = host.current?.closest('.hero');
    if (!hero || !host.current) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!host.current) return;
        shapes.current?.setObstacles(measure(hero, host.current.getBoundingClientRect()));
      });
    };
    update();
    document.fonts?.ready.then(update);
    const ro = new ResizeObserver(update);
    ro.observe(hero);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={host} style={{ position: 'absolute', inset: 0 }}>
      <ShapePhysics
        ref={shapes}
        count={100}
        size={45}
        background={heroShapesBackground}
        colors={colors}
        interactive={fine}
        followCursor={fine}
        aria-label="Playful 3D shapes falling around the centered intro text and piling up. With a mouse, drag a shape or click empty space to add one."
      />
    </div>
  );
}
