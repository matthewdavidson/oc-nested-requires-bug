This repo demonstrates [oc's](https://github.com/opentable/oc) inability to handle
nested path's in non local require calls, e.g:

```js
var foo = require('foo');       // works
var bar = require('foo/bar');   // doesn't work
``` 

To reproduce:

```sh
npm install
npm start
```
