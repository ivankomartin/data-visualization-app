import axios, { AxiosResponse } from 'axios';
interface Structure {
  [key: string]: string;
}

const fetchChartData = async (
  endpoint: string,
  filters: string[],
  structure: Structure
): Promise<AxiosResponse['data'] | null> => {
  try {
    const apiParams = `filters=${filters.join(";")}&structure=${JSON.stringify(structure)}`;
    const encodedParams = encodeURI(apiParams);
    const url = `${endpoint}?${encodedParams}`;

    const response = await axios.get(url);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
  } catch (error) {
    console.error(`An error occurred while fetching data: ${error}`);
    return null;
  }
};

export default fetchChartData;
