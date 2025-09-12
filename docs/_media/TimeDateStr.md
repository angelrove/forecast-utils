[**@angelrove/forecast-utils**](../../README.md)

***

[@angelrove/forecast-utils](../../modules.md) / [index](../README.md) / TimeDateStr

# Variable: TimeDateStr

> `const` **TimeDateStr**: `object`

Defined in: [utils/timehelpers.js:10](https://github.com/angelrove/forecast-utils/blob/24fb242ac959e4d78950a4cc0b4469220f80b468/src/utils/timehelpers.js#L10)

TimeDateStr.

## Type Declaration

### dateFormat()

> **dateFormat**: (`date?`) => `string`

Returns a date as a formated string.

#### Parameters

##### date?

`Date` = `...`

La fecha a formatear.

#### Returns

`string`

La fecha formateada.

### getLocalTimeFromTz()

> **getLocalTimeFromTz**: (`timeZone`, `date?`) => `string`

Return the local time string from a given timezone.

#### Parameters

##### timeZone

`string`

The timezone string (e.g., 'America/New_York').

##### date?

The date object to format. Defaults to the current date.

`number` | `Date`

#### Returns

`string`

- The formatted local time string.

### nowString()

> **nowString**: (`sec`) => `string`

Returns a now time as a formated string.

#### Parameters

##### sec

`boolean` = `false`

#### Returns

`string`

now time as a formated string

### timeString()

> **timeString**: (`date?`, `sec?`) => `string`

Returns a time as a formated string.

#### Parameters

##### date?

`Date` = `...`

##### sec?

`boolean` = `false`

#### Returns

`string`

La fecha formateada.
