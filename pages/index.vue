<script setup lang="ts">
definePageMeta({ auth: false });

const { status } = useAuth();

const getStartedLink = computed(() => {
    if (status.value === 'authenticated') {
        return '/calendars';
    }

    return '/user/login';
});
</script>

<template>
    <div>
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">
                    {{ $t('homepage.welcome') }}
                </h1>
                <p class="py-6">
                    {{ $t('homepage.message') }}
                </p>
                <NuxtLink :to="getStartedLink" class="btn btn-primary">
                    {{ $t('homepage.getStarted') }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
