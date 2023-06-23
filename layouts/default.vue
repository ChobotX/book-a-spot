<script setup lang="ts">
import SignedInNavbar from '~/components/layout/SignedInNavbar.vue';
import SignedOutNavbar from '~/components/layout/SignedOutNavbar.vue';

const { status } = useAuth();
</script>

<template>
    <div class="flex flex-col h-full">
        <SignedInNavbar v-if="status === 'authenticated'" />
        <SignedOutNavbar v-else />
        <div class="container mx-auto max-w-screen-md flex flex-col flex-grow">
            <div class="flex-grow">
                <div class="hero h-full">
                    <slot></slot>
                </div>
            </div>
        </div>
        <footer class="footer items-center justify-center p-4 bg-neutral text-neutral-content">
            <div class="items-center grid-flow-col">
                <p>{{ $t('common.createdBy') }} Ondřej Cháb - 2023</p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
html, body, #__nuxt {
    @apply h-full;
}
</style>
