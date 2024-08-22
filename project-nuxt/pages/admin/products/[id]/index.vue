<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 lg:p-8">
    <div class="col-span-1 md:col-span-2 lg:col-span-3">
      <Card>
        <CardHeader>
          <CardTitle>Item Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 class="text-lg font-bold">Acme Deluxe Widget</h3>
              <p class="text-muted-foreground">
                A high-quality widget perfect for all your needs.
              </p>
              <div class="flex items-center gap-2 mt-2">
                <BoxIcon class="w-5 h-5 text-muted-foreground" />
                <span>In Stock: 42</span>
              </div>
              <div class="flex items-center gap-2 mt-2">
                <DollarSignIcon class="w-5 h-5 text-muted-foreground" />
                <span>Purchase Price: $9.99</span>
              </div>
              <div class="flex items-center gap-2 mt-2">
                <DollarSignIcon class="w-5 h-5 text-muted-foreground" />
                <span>Sale Price: $19.99</span>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold">Supplier</h3>
              <div class="flex items-center gap-2 mt-2">
                <BuildingIcon class="w-5 h-5 text-muted-foreground" />
                <span>Acme Inc.</span>
              </div>
              <div class="flex items-center gap-2 mt-2">
                <MailOpenIcon class="w-5 h-5 text-muted-foreground" />
                <span>support@acme.com</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <div class="col-span-1 md:col-span-2 lg:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-04-15</TableCell>
                <TableCell>sale</TableCell>
                <TableCell>5</TableCell>
                <TableCell>$19.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-03-01</TableCell>
                <TableCell>purchase</TableCell>
                <TableCell>50</TableCell>
                <TableCell>$9.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-05-01</TableCell>
                <TableCell>sale</TableCell>
                <TableCell>10</TableCell>
                <TableCell>$19.99</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>

    <div class="col-span-1 md:col-span-1 lg:col-span-1">
      <Card>
        <CardHeader>
          <CardTitle>Item Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid gap-4">
            <div class="grid gap-2">
              <Label for="proof-of-purchase">Proof of Purchase</Label>
              <Input type="file" id="proof-of-purchase" />
            </div>
            <div class="grid gap-2">
              <Label for="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="This is a high-quality widget that has been very popular with our customers."
              />
            </div>
            <div class="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup></script>