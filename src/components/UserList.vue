<template>
  <div class="p-4">
    <button class="btn btn-primary mb-4" @click="showAddUserModal = true">
      Add User
    </button>
    <div class="overflow-x-auto">
      <table class="table min-w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button
                class="btn btn-sm btn-primary mx-1"
                @click="editUser(user)"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-sm btn-error" @click="deleteUser(user.id)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="container mx-auto p-4">
    <div v-if="showAddUserModal" class="modal modal-open">
      <div class="modal-box">
        <form @submit.prevent="addUser">
          <div class="form-control">
            <label class="label">Name</label>
            <input
              type="text"
              v-model="formData.name"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control pt-2">
            <label class="label">Email</label>
            <input
              type="email"
              v-model="formData.email"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control pt-2">
            <label class="label">Password</label>
            <input
              type="password"
              v-model="formData.password"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control pt-2">
            <label class="label">Verify Password</label>
            <input
              type="password"
              v-model="verifyPassword"
              class="input input-bordered"
              required
            />
          </div>
          <div class="modal-action">
            <button
              type="button"
              class="btn"
              @click="
                // eslint-disable-next-line
                showAddUserModal = false;
                resetForm()
              "
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              {{ isEditMode ? "Update" : "Add" }} User
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue"
import { useUserStore } from "../store/userStore"
import { User } from "../types"
import Swal from "sweetalert2"

const userStore = useUserStore()
const users: Ref<User[]> = ref(userStore.users)
const isEditMode: Ref<boolean> = ref(false)
const formData: Ref<{ name: string; email: string; password: string }> = ref({
  name: "",
  email: "",
  password: "",
})

const editUser = (user: User): void => {
  formData.value = { ...user }
  isEditMode.value = true
  showAddUserModal.value = true
}

const deleteUser = async (id: number) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  })

  if (result.isConfirmed) {
    userStore.deleteUser(id)
    Swal.fire("Deleted!", "The user has been deleted.", "success")
  }
}

const showAddUserModal: Ref<boolean> = ref(false)
const verifyPassword: Ref<string> = ref("")

const addUser = (): void => {
  if (formData.value.password !== verifyPassword.value) {
    alert("Passwords do not match.")
    return
  }

  if (isEditMode.value) {
    userStore.updateUser(formData.value)
    Swal.fire({
      title: "User Updated",
      text: "The user details have been successfully updated.",
      icon: "success",
      confirmButtonColor: "#3085d6",
    })
  } else {
    userStore.addUser({ ...formData.value, id: Date.now() })
    Swal.fire({
      title: "User Added",
      text: "The user has been successfully added.",
      icon: "success",
      confirmButtonColor: "#3085d6",
    })
  }

  resetForm()
  closeAddUserModal()
}

const resetForm = (): void => {
  formData.value = { name: "", email: "", password: "" }
  verifyPassword.value = ""
  isEditMode.value = false
}

const closeAddUserModal = (): void => {
  showAddUserModal.value = false
}
</script>
<style scoped>
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table {
  width: 100%;
  min-width: 600px;
}

.btn-error i {
  color: white;
}
</style>
