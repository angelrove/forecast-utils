# Linter, formatter, JS check

```sh
bunx tsc # JS errors
bunx biome lint
bunx biome format --write
```

# Publish NPM package

```bash
# generate types for JSDoc (.d.ts) in 'dist/types'
npx ts

# commit
commit
gp

# update version
npm version patch

# publish NPM package
npm publish --access public # only first time
npm publish # subsequent times
```

# Test NPM package

```bash
bun link # en la ruta del paquete
bun link @angelrove/forecast # en la ruta del proyecto que lo usa
```

# JSDoc: generar documentación

```bash
# generate documentation to README.md. See 'package.json'
bun run docs:md
```
