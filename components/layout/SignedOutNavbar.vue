<script setup lang="ts">
</script>

<template>
    <div class="navbar bg-base-100 rounded-full shadow-md z-[100]">
        <div class="flex-1">
            <NuxtLink to="/" class="btn btn-ghost normal-case text-xl rounded-full">
                <h1>Book a spot!</h1>
            </NuxtLink>
        </div>
        <div class="flex-none gap-2">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <NuxtLink to="/user/login">
                        {{ $t('navigation.signIn') }}!
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
