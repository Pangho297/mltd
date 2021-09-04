import { getEventPoint } from './db';

const resolvers = {
  Query: {
    eventPoint: () => getEventPoint(),
    highScore: () => getEventPoint(),
    loungePoint: () => getEventPoint(),
  },
};

export default resolvers;
