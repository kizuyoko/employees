<script setup>
import EmployeeListItem from  './components/EmployeeListItem.vue';
import Button from './ui/Button.vue';
</script>
<template>
  <main class="flex flex-col items-center justify-center w-auto p-4 mx-auto my-2">
    <header>
      <h1>Anställda</h1>
    </header>
    <section aria-labelledby="anstallda-list">
      <ol id="anstallda-list" class="list-decimal list-inside">
        <EmployeeListItem
          name="Emily Smith Johnson"
          email="emily.johnson@x.dummyjson.com"
          img="https://dummyjson.com/icon/emilys/128"
        />
        <EmployeeListItem
          name="Michael Williams"
          email="sophia.brown@x.dummyjson.com"
          img="https://dummyjson.com/icon/michaelw/128"
        />
        <EmployeeListItem
          name="Sophia Brown"
          email="james.davis@x.dummyjson.com"
          img="https://dummyjson.com/icon/sophiab/128"
        />
        <EmployeeListItem
          name="James Davis"
          email="emily.johnson@x.dummyjson.com"
          img="https://dummyjson.com/icon/jamesd/128"
        />
        <EmployeeListItem
          name="Emma Johnson Miller"
          email="emily.johnson@x.dummyjson.com"
          img="https://dummyjson.com/icon/emmaj/128"
        />
        <EmployeeListItem
          name="Olivia Wilson"
          email="emily.johnson@x.dummyjson.com"
          img="https://dummyjson.com/icon/oliviaw/128"
        />
      </ol>
    </section>
    <nav class="flex gap-4 mt-4" aria-label="Sidnavigering">
      <Button>Föregående</Button>
      <Button>Nästa</Button>
    </nav>
  </main>
</template>