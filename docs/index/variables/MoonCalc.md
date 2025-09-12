[**@angelrove/forecast-utils**](../../README.md)

***

[@angelrove/forecast-utils](../../README.md) / [index](../README.md) / MoonCalc

# Variable: MoonCalc

> `const` **MoonCalc**: `object`

Defined in: [astronomy/moon/MoonCalc.ts:20](https://github.com/angelrove/forecast-utils/blob/70e10e7c60236c7ed7f338eae21c685612803c30/src/astronomy/moon/MoonCalc.ts#L20)

MoonCalc.

## Type Declaration

### data()

> **data**: (`latitude`, `longitude`, `date`, `language`) => [`MoonData`](../../Astronomy/type-aliases/MoonData.md)

#### Parameters

##### latitude

`number`

##### longitude

`number`

##### date

`Date` = `...`

##### language

`string` = `"es-ES"`

#### Returns

[`MoonData`](../../Astronomy/type-aliases/MoonData.md)

### dataExt()

> **dataExt**: (`latitude`, `longitude`, `date`, `language`) => [`MoonDataExt`](../../Astronomy/type-aliases/MoonDataExt.md)

Información de la luna para una fecha y hora dadas.
La fecha y hora se devolverán en la zona horaria local.

#### Parameters

##### latitude

`number`

##### longitude

`number`

##### date

`Date` = `...`

##### language

`string` = `"es-ES"`

#### Returns

[`MoonDataExt`](../../Astronomy/type-aliases/MoonDataExt.md)

### emoji()

> **emoji**: (`latitude`, `longitude`, `date`) => `string`

#### Parameters

##### latitude

`number`

##### longitude

`number`

##### date

`Date` = `...`

#### Returns

`string`

### getUpOrDown()

> **getUpOrDown**: (`altitude`, `highest`) => `string`

#### Parameters

##### altitude

`number`

##### highest

`Date`

#### Returns

`string`

### times()

> **times**: (`latitude`, `longitude`, `timezoneId`, `date`) => [`MoonTimes`](../../Astronomy/type-aliases/MoonTimes.md)

#### Parameters

##### latitude

`number`

##### longitude

`number`

##### timezoneId

`string`

##### date

`Date` = `...`

#### Returns

[`MoonTimes`](../../Astronomy/type-aliases/MoonTimes.md)
