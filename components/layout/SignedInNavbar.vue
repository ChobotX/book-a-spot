<script setup lang="ts">
const { signOut } = useAuth();
</script>

<template>
    <div class="navbar bg-base-100 shadow-md z-[100]">
        <div class="container mx-auto max-w-screen-md">
            <div class="flex-1">
                <NuxtLink to="/" class="btn btn-ghost normal-case text-xl rounded-full">
                    <h1>Book a spot!</h1>
                </NuxtLink>
            </div>
            <div class="flex-none gap-2">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placekitten.com/200/300" alt="" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <NuxtLink to="/user/profile">
                                {{ $t('navigation.profile') }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/user/settings">
                                {{ $t('navigation.settings') }}
                            </NuxtLink>
                        </li>
                        <li><a @click="signOut()">{{ $t('navigation.signOut') }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
