<template>
  <!DOCTYPE html>
  <html data-theme="light" lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <title>Spaces</title>
  </head>
  <body>
  <div class="drawer lg:drawer-open bg-center">
    <input id="my-drawer-2" class="drawer-toggle" type="checkbox" />
    <div class="drawer-content flex flex-col items-center justify-center">

      <label class="btn btn-circle swap swap-rotate drawer-button lg:hidden" for="my-drawer-2">

        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" />

        <!-- hamburger icon -->
        <svg class="swap-off fill-current" height="32" viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>

        <!-- close icon -->
        <svg class="swap-on fill-current" height="32" viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>

      </label>
      <personal-info-form v-if="!isFullFilled" />
      <profile-card v-else />

    </div>
    <side-bar/>
  </div>
  </body>
  </html>
</template>

<script lang="ts" setup>
import ProfileCard from '~/components/misc/ProfileCard.vue'
import SideBar from '~/components/views/Sidebar.vue'
import {useUserStore} from "#imports";
import PersonalInfoForm from '~/components/auth/register/form/PersonalInfoForm.vue'

const { userInfos } = useUserStore();
const isFullFilled = computed(() => userInfos.value?.firstname && userInfos.value?.lastname);
</script>
