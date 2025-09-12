[**@angelrove/forecast-utils**](../../README.md)

***

[@angelrove/forecast-utils](../../modules.md) / [index](../README.md) / useForecastDaily

# Function: useForecastDaily()

> **useForecastDaily**(`lat`, `lon`, `refreshIntervalMin`): [`ForecastData`](../../OpenMeteo/type-aliases/ForecastData.md)

Defined in: [OpenMeteo/daily/useForecastDaily.ts:11](https://github.com/angelrove/forecast-utils/blob/24fb242ac959e4d78950a4cc0b4469220f80b468/src/OpenMeteo/daily/useForecastDaily.ts#L11)

Custom hook to fetch daily forecast (10 days) data from OpenMeteo API.
https://api.open-meteo.com/v1/forecast?timezone=auto&latitude=36.6644363&longitude=-4.5108962&forecast_days=10&daily=weathercode

## Parameters

### lat

`undefined` | `number`

### lon

`undefined` | `number`

### refreshIntervalMin

`number` = `0`

## Returns

[`ForecastData`](../../OpenMeteo/type-aliases/ForecastData.md)
