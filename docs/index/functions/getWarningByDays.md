[**@angelrove/forecast-utils**](../../README.md)

***

[@angelrove/forecast-utils](../../modules.md) / [index](../README.md) / getWarningByDays

# Function: getWarningByDays()

> **getWarningByDays**(`precipitationSumToday`, `precipitationSumTomorrow`, `showersSumToday`, `showersSumTomorrow`): `null` \| \{ `day`: `number`; `level`: `string`; `levelNum`: `number`; `message`: `string`; \}

Defined in: [utils/warning.js:30](https://github.com/angelrove/forecast-utils/blob/24fb242ac959e4d78950a4cc0b4469220f80b468/src/utils/warning.js#L30)

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
