<script setup>
import EmployeeListItem from  './components/EmployeeListItem.vue';
import Button from './ui/Button.vue';
import { useEmployees } from './composables/useEmployees';

const { employees, isLoading, error, nextPage, previousPage, skip } = useEmployees();
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
      <ol v-else id="anstallda-list" class="list-decimal list-inside">
        <EmployeeListItem
          v-for="employee in employees"
          :key="employee.id"
          :name="`${employee.firstName} ${employee.lastName}`"
          :email="employee.email"
          :img="employee.image"
        />
      </ol>
    </section>
    <nav class="flex gap-4 mt-6" aria-label="Sidnavigering">
      <Button @click="previousPage" :disabled="skip === 0">Föregående</Button>
      <Button @click="nextPage">Nästa</Button>
    </nav>
  </main>
</template>