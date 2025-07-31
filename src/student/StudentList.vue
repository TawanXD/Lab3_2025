<template>
    <div>
        <h1>Student Info</h1>
        <div class="student-list">
            <StudentCard v-for="student in students" :key="student.id" :student="student" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getStudents } from '../services/studentService';
import StudentCard from './StudentCard.vue';


const students = ref([]);

onMounted(async () => {
    students.value = await getStudents();
});


// export default {
//     components: { StudentCard },
//     data() {
//         return {
//             students: [],
//         };
//     },
//     async mounted() {
//         this.students = await getStudents();
//     },
// };
</script>