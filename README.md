## Modules

<dl>
<dt><a href="#module_MoonCalc">MoonCalc</a></dt>
<dd><p>MoonCalc for calculating moon times, positions, and phases.</p>
<ul>
<li>import { MoonCalc } from &#39;@angelrov/forecast&#39;;</li>
</ul>
</dd>
<dt><a href="#module_SunCalc">SunCalc</a></dt>
<dd><p>SunCalc for calculating solar times, positions, and phases.  </p>
<ul>
<li>import { SunCalc } from &#39;@angelrov/forecast&#39;;</li>
</ul>
</dd>
<dt><a href="#module_astronomy/time-date">astronomy/time-date</a></dt>
<dd></dd>
<dt><a href="#module_astronomy/time-date">astronomy/time-date</a></dt>
<dd></dd>
<dt><a href="#module_astronomy/types">astronomy/types</a></dt>
<dd></dd>
<dt><a href="#module_Geolocation">Geolocation</a></dt>
<dd></dd>
<dt><a href="#OpenMeteo_current">OpenMeteo:current</a></dt>
<dd></dd>
<dt><a href="#OpenMeteo_daily">OpenMeteo:daily</a></dt>
<dd></dd>
<dt><a href="#OpenMeteo_hourly">OpenMeteo:hourly</a></dt>
<dd></dd>
<dt><a href="#OpenMeteo_weatherSymbol">OpenMeteo:weatherSymbol</a></dt>
<dd></dd>
<dt><a href="#module_utils">utils</a></dt>
<dd></dd>
<dt><a href="#module_utils">utils</a></dt>
<dd></dd>
<dt><a href="#module_utils">utils</a></dt>
<dd></dd>
<dt><a href="#module_utils">utils</a></dt>
<dd></dd>
</dl>

<a name="module_MoonCalc"></a>

## MoonCalc
MoonCalc for calculating moon times, positions, and phases.
- import { MoonCalc } from '@angelrov/forecast';


* [MoonCalc](#module_MoonCalc)
    * [~phasesES](#module_MoonCalc..phasesES) : <code>Object.&lt;string, string&gt;</code>
    * [~data(latitude, longitude, [date], [language])](#module_MoonCalc..data) ⇒ <code>MoonData</code>
    * [~dataExt(latitude, longitude, [date], [language])](#module_MoonCalc..dataExt) ⇒ <code>Object</code>
    * [~emoji(latitude, longitude, [date])](#module_MoonCalc..emoji) ⇒ <code>string</code>
    * [~times(latitude, longitude, timezoneId, date)](#module_MoonCalc..times) ⇒ <code>Object</code>
    * [~getUpOrDown(altitude, highest)](#module_MoonCalc..getUpOrDown) ⇒ <code>string</code>

<a name="module_MoonCalc..phasesES"></a>

### MoonCalc~phasesES : <code>Object.&lt;string, string&gt;</code>
Mapa de fases lunares.

**Kind**: inner constant of [<code>MoonCalc</code>](#module_MoonCalc)  
<a name="module_MoonCalc..data"></a>

### MoonCalc~data(latitude, longitude, [date], [language]) ⇒ <code>MoonData</code>
**Kind**: inner method of [<code>MoonCalc</code>](#module_MoonCalc)  

| Param | Type | Default |
| --- | --- | --- |
| latitude | <code>number</code> |  | 
| longitude | <code>number</code> |  | 
| [date] | <code>Date</code> | <code>new Date()</code> | 
| [language] | <code>string</code> | <code>&quot;es-ES&quot;</code> | 

<a name="module_MoonCalc..dataExt"></a>

### MoonCalc~dataExt(latitude, longitude, [date], [language]) ⇒ <code>Object</code>
Información de la luna para una fecha y hora dadas.
La fecha y hora se devolverán en la zona horaria local.

**Kind**: inner method of [<code>MoonCalc</code>](#module_MoonCalc)  

| Param | Type | Default |
| --- | --- | --- |
| latitude | <code>number</code> |  | 
| longitude | <code>number</code> |  | 
| [date] | <code>Date</code> | <code>new Date()</code> | 
| [language] | <code>string</code> | <code>&quot;es-ES&quot;</code> | 

<a name="module_MoonCalc..emoji"></a>

### MoonCalc~emoji(latitude, longitude, [date]) ⇒ <code>string</code>
**Kind**: inner method of [<code>MoonCalc</code>](#module_MoonCalc)  
**Returns**: <code>string</code> - - Emoji of the moon phase  

| Param | Type | Default |
| --- | --- | --- |
| latitude | <code>number</code> |  | 
| longitude | <code>number</code> |  | 
| [date] | <code>Date</code> | <code>new Date()</code> | 

<a name="module_MoonCalc..times"></a>

### MoonCalc~times(latitude, longitude, timezoneId, date) ⇒ <code>Object</code>
**Kind**: inner method of [<code>MoonCalc</code>](#module_MoonCalc)  

| Param | Type |
| --- | --- |
| latitude | <code>number</code> | 
| longitude | <code>number</code> | 
| timezoneId | <code>string</code> | 
| date | <code>Date</code> | 

<a name="module_MoonCalc..getUpOrDown"></a>

### MoonCalc~getUpOrDown(altitude, highest) ⇒ <code>string</code>
**Kind**: inner method of [<code>MoonCalc</code>](#module_MoonCalc)  
**Returns**: <code>string</code> - - Up or down emoji  

| Param | Type |
| --- | --- |
| altitude | <code>number</code> | 
| highest | <code>Date</code> | 

<a name="module_SunCalc"></a>

## SunCalc
SunCalc for calculating solar times, positions, and phases.  
- import { SunCalc } from '@angelrov/forecast';


* [SunCalc](#module_SunCalc)
    * [~SunCalc](#module_SunCalc..SunCalc)
    * [~all(date, latitude, longitude, timezoneId)](#module_SunCalc..all) ⇒ <code>Object</code>
    * [~times(date, latitude, longitude, timezoneId)](#module_SunCalc..times) ⇒ <code>Object</code>
    * [~getSolarTime(date, lng, offsetSign, offset)](#module_SunCalc..getSolarTime) ⇒ <code>string</code>
    * [~position(latitude, longitude)](#module_SunCalc..position) ⇒ <code>Object</code>
    * [~getIsNight(lat, lon, timezoneId, date, dateStr)](#module_SunCalc..getIsNight) ⇒ <code>boolean</code>
    * [~getPhase(altitude, noon)](#module_SunCalc..getPhase) ⇒ <code>string</code>

<a name="module_SunCalc..SunCalc"></a>

### SunCalc~SunCalc
IMPORTANTE!!:
¡Solo proporcionar HORA LOCAL DEL SISTEMA!: 'new Date()'
La única excepción es 'getSolarTime()': hay que darle la hora local correspondiente a la localización dada.

**Kind**: inner constant of [<code>SunCalc</code>](#module_SunCalc)  
<a name="module_SunCalc..all"></a>

### SunCalc~all(date, latitude, longitude, timezoneId) ⇒ <code>Object</code>
**Kind**: inner method of [<code>SunCalc</code>](#module_SunCalc)  

| Param | Type |
| --- | --- |
| date | <code>Date</code> | 
| latitude | <code>number</code> | 
| longitude | <code>number</code> | 
| timezoneId | <code>string</code> | 

<a name="module_SunCalc..times"></a>

### SunCalc~times(date, latitude, longitude, timezoneId) ⇒ <code>Object</code>
**Kind**: inner method of [<code>SunCalc</code>](#module_SunCalc)  

| Param | Type |
| --- | --- |
| date | <code>Date</code> | 
| latitude | <code>number</code> | 
| longitude | <code>number</code> | 
| timezoneId | <code>string</code> | 

<a name="module_SunCalc..getSolarTime"></a>

### SunCalc~getSolarTime(date, lng, offsetSign, offset) ⇒ <code>string</code>
**Kind**: inner method of [<code>SunCalc</code>](#module_SunCalc)  
**Returns**: <code>string</code> - - Local time in "HH:mm" format  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> |  |
| lng | <code>number</code> |  |
| offsetSign | <code>string</code> | "+" or "-" |
| offset | <code>number</code> | UTC offset in hours |

<a name="module_SunCalc..position"></a>

### SunCalc~position(latitude, longitude) ⇒ <code>Object</code>
**Kind**: inner method of [<code>SunCalc</code>](#module_SunCalc)  

| Param | Type |
| --- | --- |
| latitude | <code>number</code> | 
| longitude | <code>number</code> | 

<a name="module_SunCalc..getIsNight"></a>

### SunCalc~getIsNight(lat, lon, timezoneId, date, dateStr) ⇒ <code>boolean</code>
**Kind**: inner method of [<code>SunCalc</code>](#module_SunCalc)  
**Returns**: <code>boolean</code> - - true if it's night, false otherwise  

| Param | Type |
| --- | --- |
| lat | <code>number</code> | 
| lon | <code>number</code> | 
| timezoneId | <code>string</code> | 
| date | <code>number</code> \| <code>Date</code> | 
| dateStr | <code>string</code> | 

<a name="module_SunCalc..getPhase"></a>

### SunCalc~getPhase(altitude, noon) ⇒ <code>string</code>
**Kind**: inner method of [<code>SunCalc</code>](#module_SunCalc)  
**Returns**: <code>string</code> - - The phase of the sun based on its altitude  

| Param | Type |
| --- | --- |
| altitude | <code>number</code> | 
| noon | <code>string</code> | 

<a name="module_astronomy/time-date"></a>

## astronomy/time-date

* [astronomy/time-date](#module_astronomy/time-date)
    * [.timeString([date], [sec])](#module_astronomy/time-date.timeString) ⇒ <code>string</code>
    * [.dateFormat([date])](#module_astronomy/time-date.dateFormat) ⇒ <code>string</code>
    * [.getLocalTimeFromTz(timeZone, [date])](#module_astronomy/time-date.getLocalTimeFromTz) ⇒ <code>string</code>
    * [.getLocalTimeInfo(apiKey, lat, lng)](#module_astronomy/time-date.getLocalTimeInfo) ⇒ <code>Promise.&lt;(any\|LocalTimeData)&gt;</code>

<a name="module_astronomy/time-date.timeString"></a>

### astronomy/time-date.timeString([date], [sec]) ⇒ <code>string</code>
Formatea una fecha a un string legible.

**Kind**: static method of [<code>astronomy/time-date</code>](#module_astronomy/time-date)  
**Returns**: <code>string</code> - La fecha formateada.  

| Param | Type | Default |
| --- | --- | --- |
| [date] | <code>Date</code> |  | 
| [sec] | <code>boolean</code> | <code>false</code> | 

<a name="module_astronomy/time-date.dateFormat"></a>

### astronomy/time-date.dateFormat([date]) ⇒ <code>string</code>
Formatea una fecha a un string legible.

**Kind**: static method of [<code>astronomy/time-date</code>](#module_astronomy/time-date)  
**Returns**: <code>string</code> - La fecha formateada.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [date] | <code>Date</code> | <code>new Date()</code> | La fecha a formatear. |

<a name="module_astronomy/time-date.getLocalTimeFromTz"></a>

### astronomy/time-date.getLocalTimeFromTz(timeZone, [date]) ⇒ <code>string</code>
Get local time from timezone

**Kind**: static method of [<code>astronomy/time-date</code>](#module_astronomy/time-date)  
**Returns**: <code>string</code> - - The formatted local time string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| timeZone | <code>string</code> |  | The timezone string (e.g., 'America/New_York'). |
| [date] | <code>Date</code> \| <code>number</code> | <code>new Date()</code> | The date object to format. Defaults to the current date. |

<a name="module_astronomy/time-date.getLocalTimeInfo"></a>

### astronomy/time-date.getLocalTimeInfo(apiKey, lat, lng) ⇒ <code>Promise.&lt;(any\|LocalTimeData)&gt;</code>
Google API: Get local time from any location

**Kind**: static method of [<code>astronomy/time-date</code>](#module_astronomy/time-date)  
**Returns**: <code>Promise.&lt;(any\|LocalTimeData)&gt;</code> - - An object containing the local time and timezone information:  
**Throws**:

- <code>Error</code> - If the API request fails or returns an error status.


| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>string</code> | GoogleMaps API key. |
| lat | <code>number</code> |  |
| lng | <code>number</code> |  |

<a name="module_astronomy/time-date"></a>

## astronomy/time-date

* [astronomy/time-date](#module_astronomy/time-date)
    * [.timeString([date], [sec])](#module_astronomy/time-date.timeString) ⇒ <code>string</code>
    * [.dateFormat([date])](#module_astronomy/time-date.dateFormat) ⇒ <code>string</code>
    * [.getLocalTimeFromTz(timeZone, [date])](#module_astronomy/time-date.getLocalTimeFromTz) ⇒ <code>string</code>
    * [.getLocalTimeInfo(apiKey, lat, lng)](#module_astronomy/time-date.getLocalTimeInfo) ⇒ <code>Promise.&lt;(any\|LocalTimeData)&gt;</code>

<a name="module_astronomy/time-date.timeString"></a>

### astronomy/time-date.timeString([date], [sec]) ⇒ <code>string</code>
Formatea una fecha a un string legible.

**Kind**: static method of [<code>astronomy/time-date</code>](#module_astronomy/time-date)  
**Returns**: <code>string</code> - La fecha formateada.  

| Param | Type | Default |
| --- | --- | --- |
| [date] | <code>Date</code> |  | 
| [sec] | <code>boolean</code> | <code>false</code> | 

<a name="module_astronomy/time-date.dateFormat"></a>

### astronomy/time-date.dateFormat([date]) ⇒ <code>string</code>
Formatea una fecha a un string legible.

**Kind**: static method of [<code>astronomy/time-date</code>](#module_astronomy/time-date)  
**Returns**: <code>string</code> - La fecha formateada.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [date] | <code>Date</code> | <code>new Date()</code> | La fecha a formatear. |

<a name="module_astronomy/time-date.getLocalTimeFromTz"></a>

### astronomy/time-date.getLocalTimeFromTz(timeZone, [date]) ⇒ <code>string</code>
Get local time from timezone

**Kind**: static method of [<code>astronomy/time-date</code>](#module_astronomy/time-date)  
**Returns**: <code>string</code> - - The formatted local time string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| timeZone | <code>string</code> |  | The timezone string (e.g., 'America/New_York'). |
| [date] | <code>Date</code> \| <code>number</code> | <code>new Date()</code> | The date object to format. Defaults to the current date. |

<a name="module_astronomy/time-date.getLocalTimeInfo"></a>

### astronomy/time-date.getLocalTimeInfo(apiKey, lat, lng) ⇒ <code>Promise.&lt;(any\|LocalTimeData)&gt;</code>
Google API: Get local time from any location

**Kind**: static method of [<code>astronomy/time-date</code>](#module_astronomy/time-date)  
**Returns**: <code>Promise.&lt;(any\|LocalTimeData)&gt;</code> - - An object containing the local time and timezone information:  
**Throws**:

- <code>Error</code> - If the API request fails or returns an error status.


| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>string</code> | GoogleMaps API key. |
| lat | <code>number</code> |  |
| lng | <code>number</code> |  |

<a name="module_astronomy/types"></a>

## astronomy/types

* [astronomy/types](#module_astronomy/types)
    * [~AstroPosition](#module_astronomy/types..AstroPosition) : <code>Object</code>
    * [~MoonData](#module_astronomy/types..MoonData) : <code>Object</code>
    * [~LocalTimeData](#module_astronomy/types..LocalTimeData) : <code>Object</code>

<a name="module_astronomy/types..AstroPosition"></a>

### astronomy/types~AstroPosition : <code>Object</code>
**Kind**: inner typedef of [<code>astronomy/types</code>](#module_astronomy/types)  
**Properties**

| Name | Type |
| --- | --- |
| altitude | <code>number</code> | 
| azimuth | <code>number</code> | 
| direction | <code>string</code> | 
| direction_full | <code>string</code> | 

<a name="module_astronomy/types..MoonData"></a>

### astronomy/types~MoonData : <code>Object</code>
**Kind**: inner typedef of [<code>astronomy/types</code>](#module_astronomy/types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| position | <code>AstroPosition</code> |  |
| next | <code>Object</code> |  |
| next.newMoon | <code>string</code> | Date of the next new moon. |
| next.fullMoon | <code>string</code> | Date of the next full moon. |

<a name="module_astronomy/types..LocalTimeData"></a>

### astronomy/types~LocalTimeData : <code>Object</code>
**Kind**: inner typedef of [<code>astronomy/types</code>](#module_astronomy/types)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| time | <code>Date</code> | The local time. |
| timeStr | <code>string</code> | The formatted local time string. |
| timezone | <code>string</code> | The timezone name. |
| timezoneId | <code>string</code> | The timezone ID. |
| offset | <code>number</code> | The UTC offset in hours. |
| offsetSign | <code>string</code> | The sign of the offset ('+' or '-'). |
| dstOffset | <code>number</code> | The DST offset in hours. |

<a name="module_Geolocation"></a>

## Geolocation
<a name="exp_module_Geolocation--module.exports"></a>

### module.exports() ⇒ <code>Promise.&lt;{latitude: number, longitude: number, formatted\_address: string}&gt;</code> ⏏
Get the current geolocation of the device and reverse
geocode it to get the address.

**Kind**: Exported function  
**Throws**:

- <code>Error</code> If geolocation is not supported or permission is denied.

<a name="OpenMeteo_current"></a>

## OpenMeteo:current
<a name="OpenMeteo_current.useForecastCurrent"></a>

### OpenMeteo:current.useForecastCurrent(lat, lon, refreshIntervalMin) ⇒ <code>Object</code>
Custom hook to fetch current weather data from OpenMeteo API.

**Kind**: static method of [<code>OpenMeteo:current</code>](#OpenMeteo_current)  

| Param | Type |
| --- | --- |
| lat | <code>number</code> | 
| lon | <code>number</code> | 
| refreshIntervalMin | <code>number</code> | 

<a name="OpenMeteo_daily"></a>

## OpenMeteo:daily
<a name="OpenMeteo_daily.useForecastDaily"></a>

### OpenMeteo:daily.useForecastDaily(lat, lon, refreshIntervalMin) ⇒ <code>Object</code>
Custom hook to fetch daily forecast (10 days) data from OpenMeteo API.
https://api.open-meteo.com/v1/forecast?timezone=auto&latitude=36.6644363&longitude=-4.5108962&forecast_days=10&daily=weathercode

**Kind**: static method of [<code>OpenMeteo:daily</code>](#OpenMeteo_daily)  

| Param | Type |
| --- | --- |
| lat | <code>number</code> | 
| lon | <code>number</code> | 
| refreshIntervalMin | <code>number</code> | 

<a name="OpenMeteo_hourly"></a>

## OpenMeteo:hourly
<a name="OpenMeteo_hourly.useForecastHourly"></a>

### OpenMeteo:hourly.useForecastHourly(location, dayNum) ⇒ <code>Object</code>
Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.

**Kind**: static method of [<code>OpenMeteo:hourly</code>](#OpenMeteo_hourly)  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Object</code> |  |
| dayNum | <code>number</code> | Number of days from today: -1 = 24 hours, 0 = today, 1 = tomorrow, ... |

<a name="OpenMeteo_weatherSymbol"></a>

## OpenMeteo:weatherSymbol
<a name="OpenMeteo_weatherSymbol.weatherSymbol"></a>

### OpenMeteo:weatherSymbol.weatherSymbol(code, [precipitation], night, dark) ⇒ <code>Object</code>
Get weather symbol and description based on the weather code.

**Kind**: static method of [<code>OpenMeteo:weatherSymbol</code>](#OpenMeteo_weatherSymbol)  

| Param | Type |
| --- | --- |
| code | <code>any</code> | 
| [precipitation] | <code>number</code> | 
| night | <code>boolean</code> | 
| dark | <code>boolean</code> | 

<a name="module_utils"></a>

## utils

* [utils](#module_utils)
    * _static_
        * [.degreesToCompass(degrees, language)](#module_utils.degreesToCompass) ⇒ <code>Object</code>
        * [.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow)](#module_utils.getWarningByDays) ⇒ <code>Object</code> \| <code>null</code>
        * [.getWarning(precipitation, showers)](#module_utils.getWarning) ⇒ <code>Object</code> \| <code>null</code>
        * [.windArrowTx(deg)](#module_utils.windArrowTx)
        * [.getWindLevel(speed)](#module_utils.getWindLevel) ⇒ <code>WindLevel</code> \| <code>null</code>
    * _inner_
        * [~ALERT_LEVEL](#module_utils..ALERT_LEVEL) : <code>Array.&lt;AlertLevel&gt;</code>
        * [~WIND_LEVELS](#module_utils..WIND_LEVELS) : <code>Array.&lt;WindLevel&gt;</code>
        * [~getWarningRain(precipitation)](#module_utils..getWarningRain) ⇒ <code>Object</code> \| <code>null</code>
        * [~getWarningShowers(showers)](#module_utils..getWarningShowers) ⇒ <code>Object</code> \| <code>null</code>
        * [~AlertLevel](#module_utils..AlertLevel) : <code>Object</code>
        * [~WindLevel](#module_utils..WindLevel) : <code>Object</code>

<a name="module_utils.degreesToCompass"></a>

### utils.degreesToCompass(degrees, language) ⇒ <code>Object</code>
Convert degrees to compass designation

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>number</code> |  |
| language | <code>string</code> | Language code ("en-US", "es-ES", "auto") |

<a name="module_utils.getWarningByDays"></a>

### utils.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow) ⇒ <code>Object</code> \| <code>null</code>
Get warning by today and tomorrow

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitationSumToday | <code>number</code> | 
| precipitationSumTomorrow | <code>number</code> | 
| showersSumToday | <code>number</code> | 
| showersSumTomorrow | <code>number</code> | 

<a name="module_utils.getWarning"></a>

### utils.getWarning(precipitation, showers) ⇒ <code>Object</code> \| <code>null</code>
Get warning by precipitation and showers

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 
| showers | <code>number</code> | 

<a name="module_utils.windArrowTx"></a>

### utils.windArrowTx(deg)
Convert wind direction in degrees to an arrow representation.

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| deg | <code>number</code> | Wind direction in degrees. |

<a name="module_utils.getWindLevel"></a>

### utils.getWindLevel(speed) ⇒ <code>WindLevel</code> \| <code>null</code>
Return the wind level based on the speed.

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>WindLevel</code> \| <code>null</code> - Wind level object or null if speed is null  

| Param | Type | Description |
| --- | --- | --- |
| speed | <code>number</code> | Wind speed in km/h |

<a name="module_utils..ALERT_LEVEL"></a>

### utils~ALERT\_LEVEL : <code>Array.&lt;AlertLevel&gt;</code>
Alert levels for rain and showers

**Kind**: inner constant of [<code>utils</code>](#module_utils)  
<a name="module_utils..WIND_LEVELS"></a>

### utils~WIND\_LEVELS : <code>Array.&lt;WindLevel&gt;</code>
Ordered list of wind levels.

**Kind**: inner constant of [<code>utils</code>](#module_utils)  
<a name="module_utils..getWarningRain"></a>

### utils~getWarningRain(precipitation) ⇒ <code>Object</code> \| <code>null</code>
Get warning by rain

**Kind**: inner method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 

<a name="module_utils..getWarningShowers"></a>

### utils~getWarningShowers(showers) ⇒ <code>Object</code> \| <code>null</code>
Get warning by showers

**Kind**: inner method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| showers | <code>number</code> | 

<a name="module_utils..AlertLevel"></a>

### utils~AlertLevel : <code>Object</code>
**Kind**: inner typedef of [<code>utils</code>](#module_utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| levelNum | <code>number</code> | The alert level number. |
| level | <code>string</code> | The alert level string (e.g., "red", "orange", "yellow"). |
| precipitation | <code>number</code> | The precipitation threshold for the alert level. |
| showers | <code>number</code> | The showers threshold for the alert level. |

<a name="module_utils..WindLevel"></a>

### utils~WindLevel : <code>Object</code>
**Kind**: inner typedef of [<code>utils</code>](#module_utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Level ID |
| speed | <code>number</code> | Minimum wind speed for this level |
| color | <code>string</code> | Color representing this level |
| tx | <code>string</code> | Text representing this level |
| txEn | <code>string</code> | Text representing this level |

<a name="module_utils"></a>

## utils

* [utils](#module_utils)
    * _static_
        * [.degreesToCompass(degrees, language)](#module_utils.degreesToCompass) ⇒ <code>Object</code>
        * [.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow)](#module_utils.getWarningByDays) ⇒ <code>Object</code> \| <code>null</code>
        * [.getWarning(precipitation, showers)](#module_utils.getWarning) ⇒ <code>Object</code> \| <code>null</code>
        * [.windArrowTx(deg)](#module_utils.windArrowTx)
        * [.getWindLevel(speed)](#module_utils.getWindLevel) ⇒ <code>WindLevel</code> \| <code>null</code>
    * _inner_
        * [~ALERT_LEVEL](#module_utils..ALERT_LEVEL) : <code>Array.&lt;AlertLevel&gt;</code>
        * [~WIND_LEVELS](#module_utils..WIND_LEVELS) : <code>Array.&lt;WindLevel&gt;</code>
        * [~getWarningRain(precipitation)](#module_utils..getWarningRain) ⇒ <code>Object</code> \| <code>null</code>
        * [~getWarningShowers(showers)](#module_utils..getWarningShowers) ⇒ <code>Object</code> \| <code>null</code>
        * [~AlertLevel](#module_utils..AlertLevel) : <code>Object</code>
        * [~WindLevel](#module_utils..WindLevel) : <code>Object</code>

<a name="module_utils.degreesToCompass"></a>

### utils.degreesToCompass(degrees, language) ⇒ <code>Object</code>
Convert degrees to compass designation

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>number</code> |  |
| language | <code>string</code> | Language code ("en-US", "es-ES", "auto") |

<a name="module_utils.getWarningByDays"></a>

### utils.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow) ⇒ <code>Object</code> \| <code>null</code>
Get warning by today and tomorrow

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitationSumToday | <code>number</code> | 
| precipitationSumTomorrow | <code>number</code> | 
| showersSumToday | <code>number</code> | 
| showersSumTomorrow | <code>number</code> | 

<a name="module_utils.getWarning"></a>

### utils.getWarning(precipitation, showers) ⇒ <code>Object</code> \| <code>null</code>
Get warning by precipitation and showers

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 
| showers | <code>number</code> | 

<a name="module_utils.windArrowTx"></a>

### utils.windArrowTx(deg)
Convert wind direction in degrees to an arrow representation.

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| deg | <code>number</code> | Wind direction in degrees. |

<a name="module_utils.getWindLevel"></a>

### utils.getWindLevel(speed) ⇒ <code>WindLevel</code> \| <code>null</code>
Return the wind level based on the speed.

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>WindLevel</code> \| <code>null</code> - Wind level object or null if speed is null  

| Param | Type | Description |
| --- | --- | --- |
| speed | <code>number</code> | Wind speed in km/h |

<a name="module_utils..ALERT_LEVEL"></a>

### utils~ALERT\_LEVEL : <code>Array.&lt;AlertLevel&gt;</code>
Alert levels for rain and showers

**Kind**: inner constant of [<code>utils</code>](#module_utils)  
<a name="module_utils..WIND_LEVELS"></a>

### utils~WIND\_LEVELS : <code>Array.&lt;WindLevel&gt;</code>
Ordered list of wind levels.

**Kind**: inner constant of [<code>utils</code>](#module_utils)  
<a name="module_utils..getWarningRain"></a>

### utils~getWarningRain(precipitation) ⇒ <code>Object</code> \| <code>null</code>
Get warning by rain

**Kind**: inner method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 

<a name="module_utils..getWarningShowers"></a>

### utils~getWarningShowers(showers) ⇒ <code>Object</code> \| <code>null</code>
Get warning by showers

**Kind**: inner method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| showers | <code>number</code> | 

<a name="module_utils..AlertLevel"></a>

### utils~AlertLevel : <code>Object</code>
**Kind**: inner typedef of [<code>utils</code>](#module_utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| levelNum | <code>number</code> | The alert level number. |
| level | <code>string</code> | The alert level string (e.g., "red", "orange", "yellow"). |
| precipitation | <code>number</code> | The precipitation threshold for the alert level. |
| showers | <code>number</code> | The showers threshold for the alert level. |

<a name="module_utils..WindLevel"></a>

### utils~WindLevel : <code>Object</code>
**Kind**: inner typedef of [<code>utils</code>](#module_utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Level ID |
| speed | <code>number</code> | Minimum wind speed for this level |
| color | <code>string</code> | Color representing this level |
| tx | <code>string</code> | Text representing this level |
| txEn | <code>string</code> | Text representing this level |

<a name="module_utils"></a>

## utils

* [utils](#module_utils)
    * _static_
        * [.degreesToCompass(degrees, language)](#module_utils.degreesToCompass) ⇒ <code>Object</code>
        * [.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow)](#module_utils.getWarningByDays) ⇒ <code>Object</code> \| <code>null</code>
        * [.getWarning(precipitation, showers)](#module_utils.getWarning) ⇒ <code>Object</code> \| <code>null</code>
        * [.windArrowTx(deg)](#module_utils.windArrowTx)
        * [.getWindLevel(speed)](#module_utils.getWindLevel) ⇒ <code>WindLevel</code> \| <code>null</code>
    * _inner_
        * [~ALERT_LEVEL](#module_utils..ALERT_LEVEL) : <code>Array.&lt;AlertLevel&gt;</code>
        * [~WIND_LEVELS](#module_utils..WIND_LEVELS) : <code>Array.&lt;WindLevel&gt;</code>
        * [~getWarningRain(precipitation)](#module_utils..getWarningRain) ⇒ <code>Object</code> \| <code>null</code>
        * [~getWarningShowers(showers)](#module_utils..getWarningShowers) ⇒ <code>Object</code> \| <code>null</code>
        * [~AlertLevel](#module_utils..AlertLevel) : <code>Object</code>
        * [~WindLevel](#module_utils..WindLevel) : <code>Object</code>

<a name="module_utils.degreesToCompass"></a>

### utils.degreesToCompass(degrees, language) ⇒ <code>Object</code>
Convert degrees to compass designation

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>number</code> |  |
| language | <code>string</code> | Language code ("en-US", "es-ES", "auto") |

<a name="module_utils.getWarningByDays"></a>

### utils.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow) ⇒ <code>Object</code> \| <code>null</code>
Get warning by today and tomorrow

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitationSumToday | <code>number</code> | 
| precipitationSumTomorrow | <code>number</code> | 
| showersSumToday | <code>number</code> | 
| showersSumTomorrow | <code>number</code> | 

<a name="module_utils.getWarning"></a>

### utils.getWarning(precipitation, showers) ⇒ <code>Object</code> \| <code>null</code>
Get warning by precipitation and showers

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 
| showers | <code>number</code> | 

<a name="module_utils.windArrowTx"></a>

### utils.windArrowTx(deg)
Convert wind direction in degrees to an arrow representation.

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| deg | <code>number</code> | Wind direction in degrees. |

<a name="module_utils.getWindLevel"></a>

### utils.getWindLevel(speed) ⇒ <code>WindLevel</code> \| <code>null</code>
Return the wind level based on the speed.

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>WindLevel</code> \| <code>null</code> - Wind level object or null if speed is null  

| Param | Type | Description |
| --- | --- | --- |
| speed | <code>number</code> | Wind speed in km/h |

<a name="module_utils..ALERT_LEVEL"></a>

### utils~ALERT\_LEVEL : <code>Array.&lt;AlertLevel&gt;</code>
Alert levels for rain and showers

**Kind**: inner constant of [<code>utils</code>](#module_utils)  
<a name="module_utils..WIND_LEVELS"></a>

### utils~WIND\_LEVELS : <code>Array.&lt;WindLevel&gt;</code>
Ordered list of wind levels.

**Kind**: inner constant of [<code>utils</code>](#module_utils)  
<a name="module_utils..getWarningRain"></a>

### utils~getWarningRain(precipitation) ⇒ <code>Object</code> \| <code>null</code>
Get warning by rain

**Kind**: inner method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 

<a name="module_utils..getWarningShowers"></a>

### utils~getWarningShowers(showers) ⇒ <code>Object</code> \| <code>null</code>
Get warning by showers

**Kind**: inner method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| showers | <code>number</code> | 

<a name="module_utils..AlertLevel"></a>

### utils~AlertLevel : <code>Object</code>
**Kind**: inner typedef of [<code>utils</code>](#module_utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| levelNum | <code>number</code> | The alert level number. |
| level | <code>string</code> | The alert level string (e.g., "red", "orange", "yellow"). |
| precipitation | <code>number</code> | The precipitation threshold for the alert level. |
| showers | <code>number</code> | The showers threshold for the alert level. |

<a name="module_utils..WindLevel"></a>

### utils~WindLevel : <code>Object</code>
**Kind**: inner typedef of [<code>utils</code>](#module_utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Level ID |
| speed | <code>number</code> | Minimum wind speed for this level |
| color | <code>string</code> | Color representing this level |
| tx | <code>string</code> | Text representing this level |
| txEn | <code>string</code> | Text representing this level |

<a name="module_utils"></a>

## utils

* [utils](#module_utils)
    * _static_
        * [.degreesToCompass(degrees, language)](#module_utils.degreesToCompass) ⇒ <code>Object</code>
        * [.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow)](#module_utils.getWarningByDays) ⇒ <code>Object</code> \| <code>null</code>
        * [.getWarning(precipitation, showers)](#module_utils.getWarning) ⇒ <code>Object</code> \| <code>null</code>
        * [.windArrowTx(deg)](#module_utils.windArrowTx)
        * [.getWindLevel(speed)](#module_utils.getWindLevel) ⇒ <code>WindLevel</code> \| <code>null</code>
    * _inner_
        * [~ALERT_LEVEL](#module_utils..ALERT_LEVEL) : <code>Array.&lt;AlertLevel&gt;</code>
        * [~WIND_LEVELS](#module_utils..WIND_LEVELS) : <code>Array.&lt;WindLevel&gt;</code>
        * [~getWarningRain(precipitation)](#module_utils..getWarningRain) ⇒ <code>Object</code> \| <code>null</code>
        * [~getWarningShowers(showers)](#module_utils..getWarningShowers) ⇒ <code>Object</code> \| <code>null</code>
        * [~AlertLevel](#module_utils..AlertLevel) : <code>Object</code>
        * [~WindLevel](#module_utils..WindLevel) : <code>Object</code>

<a name="module_utils.degreesToCompass"></a>

### utils.degreesToCompass(degrees, language) ⇒ <code>Object</code>
Convert degrees to compass designation

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>number</code> |  |
| language | <code>string</code> | Language code ("en-US", "es-ES", "auto") |

<a name="module_utils.getWarningByDays"></a>

### utils.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow) ⇒ <code>Object</code> \| <code>null</code>
Get warning by today and tomorrow

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitationSumToday | <code>number</code> | 
| precipitationSumTomorrow | <code>number</code> | 
| showersSumToday | <code>number</code> | 
| showersSumTomorrow | <code>number</code> | 

<a name="module_utils.getWarning"></a>

### utils.getWarning(precipitation, showers) ⇒ <code>Object</code> \| <code>null</code>
Get warning by precipitation and showers

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 
| showers | <code>number</code> | 

<a name="module_utils.windArrowTx"></a>

### utils.windArrowTx(deg)
Convert wind direction in degrees to an arrow representation.

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| deg | <code>number</code> | Wind direction in degrees. |

<a name="module_utils.getWindLevel"></a>

### utils.getWindLevel(speed) ⇒ <code>WindLevel</code> \| <code>null</code>
Return the wind level based on the speed.

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>WindLevel</code> \| <code>null</code> - Wind level object or null if speed is null  

| Param | Type | Description |
| --- | --- | --- |
| speed | <code>number</code> | Wind speed in km/h |

<a name="module_utils..ALERT_LEVEL"></a>

### utils~ALERT\_LEVEL : <code>Array.&lt;AlertLevel&gt;</code>
Alert levels for rain and showers

**Kind**: inner constant of [<code>utils</code>](#module_utils)  
<a name="module_utils..WIND_LEVELS"></a>

### utils~WIND\_LEVELS : <code>Array.&lt;WindLevel&gt;</code>
Ordered list of wind levels.

**Kind**: inner constant of [<code>utils</code>](#module_utils)  
<a name="module_utils..getWarningRain"></a>

### utils~getWarningRain(precipitation) ⇒ <code>Object</code> \| <code>null</code>
Get warning by rain

**Kind**: inner method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 

<a name="module_utils..getWarningShowers"></a>

### utils~getWarningShowers(showers) ⇒ <code>Object</code> \| <code>null</code>
Get warning by showers

**Kind**: inner method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| showers | <code>number</code> | 

<a name="module_utils..AlertLevel"></a>

### utils~AlertLevel : <code>Object</code>
**Kind**: inner typedef of [<code>utils</code>](#module_utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| levelNum | <code>number</code> | The alert level number. |
| level | <code>string</code> | The alert level string (e.g., "red", "orange", "yellow"). |
| precipitation | <code>number</code> | The precipitation threshold for the alert level. |
| showers | <code>number</code> | The showers threshold for the alert level. |

<a name="module_utils..WindLevel"></a>

### utils~WindLevel : <code>Object</code>
**Kind**: inner typedef of [<code>utils</code>](#module_utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Level ID |
| speed | <code>number</code> | Minimum wind speed for this level |
| color | <code>string</code> | Color representing this level |
| tx | <code>string</code> | Text representing this level |
| txEn | <code>string</code> | Text representing this level |

