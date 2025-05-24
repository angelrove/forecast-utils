## Modules

<dl>
<dt><a href="#module_Geolocation">Geolocation</a></dt>
<dd></dd>
<dt><a href="#module_OpenMeteo">OpenMeteo</a></dt>
<dd></dd>
<dt><a href="#module_Utils">Utils</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#directions">directions</a> : <code><a href="#Compass">Array.&lt;Compass&gt;</a></code></dt>
<dd><p>English compass designations</p>
</dd>
<dt><a href="#directionsEs">directionsEs</a> : <code><a href="#Compass">Array.&lt;Compass&gt;</a></code></dt>
<dd><p>Spanish compass designations</p>
</dd>
<dt><a href="#ALERT_LEVEL">ALERT_LEVEL</a> : <code><a href="#AlertLevel">Array.&lt;AlertLevel&gt;</a></code></dt>
<dd><p>Alert levels for rain and showers</p>
</dd>
<dt><a href="#WIND_LEVELS">WIND_LEVELS</a> : <code><a href="#WindLevel">Array.&lt;WindLevel&gt;</a></code></dt>
<dd><p>Ordered list of wind levels.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getWarningRain">getWarningRain(precipitation)</a> ⇒ <code>Object</code> | <code>null</code></dt>
<dd><p>Get warning by rain</p>
</dd>
<dt><a href="#getWarningShowers">getWarningShowers(showers)</a> ⇒ <code>Object</code> | <code>null</code></dt>
<dd><p>Get warning by showers</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Compass">Compass</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AlertLevel">AlertLevel</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#WindLevel">WindLevel</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="module_Geolocation"></a>

## Geolocation

* * *

<a name="module_Geolocation.exports.getGeolocation"></a>

### Geolocation.exports.getGeolocation() ⇒ <code>Promise.&lt;{latitude: number, longitude: number, formatted\_address: string}&gt;</code>
Get the current geolocation of the device and reverse geocode it to get the address.

**Kind**: static method of [<code>Geolocation</code>](#module_Geolocation)  
**Throws**:

- <code>Error</code> If geolocation is not supported or permission is denied.


* * *

<a name="module_OpenMeteo"></a>

## OpenMeteo

* [OpenMeteo](#module_OpenMeteo)
    * [.exports.useForecastCurrent(lat, lon, refreshIntervalMin)](#module_OpenMeteo.exports.useForecastCurrent) ⇒ <code>Object</code>
    * [.exports.useForecastDaily(lat, lon, refreshIntervalMin)](#module_OpenMeteo.exports.useForecastDaily) ⇒ <code>Object</code>
    * [.exports.useForecastHourly(location, dayNum)](#module_OpenMeteo.exports.useForecastHourly) ⇒ <code>Object</code>
    * [.exports.weatherSymbol(code, [precipitation], night, dark)](#module_OpenMeteo.exports.weatherSymbol) ⇒ <code>Object</code>


* * *

<a name="module_OpenMeteo.exports.useForecastCurrent"></a>

### OpenMeteo.exports.useForecastCurrent(lat, lon, refreshIntervalMin) ⇒ <code>Object</code>
Custom hook to fetch current weather data from OpenMeteo API.

**Kind**: static method of [<code>OpenMeteo</code>](#module_OpenMeteo)  

| Param | Type |
| --- | --- |
| lat | <code>number</code> | 
| lon | <code>number</code> | 
| refreshIntervalMin | <code>number</code> | 


* * *

<a name="module_OpenMeteo.exports.useForecastDaily"></a>

### OpenMeteo.exports.useForecastDaily(lat, lon, refreshIntervalMin) ⇒ <code>Object</code>
Custom hook to fetch daily forecast (10 days) data from OpenMeteo API.
https://api.open-meteo.com/v1/forecast?timezone=auto&latitude=36.6644363&longitude=-4.5108962&forecast_days=10&daily=weathercode

**Kind**: static method of [<code>OpenMeteo</code>](#module_OpenMeteo)  

| Param | Type |
| --- | --- |
| lat | <code>number</code> | 
| lon | <code>number</code> | 
| refreshIntervalMin | <code>number</code> | 


* * *

<a name="module_OpenMeteo.exports.useForecastHourly"></a>

### OpenMeteo.exports.useForecastHourly(location, dayNum) ⇒ <code>Object</code>
Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.

**Kind**: static method of [<code>OpenMeteo</code>](#module_OpenMeteo)  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Object</code> |  |
| dayNum | <code>number</code> | Number of days from today: -1 = 24 hours, 0 = today, 1 = tomorrow, ... |


* * *

<a name="module_OpenMeteo.exports.weatherSymbol"></a>

### OpenMeteo.exports.weatherSymbol(code, [precipitation], night, dark) ⇒ <code>Object</code>
Get weather symbol and description based on the weather code.

**Kind**: static method of [<code>OpenMeteo</code>](#module_OpenMeteo)  

| Param | Type |
| --- | --- |
| code | <code>any</code> | 
| [precipitation] | <code>number</code> | 
| night | <code>boolean</code> | 
| dark | <code>boolean</code> | 


* * *

<a name="module_Utils"></a>

## Utils

* [Utils](#module_Utils)
    * [.exports.degreesToCompass(degrees, language)](#module_Utils.exports.degreesToCompass) ⇒ <code>Object</code>
    * [.exports.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow)](#module_Utils.exports.getWarningByDays) ⇒ <code>Object</code> \| <code>null</code>
    * [.exports.getWarning(precipitation, showers)](#module_Utils.exports.getWarning) ⇒ <code>Object</code> \| <code>null</code>
    * [.exports.windArrowTx(deg)](#module_Utils.exports.windArrowTx)
    * [.exports.getWindLevel(speed)](#module_Utils.exports.getWindLevel) ⇒ [<code>WindLevel</code>](#WindLevel) \| <code>null</code>


* * *

<a name="module_Utils.exports.degreesToCompass"></a>

### Utils.exports.degreesToCompass(degrees, language) ⇒ <code>Object</code>
Convert degrees to compass designation

**Kind**: static method of [<code>Utils</code>](#module_Utils)  

| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>number</code> |  |
| language | <code>string</code> | Language code ("en-US", "es-ES", "auto") |


* * *

<a name="module_Utils.exports.getWarningByDays"></a>

### Utils.exports.getWarningByDays(precipitationSumToday, precipitationSumTomorrow, showersSumToday, showersSumTomorrow) ⇒ <code>Object</code> \| <code>null</code>
Get warning by today and tomorrow

**Kind**: static method of [<code>Utils</code>](#module_Utils)  

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

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 
| showers | <code>number</code> | 


* * *

<a name="module_Utils.exports.windArrowTx"></a>

### Utils.exports.windArrowTx(deg)
Convert wind direction in degrees to an arrow representation.

**Kind**: static method of [<code>Utils</code>](#module_Utils)  

| Param | Type | Description |
| --- | --- | --- |
| deg | <code>number</code> | Wind direction in degrees. |


* * *

<a name="module_Utils.exports.getWindLevel"></a>

### Utils.exports.getWindLevel(speed) ⇒ [<code>WindLevel</code>](#WindLevel) \| <code>null</code>
Return the wind level based on the speed.

**Kind**: static method of [<code>Utils</code>](#module_Utils)  
**Returns**: [<code>WindLevel</code>](#WindLevel) \| <code>null</code> - Wind level object or null if speed is null  

| Param | Type | Description |
| --- | --- | --- |
| speed | <code>number</code> | Wind speed in km/h |


* * *

<a name="directions"></a>

## directions : [<code>Array.&lt;Compass&gt;</code>](#Compass)
English compass designations

**Kind**: global constant  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| short | <code>string</code> | Short compass designation |
| full | <code>string</code> | Full compass designation |


* * *

<a name="directionsEs"></a>

## directionsEs : [<code>Array.&lt;Compass&gt;</code>](#Compass)
Spanish compass designations

**Kind**: global constant  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| short | <code>string</code> | Short compass designation |
| full | <code>string</code> | Full compass designation |


* * *

<a name="ALERT_LEVEL"></a>

## ALERT\_LEVEL : [<code>Array.&lt;AlertLevel&gt;</code>](#AlertLevel)
Alert levels for rain and showers

**Kind**: global constant  

* * *

<a name="WIND_LEVELS"></a>

## WIND\_LEVELS : [<code>Array.&lt;WindLevel&gt;</code>](#WindLevel)
Ordered list of wind levels.

**Kind**: global constant  

* * *

<a name="getWarningRain"></a>

## getWarningRain(precipitation) ⇒ <code>Object</code> \| <code>null</code>
Get warning by rain

**Kind**: global function  

| Param | Type |
| --- | --- |
| precipitation | <code>number</code> | 


* * *

<a name="getWarningShowers"></a>

## getWarningShowers(showers) ⇒ <code>Object</code> \| <code>null</code>
Get warning by showers

**Kind**: global function  

| Param | Type |
| --- | --- |
| showers | <code>number</code> | 


* * *

<a name="Compass"></a>

## Compass : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| short | <code>string</code> | Short compass designation |
| full | <code>string</code> | Full compass designation |


* * *

<a name="AlertLevel"></a>

## AlertLevel : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| levelNum | <code>number</code> | The alert level number. |
| level | <code>string</code> | The alert level string (e.g., "red", "orange", "yellow"). |
| precipitation | <code>number</code> | The precipitation threshold for the alert level. |
| showers | <code>number</code> | The showers threshold for the alert level. |


* * *

<a name="WindLevel"></a>

## WindLevel : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Level ID |
| speed | <code>number</code> | Minimum wind speed for this level |
| color | <code>string</code> | Color representing this level |
| tx | <code>string</code> | Text representing this level |
| txEn | <code>string</code> | Text representing this level |


* * *

