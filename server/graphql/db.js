import axios from 'axios';

const API_URL = 'https://api.matsurihi.me/mltd/v1/';

export const getEventInfo = async () => {
  const { data: data } = await axios.get(`${API_URL}events`);
  const currentEvent = data.splice(-1)[0];

  return currentEvent;
};

export const getEventPoint = async (id, rank) => {
  const HOUR = 60 * 60 * 1500;
  const DATE = new Date(Date.now() - HOUR).toUTCString();

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
  console.log(data);
  return data;
};
