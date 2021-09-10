import { getEventInfo, getEventPoint } from './db';

const resolvers = {
  Query: {
    event: () => getEventInfo(),
    data: (_, { id, rank }) => getEventPoint(id, rank),
  },
};

export default resolvers;
