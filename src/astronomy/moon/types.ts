export type AstroPosition = {
  altitude: number;
  azimuth: number;
  direction: string;
  direction_full: string;
};

export type MoonDataExt = {
  date: string;
  time: string;
  illumination: string;
  phase: string;
  phaseId: string;
  emoji: string;
  parallacticAngle: number;
  angle: number;
  position: AstroPosition;
  next: {
    newMoon: string;
    fullMoon: string;
  };
}

export type MoonData = {
  position: AstroPosition;
  next: {
    newMoon: string;
    fullMoon: string;
  };
};

export type MoonTimes = {
  rise: string;
  set: string;
  highest: string;
};
