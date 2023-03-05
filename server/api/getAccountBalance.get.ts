export default defineEventHandler(async (event) => {
    const params: any = getQuery(event);
    if (!params.address) {
      throw createError({
        statusCode: 400,
        statusMessage: "There should be an address in the parameters",
      });
    }
    const config = useRuntimeConfig();

    const url = `https://api.etherscan.io/api?module=account&action=balance&address=${params.address}&tag=latest&apikey=${config.etherscanApiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
        statusCode: 200,
        body: data,
    };
});