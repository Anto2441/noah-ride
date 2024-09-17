export const fetchAPI = async (
  url: string,
  options?: RequestInit,
  timeout: number = 10000
) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const fetchTimeout = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { ...options, signal });

    // Checks if HTTP response is not OK (status not 2xx)
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }

    // Checks whether content is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    // Retrieves and returns the JSON of the response
    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.error('Fetch error: Request timeout');
      throw new Error('Request timeout');
    }
    console.error('Fetch error:', error.message);
    throw error;
  } finally {
    clearTimeout(fetchTimeout);
  }
};
