export default defineEventHandler(async (event) => {
  const params: any = getQuery(event);
  console.log(params);
  
  if (!params.address || (params.network !== "eth" && params.network !== "bnb")) {
    throw createError({
      statusCode: 400,
      statusMessage: "There should be an address in the parameters",
    });
  }
  console.log(params.address);
  console.log(params.network);
  
  
  const config = useRuntimeConfig();
  let url;
  if (params.network === "eth") {
    url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${params.address}&apikey=${config.etherscanApiKey}`;
  } else if (params.network === "bnb") {
    url = `https://api.bscscan.com/api?module=contract&action=getabi&address=${params.address}&apikey=${config.bscscanApiKey}`;
  } else { return ;}

  const response = await fetch(url);
  const data = await response.json();
  return {
    statusCode: 200,
    body: data,
  };
});
