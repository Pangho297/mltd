import axios from 'axios';

const API_URL =
  'https://api.matsurihi.me/mltd/v1/events/200/rankings/borderPoints';

export const getEventPoint = async () => {
  const {
    data: { eventPoint },
  } = await axios(`${API_URL}`);

  console.log(eventPoint);

  return eventPoint;
};
