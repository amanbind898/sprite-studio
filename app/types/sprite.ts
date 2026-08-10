// types/sprite.ts

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Size {
  w: number;
  h: number;
}

export interface SpriteFrame {
  frame: Rect;
  rotated: boolean;
  trimmed: boolean;
  spriteSourceSize: Rect;
  sourceSize: Size;
}

export interface SpriteAtlas {
  frames: Record<string, SpriteFrame>;
}


