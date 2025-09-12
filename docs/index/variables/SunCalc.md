[**@angelrove/forecast-utils**](../../README.md)

***

[@angelrove/forecast-utils](../../README.md) / [index](../README.md) / SunCalc

# Variable: SunCalc

> `const` **SunCalc**: `object`

Defined in: [astronomy/sun/SunCalc.js:21](https://github.com/angelrove/forecast-utils/blob/c8671c08665caf44781ca994161c6a147044eefe/src/astronomy/sun/SunCalc.js#L21)

SunCalc.

## Type Declaration

### all()

> **all**: (`date`, `latitude`, `longitude`, `timezoneId`) => `object`

#### Parameters

##### date

`Date`

##### latitude

`number`

##### longitude

`number`

##### timezoneId

`string`

#### Returns

`object`

{ sunTimes: object, sunPosition: object, sunPhase: string }

##### sunPhase

> **sunPhase**: `string`

##### sunPosition

> **sunPosition**: `object`

##### sunTimes

> **sunTimes**: `object`

### getIsNight()

> **getIsNight**: (`lat`, `lon`, `timezoneId`, `date`, `dateStr`) => `boolean`

#### Parameters

##### lat

`number`

##### lon

`number`

##### timezoneId

`string`

##### date

`number` | `Date`

##### dateStr

`string`

#### Returns

`boolean`

true if it's night, false otherwise

### getPhase()

> **getPhase**: (`altitude`, `noon`) => `string`

#### Parameters

##### altitude

`number`

##### noon

`string`

#### Returns

`string`

The phase of the sun based on its altitude

### getSolarTime()

> **getSolarTime**: (`date`, `lng`, `offsetSign`, `offset`) => `string`

#### Parameters

##### date

`Date`

##### lng

`number`

##### offsetSign

`string`

"+" or "-"

##### offset

`number`

UTC offset in hours

#### Returns

`string`

Local time in "HH:mm" format

### position()

> **position**: (`latitude`, `longitude`, `date`, `language`) => `object`

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

`object`

{date: string, azimuth: number, direction: string, direction_full: string, altitude: number, zenith: number, declination: number}

##### altitude

> **altitude**: `number`

##### azimuth

> **azimuth**: `number`

##### date

> **date**: `string`

##### declination

> **declination**: `number`

##### direction

> **direction**: `string`

##### direction\_full

> **direction\_full**: `string`

##### zenith

> **zenith**: `number`

### times()

> **times**: (`date`, `latitude`, `longitude`, `timezoneId`) => `object`

#### Parameters

##### date

`Date`

##### latitude

`number`

##### longitude

`number`

##### timezoneId

`string`

#### Returns

`object`

{ date: Date, sunrise: string, sunset: string, noon: string, dawn: string, dusk: string }

##### date

> **date**: `Date`

##### dawn

> **dawn**: `string`

##### dusk

> **dusk**: `string`

##### noon

> **noon**: `string`

##### sunrise

> **sunrise**: `string`

##### sunset

> **sunset**: `string`
