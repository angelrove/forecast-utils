# Publish package

```bash
# revision and generate types for JSDoc
npx ts

# commit
commit
gp

# update version
npm version patch

# publish
npm publish  --access public # only first time
npm publish
```

# Test NPM package

```bash
bun link # en la ruta del paquete
bun link @angelrove/forecast # en la ruta del proyecto
bun unlink @angelrove/forecast # en la ruta del paquete
```

# Generate docs

```bash
bun run docs:md
```