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
                    <h1 class="text-5xl font-bold mb-1 ml-3">Dashboard</h1>
                    <Button variant="outline">
                <FileIcon class="w-0 h-4 mr-0" />
                Generate Report
              </Button>
                    <div class="relative ml-auto flex-1 md:grow-0">
                        <div class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search transactions..."
                            class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" class="overflow-hidden rounded-full">
                                <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                                    width="36" height="36" alt="Avatar" class="overflow-hidden rounded-full"
                                    style="aspect-ratio: 36/36; object-fit: cover" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <NuxtLink to="/auth/login">
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </NuxtLink>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
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
                                <CardTitle class="text-sm font-medium">Total Client</CardTitle>
                                <CircleCheckIcon class="w-4 h-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">30</div>
                                <p class="text-xs text-muted-foreground"> +2.1% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader class="flex flex-row items-center justify-between pb-2">
                                <CardTitle class="text-sm font-medium">Total Bills </CardTitle>
                                <CircleAlertIcon class="w-4 h-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">247</div>
                                <p class="text-xs text-muted-foreground">+1.9% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader class="flex flex-row items-center justify-between pb-2">
                                <CardTitle class="text-sm font-medium">Invoice Total Record</CardTitle>
                                <AlarmClockIcon class="w-4 h-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">50</div>
                                <p class="text-xs text-muted-foreground">+2 items from last month</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Client History</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ClientID</TableHead>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Phone</TableHead>
                                            <TableHead>Desciption</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>1003</TableCell>
                                            <TableCell>ali</TableCell>
                                            <TableCell>02343044324</TableCell>
                                            <TableCell>$19.99 abc </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>1005</TableCell>
                                            <TableCell>amir</TableCell>
                                            <TableCell>5432413443</TableCell>
                                            <TableCell>$9.99</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>1006</TableCell>
                                            <TableCell>asif</TableCell>
                                            <TableCell>104234234</TableCell>
                                            <TableCell>$19.99</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
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
                        <!-- <Card>
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
                        </Card> -->
                    </div>
                </main>
                <!-- Additional components can be added here based on the active page -->
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
            activePage: 'dashboard',
        };
    },
    methods: {
        setActive(page) {
            this.activePage = page;
        },
        isActive(page) {
            return this.activePage === page;
        },
        logout() {
            alert('Logged out!');
        },
    },
};
</script>

<style scoped>
/* Mobile sidebar styles */
@media (max-width: 768px) {
    aside {
        width: 16rem;
        position: fixed;
        z-index: 40;
        height: 100%;
    }

    main {
        margin-left: 0;
    }
}
</style>
