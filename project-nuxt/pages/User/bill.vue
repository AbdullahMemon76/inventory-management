<template>
  <div class="flex h-screen bg-white text-black">
    <!-- Left Sidebar -->
    <div>
      <SideBar />
    </div>


    <main class="flex-1 p-6 overflow-y-auto bg-white">
      <div class="bg-gray-300 p-4 rounded-lg">
        <header
          class="sticky py-6 top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1 class="text-5xl font-bold mb-1">Add Bill</h1>
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
        <div class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-col gap-4 p-4 md:gap-8 md:p-10">
          <!-- <h2 class="text-2xl font-bold">Add Bill</h2> -->
          <form @submit.prevent="submitBill" class="space-y-4">
            <div>
              <label class="block text-gray-700">Customer Name:</label>
              <input type="text"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required />
            </div>
            <div>
              <label class="block text-gray-700">Item:</label>
              <input type="text"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required />
            </div>
            <div>
              <label class="block text-gray-700">Date:</label>
              <input type="date" v-model="bill.date" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
            <div>
              <label class="block text-gray-700">Quantity:</label>
              <input type="number" v-model.number="bill.quantity" @input="updateAmount" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required />
            </div>
            <div>
              <label class="block text-gray-700">Unit Price:</label>
              <input type="number" v-model.number="bill.unitPrice" @input="updateAmount" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required />
            </div>
            <div>
              <label class="block text-gray-700">Bill No:</label>
              <input type="text" v-model="bill.billNo" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
            <div>
              <label class="block text-gray-700">Amount:</label>
              <input type="number" :value="bill.amount" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" readonly />
            </div>
            <div>
              <p class="text-gray-700">Unique ID: {{ bill.id }}</p> <!-- Display unique ID -->
            </div>
            <Button class="w-full" type="submit">Add Bill</Button>
          </form>
        </div>
      </div>
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
      bill: {
        id: 1, // Start unique ID from 1
        customerName: '',
        item: '',
        date: '',
        quantity: 0,
        unitPrice: 0,
        billNo: '',
        amount: 0,
      },
    };
  },
  methods: {
    submitBill() {
      // Submit logic here (e.g., API call)
      console.log('Bill added:', this.bill);
      alert('Bill added successfully!');
      this.resetForm();
    },
    resetForm() {
      this.bill = {
        id: this.bill.id + 1, // Increment unique ID
        customerName: '',
        item: '',
        date: '',
        quantity: 0,
        unitPrice: 0,
        billNo: '',
        amount: 0,
      };
    },
    updateAmount() {
      this.bill.amount = this.bill.quantity * this.bill.unitPrice;
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>