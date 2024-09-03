<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";

import api from "../../api";

const router = useRouter();

const image = ref("");
const name = ref("");
const address = ref("");
const errors = ref([]);

const handleFileChange = (e) => {
  image.value = e.target.files[0];
};

const storeEmployee = async () => {
  let formData = new FormData();

  formData.append("image", image.value);
  formData.append("name", name.value);
  formData.append("address", address.value);

  try {
    await api.post("/api/employees", formData);
    router.push({ path: "/employees" });
  } catch (error) {
    errors.value = error.response.data.errors || {};
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <form @submit.prevent="storeEmployee">
              <div class="mb-3">
                <label class="form-label fw-bold">Image</label>
                <input
                  type="file"
                  class="form-control"
                  @change="handleFileChange"
                />
                <div v-if="errors.image" class="alert alert-danger mt-2">
                  <span>{{ errors.image[0] }}</span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  placeholder="Name Employee"
                />
                <div v-if="errors.name" class="alert alert-danger mt-2">
                  <span>{{ errors.name[0] }}</span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Address</label>
                <textarea
                  class="form-control"
                  v-model="address"
                  rows="5"
                  placeholder="Address Employee"
                ></textarea>
                <div v-if="errors.address" class="alert alert-danger mt-2">
                  <span>{{ errors.address[0] }}</span>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-md btn-primary rounded-sm shadow border-0"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
