<script setup>
import { ref, onMounted } from "vue";

import api from "../../api";

const employees = ref([]);

const fetchDataEmployees = async () => {
  await api.get("/api/employees").then((response) => {
    employees.value = response.data.data.data;
  });
};

onMounted(() => {
  fetchDataEmployees();
});

const deleteEmployee = async (id) => {
  if (window.confirm("Are you sure you want to delete this employee?")) {
    try {
      await api.delete(`/api/employees/${id}`);
      fetchDataEmployees();
      alert("Employee deleted successfully.");
    } catch (error) {
      alert("There was an error deleting the employee.");
    }
  }
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-12">
        <router-link
          :to="{ name: 'employees.create' }"
          class="btn btn-md btn-warning rounded shadow border-0 mb-3"
          >ADD NEW EMPLOYEE</router-link
        >
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <table class="table table-bordered">
              <thead class="bg-dark text-white">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col" style="width: 15%">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="employees.length == 0">
                  <td colspan="4" class="text-center">
                    <div class="alert alert-danger mb-0">
                      Data Belum Tersedia!
                    </div>
                  </td>
                </tr>
                <tr v-else v-for="(employee, index) in employees" :key="index">
                  <td class="text-center">
                    <img :src="employee.image" width="100" class="rounded-3" />
                  </td>
                  <td>{{ employee.name }}</td>
                  <td>{{ employee.address }}</td>
                  <td class="text-center">
                    <router-link
                      :to="{
                        name: 'employees.edit',
                        params: { id: employee.id },
                      }"
                      class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2"
                      >EDIT</router-link
                    >
                    <button
                      @click.prevent="deleteEmployee(employee.id)"
                      class="btn btn-sm btn-danger rounded-sm shadow border-0"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
