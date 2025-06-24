import { ref, onMounted } from 'vue';
import type { User } from '@/types/user';

export function useEmployees() {
  const employees = ref<User[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  const limit = 6;
  const skip = ref(0);

  const fetchEmployees = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip.value}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      employees.value = data.users;
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    } finally {
      isLoading.value = false;
    }
  };

  watch(skip, () => {
    fetchEmployees();
  }, { immediate: true });

  const nextPage = () => {
    skip.value += limit;
  };
  const previousPage = () => {
    if (skip.value >= limit) {
      skip.value -= limit;
    }
  };

  return { employees, isLoading, error, nextPage, previousPage, skip };
}