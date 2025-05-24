# Linter, formatter, JS check

```sh
bunx tsc # JS errors
bunx biome lint
bunx biome format --write
```

# Generate doc (JSDoc).

```bash
# See: 'package.json', 'jsdoc-files.txt'
bun run docs:md
```

# Dev: test NPM package in app

```bash
bun link # en la ruta del paquete
bun link @angelrove/forecast # en la ruta del proyecto que lo usa
bun unlink @angelrove/forecast # en la ruta del paquete o eliminar carpeta de 'node_modules'
```

# Publish NPM package

```bash
# generate types for JSDoc (.d.ts) in 'dist/types'
npx ts

# commit
commit

# version update
npm version patch

# publish package
npm publish --access public # only first time
npm publish # subsequent times
```
