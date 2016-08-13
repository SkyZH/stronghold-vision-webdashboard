# stronghold-vision-webdashboard

[![Dependency Status](https://david-dm.org/ZodiacEFZ/stronghold-vision-webdashboard.svg)](https://david-dm.org/ZodiacEFZ/stronghold-vision-webdashboard)
[![devDependency Status](https://david-dm.org/ZodiacEFZ/stronghold-vision-webdashboard/dev-status.svg)](https://david-dm.org/ZodiacEFZ/stronghold-vision-webdashboard#info=devDependencies)
[![Build Status](https://travis-ci.org/ZodiacEFZ/stronghold-vision-webdashboard.svg?branch=master)](https://travis-ci.org/ZodiacEFZ/stronghold-vision-webdashboard)

Vision dashboard for Team 9036.

We are so thankful to the open source project [pynetworktables2js](https://github.com/robotpy/pynetworktables2js), which enables our WebDashboard to communicate with NetworkTables using Javascript. We've edited its source code to adapt it to RxJS and Angular2. [Revised networktables.js](https://github.com/ZodiacEFZ/stronghold-vision-webdashboard/blob/master/vendor/networktables.js)

# License

MIT

# Build & Deploy your own version

```
git clone https://github.com/ZodiacEFZ/stronghold-vision-webdashboard && cd stronghold-vision-webdashboard
npm install

# Do your stuff here

npm run build
```

Then copy files in `/dist` into your device.

# Deploy Team 9036's Vision Dashboard

```
git clone https://github.com/ZodiacEFZ/stronghold-vision-webdashboard && cd stronghold-vision-webdashboard
git checkout deploy
```

Then serve files in this directory as http server.
