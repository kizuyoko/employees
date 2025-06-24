<script setup>
import { onMounted } from 'vue';
import EmployeeList from  './components/EmployeeList.vue';
import Pagination from './components/Pagination.vue';
import { useEmployees } from './composables/useEmployees';

const { employees, isLoading, error, nextPage, previousPage, skip } = useEmployees();

onMounted(() => {
  document.title = 'Anställda';
});

</script>

<template>
  <main class="flex flex-col items-center justify-center w-auto p-4 mx-auto my-2">
    <header>
      <h1>Anställda</h1>
    </header>
    <section aria-labelledby="anstallda-list">
      <p  
        v-if="isLoading" class="text-center">
        Laddar...
      </p>
      <p v-else-if="error">{{ error.message }}</p>
      <EmployeeList v-else :employees="employees" />
    </section>
    <Pagination
      :onNext="nextPage"
      :onPrev="previousPage"
      :canPrev="skip > 0"
    />
  </main>
</template>