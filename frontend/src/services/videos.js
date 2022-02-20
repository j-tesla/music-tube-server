import axios from 'axios';

const baseUrl = '/api/videos';

export const getPage = async (page = 0) => {
  const response = await axios.get(baseUrl, { params: { page, page_size: 5 } });
  return response.data;
};

const videosService = { getPage };

export default videosService;
