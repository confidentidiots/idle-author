# Development

## Dependencies

- java 1.7+
- [boot][http://boot-clj.com]
- `npm install -g slimerjs`


## Usage
### Development
1. Start the `dev` task. In a terminal run:

```bash
$ boot dev
```

This will give you a  Hoplon development setup with:

- auto compilation on file changes
- audible warning for compilation success or failures
- auto reload the html page on changes
- Clojurescript REPL

2. Go to http://localhost:8000 in your browser.

3. If you edit and save a file, the task will recompile the code and reload the browser to show the updated version.

4. From a terminal or IDE, connect to nREPL

```
boot repl -c
```

And then

```clojure
(start-repl)
```
Then refresh the browser to connect the websocket repl.

5. Run tests in the background

```
boot auto-test
```

### Production
1. Run the `prod` task. In a terminal run:

```bash
$ boot prod
```

2. The compiled files will be on the `docs/` directory (for serving the site via Github Pages). This will use advanced compilation and prerender the html.