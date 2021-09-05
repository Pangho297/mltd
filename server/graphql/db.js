import axios from 'axios';

const API_URL = 'https://api.matsurihi.me/mltd/v1/';

export const getEventId = async () => {
  const { data: data } = await axios(`${API_URL}events`, {
    params: { type: ['theater', 'tour', 'twinstage', 'tune', 'tale'] },
  });
  const getId = data.splice(-1)[0].id;

  return getId;
};

export const getEventPoint = async (id) => {
  const ranks = [1, 2, 3, 100, 2500, 5000, 10000, 50000, 10000].join(',');
  const HOUR = 60 * 60 * 1500;
  const DATE = new Date(Date.now() - HOUR).toUTCString();

  const {
    data: [data],
  } = await axios(`${API_URL}events/${id}/rankings/logs/eventPoint/${ranks}`, {
    params: {
      timeMin: DATE,
    },
  });
  return data;
};
