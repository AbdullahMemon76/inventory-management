<template>
  <div class="flex items-stretch min-h-screen px-4">
    <div class="mx-auto my-12 max-w-sm w-full">
      <div class="space-y-6">
        <div class="space-y-2">
          <h1 class="text-3xl font-extrabold tracking-tighter">
            Welcome Again to Our Platform
          </h1>

          <h2 class="text-2xl font-semibold tracking-tighter">Login</h2>
        </div>
        <form @submit="onSubmit" class="space-y-10">
          <div class="space-y-2">
            <div class="space-y-2">
              <Label for="email">Email</Label>
              <Input
                id="email"
                v-model="email"
                v-bind="emailAttrs"
                type="text"
                placeholder="john@example.com"
              />
              <p class="text-red-500">
                {{ errors?.email }}
              </p>
            </div>
            <div class="space-y-2">
              <Label for="password">Password</Label>
              <!-- neccessary for tracking and syncing the input with form-lib's state  -->
              <!-- attrs, and v-model tracking  -->
              <Input
                id="password"
                v-bind="passwordAttrs"
                v-model="password"
                type="password"
              />
              <p class="text-red-500">
                {{ errors?.password }}
              </p>
            </div>
          </div>
          <Button class="w-full">Login</Button>
          <NuxtLink
            href="/auth/register"
            class="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white h-10 w-full px-4 text-sm shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Continue With Registration
          </NuxtLink>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { LoginFormValidation } from "@/lib/validations/forms/index";
type LoginForm = {
  email: string;
  password: string;
};

definePageMeta({
  layout: "auth",
});

const { errors, submitForm, defineField, handleSubmit } = useForm<LoginForm>({
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema: LoginFormValidation,
});

const onSubmit = handleSubmit((values: LoginForm) => {
  alert(JSON.stringify(values, null, 2));
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
</script>

<style scoped></style>
