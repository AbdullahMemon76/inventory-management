<template>
  <div class="flex flex-col w-full min-h-screen bg-background">
    <header class="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <nav
        class="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <NuxtLink
          to="#"
          class="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <BoxIcon class="w-6 h-6" />
          <span class="sr-only">Acme Inventory</span>
        </NuxtLink>
        <NuxtLink to="#" class="font-bold">Dashboard</NuxtLink>
        <NuxtLink to="#" class="text-muted-foreground">Inventory</NuxtLink>
        <NuxtLink to="#" class="text-muted-foreground">Transactions</NuxtLink>
        <NuxtLink to="#" class="text-muted-foreground">Reports</NuxtLink>
      </nav>
      <div class="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form class="flex-1 ml-auto sm:flex-initial">
          <div class="relative">
            <SearchIcon class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search inventory..."
              class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <Button variant="ghost" size="icon" class="rounded-full">
          <!-- <img
            src="/placeholder.svg"
            width="32"
            height="32"
            class="rounded-full"
            alt="Avatar"
            style="aspect-ratio: 32/32; object-fit: cover"
          /> -->
          <span class="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
    <main
      class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10"
    >
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <CardTitle class="text-sm font-medium">Total Inventory</CardTitle>
            <BoxIcon class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">1,234</div>
            <p class="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <CardTitle class="text-sm font-medium">In-Stock Items</CardTitle>
            <CircleCheckIcon class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">987</div>
            <p class="text-xs text-muted-foreground">+3.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <CardTitle class="text-sm font-medium">Out-of-Stock Items</CardTitle>
            <CircleAlertIcon class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">247</div>
            <p class="text-xs text-muted-foreground">+1.9% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <CardTitle class="text-sm font-medium">Reorder Threshold</CardTitle>
            <AlarmClockIcon class="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">50</div>
            <p class="text-xs text-muted-foreground">+2 items from last month</p>
          </CardContent>
        </Card>
      </div>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <CardTitle class="text-sm font-medium">Recently Added Items</CardTitle>
            <NuxtLink to="#" class="text-primary">View All</NuxtLink>
          </CardHeader>
          <CardContent>
            <ul class="grid gap-4">
              <li class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <img
                    :src="dummyImgUrl"
                    width="40"
                    height="40"
                    class="rounded-md"
                    alt="Product Image"
                    style="aspect-ratio: 40/40; object-fit: cover"
                  />
                  <div>
                    <div class="font-medium">Acme Widgets</div>
                    <div class="text-xs text-muted-foreground">Added 2 days ago</div>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon class="w-4 h-4" />
                </Button>
              </li>
              <li class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <img
                    :src="dummyUrlImg"
                    width="40"
                    height="40"
                    class="rounded-md"
                    alt="Product Image"
                    style="aspect-ratio: 40/40; object-fit: cover"
                  />
                  <div>
                    <div class="font-medium">Acme Gadgets</div>
                    <div class="text-xs text-muted-foreground">Added 5 days ago</div>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon class="w-4 h-4" />
                </Button>
              </li>
              <li class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <img
                    :src="dummyImgUrl"
                    width="40"
                    height="40"
                    class="rounded-md"
                    alt="Product Image"
                    style="aspect-ratio: 40/40; object-fit: cover"
                  />
                  <div>
                    <div class="font-medium">Acme Thingamajigs</div>
                    <div class="text-xs text-muted-foreground">Added 1 week ago</div>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon class="w-4 h-4" />
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
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
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-2">
            <CardTitle class="text-sm font-medium">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid gap-4">
              <Button>
                <PlusIcon class="w-4 h-4 mr-2" />
                Add New Item
              </Button>
              <Button variant="outline">
                <ClipboardListIcon class="w-4 h-4 mr-2" />
                View Transactions
              </Button>
              <Button variant="outline">
                <FileIcon class="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
</template>

<script setup>
import {dummyImgUrl} from "@/constants/index"
</script>
