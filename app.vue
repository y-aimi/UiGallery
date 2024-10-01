<script>
const price = ref(9.99);
console.log(price.value);

const instructor = reactive({
  name: 'test',
  age: 20,
});
console.log(instructor);
const d = reactive();
console.log(d);
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtWelcome />
</template>
