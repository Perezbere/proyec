console.log('Webpack Working!!! 📦'),
  (function () {
    let o =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : 'No message given';
    console.log(o);
  })(),
  (async function () {
    console.log('Calling');
    const o = await new Promise((o) => {
      setTimeout(() => {
        o('resolved');
      }, 2e3);
    });
    console.log(o);
  })();
