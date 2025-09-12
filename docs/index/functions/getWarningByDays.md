[**@angelrove/forecast-utils**](../../README.md)

***

[@angelrove/forecast-utils](../../README.md) / [index](../README.md) / getWarningByDays

# Function: getWarningByDays()

> **getWarningByDays**(`precipitationSumToday`, `precipitationSumTomorrow`, `showersSumToday`, `showersSumTomorrow`): `null` \| \{ `day`: `number`; `level`: `string`; `levelNum`: `number`; `message`: `string`; \}

Defined in: [utils/warning.js:30](https://github.com/angelrove/forecast-utils/blob/d9298a6163fd32583e182ae2f9197ab3aae26c2c/src/utils/warning.js#L30)

Get warning by today and tomorrow

## Parameters

### precipitationSumToday

`number`

### precipitationSumTomorrow

`number`

### showersSumToday

`number`

### showersSumTomorrow

`number`

## Returns

`null` \| \{ `day`: `number`; `level`: `string`; `levelNum`: `number`; `message`: `string`; \}

{{ levelNum: number, level: string, message: string, day: number } | null}
