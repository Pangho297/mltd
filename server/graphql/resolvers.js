import { getEventId, getEventPoint } from './db';

const resolvers = {
  Query: {
    eventid: () => getEventId(),
    data: (_, { id }) => getEventPoint(id),
  },
};

export default resolvers;
