Ridiculously simplistic node/fetch/json/podyParser example
=========

This was started with a question:

> If I use ☑ fetch to send a post request with contents in the body ==> ☑ receive
 the post request ==> ☐ then try to read the contents of that request with body
 parser ==> ☒ nothing is logged

So, what do you have to do to make this happen? It's probably this line:
```js
    headers: {
      'content-type': "application/json"
    }
```

Otherwise, it will get submitted as standard URL encoded. But you're probably sending JSON.

So we need to tell the server we're sending JSON.

```js
  fetch("/processFetch", {
    method: "POST",
    body: JSON.stringify({
      name: name
    }),
    headers: {
      'content-type': "application/json"
    }
  })
```


Full example if you clone / npm install / node app.js
