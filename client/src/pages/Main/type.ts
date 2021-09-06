export type EventType = {
  eventid: number;
};

export type RankingType = {
  data: Rank;
};

type Rank = {
  rank: number;
  data: Score[];
};

type Score = {
  score: number;
  summaryTime: string;
};
