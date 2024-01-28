import { defineStore } from "pinia"

interface User {
  id: number
  name: string
  email: string
  password: string
}

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [
      {
        id: 1,
        name: "Alex Miller",
        email: "alex.miller@mail.com",
        password: "jZsdM",
      },
      {
        id: 2,
        name: "John Davis",
        email: "john.davis@test.com",
        password: "Ldyyu",
      },
      {
        id: 3,
        name: "Lisa Anderson",
        email: "lisa.anderson@mail.com",
        password: "BhXHc",
      },
      {
        id: 4,
        name: "Alex Taylor",
        email: "alex.taylor@test.com",
        password: "W89Vr",
      },
      {
        id: 5,
        name: "Olivia Brown",
        email: "olivia.brown@example.com",
        password: "JVgkh",
      },
      {
        id: 6,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        password: "1DTA7",
      },
      {
        id: 7,
        name: "Sarah Brown",
        email: "sarah.brown@test.com",
        password: "vuVGC",
      },
      {
        id: 8,
        name: "Chris Miller",
        email: "chris.miller@example.com",
        password: "40JZr",
      },
      {
        id: 9,
        name: "Max Taylor",
        email: "max.taylor@example.com",
        password: "wvlxa",
      },
      { id: 10, name: "Max Doe", email: "max.doe@test.com", password: "deKOp" },
    ] as User[],
    editingUser: null as User | null,
  }),
  actions: {
    addUser(user: User) {
      this.users.push(user)
    },
    updateUser(updatedUser: User) {
      const index = this.users.findIndex(u => u.id === updatedUser.id)
      if (index !== -1) {
        this.users[index] = updatedUser
      }
      this.editingUser = null // Reset editing user after update
    },
    deleteUser(id: number) {
      const index = this.users.findIndex(user => user.id === id)
      if (index !== -1) {
        this.users.splice(index, 1)
      }
    },
    setEditingUser(user: User) {
      this.editingUser = user
    },
  },
})
