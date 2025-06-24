<script setup>
import EmployeeListItem from './EmployeeListItem.vue';

defineProps({
  employees: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <ol id="anstallda-list" class="list-decimal list-inside">
    <EmployeeListItem
      v-for="employee in employees"
      :key="employee.id"
      :name="`${employee.firstName} ${employee.lastName}`"
      :email="employee.email"
      :img="employee.image"
    />
  </ol>
</template>

