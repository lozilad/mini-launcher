const { contextBridge } = require('electron');
const { shell }  = require('electron');

const sampleItemPath = ['C:Users/bao.doan/Desktop/code/mini-launcher/launcher-app/public', 'logo192.png'].join('/');

console.log('HELLO I AM PRELOAD.JS');

contextBridge.exposeInMainWorld('AppPreloadedAPI', {
  openExternal: (path) => {
    console.log('[AppPreloadedAPI] openExternal', path);
    shell.openExternal(
      path
    );
  },
  showItemInFolder: (url) => {
    console.log('[AppPreloadedAPI] showItemInFolder', url);
    shell.showItemInFolder(
      url
    );
  }
})