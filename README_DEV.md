
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

# Publish: ruta del paquete
bunx tsc && yalc publish

# Update json: ruta el proyecto
yalc add @angelrove/forecast-utils && bun update

# Actualizar cambios
  # ruta del paquete
  bunx tsc && yalc publish --push
  # ruta del proyecto
  #bun update
  yalc remove --all && bun update && yalc add @angelrove/forecast-utils && bun update

# Volver a usar la versión real: limpiar las referencias locales.
# ruta del proyecto
yalc remove --all && bun update
```

# Publish NPM package

```bash
rm -rf dist && bunx tsc
commit
npm version patch
npm publish # 'with --access public' only first time
# si da error de permisos, ejecutar: npm login
gp
```
