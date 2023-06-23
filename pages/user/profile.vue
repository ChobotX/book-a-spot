<script setup lang="ts">
const { data } = useAuth();
const name = computed(() => data.value?.user?.name ?? data.value?.user?.email ?? 'user');
</script>

<template>
    <div>
        <h2>{{ $t('user.profile.title') }}</h2>
        <p>{{ $t('user.profile.hi') }}, {{ name }}!</p>
    </div>
</template>
