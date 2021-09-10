export interface EventType {
  event: EventInfo;
}

export interface EventInfo {
  id: number;
  name: string;
  type: number;
  schedule: ScheduleType;
}

export interface ScheduleType {
  beginDate: string;
  endDate: string;
  pageBeginDate: string;
  pageEndDate: string;
  boostBeginDate: string;
  boostEndDate: string;
}

export interface BorderType {
  data: Rank;
}

export interface Rank {
  rank: number;
  data: Score[];
}

export interface Score {
  score: number;
  summaryTime: string;
}
