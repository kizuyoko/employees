import { ref, onMounted } from 'vue';
import type { User } from '@/types/user';

export function useEmployees() {
  const employees = ref<User[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users?limit=6&skip=0')
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

  onMounted(() => {
    fetchEmployees();
  });

  return { employees, isLoading, error };
}