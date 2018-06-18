# Chrome's software-rendering-list

Interested in Chrome's blacklist for hardware acceleration, maybe because you're
using Electron and want a more up-to-date list of GPUs that shouldn't be used for
hardware acceleration?

This module downloads the latest GPU blacklist from Chrome's source and makes it
available as an array.

```js
const blacklist = require('chrome-software-rendering-list')

for (const gpu of blacklist) {
  console.log(gpu)
}
```

## Format

Each entry in the array has the following format:

```json
{
  "id": 1,
  "description": "ATI Radeon X1900 is not compatible with WebGL on the Mac",
  "webkit_bugs": [47028],
  "os": {
    "type": "macosx"
  },
  "vendor_id": "0x1002",
  "device_id": ["0x7249"],
  "multi_gpu_category": "any",
  "features": [
    "accelerated_webgl",
    "flash3d",
    "flash_stage3d",
    "gpu_rasterization"
  ]
}
```

## License
MIT, please see LICENSE.md for details
