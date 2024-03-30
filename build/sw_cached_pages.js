self.addEventListener('install', e=>{
    console.log("Service worker: Installed")
})

self.addEventListener('activate', e=>{
    console.log("Service worker: Activate")
})