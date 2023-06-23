<script setup lang="ts">
const { signIn } = useAuth();

definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/calendars',
    },
});

const email = ref('');
</script>

<template>
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
                <div class="form-control">
                    <input
                        v-model="email"
                        type="text"
                        :placeholder="$t('user.login.email')"
                        class="input input-bordered"
                    />
                </div>
                <div class="form-control mt-5">
                    <button class="btn btn-primary" @click="signIn('email', { email })">
                        {{ $t('user.login.signIn') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
