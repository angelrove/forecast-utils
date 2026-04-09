
# TypeDoc

```bash
bun run docs
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

# Develop: test NPM package with "Yalc"

```bash
#-----------------------------------
# Instalar Yalc
npm i -g yalc

#-----------------------------------
# Development

# En la ruta del paquete
bunx tsc && yalc publish

# En la ruta el proyecto
yalc add @angelrove/forecast-utils && bun update

# Actualizar cambios en el paquete
bunx tsc && yalc publish --push
bun update # en la ruta del proyecto

#-----------------------------------
# Limpiar las referencias locales y volver a usar la versión de NPM real.
yalc remove --all # en la ruta del proyecto
```

# Publish NPM package

```bash
commit
npm version patch
npm publish # 'with --access public' only first time
gp
```
