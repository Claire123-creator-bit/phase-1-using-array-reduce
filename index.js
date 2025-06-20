const batteryBatches = [5, 8, 12, 6];
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(`Total batteries: ${totalBatteries}`);
