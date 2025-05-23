## Modules

<dl>
<dt><a href="#module_Astronomy/MoonCalc">Astronomy/MoonCalc</a></dt>
<dd><p>MoonCalc for calculating moon times, positions, and phases.</p>
<p>  import { MoonCalc } from ...</p>
<p>Importante!:
¡Solo proporcionar HORA LOCAL DEL SISTEMA!: &#39;new Date()&#39;</p>
</dd>
<dt><a href="#module_Astronomy/SunCalc">Astronomy/SunCalc</a></dt>
<dd><p>SunCalc for calculating solar times, positions, and phases.</p>
<p>  import { SunCalc } from ...</p>
<p>Importante:
¡Solo proporcionar HORA LOCAL DEL SISTEMA!: &#39;new Date()&#39;
Con excepción de &#39;getSolarTime()&#39;: recibe la hora local correspondiente a la localización dada.</p>
</dd>
<dt><a href="#module_Geolocation">Geolocation</a></dt>
<dd></dd>
<dt><a href="#module_OpenMeteo">OpenMeteo</a></dt>
<dd></dd>
<dt><a href="#module_Utils">Utils</a></dt>
<dd></dd>
<dt><a href="#module_Utils/TimeDateStr">Utils/TimeDateStr</a></dt>
<dd><p>Helpers for get date and time formeted strings</p>
</dd>
</dl>

<a name="module_Astronomy/MoonCalc"></a>

## Astronomy/MoonCalc
MoonCalc for calculating moon times, positions, and phases.

  import { MoonCalc } from ...

Importante!:
¡Solo proporcionar HORA LOCAL DEL SISTEMA!: 'new Date()'


* [Astronomy/MoonCalc](#module_Astronomy/MoonCalc)
    * [.phasesES](#module_Astronomy/MoonCalc.phasesES) : <code>Object.&lt;string, string&gt;</code>
    * [.data(latitude, longitude, [date], [language])](#module_Astronomy/MoonCalc.data) ⇒ <code>MoonData</code>
    * [.dataExt(latitude, longitude, [date], [language])](#module_Astronomy/MoonCalc.dataExt) ⇒ <code>MoonDataExt</code>
    * [.emoji(latitude, longitude, [date])](#module_Astronomy/MoonCalc.emoji) ⇒ <code>string</code>
    * [.times(latitude, longitude, timezoneId, date)](#module_Astronomy/MoonCalc.times) ⇒ <code>Object</code>
    * [.getUpOrDown(altitude, highest)](#module_Astronomy/MoonCalc.getUpOrDown) ⇒ <code>string</code>
    * [.MoonDataExt](#module_Astronomy/MoonCalc.MoonDataExt) : <code>Object</code>
    * [.MoonData](#module_Astronomy/MoonCalc.MoonData) : <code>Object</code>


* * *

<a name="module_Astronomy/MoonCalc.phasesES"></a>

### Astronomy/MoonCalc.phasesES : <code>Object.&lt;string, string&gt;</code>
Mapa de fases lunares.
{ phaseId, phaseName }

**Kind**: static constant of [<code>Astronomy/MoonCalc</code>](#module_Astronomy/MoonCalc)  

* * *

<a name="module_Astronomy/MoonCalc.data"></a>

### Astronomy/MoonCalc.data(latitude, longitude, [date], [language]) ⇒ <code>MoonData</code>
**Kind**: static method of [<code>Astronomy/MoonCalc</code>](#module_Astronomy/MoonCalc)  
**Returns**: <code>MoonData</code> - Moon info object  

| Param | Type | Default |
| --- | --- | --- |
| latitude | <code>number</code> |  | 
| longitude | <code>number</code> |  | 
| [date] | <code>Date</code> | <code>new Date()</code> | 
| [language] | <code>string</code> | <code>&quot;es-ES&quot;</code> | 


* * *

<a name="module_Astronomy/MoonCalc.dataExt"></a>

### Astronomy/MoonCalc.dataExt(latitude, longitude, [date], [language]) ⇒ <code>MoonDataExt</code>
Información de la luna para una fecha y hora dadas.
La fecha y hora se devolverán en la zona horaria local.

**Kind**: static method of [<code>Astronomy/MoonCalc</code>](#module_Astronomy/MoonCalc)  
**Returns**: <code>MoonDataExt</code> - Full information  

| Param | Type | Default |
| --- | --- | --- |
| latitude | <code>number</code> |  | 
| longitude | <code>number</code> |  | 
| [date] | <code>Date</code> | <code>new Date()</code> | 
| [language] | <code>string</code> | <code>&quot;es-ES&quot;</code> | 


* * *

<a name="module_Astronomy/MoonCalc.emoji"></a>

### Astronomy/MoonCalc.emoji(latitude, longitude, [date]) ⇒ <code>string</code>
**Kind**: static method of [<code>Astronomy/MoonCalc</code>](#module_Astronomy/MoonCalc)  
**Returns**: <code>string</code> - Emoji of the moon phase  

| Param | Type | Default |
| --- | --- | --- |
| latitude | <code>number</code> |  | 
| longitude | <code>number</code> |  | 
| [date] | <code>Date</code> | <code>new Date()</code> | 


* * *

<a name="module_Astronomy/MoonCalc.times"></a>

### Astronomy/MoonCalc.times(latitude, longitude, timezoneId, date) ⇒ <code>Object</code>
**Kind**: static method of [<code>Astronomy/MoonCalc</code>](#module_Astronomy/MoonCalc)  
**Returns**: <code>Object</code> - Moon times  

| Param | Type |
| --- | --- |
| latitude | <code>number</code> | 
| longitude | <code>number</code> | 
| timezoneId | <code>string</code> | 
| date | <code>Date</code> | 


* * *

<a name="module_Astronomy/MoonCalc.getUpOrDown"></a>

### Astronomy/MoonCalc.getUpOrDown(altitude, highest) ⇒ <code>string</code>
**Kind**: static method of [<code>Astronomy/MoonCalc</code>](#module_Astronomy/MoonCalc)  
**Returns**: <code>string</code> - - Up or down emoji  

| Param | Type |
| --- | --- |
| altitude | <code>number</code> | 
| highest | <code>Date</code> | 


* * *

<a name="module_Astronomy/MoonCalc.MoonDataExt"></a>

### Astronomy/MoonCalc.MoonDataExt : <code>Object</code>
**Kind**: static typedef of [<code>Astronomy/MoonCalc</code>](#module_Astronomy/MoonCalc)  
**Properties**

| Name | Type |
| --- | --- |
| date | <code>string</code> | 
| time | <code>string</code> | 
| illumination | <code>string</code> | 
| phase | <code>string</code> | 
| phaseId | <code>string</code> | 
| emoji | <code>string</code> | 
| parallacticAngle | <code>number</code> | 
| angle | <code>number</code> | 
| position | <code>AstroPosition</code> | 
| next | <code>Object</code> | 


* * *

<a name="module_Astronomy/MoonCalc.MoonData"></a>

### Astronomy/MoonCalc.MoonData : <code>Object</code>
**Kind**: static typedef of [<code>Astronomy/MoonCalc</code>](#module_Astronomy/MoonCalc)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| position | <code>AstroPosition</code> |  |
| next | <code>Object</code> |  |
| next.newMoon | <code>string</code> | Date of the next new moon. |
| next.fullMoon | <code>string</code> | Date of the next full moon. |


* * *

<a name="module_Astronomy/SunCalc"></a>

## Astronomy/SunCalc
SunCalc for calculating solar times, positions, and phases.

  import { SunCalc } from ...

Importante:
¡Solo proporcionar HORA LOCAL DEL SISTEMA!: 'new Date()'
Con excepción de 'getSolarTime()': recibe la hora local correspondiente a la localización dada.


* [Astronomy/SunCalc](#module_Astronomy/SunCalc)
    * [.all(date, latitude, longitude, timezoneId)](#module_Astronomy/SunCalc.all) ⇒ <code>Object</code>
    * [.times(date, latitude, longitude, timezoneId)](#module_Astronomy/SunCalc.times) ⇒ <code>Object</code>
    * [.getSolarTime(date, lng, offsetSign, offset)](#module_Astronomy/SunCalc.getSolarTime) ⇒ <code>string</code>
    * [.position(latitude, longitude)](#module_Astronomy/SunCalc.position) ⇒ <code>Object</code>
    * [.getIsNight(lat, lon, timezoneId, date, dateStr)](#module_Astronomy/SunCalc.getIsNight) ⇒ <code>boolean</code>
    * [.getPhase(altitude, noon)](#module_Astronomy/SunCalc.getPhase) ⇒ <code>string</code>


* * *

<a name="module_Astronomy/SunCalc.all"></a>

### Astronomy/SunCalc.all(date, latitude, longitude, timezoneId) ⇒ <code>Object</code>
**Kind**: static method of [<code>Astronomy/SunCalc</code>](#module_Astronomy/SunCalc)  
**Returns**: <code>Object</code> - { sunTimes: Object, sunPosition: Object, sunPhase: string }  

| Param | Type |
| --- | --- |
| date | <code>Date</code> | 
| latitude | <code>number</code> | 
| longitude | <code>number</code> | 
| timezoneId | <code>string</code> | 


* * *

<a name="module_Astronomy/SunCalc.times"></a>

### Astronomy/SunCalc.times(date, latitude, longitude, timezoneId) ⇒ <code>Object</code>
**Kind**: static method of [<code>Astronomy/SunCalc</code>](#module_Astronomy/SunCalc)  
**Returns**: <code>Object</code> - { date: Date, sunrise: string, sunset: string, noon: string, dawn: string, dusk: string }  

| Param | Type |
| --- | --- |
| date | <code>Date</code> | 
| latitude | <code>number</code> | 
| longitude | <code>number</code> | 
| timezoneId | <code>string</code> | 


* * *

<a name="module_Astronomy/SunCalc.getSolarTime"></a>

### Astronomy/SunCalc.getSolarTime(date, lng, offsetSign, offset) ⇒ <code>string</code>
**Kind**: static method of [<code>Astronomy/SunCalc</code>](#module_Astronomy/SunCalc)  
**Returns**: <code>string</code> - Local time in "HH:mm" format  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> |  |
| lng | <code>number</code> |  |
| offsetSign | <code>string</code> | "+" or "-" |
| offset | <code>number</code> | UTC offset in hours |


* * *

<a name="module_Astronomy/SunCalc.position"></a>

### Astronomy/SunCalc.position(latitude, longitude) ⇒ <code>Object</code>
**Kind**: static method of [<code>Astronomy/SunCalc</code>](#module_Astronomy/SunCalc)  
**Returns**: <code>Object</code> - {date: string, azimuth: number, direction: string, direction_full: string, altitude: number, zenith: number, declination: number}  

| Param | Type |
| --- | --- |
| latitude | <code>number</code> | 
| longitude | <code>number</code> | 


* * *

<a name="module_Astronomy/SunCalc.getIsNight"></a>

### Astronomy/SunCalc.getIsNight(lat, lon, timezoneId, date, dateStr) ⇒ <code>boolean</code>
**Kind**: static method of [<code>Astronomy/SunCalc</code>](#module_Astronomy/SunCalc)  
**Returns**: <code>boolean</code> - true if it's night, false otherwise  

| Param | Type |
| --- | --- |
| lat | <code>number</code> | 
| lon | <code>number</code> | 
| timezoneId | <code>string</code> | 
| date | <code>number</code> \| <code>Date</code> | 
| dateStr | <code>string</code> | 


* * *

<a name="module_Astronomy/SunCalc.getPhase"></a>

### Astronomy/SunCalc.getPhase(altitude, noon) ⇒ <code>string</code>
**Kind**: static method of [<code>Astronomy/SunCalc</code>](#module_Astronomy/SunCalc)  
**Returns**: <code>string</code> - The phase of the sun based on its altitude  

| Param | Type |
| --- | --- |
| altitude | <code>number</code> | 
| noon | <code>string</code> | 


* * *

<a name="module_Geolocation"></a>

## Geolocation

* [Geolocation](#module_Geolocation)
    * [.exports.getGeolocation()](#module_Geolocation.exports.getGeolocation) ⇒ <code>Promise.&lt;{latitude: number, longitude: number, formatted\_address: string}&gt;</code>
    * [.exports.timeFromLocation(apiKey, lat, lng)](#module_Geolocation.exports.timeFromLocation) ⇒ <code>Promise.&lt;(any\|LocalTimeData)&gt;</code>
    * [.LocalTimeData](#module_Geolocation.LocalTimeData) : <code>Object</code>


* * *

<a name="module_Geolocation.exports.getGeolocation"></a>

### Geolocation.exports.getGeolocation() ⇒ <code>Promise.&lt;{latitude: number, longitude: number, formatted\_address: string}&gt;</code>
Get the current geolocation of the device and reverse geocode it to get the address.

**Kind**: static method of [<code>Geolocation</code>](#module_Geolocation)  
**Returns**: <code>Promise.&lt;{latitude: number, longitude: number, formatted\_address: string}&gt;</code> - Promise  
**Throws**:

- <code>Error</code> If geolocation is not supported or permission is denied.


* * *

<a name="module_Geolocation.exports.timeFromLocation"></a>

### Geolocation.exports.timeFromLocation(apiKey, lat, lng) ⇒ <code>Promise.&lt;(any\|LocalTimeData)&gt;</code>
Get local time from a given location (lat, lng) using 'GoogleMaps TimeZone' API.

**Kind**: static method of [<code>Geolocation</code>](#module_Geolocation)  
**Returns**: <code>Promise.&lt;(any\|LocalTimeData)&gt;</code> - An object containing the local time and timezone information:  
**Throws**:

- <code>Error</code> If the API request fails or returns an error status.


| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>string</code> | GoogleMaps API key. |
| lat | <code>number</code> |  |
| lng | <code>number</code> |  |


* * *

<a name="module_Geolocation.LocalTimeData"></a>

### Geolocation.LocalTimeData : <code>Object</code>
**Kind**: static typedef of [<code>Geolocation</code>](#module_Geolocation)  
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


* * *

<a name="module_OpenMeteo"></a>

## OpenMeteo

* [OpenMeteo](#module_OpenMeteo)
    * [.exports.useForecastCurrent(lat, lon, refreshIntervalMin)](#module_OpenMeteo.exports.useForecastCurrent) ⇒ <code>ForecastData</code>
    * [.exports.useForecastDaily(lat, lon, refreshIntervalMin)](#module_OpenMeteo.exports.useForecastDaily) ⇒ <code>ForecastData</code>
    * [.exports.useForecastHourly(location, dayNum)](#module_OpenMeteo.exports.useForecastHourly) ⇒ <code>ForecastData</code>
    * [.exports.weatherSymbol(code, [precipitation], night, dark)](#module_OpenMeteo.exports.weatherSymbol) ⇒ <code>Object</code>
    * [.ForecastData](#module_OpenMeteo.ForecastData) : <code>Object</code>


* * *

<a name="module_OpenMeteo.exports.useForecastCurrent"></a>

### OpenMeteo.exports.useForecastCurrent(lat, lon, refreshIntervalMin) ⇒ <code>ForecastData</code>
Custom hook to fetch current weather data from OpenMeteo API.

**Kind**: static method of [<code>OpenMeteo</code>](#module_OpenMeteo)  
**Returns**: <code>ForecastData</code> - {data, isLoading, isError, apiUrl}  

| Param | Type |
| --- | --- |
| lat | <code>number</code> | 
| lon | <code>number</code> | 
| refreshIntervalMin | <code>number</code> | 


* * *

<a name="module_OpenMeteo.exports.useForecastDaily"></a>

### OpenMeteo.exports.useForecastDaily(lat, lon, refreshIntervalMin) ⇒ <code>ForecastData</code>
Custom hook to fetch daily forecast (10 days) data from OpenMeteo API.
https://api.open-meteo.com/v1/forecast?timezone=auto&latitude=36.6644363&longitude=-4.5108962&forecast_days=10&daily=weathercode

**Kind**: static method of [<code>OpenMeteo</code>](#module_OpenMeteo)  
**Returns**: <code>ForecastData</code> - {data, isLoading, isError, apiUrl}  

| Param | Type |
| --- | --- |
| lat | <code>number</code> | 
| lon | <code>number</code> | 
| refreshIntervalMin | <code>number</code> | 


* * *

<a name="module_OpenMeteo.exports.useForecastHourly"></a>

### OpenMeteo.exports.useForecastHourly(location, dayNum) ⇒ <code>ForecastData</code>
Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.

**Kind**: static method of [<code>OpenMeteo</code>](#module_OpenMeteo)  
**Returns**: <code>ForecastData</code> - {data, isLoading, isError, apiUrl}  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Object</code> |  |
| dayNum | <code>number</code> | Number of days from today: -1 = 24 hours, 0 = today, 1 = tomorrow, ... |


* * *

<a name="module_OpenMeteo.exports.weatherSymbol"></a>

### OpenMeteo.exports.weatherSymbol(code, [precipitation], night, dark) ⇒ <code>Object</code>
Get weather symbol and description based on the weather code.

**Kind**: static method of [<code>OpenMeteo</code>](#module_OpenMeteo)  
**Returns**: <code>Object</code> - { icon: string, description: string }  

| Param | Type |
| --- | --- |
| code | <code>any</code> | 
| [precipitation] | <code>number</code> | 
| night | <code>boolean</code> | 
| dark | <code>boolean</code> | 


* * *

<a name="module_OpenMeteo.ForecastData"></a>

### OpenMeteo.ForecastData : <code>Object</code>
**Kind**: static typedef of [<code>OpenMeteo</code>](#module_OpenMeteo)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | Forecast data |
| isLoading | <code>boolean</code> | Loading state |
| isError | <code>any</code> | Error state |
| apiUrl | <code>string</code> | API URL |


* * *

<a name="module_Utils"></a>

## Utils

* [Utils](#module_Utils)
    * [.directions](#module_Utils.directions) : <code>Array.&lt;Compass&gt;</code>
    * [.directionsEs](#module_Utils.directionsEs) : <code>Array.&lt;Compass&gt;</code>
    * [.ALERT_LEVEL](#module_Utils.ALERT_LEVEL) : <code>Array.&lt;AlertLevel&gt;</code>
    * [.WIND_LEVELS](#module_Utils.WIND_LEVELS) : <code>Array.&lt;WindLevel&gt;</code>
    * [.exports.degreesToCompass(degrees, language)](#module_Utils.exports.degreesToCompass) ⇒ <code>Object</code>
    * [.exports.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow)](#module_Utils.exports.getWarningByDays) ⇒ <code>Object</code> \| <code>null</code>
    * [.exports.getWarning(precipitation, showers)](#module_Utils.exports.getWarning) ⇒ <code>Object</code> \| <code>null</code>
    * [.exports.WindArrow(props)](#module_Utils.exports.WindArrow)
    * [.exports.windArrowTx(deg)](#module_Utils.exports.windArrowTx) ⇒ <code>string</code>
    * [.exports.getWindLevel(speed)](#module_Utils.exports.getWindLevel) ⇒ <code>WindLevel</code> \| <code>null</code>
    * [.Compass](#module_Utils.Compass) : <code>Object</code>
    * [.AlertLevel](#module_Utils.AlertLevel) : <code>Object</code>
    * [.WindLevel](#module_Utils.WindLevel) : <code>Object</code>


* * *

<a name="module_Utils.directions"></a>

### Utils.directions : <code>Array.&lt;Compass&gt;</code>
English compass designations

**Kind**: static constant of [<code>Utils</code>](#module_Utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| short | <code>string</code> | Short compass designation |
| full | <code>string</code> | Full compass designation |


* * *

<a name="module_Utils.directionsEs"></a>

### Utils.directionsEs : <code>Array.&lt;Compass&gt;</code>
Spanish compass designations

**Kind**: static constant of [<code>Utils</code>](#module_Utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| short | <code>string</code> | Short compass designation |
| full | <code>string</code> | Full compass designation |


* * *

<a name="module_Utils.ALERT_LEVEL"></a>

### Utils.ALERT\_LEVEL : <code>Array.&lt;AlertLevel&gt;</code>
Alert levels for rain and showers

**Kind**: static constant of [<code>Utils</code>](#module_Utils)  

* * *

<a name="module_Utils.WIND_LEVELS"></a>

### Utils.WIND\_LEVELS : <code>Array.&lt;WindLevel&gt;</code>
Ordered list of wind levels.

**Kind**: static constant of [<code>Utils</code>](#module_Utils)  

* * *

<a name="module_Utils.exports.degreesToCompass"></a>

### Utils.exports.degreesToCompass(degrees, language) ⇒ <code>Object</code>
Convert degrees to compass designation

**Kind**: static method of [<code>Utils</code>](#module_Utils)  
**Returns**: <code>Object</code> - {short: string, full: string}  

| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>number</code> |  |
| language | <code>string</code> | Language code ("en-US", "es-ES", "auto") |


* * *

<a name="module_Utils.exports.getWarningByDays"></a>

### Utils.exports.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow) ⇒ <code>Object</code> \| <code>null</code>
Get warning by today and tomorrow

**Kind**: static method of [<code>Utils</code>](#module_Utils)  
**Returns**: <code>Object</code> \| <code>null</code> - {{ levelNum: number, level: string, message: string, day: number } | null}  

| Param | Type |
| --- | --- |
| precipitationSumToday | <code>number</code> | 
| precipitationSumTomorrow | <code>number</code> | 
| showersSumToday | <code>number</code> | 
| showersSumTomorrow | <code>number</code> | 


* * *

<a name="module_Utils.exports.getWarning"></a>

### Utils.exports.getWarning(precipitation, showers) ⇒ <code>Object</code> \| <code>null</code>
Get warning by precipitation and showers

**Kind**: static method of [<code>Utils</code>](#module_Utils)  
**Returns**: <code>Object</code> \| <code>null</code> - {{ levelNum: number, level: string, message: string } | null}  

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 
| showers | <code>number</code> | 


* * *

<a name="module_Utils.exports.WindArrow"></a>

### Utils.exports.WindArrow(props)
SVG arrow indicating wind direction.

**Kind**: static method of [<code>Utils</code>](#module_Utils)  
**Component**: JSX  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Component props. |
| props.deg | <code>number</code> | Wind direction in degrees (0 = North, 90 = East, etc.). |
| [props.size] | <code>string</code> | Tailwind CSS size class (e.g., 'size-10') |
| [props.strokeWidth] | <code>number</code> | Stroke width of the arrow (range: 1–6). |
| [props.className] | <code>string</code> | Additional CSS classes. |


* * *

<a name="module_Utils.exports.windArrowTx"></a>

### Utils.exports.windArrowTx(deg) ⇒ <code>string</code>
Convert wind direction in degrees to an arrow representation.

**Kind**: static method of [<code>Utils</code>](#module_Utils)  
**Returns**: <code>string</code> - Arrow representation of the wind direction.  

| Param | Type | Description |
| --- | --- | --- |
| deg | <code>number</code> | Wind direction in degrees. |


* * *

<a name="module_Utils.exports.getWindLevel"></a>

### Utils.exports.getWindLevel(speed) ⇒ <code>WindLevel</code> \| <code>null</code>
Return the wind level based on the speed.

**Kind**: static method of [<code>Utils</code>](#module_Utils)  
**Returns**: <code>WindLevel</code> \| <code>null</code> - Wind level object or null if speed is null  

| Param | Type | Description |
| --- | --- | --- |
| speed | <code>number</code> | Wind speed in km/h |


* * *

<a name="module_Utils.Compass"></a>

### Utils.Compass : <code>Object</code>
**Kind**: static typedef of [<code>Utils</code>](#module_Utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| short | <code>string</code> | Short compass designation |
| full | <code>string</code> | Full compass designation |


* * *

<a name="module_Utils.AlertLevel"></a>

### Utils.AlertLevel : <code>Object</code>
**Kind**: static typedef of [<code>Utils</code>](#module_Utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| levelNum | <code>number</code> | The alert level number. |
| level | <code>string</code> | The alert level string (e.g., "red", "orange", "yellow"). |
| precipitation | <code>number</code> | The precipitation threshold for the alert level. |
| showers | <code>number</code> | The showers threshold for the alert level. |


* * *

<a name="module_Utils.WindLevel"></a>

### Utils.WindLevel : <code>Object</code>
**Kind**: static typedef of [<code>Utils</code>](#module_Utils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Level ID |
| speed | <code>number</code> | Minimum wind speed for this level |
| color | <code>string</code> | Color representing this level |
| tx | <code>string</code> | Text representing this level |
| txEn | <code>string</code> | Text representing this level |


* * *

<a name="module_Utils/TimeDateStr"></a>

## Utils/TimeDateStr
Helpers for get date and time formeted strings


* [Utils/TimeDateStr](#module_Utils/TimeDateStr)
    * [.dateFormat([date])](#module_Utils/TimeDateStr.dateFormat) ⇒ <code>string</code>
    * [.timeString([date], [sec])](#module_Utils/TimeDateStr.timeString) ⇒ <code>string</code>
    * [.nowString(sec)](#module_Utils/TimeDateStr.nowString) ⇒ <code>String</code>
    * [.getLocalTimeFromTz(timeZone, [date])](#module_Utils/TimeDateStr.getLocalTimeFromTz) ⇒ <code>string</code>


* * *

<a name="module_Utils/TimeDateStr.dateFormat"></a>

### Utils/TimeDateStr.dateFormat([date]) ⇒ <code>string</code>
Returns a date as a formated string.

**Kind**: static method of [<code>Utils/TimeDateStr</code>](#module_Utils/TimeDateStr)  
**Returns**: <code>string</code> - La fecha formateada.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [date] | <code>Date</code> | <code>new Date()</code> | La fecha a formatear. |


* * *

<a name="module_Utils/TimeDateStr.timeString"></a>

### Utils/TimeDateStr.timeString([date], [sec]) ⇒ <code>string</code>
Returns a time as a formated string.

**Kind**: static method of [<code>Utils/TimeDateStr</code>](#module_Utils/TimeDateStr)  
**Returns**: <code>string</code> - La fecha formateada.  

| Param | Type | Default |
| --- | --- | --- |
| [date] | <code>Date</code> |  | 
| [sec] | <code>boolean</code> | <code>false</code> | 


* * *

<a name="module_Utils/TimeDateStr.nowString"></a>

### Utils/TimeDateStr.nowString(sec) ⇒ <code>String</code>
Returns a now time as a formated string.

**Kind**: static method of [<code>Utils/TimeDateStr</code>](#module_Utils/TimeDateStr)  
**Returns**: <code>String</code> - now time as a formated string  

| Param | Type | Default |
| --- | --- | --- |
| sec | <code>boolean</code> | <code>false</code> | 


* * *

<a name="module_Utils/TimeDateStr.getLocalTimeFromTz"></a>

### Utils/TimeDateStr.getLocalTimeFromTz(timeZone, [date]) ⇒ <code>string</code>
Return the local time string from a given timezone.

**Kind**: static method of [<code>Utils/TimeDateStr</code>](#module_Utils/TimeDateStr)  
**Returns**: <code>string</code> - - The formatted local time string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| timeZone | <code>string</code> |  | The timezone string (e.g., 'America/New_York'). |
| [date] | <code>Date</code> \| <code>number</code> | <code>new Date()</code> | The date object to format. Defaults to the current date. |


* * *

