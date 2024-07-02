// src/services/apiService.js

const API_URL = 'http://20.244.56.144/test';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5ODk5MzYyLCJpYXQiOjE3MTk4OTkwNjIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRhMDNkYzY4LTQ3YmEtNGVkNC1hNjBhLTkyMTMwNjZmMjgwNiIsInN1YiI6InNhbmRlZXBtb3BpZGV2aTg1MzdAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiTGVhcm5UaGVUZWNoIiwiY2xpZW50SUQiOiI0YTAzZGM2OC00N2JhLTRlZDQtYTYwYS05MjEzMDY2ZjI4MDYiLCJjbGllbnRTZWNyZXQiOiJ0YUhvSUNZZUtmSlBQUnFBIiwib3duZXJOYW1lIjoiU2FuZGVlcCIsIm93bmVyRW1haWwiOiJzYW5kZWVwbW9waWRldmk4NTM3QGdtYWlsLmNvbSIsInJvbGxObyI6IjIxNDgxQTA1RDUifQ.9EIV0LM70Z0JJHkk-7cLJqAt4FuSYkGCP-ZbaMaoaMs'; // Replace with your actual access token

const headers = {
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json',
};

export const fetchTopProducts = async (company, category, minPrice, maxPrice, limit = 10) => {
  const queryParams = new URLSearchParams({
    company,
    category,
    minPrice,
    maxPrice,
    limit,
  });

  const url = `${API_URL}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};
