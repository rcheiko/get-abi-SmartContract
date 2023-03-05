<template>
    <div>
        <h1 class="text-2xl font-semibold">Hello</h1>
        <p>How are you</p>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
            Username
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" name="address" v-model="address" placeholder="0x.....">
        <button @click="validate()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Valider
        </button>
        <div v-if="balance">
            <p>Balance: {{ balance }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'base.meta.home.title',
    description: 'base.meta.home.description'
});

const address = ref('');
const balance = ref('');

const validate = async () => {
    const { data } = await useFetch('/api/getAccountBalance', {
        method: 'GET',
        params: { address: address.value },
        headers: { 'Content-Type': 'application/json' }
    });
    console.log(data.value);
    balance.value = data.value?.body.result;
    console.log(balance.value);
    
};
</script>