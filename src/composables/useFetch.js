import { ref } from 'vue';
import axios from 'axios';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const fetchData = async (config = {}) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.request({
        url,
        ...config,
      });
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, fetchData };
}

laskjdflksajdfklasjdflkjsadfjaskldf;
