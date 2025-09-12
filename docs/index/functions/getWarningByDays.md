[**@angelrove/forecast-utils**](../../README.md)

***

[@angelrove/forecast-utils](../../README.md) / [index](../README.md) / getWarningByDays

# Function: getWarningByDays()

> **getWarningByDays**(`precipitationSumToday`, `precipitationSumTomorrow`, `showersSumToday`, `showersSumTomorrow`): `null` \| \{ `day`: `number`; `level`: `string`; `levelNum`: `number`; `message`: `string`; \}

Defined in: [utils/warning.js:30](https://github.com/angelrove/forecast-utils/blob/c8671c08665caf44781ca994161c6a147044eefe/src/utils/warning.js#L30)

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
