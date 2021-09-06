import { getEventId, getEventPoint } from './db';

const resolvers = {
  Query: {
    eventid: () => getEventId(),
    data: (_, { id, rank }) => getEventPoint(id, rank),
  },
};

export default resolvers;
