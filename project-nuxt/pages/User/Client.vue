<template>
  <div class="flex h-screen bg-white text-black">
    <!-- Left Sidebar -->
    <div>
      <SideBar />
    </div>

    <!-- Right Main Content -->
    <main class="flex-1 p-6 overflow-y-auto bg-white">
      <div class="bg-gray-300 p-4 rounded-lg">
        <header
          class="sticky py-6 top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1 class="text-5xl font-bold mb-1">Client</h1>
          <div class="relative ml-auto flex-1 md:grow-0">
            <div class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search transactions..."
              class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" class="overflow-hidden rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                  width="36" height="36" alt="Avatar" class="overflow-hidden rounded-full"
                  style="aspect-ratio: 36/36; object-fit: cover" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <!-- <div class="w-full max-w-lg bg-white rounded-lg shadow-md p-6"> -->
          <form @submit.prevent="submitClient">
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Client Name:</label>
              <input v-model="client.name" type="text"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter client's name" required />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Phone:</label>
              <input v-model="client.phone" type="tel"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter phone number" required />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Description:</label>
              <textarea v-model="client.description"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter description" rows="4"></textarea>
            </div>
            <div class="mb-4">
              <p class="text-gray-700">Client ID: {{ client.id }}</p> <!-- Display unique ID -->
            </div>
            <Button class="w-full" type="submit">Add Client</Button>
          </form>
      </div>
  <!-- </div> -->
  </main>
  </div>
</template>

<script>
import SideBar from '~/components/ui/sidebar/SideBar.vue';
export default {
  components: {
    SideBar,
  },
  data() {
    return {
      client: {
        id: this.generateUniqueId(), // Generate unique ID on component creation
        name: '',
        phone: '',
        description: '',
      },
    };
  },
  methods: {
    submitClient() {
      // Submit logic (e.g., API call)
      console.log('Client added:', this.client);
      alert('Client added successfully!');
      // Reset form after submission
      this.resetForm();
    },
    resetForm() {
      this.client = {
        id: this.generateUniqueId(), // Regenerate unique ID
        name: '',
        phone: '',
        description: '',
      };
    },
    generateUniqueId() {
      // Generate a unique ID using current timestamp and random number
      return 'client-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>