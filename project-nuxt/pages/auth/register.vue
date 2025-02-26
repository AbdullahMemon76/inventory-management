<template>
  <div class="flex items-stretch min-h-screen px-4">
    <div class="mx-auto my-12 max-w-sm w-full">
      <div class="space-y-6">
        <div class="space-y-2">
          <h1 class="text-3xl font-extrabold tracking-tighter">
            Welcome to Our Platform
          </h1>
          <h2 class="text-2xl font-semibold tracking-tighter">Register</h2>
          <p class="text-gray-500 dark:text-gray-400">Let&apos;s get you set up.</p>
        </div>
        <form @submit="onSubmit" class="space-y-10">
          <div class="space-y-2">
            <div class="space-y-2">
              <Label for="email">Email</Label>
              <Input
                id="email"
                v-model="email"
                v-bind="emailAttrs"
                type="email"
                placeholder="john@example.com"
              />
              <p class="text-red-500">{{ errors.email }}</p>
            </div>
            <div class="space-y-2">
              <Label for="password">Password</Label>
              <Input
                id="password"
                v-model="password"
                v-bind="passwordAttrs"
                type="password"
              />
              <p class="text-red-500">{{ errors.password }}</p>
            </div>
            <div class="space-y-2">
              <Label for="fullname">Full Name</Label>
              <Input
                id="fullname"
                v-model="fullname"
                v-bind="fullnameAttrs"
                placeholder="Enter your full name"
              />
              <p class="text-red-500">{{ errors.fullname }}</p>
            </div>
            <div class="space-y-2">
              <Label for="lastname">Last Name</Label>
              <Input
                id="lastname"
                v-model="lastname"
                v-bind="lastnameAttrs"
                placeholder="Enter your last name"
              />
              <p class="text-red-500">{{ errors.lastname }}</p>
            </div>
            <!-- <div class="space-y-2">
              <Label for="bio">Bio</Label>
              <Textarea
                id="bio"
                v-model="bio"
                v-bind="bioAttrs"
                placeholder="Enter your bio"
                class="min-h-[100px]"
              />
              <p class="text-red-500">{{ errors.bio }}</p>
            </div> -->
          </div>
          <Button class="w-full" type="submit">Register</Button>
          <NuxtLink
            href="/auth/login"
            class="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white h-10 w-full px-4 text-sm shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Continue With Sign in
          </NuxtLink>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

definePageMeta({
  layout: "auth",
});

// Define the validation schema using yup
const validationSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  fullname: yup.string().required("Full Name is required"),
  lastname: yup.string().required("Last Name is required"),
  bio: yup.string().required().max(300, "Bio cannot exceed 300 characters"),
});

// Set up the form
const { errors, handleSubmit, defineField } = useForm({
  validationSchema,
});

// Define fields and attributes
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const [fullname, fullnameAttrs] = defineField("fullname");
const [lastname, lastnameAttrs] = defineField("lastname");
const [bio, bioAttrs] = defineField("bio");

// Form submit handler
const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  // You might want to send the form data to your API here
});
</script>
<style scoped></style>
