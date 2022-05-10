export async function getInventory() {
   const response = await fetch('/api/get');
   
   return await response.json();
}