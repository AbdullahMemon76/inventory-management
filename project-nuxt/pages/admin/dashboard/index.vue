<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <header
      class="sticky py-6 top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
    >
      <Breadcrumb class="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <NuxtLink to="#"> Transactions </NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Edit Transaction</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div class="relative ml-auto flex-1 md:grow-0">
        <div class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search transactions..."
          class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" class="overflow-hidden rounded-full">
            <img
              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              width="36"
              height="36"
              alt="Avatar"
              class="overflow-hidden rounded-full"
              style="aspect-ratio: 36/36; object-fit: cover"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
    <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div class="flex items-center gap-4">
          <Button variant="outline"> Back </Button>
          <h1
            class="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0"
          >
            Transaction #43454
          </h1>
          <Badge variant="outline" class="ml-auto sm:ml-0"> Pending </Badge>
          <div class="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm"> Discard </Button>
            <Button size="sm">Save Transaction</Button>
          </div>
        </div>
        <div class="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div class="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Transaction Details</CardTitle>
                <CardDescription>Update the transaction details</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="grid gap-6">
                  <div class="grid gap-3">
                    <Label for="item-quantity">Item Quantity</Label>
                    <Input id="item-quantity" type="number" class="w-full" :value="2" />
                  </div>
                  <div class="grid gap-3">
                    <Label for="payment-details">Payment Details</Label>
                    <Textarea
                      id="payment-details"
                      :value="'Visa ending in 1234, $99.99 charged on 2023-04-15'"
                      class="min-h-32"
                    />
                  </div>
                  <div class="grid gap-3">
                    <Label for="attachments">Attachments</Label>
                    <div class="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <div class="h-4 w-4" />
                        Add File
                      </Button>
                      <div class="flex items-center gap-2">
                        <img
                          src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                          width="40"
                          height="40"
                          alt="Attachment"
                          class="rounded-md"
                          style="aspect-ratio: 40/40; object-fit: cover"
                        />
                        <div>
                          <p class="font-medium">Invoice.pdf</p>
                          <p class="text-sm text-muted-foreground">12.3 KB</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <div class="h-4 w-4" />
                          <span class="sr-only">Remove attachment</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Edit History</CardTitle>
                <CardDescription>Track changes made to this transaction</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Timestamp</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell class="font-semibold">John Doe</TableCell>
                      <TableCell>Updated item quantity</TableCell>
                      <TableCell>2023-04-15 10:30 AM</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell class="font-semibold">Jane Smith</TableCell>
                      <TableCell>Added payment details</TableCell>
                      <TableCell>2023-04-14 3:45 PM</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell class="font-semibold">Admin User</TableCell>
                      <TableCell>Created transaction</TableCell>
                      <TableCell>2023-04-13 9:20 AM</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div class="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Transaction Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div class="grid gap-6">
                  <div class="grid gap-3">
                    <Label for="status">Status</Label>
                    <Select>
                      <SelectTrigger id="status" aria-label="Select status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="refunded">Refunded</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div class="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm"> Discard </Button>
            <Button size="sm">Save Transaction</Button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup></script>
