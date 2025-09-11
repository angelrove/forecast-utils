# @forecast-utils

Several utility libraries for my "tierracolora.com" project.

Includes directory `images/ws` with weather images (symbols)

I use private libraries for the following:
- Astronomy calculations: `suncalc3`

# Documentation
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
    * [.MoonDataExt](#module_Astronomy/MoonCalc.MoonDataExt) : <code>object</code>
    * [.MoonData](#module_Astronomy/MoonCalc.MoonData) : <code>object</code>


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

### Astronomy/MoonCalc.MoonDataExt : <code>object</code>
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
| next | <code>object</code> | 


* * *

<a name="module_Astronomy/MoonCalc.MoonData"></a>

### Astronomy/MoonCalc.MoonData : <code>object</code>
**Kind**: static typedef of [<code>Astronomy/MoonCalc</code>](#module_Astronomy/MoonCalc)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| position | <code>AstroPosition</code> |  |
| next | <code>object</code> |  |
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
**Returns**: <code>Object</code> - { sunTimes: object, sunPosition: object, sunPhase: string }  

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

