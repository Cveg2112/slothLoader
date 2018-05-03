# slothLoader
Another lazyloading plugin from an uninspired mind.

## blah
Add the plugin code to your site. Then call slothLoader like:
```
$('body').slothLoader({
    'offset': $(window).height(), // adjust this value to whatever you want
    'elem': '.lazy', // looks for this class to lazy load [default = .lazy-loadable]
    'dataSrc': 'lazy' // define own data attr [default = lazy]
});
```

Your HTML should be similar to:

TBC
