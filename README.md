# slothLoader
Another lazyloading plugin from an uninspired mind.

## its e-z to be lay-z
Add the plugin code to your site. Then call slothLoader like:
```
$('body').slothLoader({
    'offset': $(window).height(), // default setting loads images as soon as they scroll/load into the window view
    'elem': '.lazy', // looks for this class to lazy load [default = .lazy-loadable]
    'dataSrc': 'lazy' // define own data attr [default = lazy]
});
```

You can use this to load any element that has the class `lazy` and the `data-lazy=""` attrs, for example:

### < img > tag:
```
<img src="" data-lazy="https://via.placeholder.com/500x300" class="lazy">
```

### < img > tag with srcset:
If srcset is set on an image (even if it's empty), the script will instead `data-lazy` into the srcset attribute.
```
<img src="https://via.placeholder.com/100x100" srcset="" data-lazy="https://via.placeholder.com/1000x550 1000w, https://via.placeholder.com/700x350 700w" class="lazy">
```

### background image:
On an element that is not either a source or img tag, `data-lazy` will be loaded into `style="background-image: url( [image] );"`
```
<div class="lazy" data-lazy="https://via.placeholder.com/500x300"></div>
```

### < picture > tag with < source > elements:
Will loop through all the existing source elements that have the class set

```
<picture>
    <source class="lazy" srcset="" data-lazy="https://via.placeholder.com/700x350" media="(min-width: 769px)">
    <source class="lazy" srcset="" data-lazy="https://via.placeholder.com/300x150" media="(min-width: 376px)">
    <img srcset="https://via.placeholder.com/100x100">
</picture>
```

    
    
