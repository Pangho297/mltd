import { gql } from '@apollo/client';

export const GET_EVENT = gql`
  query {
    event {
      id
      name
      type
      schedule {
        beginDate
        endDate
        pageBeginDate
        pageEndDate
        boostBeginDate
        boostEndDate
      }
    }
  }
`;

export const GET_EVENT_BORDER = gql`
  query data($id: Int!, $rank: Int!) {
    data(id: $id, rank: $rank) {
      rank
      data {
        score
        summaryTime
      }
    }
  }
`;
