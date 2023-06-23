<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/calendars',
    },
});
</script>

<template>
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body text-center">
                <p>
                    {{ $t('user.verifyEmail.message') }}
                </p>
                <NuxtLink class="btn btn-text mt-3" to="/">
                    {{ $t('user.verifyEmail.homepage') }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
