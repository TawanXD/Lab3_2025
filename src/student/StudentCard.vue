<template>
  <div class="student-card">
    <img :src="student.image" alt="student photo" />
    <h2>{{ student.name }} {{ student.surname }}</h2>
    <p>GPA: {{ student.gpa }}</p>
    <p>Pens: {{ student.penAmount }}</p>
    <p>{{ student.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    student: Object,
  },
};
// defineProps({
//   student: Object
// });
</script>

<style scoped>
.student-card {
  border: 1px solid #ccc;
  padding: 12px;
  margin: 8px;
  border-radius: 8px;
  background: #f9f9f9;
}
</style>