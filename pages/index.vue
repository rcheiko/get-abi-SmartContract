<template>
    <div>
        <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                Address for balance
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" name="address" v-model="addressBalance" placeholder="0x.....">
            <button @click="getAccountBalance()"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Valider
            </button>
            <div v-if="balance">
                <p>Balance: {{ balance }}</p>
            </div>
        </div>

        <select class="mt-6 mb-2" name="network" v-model="network">
                <option value="eth">eth</option>
                <option value="bnb">bnb</option>
            </select>
        <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="abi">
                Address for ABI
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" name="abi" v-model="addressAbi" placeholder="0x.....">
            <button @click="getContractAbi()"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Valider
            </button>
            <div v-if="abi">
                <p>Abi: {{ abi }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'base.meta.home.title',
    description: 'base.meta.home.description'
});

const addressBalance = ref('');
const balance = ref('');
const addressAbi = ref('');
const abi = ref('');
const network = ref('eth')

const getAccountBalance = async () => {
    const { data } = await useFetch('/api/getAccountBalance', {
        method: 'GET',
        params: { address: addressBalance.value },
        headers: { 'Content-Type': 'application/json' }
    });
    console.log(data.value);
    balance.value = data.value?.body.result;
    console.log(balance.value);
};

const getContractAbi = async () => {
    const { data } = await useFetch('/api/getContractAbi', {
        method: 'GET',
        params: { address: addressAbi.value, network: network.value },
        headers: { 'Content-Type': 'application/json' }
    });
    console.log(data.value);
    abi.value = data.value?.body.result;
    console.log(abi.value);
};
</script>