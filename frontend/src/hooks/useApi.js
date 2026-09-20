import { useEffect, useState } from 'react';

export function useApi(path) {
  const [result, setResult] = useState({ path, status: 'loading', data: null });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setResult({ path, status: 'loading', data: null });
    async function load() {
      try {
        const response = await fetch(path, { signal: controller.signal });
        if (!response.ok) {
          const error = new Error('API_ERROR');
          error.status = response.status;
          throw error;
        }
        const data = await response.json();
        if (!controller.signal.aborted)
          setResult({ path, status: 'success', data });
      } catch (error) {
        if (!controller.signal.aborted)
          setResult({
            path,
            status: error.status === 404 ? 'notFound' : 'error',
            data: null,
          });
      }
    }
    load();
    return () => controller.abort();
  }, [path, attempt]);
  return {
    ...(result.path === path ? result : { status: 'loading', data: null }),
    retry: () => setAttempt((n) => n + 1),
  };
}
