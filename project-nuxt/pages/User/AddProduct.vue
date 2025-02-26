<template>
  <div class="flex flex-col lg:flex-row h-screen bg-white text-black">
    <!-- Left Sidebar -->
    <div>
      <SideBar />
    </div>

    <!-- Right Main Content -->
    <main class="flex-1 p-4 sm:p-6 overflow-y-auto bg-white">
      <div class="bg-gray-300 p-4 rounded-lg">
        <header
          class="sticky py-4 sm:py-6 top-0 z-30 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1 class="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1">Add Product</h1>
          <div class="relative mt-4 sm:mt-0 ml-auto flex-1 sm:flex-none">
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
        <div class="grid gap-6 md:grid-cols-1 lg:grid-cols-2 mt-4">
          <div>
            <form @submit.prevent="submitProduct" class="flex flex-col">
              <div class="mb-4">
                <label class="block text-gray-700">Product Name:</label>
                <input type="text" v-model="product.name"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Date:</label>
                <input type="date" v-model="product.date"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Description:</label>
                <textarea v-model="product.description"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required></textarea>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Price:</label>
                <input type="number" v-model="product.price"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Quantity:</label>
                <input type="number" v-model="product.quantity"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required />
              </div>
              <div class="mb-4">
                <p class="text-gray-700">Total Amount: {{ totalAmount }}</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-700">Product ID: {{ product.id }}</p>
              </div>
              <Button class="w-full" type="submit">Add Product</Button>
            </form>
          </div>
          <div>
            <Card>
              <CardHeader class="flex flex-row items-center justify-between pb-2">
                <CardTitle class="text-sm font-medium">Recent Transactions</CardTitle>
                <NuxtLink to="#" class="text-primary">View All</NuxtLink>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead class="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Sale</TableCell>
                      <TableCell>Acme Widgets</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell class="text-right">$125.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Purchase</TableCell>
                      <TableCell>Acme Gadgets</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell class="text-right">$249.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sale</TableCell>
                      <TableCell>Acme Thingamajigs</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell class="text-right">$89.97</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sale</TableCell>
                      <TableCell>Acme Widgets</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell class="text-right">$125.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Purchase</TableCell>
                      <TableCell>Acme Gadgets</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell class="text-right">$249.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sale</TableCell>
                      <TableCell>Acme Thingamajigs</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell class="text-right">$89.97</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sale</TableCell>
                      <TableCell>Acme Widgets</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell class="text-right">$125.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Purchase</TableCell>
                      <TableCell>Acme Gadgets</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell class="text-right">$249.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sale</TableCell>
                      <TableCell>Acme Thingamajigs</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell class="text-right">$89.97</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
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
      product: {
        name: '',
        date: '',
        description: '',
        price: 0,
        quantity: 0,
        id: '',
      },
      totalAmount: 0,
    };
  },
  methods: {
    submitProduct() {
      // Logic to handle form submission
      console.log('Product submitted:', this.product);
    },
  },
  watch: {
    'product.price': function () {
      this.calculateTotalAmount();
    },
    'product.quantity': function () {
      this.calculateTotalAmount();
    },
  },
  methods: {
    calculateTotalAmount() {
      this.totalAmount = this.product.price * this.product.quantity;
    },
  },
};
</script>

<style scoped>
/* Mobile First Approach */
@media (min-width: 640px) {
  /* Add custom styles for sm screens and larger */
}

@media (min-width: 768px) {
  /* Add custom styles for md screens and larger */
}

@media (min-width: 1024px) {
  /* Add custom styles for lg screens and larger */
}

@media (min-width: 1280px) {
  /* Add custom styles for xl screens and larger */
}
</style>
