
```
npm install -g cordova ionic
ionic start blue blank
cd blue/
ionic g page home 
ionic cordova plugin add cordova-plugin-bluetooth-serial
npm install --save @ionic-native/bluetooth-serial
ionic cordova plugins
ionic cordova platform add browser
```

home.html >> add in ion-content for testing
add.module.ts >> import bs, add in providers list
home.ts >> import bs, add arg in constructor,call bs.write method