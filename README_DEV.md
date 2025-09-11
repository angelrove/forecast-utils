
# JSDoc: Generate doc.

```bash
# See: 'package.json'
# Remember add new files to - jsdoc-files.txt -!!!"
bun run docs:md
```

# Compile

```bash
# generate types for JSDoc ('.d.ts' files) in 'dist/types'. See 'tsconfig.json'
rm -rf dist && bunx tsc
```

# Linter, formatter

```sh
bunx biome lint
bunx biome format --write
```

# Develop: Test NPM package

```bash
# en la ruta del paquete
npm link

# en la ruta el proyecto
npm link @angelrove/forecast-utils
npm unlink @angelrove/forecast-utils # eliminar carpeta de 'node_modules'
```

# Publish NPM package

```bash
commit
npm version patch
npm publish # 'with --access public' only first time
```
