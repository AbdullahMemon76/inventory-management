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
          <h1 class="text-5xl font-bold">Invoice</h1>
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

        <div class="p-4">
          <h1 class="text-2xl font-bold mb-4">Client Dashboard</h1>

          <select v-model="selectedClient" @change="updateClientData" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
            <option disabled value="">Select a Client</option>
            <option v-for="client in clients" :key="client.id" :value="client">
              {{ client.name }}
            </option>
          </select>

          <div v-if="selectedClient">
            <h2 class="text-xl font-semibold">Dashboard for {{ selectedClient.name }}</h2>
            <p>Total Bill: {{ selectedClient.totalBill }}</p>
            <p>Total Balance: {{ selectedClient.totalBalance }}</p>
            <p>Payments Received: {{ selectedClient.paymentsReceived }}</p>

            <h3 class="mt-4">Invoices</h3>
            <ul class="list-disc pl-5">
              <li v-for="invoice in getClientInvoices(selectedClient.id)" :key="invoice.id">
                {{ invoice.item }} - {{ invoice.amount }}
              </li>
            </ul>

            <div class="mt-4">
              <input v-model="paymentAmount" placeholder="Payment Amount" class="mt-1 mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <button @click="addPayment(selectedClient.id, paymentAmount)" class="bg-blue-500 text-white p-2 rounded">
                Add Invoice
              </button>
              <button @click="addPayment(selectedClient.id, paymentAmount)" class="bg-blue-500 text-white p-2 ml-3 rounded">
                Update
              </button>
              <Button class="ml-3" size="sm">Delete</Button>
            </div>
          </div>
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
      selectedClient: null,
      paymentAmount: 0,
      clients: [
        { id: 1, name: "Client A", totalBill: 1000, totalBalance: 1000, paymentsReceived: 0 },
        { id: 2, name: "Client B", totalBill: 2000, totalBalance: 2000, paymentsReceived: 0 },
        // More clients can be added here
      ],
      invoices: [
        { id: 1, clientId: 1, item: "Item 1", amount: 500, date: "2024-10-01" },
        { id: 2, clientId: 1, item: "Item 2", amount: 500, date: "2024-10-02" },
        { id: 3, clientId: 2, item: "Item 3", amount: 1000, date: "2024-10-03" },
        // More invoices can be added here
      ],
    };
  },
  methods: {
    addPayment(clientId, amount) {
      const client = this.clients.find(c => c.id === clientId);
      if (client) {
        client.totalBalance -= Number(amount);
        client.paymentsReceived += Number(amount);
        this.paymentAmount = 0; // Reset payment amount after adding
      }
    },
    getClientInvoices(clientId) {
      return this.invoices.filter(invoice => invoice.clientId === clientId);
    },
    updateClientData() {
      this.paymentAmount = 0; // Reset payment amount when client is changed
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
