<template>
  <div class="flex justify-center">
    <nav
      class="flex fixed border w-[98%] shadow-md my-2 bg-white z-50 rounded-lg gap-9 py-5 px-7 items-center justify-between"
    >
      <div class="font-bold text-2xl">LOGO</div>
      <div class="flex gap-8">
        <NuxtLink class="hover:opacity-70 transition-all cursor-pointer" href="/"
          >Home</NuxtLink
        >
        <NuxtLink class="hover:opacity-70 transition-all cursor-pointer" href="/"
          >About Us</NuxtLink
        >
      </div>
      <div class="">
        <Button @click="pushToRegister" href="/">Register</Button>
      </div>
    </nav>
  </div>
  <div class="flex-1">
    <section class="w-full h-[100vh] relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 animate-gradient-xy"
      />
      <div
        class="container h-full flex items-center justify-center px-4 md:px-6 relative z-10"
      >
        <div class="max-w-xl space-y-6 text-center">
          <h1
            class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center"
          >
            Unleash Your Digital Potential
          </h1>
          <p class="text-muted-foreground md:text-xl">
            Discover the power of our cutting-edge platform and transform your business.
          </p>
          <div class="flex justify-center">
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-24 md:pt-24 lg:pt-32">
      <div class="container px-4 md:px-6">
        <div class="flex flex-col gap-4 min-[400px]:gap-8]">
          <div class="space-y-2">
            <div
              class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
            >
              New Features
            </div>
            <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Introducing the Next Generation of Chat
            </h1>
            <p
              class="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Securely build, deploy, and scale the best web experiences. Let your team
              focus on shipping features instead of managing infrastructure with automated
              CI/CD, built-in testing, and integrated collaboration.
            </p>
          </div>
          <div class="flex flex-col gap-2 min-[400px]:flex-row">
            <NuxtLink
              to="#"
              class="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Get Started
            </NuxtLink>
            <NuxtLink
              to="#"
              class="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            >
              Contact Sales
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-12 md:py-24 lg:py-32 border-t">
      <div
        class="container grid items-center justify-center gap-4 px-4 text-center md:px-6"
      >
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Experience the workflow the best frontend teams love.
          </h2>
          <p
            class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
          >
            Let your team focus on shipping features instead of managing infrastructure
            with automated CI/CD.
          </p>
        </div>
        <div class="mx-auto w-full max-w-sm space-y-2">
          <form class="flex space-x-2">
            <Input type="email" placeholder="Enter your email" class="max-w-lg flex-1" />
            <Button type="submit">Sign Up</Button>
          </form>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            Sign up to get notified when we launch.
            <NuxtLink to="#" class="underline underline-offset-2"
              >Terms &amp; Conditions</NuxtLink
            >
          </p>
        </div>
      </div>
    </section>

    <section class="w-full py-12 md:py-24 lg:py-32 border-t">
      <div
        class="container grid items-center justify-center gap-4 px-4 text-center md:px-6"
      >
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experience the workflow the best frontend teams love.
          </h2>
          <p
            class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
          >
            Let your team focus on shipping features instead of managing infrastructure
            with automated CI/CD.
          </p>
        </div>
        <div class="mx-auto w-full max-w-sm space-y-2">
          <form class="flex space-x-2">
            <Input type="email" placeholder="Enter your email" class="max-w-lg flex-1" />
            <Button type="submit">Sign Up</Button>
          </form>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            Sign up to get notified when we launch.
            <NuxtLink to="#" class="underline underline-offset-2"
              >Terms &amp; Conditions</NuxtLink
            >
          </p>
        </div>
      </div>
    </section>
  </div>

  <footer
    class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
  >
    <p class="text-xs text-gray-500 dark:text-gray-400">
      &copy; 2024 Acme Inc. All rights reserved.
    </p>
    <nav class="sm:ml-auto flex gap-4 sm:gap-6">
      <NuxtLink to="#" class="text-xs hover:underline underline-offset-4"
        >Terms of Service</NuxtLink
      >
      <NuxtLink to="#" class="text-xs hover:underline underline-offset-4"
        >Privacy</NuxtLink
      >
    </nav>
  </footer>
</template>
<script setup>
definePageMeta({
  layout: "default",
});

// import type { MenuIcon } from "lucide-vue-next";

const router = useRouter();

function pushToRegister() {
  router.push("/auth/register");
}

// No imports needed due to Nuxt 3's auto-import functionality
</script>
