
# TypeDoc

```bash
bun run docs
```

# Linter, formatter

```sh
bunx biome lint
bunx biome format --write
```

# --------------------------------------------------
# Develop: test NPM package with "Yalc"

```bash
#----------------------
# Instalar Yalc
npm i -g yalc

#----------------------
# Development

# Publish: ruta del paquete
bunx tsc && yalc publish

# Update json: ruta el proyecto
yalc add @angelrove/forecast-utils && bun update

# Actualizar cambios ---
  # ruta del paquete
  bunx tsc && yalc publish --push
  # ruta del proyecto
  #bun update
  yalc remove --all && bun update && yalc add @angelrove/forecast-utils && bun update

# Volver a usar la versión de producción: limpiar las referencias locales.
# ruta del proyecto
yalc remove --all && bun update
```

# --------------------------------------------------
# Publish package

Si da error de permisos, ejecutar: `npm login`

```bash
# Compile
rm -rf dist && bunx tsc # generate types for JSDoc ('.d.ts' files) in 'dist/types'. See 'tsconfig.json'
commit
npm version patch && npm publish # 'with --access public' only first time
gp
```

# --------------------------------------------------
# NOTES

- [npm version](https://docs.npmjs.com/cli/v8/commands/npm-version)

```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]

npm version patch -m "Actualizar a %s por ciertas razones"
```
