import axios from 'axios';

const API_URL = 'https://api.matsurihi.me/mltd/v1/';

export const getEventInfo = async () => {
  const { data: data } = await axios.get(`${API_URL}events`);
  const currentEvent = data.splice(-1)[0];

  return currentEvent;
};

export const getEventPoint = async (id, rank) => {
  const DAY = 90000000;
  const DATE = new Date(Date.now() - DAY).toUTCString();

  const {
    data: [data],
  } = await axios.get(
    `${API_URL}events/${id}/rankings/logs/eventPoint/${rank}`,
    {
      params: {
        timeMin: DATE,
      },
    }
  );
  return data;
};
