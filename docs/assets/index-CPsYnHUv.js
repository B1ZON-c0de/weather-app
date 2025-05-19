(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function x(){const s=document.getElementById("loader");s.classList.remove("hidden"),s.classList.add("block")}function b(){const s=document.getElementById("loader");s.classList.remove("block"),s.classList.add("hidden")}function f(s,o=0){const n=new Date;n.setDate(n.getDate()+o);const a=n.toISOString().split("T")[0];return s.filter(e=>e.dt_txt.startsWith(a))}function g(s=0){const o=new Date;o.setHours(0,0,0,0);const n=new Date(o);n.setDate(o.getDate()+s);const a={day:"numeric",month:"long"};return n.toLocaleDateString("ru-RU",a)}const h={"01d":"wi-day-sunny","01n":"wi-night-clear","02d":"wi-day-cloudy","02n":"wi-night-alt-cloudy","03d":"wi-cloud","03n":"wi-cloud","04d":"wi-cloudy","04n":"wi-cloudy","09d":"wi-showers","09n":"wi-showers","10d":"wi-day-rain","10n":"wi-night-alt-rain","11d":"wi-thunderstorm","11n":"wi-thunderstorm","13d":"wi-snow","13n":"wi-snow","50d":"wi-fog","50n":"wi-fog"},L="0f1b9e0e1967683db7900e99663ff046";async function B(s){x();const o=`https://api.openweathermap.org/data/2.5/weather?q=${s}&appid=${L}&units=metric&lang=ru`,n=new Date,a={weekday:"long",day:"numeric",month:"long"};document.getElementById("dayDate").textContent=n.toLocaleDateString("ru-RU",a);try{const e=await fetch(o);if(!e.ok)throw new Error("Город не найден");const t=await e.json(),{name:r}=t,c=t.weather[0].description,d=Math.round(t.main.temp),m=Math.round(t.main.feels_like),u=Math.round(t.wind.speed),{humidity:y}=t.main,p=t.visibility/1e3;document.getElementById("cityName").textContent=r,document.getElementById("windSpeed").textContent=u+`
км/ч`,document.getElementById("humidityPer").textContent=y+"%",document.getElementById("visibility").textContent=p+`
км`,document.getElementById("weatherInStreet").textContent=c,document.getElementById("weatherTemp").innerHTML=`${d}&deg;`,document.getElementById("summary").innerHTML=`<h1 class="font-bold text-xl mb-1">Сводка на сегодня</h1>
      <p class="text-base text-sm">
        Чувствуется ${m}&deg;, на самом деле ${d}&deg;
        
      </p>`}catch(e){console.error("Ошибка: "+e.message)}finally{b()}}async function $(s){x();const o=`https://api.openweathermap.org/data/2.5/forecast?q=${s}&appid=${L}&units=metric&lang=ru`,n=g(1),a=g(2),e=g(3),t=g(4);try{const r=await fetch(o);if(!r.ok)throw new Error("Город не найден");const c=await r.json(),d=f(c.list,2),m=f(c.list,3),u=f(c.list,4),y=f(c.list,5),p=d[4].weather[0].icon,E=m[4].weather[0].icon,v=u[4].weather[0].icon,D=y[4].weather[0].icon;document.getElementById("weekWeather").innerHTML=`<div
          class="border-2 rounded-lg p-3 flex flex-col justify-between items-center gap-2"
        >
          <p class="font-semibold">${Math.round(d[4].main.temp)}&deg;</p>
          <i class="wi ${h[p]}"></i>
          <p class="text-sm">${n}</p>
        </div>
        <div
          class="border-2 rounded-lg p-3 flex flex-col justify-between items-center gap-2"
        >
          <p class="font-semibold">${Math.round(m[4].main.temp)}&deg;</p>
          <i class="wi ${h[E]}"></i>
          <p class="text-sm">${a}</p>
        </div>
        <div
          class="border-2 rounded-lg p-3 flex flex-col justify-between items-center gap-2"
        >
          <p class="font-semibold">${Math.round(u[4].main.temp)}&deg;</p>
          <i class="wi ${h[v]}"></i>
          <p class="text-sm">${e}</p>
        </div>
        <div
          class="border-2 rounded-lg p-3 flex flex-col justify-between items-center gap-2"
        >
          <p class="font-semibold">${Math.round(y[4].main.temp)}&deg;</p>
          <i class="wi ${h[D]}"></i>
          <p class="text-sm">${t}</p>
        </div>`}catch(r){console.error("Ошибка: "+r.message)}finally{b()}}function M(){const s=Math.floor(Math.random()*360),o=90+Math.random()*10,n=55+Math.random()*15;return S(s,o,n)}function S(s,o,n){o/=100,n/=100;const a=r=>(r+s/30)%12,e=o*Math.min(n,1-n),t=r=>{const c=n-e*Math.max(Math.min(a(r)-3,9-a(r),1),-1);return Math.round(c*255).toString(16).padStart(2,"0")};return`#${t(0)}${t(8)}${t(4)}`}const l=M();document.querySelector("body").style.backgroundColor=l;document.getElementById("dayDate").style.color=l;document.getElementById("windParam").style.color=l;document.getElementById("waterParam").style.color=l;document.getElementById("eyeParam").style.color=l;const i=document.getElementById("burger"),I=document.getElementById("change"),k=document.getElementById("btn"),w=document.getElementById("search");i.addEventListener("click",()=>{I.classList.toggle("h-40"),i.classList.contains("fa-bars")?(i.classList.remove("fa-bars"),i.classList.add("fa-xmark")):(i.classList.remove("fa-xmark"),i.classList.add("fa-bars"))});k.addEventListener("click",()=>{const s=w.value,o=document.getElementById("dayDate"),n=document.getElementById("params"),a=document.getElementById("weekText");document.getElementById("arrowHint").classList.add("hidden"),o.classList.contains("hidden")&&a.classList.contains("hidden")&&n.classList.contains("hidden")&&(o.classList.remove("hidden"),n.classList.remove("hidden"),a.classList.remove("hidden")),B(s),$(s),I.classList.toggle("h-40"),i.classList.contains("fa-bars")?(i.classList.remove("fa-bars"),i.classList.add("fa-xmark")):(i.classList.remove("fa-xmark"),i.classList.add("fa-bars")),w.value=""});
