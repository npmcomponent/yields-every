*This repository is a mirror of the [component](http://component.io) module [yields/every](http://github.com/yields/every). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-every`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# every

  Array every utility.

## Installation

    $ component install yields/every

## API

### every(arr, fn)

```javascript
every([1, 2, 3], function (el, i) {
  return 'number' == typeof el;
});
// > true
```

## License

  MIT
