const si = require('systeminformation');

async function getSystemInformation() {
    const system = await si.system();
    const bios = await si.bios();
    const baseboard = await si.baseboard();
    const chassis = await si.chassis();
    return { system, bios, baseboard, chassis };
}


async function getCpuInformation() {
    const cpu = await si.cpu();
    const cpuSpeed = await si.cpu(); // Obtener información de CPU incluye velocidades
    const cpuTemperature = await si.cpuTemperature();
    return { cpu, cpuSpeed: cpu.speed, cpuTemperature };
}
async function getMemoryInformation() {
    const mem = await si.mem();
    const memLayout = await si.memLayout();
    return { mem, memLayout };
}

async function getBatteryInformation() {
    const battery = await si.battery();
    return { battery };
}

async function getGraphicsInformation() {
    const graphics = await si.graphics();
    return { graphics };
}

async function getOsInformation() {
    const osInfo = await si.osInfo();
    const time = await si.time();
    return { osInfo, time };
}

async function getDiskInformation() {
    const diskLayout = await si.diskLayout();
    const diskUsage = await si.fsSize();
    return { diskLayout, diskUsage };
}

async function getNetworkInformation() {
    const networkInterfaces = await si.networkInterfaces();
    const networkStats = await si.networkStats();
    return { networkInterfaces, networkStats };
}

async function getFullInformation() {
    const system = await getSystemInformation();
    const cpu = await getCpuInformation();
    const memory = await getMemoryInformation();
    const battery = await getBatteryInformation();
    const graphics = await getGraphicsInformation();
    const os = await getOsInformation();
    const disk = await getDiskInformation();
    const network = await getNetworkInformation();
    
    return { system, cpu, memory, battery, graphics, os, disk, network };
}

module.exports = {
    getSystemInformation,
    getCpuInformation,
    getMemoryInformation,
    getBatteryInformation,
    getGraphicsInformation,
    getOsInformation,
    getDiskInformation,
    getNetworkInformation,
    getFullInformation
};
