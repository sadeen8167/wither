// قاموس الترجمات الكامل لـ 12 لغة مع تحديد اللغات المفتاحية للبحث
const languages = {
    ar: {
        dir: "rtl", label: "العربية", mainTitle: "كيف تبدو السماء اليوم؟", searchPlaceholder: "ابحث عن دولة أو محافظة...",
        searchBtn: "بحث", loading: "جاري التحميل...", errorTitle: "حدث خطأ ما", errorDesc: "لم نتمكن من الاتصال بالخادم.",
        retry: "إعادة المحاولة", noResults: "لم يتم العثور على نتائج للبحث!", feelsLike: "الشعور الحقيقي",
        humidity: "الرطوبة", wind: "الرياح", precipitation: "الهطول", dailyForecast: "التوقعات اليومية",
        hourlyForecast: "التوقعات الساعية", unitsBtn: "الوحدات", switchToImperial: "التحويل للنظام الإمبراطوري", today: "اليوم",
        themeDark: "المظهر: داكن", themeLight: "المظهر: فاتح", themeMidnight: "المظهر: نيلي"
    },
    en: {
        dir: "ltr", label: "English", mainTitle: "How's the sky looking today?", searchPlaceholder: "Search for a country or city...",
        searchBtn: "Search", loading: "Loading...", errorTitle: "Something went wrong", errorDesc: "We couldn't connect to server.",
        retry: "Retry", noResults: "No search result found!", feelsLike: "Feels Like",
        humidity: "Humidity", wind: "Wind", precipitation: "Precipitation", dailyForecast: "Daily forecast",
        hourlyForecast: "Hourly forecast", unitsBtn: "Units", switchToImperial: "Switch to Imperial", today: "Today",
        themeDark: "Theme: Dark", themeLight: "Theme: Light", themeMidnight: "Theme: Midnight"
    },
    es: {
        dir: "ltr", label: "Español", mainTitle: "¿Cómo está el cielo hoy?", searchPlaceholder: "Buscar un país o ciudad...",
        searchBtn: "Buscar", loading: "Cargando...", errorTitle: "Algo salió mal", errorDesc: "No pudimos conectar con el servidor.",
        retry: "Reintentar", noResults: "¡No se encontraron resultados!", feelsLike: "Sensación",
        humidity: "Humedad", wind: "Viento", precipitation: "Precipitación", dailyForecast: "Pronóstico diario",
        hourlyForecast: "Pronóstico por hora", unitsBtn: "Unidades", switchToImperial: "Cambiar a Imperial", today: "Hoy",
        themeDark: "Tema: Oscuro", themeLight: "Tema: Claro", themeMidnight: "Tema: Medianoche"
    },
    fr: {
        dir: "ltr", label: "Français", mainTitle: "Comment est le ciel aujourd'hui?", searchPlaceholder: "Chercher un pays ou ville...",
        searchBtn: "Chercher", loading: "Chargement...", errorTitle: "Un problème est survenu", errorDesc: "Connexion impossible.",
        retry: "Réessayer", noResults: "Aucun résultat trouvé!", feelsLike: "Ressenti",
        humidity: "Humidité", wind: "Vent", precipitation: "Précipitation", dailyForecast: "Prévisions du jour",
        hourlyForecast: "Prévisions horaires", unitsBtn: "Unités", switchToImperial: "Passer à l'impérial", today: "Aujourd'hui",
        themeDark: "Thème: Sombre", themeLight: "Thème: Clair", themeMidnight: "Thème: Minuit"
    },
    de: {
        dir: "ltr", label: "Deutsch", mainTitle: "Wie sieht der Himmel heute aus?", searchPlaceholder: "Land oder Stadt suchen...",
        searchBtn: "Suchen", loading: "Laden...", errorTitle: "Etwas ist schiefgelaufen", errorDesc: "Verbindung fehlgeschlagen.",
        retry: "Wiederholen", noResults: "Keine Ergebnisse gefunden!", feelsLike: "Gefühlt",
        humidity: "Feuchtigkeit", wind: "Wind", precipitation: "Niederschlag", dailyForecast: "Tägliche Vorhersage",
        hourlyForecast: "Stündliche Vorhersage", unitsBtn: "Einheiten", switchToImperial: "Auf Imperial umstellen", today: "Heute",
        themeDark: "Thema: Dunkel", themeLight: "Thema: Hell", themeMidnight: "Thema: Mitternacht"
    },
    it: {
        dir: "ltr", label: "Italiano", mainTitle: "Come sembra il cielo oggi?", searchPlaceholder: "Cerca un paese o una città...",
        searchBtn: "Cerca", loading: "Caricamento...", errorTitle: "Qualcosa è andato storto", errorDesc: "Impossibile connettersi.",
        retry: "Riprova", noResults: "Nessun risultato trovato!", feelsLike: "Percepito",
        humidity: "Umidità", wind: "Vento", precipitation: "Precipitazioni", dailyForecast: "Previsioni giornaliere",
        hourlyForecast: "Previsioni orarie", unitsBtn: "Unità", switchToImperial: "Passa a Imperiale", today: "Oggi",
        themeDark: "Tema: Scuro", themeLight: "Tema: Chiaro", themeMidnight: "Tema: Midnight"
    },
    pt: {
        dir: "ltr", label: "Português", mainTitle: "Como está o céu hoje?", searchPlaceholder: "Buscar país ou cidade...",
        searchBtn: "Buscar", loading: "Carregando...", errorTitle: "Algo deu errado", errorDesc: "Não foi possível conectar.",
        retry: "Repetir", noResults: "Nenhum resultado encontrado!", feelsLike: "Sensação",
        humidity: "Umidade", wind: "Vento", precipitation: "Precipitação", dailyForecast: "Previsioni diária",
        hourlyForecast: "Previsão horária", unitsBtn: "Unidades", switchToImperial: "Mudar para Imperial", today: "Hoje",
        themeDark: "Tema: Escuro", themeLight: "Tema: Claro", themeMidnight: "Tema: Meia-noite"
    },
    ru: {
        dir: "ltr", label: "Русский", mainTitle: "Как сегодня выглядит небо?", searchPlaceholder: "Поиск страны или города...",
        searchBtn: "Поиск", loading: "Загрузка...", errorTitle: "Что-то пошло не так", errorDesc: "Ошибка подключения к серверу.",
        retry: "Повторить", noResults: "Результатов не найдено!", feelsLike: "Ощущается как",
        humidity: "Влажность", wind: "Ветер", precipitation: "Осадки", dailyForecast: "Прогноз на день",
        hourlyForecast: "Почасовой прогноз", unitsBtn: "Единицы", switchToImperial: "На Имперские", today: "Сегодня",
        themeDark: "Тема: Темная", themeLight: "Тема: Светлая", themeMidnight: "Теma: Полночь"
    },
    zh: {
        dir: "ltr", label: "中文", mainTitle: "今天天空怎么样？", searchPlaceholder: "搜索国家或城市...",
        searchBtn: "搜索", loading: "加载中...", errorTitle: "出错了", errorDesc: "无法连接到服务器。",
        retry: "重试", noResults: "未找到结果！", feelsLike: "体感温度",
        humidity: "湿度", wind: "风速", precipitation: "降水量", dailyForecast: "每日预报",
        hourlyForecast: "每小时预报", unitsBtn: "单位", switchToImperial: "切换为英制", today: "今天",
        themeDark: "主题: 深色", themeLight: "主题: 浅色", themeMidnight: "主题: 午夜"
    },
    ja: {
        dir: "ltr", label: "日本語", mainTitle: "今日の天気は？", searchPlaceholder: "国や都市を検索...",
        searchBtn: "検索", loading: "読み込み中...", errorTitle: "エラーが発生しました", errorDesc: "サーバーに接続できません。",
        retry: "再試行", noResults: "結果が見つかりません！", feelsLike: "体感温度",
        humidity: "湿度", wind: "風速", precipitation: "降水量", dailyForecast: "週間天気",
        hourlyForecast: "時間別天気", unitsBtn: "単位", switchToImperial: "ヤード・ポンド法に切り替え", today: "今日",
        themeDark: "テーマ: ダーク", themeLight: "テーマ: ライト", themeMidnight: "テーマ: ミッドナイト"
    },
    tr: {
        dir: "ltr", label: "Türkçe", mainTitle: "Bugün gökyüzü nasıl görünüyor?", searchPlaceholder: "Ülke veya şehir ara...",
        searchBtn: "Ara", loading: "Yükleniyor...", errorTitle: "Bir şeyler yanlış gitti", errorDesc: "Sunucuya bağlanılamadı.",
        retry: "Tekrar Dene", noResults: "Sonuç bulunamadı!", feelsLike: "Hissedilen",
        humidity: "Nem", wind: "Rüzgar", precipitation: "Yağış", dailyForecast: "Günlük tahmin",
        hourlyForecast: "Saatlik tahmin", unitsBtn: "Birimler", switchToImperial: "İmparatorluk Sistemine Geç", today: "Bugün",
        themeDark: "Tema: Karanlık", themeLight: "Tema: Aydınlık", themeMidnight: "Tema: Gece Yarısı"
    },
    hi: {
        dir: "ltr", label: "हिन्दी", mainTitle: "आज आसमान कैसा दिख रहा है?", searchPlaceholder: "देश या शहर खोजें...",
        searchBtn: "खोजें", loading: "लोड हो रहा है...", errorTitle: "कुछ गड़बड़ हो गई", errorDesc: "सर्वर से कनेक्ट नहीं हो सका।",
        retry: "पुनः प्रयास करें", noResults: "कोई परिणाम नहीं मिला!", feelsLike: "ऐसा महसूस होता है",
        humidity: "आर्द्रता", wind: "हवा", precipitation: "वर्षा", dailyForecast: "दैनिक पूर्वानुमान",
        hourlyForecast: "प्रति घंटा पूर्वानुमान", unitsBtn: "इकाइयां", switchToImperial: "इंपीरियल में बदलें", today: "आज",
        themeDark: "थीम: डार्क", themeLight: "थीम: लाइट", themeMidnight: "थीम: मिडनाइट"
    }
};

const state = {
    lang: 'ar',
    themeIndex: 0,
    themes: ['dark', 'light', 'midnight'],
    units: { temp: 'c', wind: 'kmh', precip: 'mm' },
    currentCoordinates: { lat: 24.7136, lon: 46.6753, name: "الرياض، السعودية" },
    weatherData: null,
    activeDayIndex: 0
};

document.getElementById('themeBtn').addEventListener('click', () => {
    state.themeIndex = (state.themeIndex + 1) % state.themes.length;
    const nextTheme = state.themes[state.themeIndex];
    document.documentElement.setAttribute('data-theme', nextTheme);
    
    let themeKey = "themeDark";
    if(nextTheme === 'light') themeKey = "themeLight";
    if(nextTheme === 'midnight') themeKey = "themeMidnight";
    
    document.getElementById('themeLabel').innerText = languages[state.lang][themeKey];
});

const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
langBtn.addEventListener('click', () => langMenu.classList.toggle('show'));

document.querySelectorAll('#langMenu .dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        state.lang = item.getAttribute('data-lang');
        langMenu.classList.remove('show');
        document.getElementById('currentLangLabel').innerText = languages[state.lang].label;
        
        document.documentElement.setAttribute('dir', languages[state.lang].dir);
        document.documentElement.setAttribute('lang', state.lang);
        
        applyTranslations();
        if (state.weatherData) {
            renderWeather();
            setupHourlyDayDropdown();
        }
    });
});

function applyTranslations() {
    const currentLexicon = languages[state.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (currentLexicon[key]) el.innerText = currentLexicon[key];
    });
    document.querySelectorAll('[data-i18n-holder]').forEach(el => {
        const key = el.getAttribute('data-i18n-holder');
        if (currentLexicon[key]) el.setAttribute('placeholder', currentLexicon[key]);
    });
}

let debounceTimer;
const searchInput = document.getElementById('searchInput');
const autocompleteDropdown = document.getElementById('autocompleteDropdown');

searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const query = searchInput.value.trim();
    if (query.length < 2) { autocompleteDropdown.style.display = 'none'; return; }

    debounceTimer = setTimeout(async () => {
        try {
            // نمرر حقل language= ar/en 
            const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=${state.lang}`);
            const data = await res.json();
            
            if (data.results && data.results.length > 0) {
                autocompleteDropdown.innerHTML = '';
                data.results.forEach(place => {
                    const country = place.country ? `, ${place.country}` : '';
                    const admin = place.admin1 ? `, ${place.admin1}` : '';
                    const div = document.createElement('div');
                    div.className = 'autocomplete-item';
                    div.innerText = `${place.name}${admin}${country}`;
                    
                    div.addEventListener('click', () => {
                        state.currentCoordinates = { lat: place.latitude, lon: place.longitude, name: `${place.name}${country}` };
                        searchInput.value = div.innerText;
                        autocompleteDropdown.style.display = 'none';
                        fetchWeatherData();
                    });
                    autocompleteDropdown.appendChild(div);
                });
                autocompleteDropdown.style.display = 'block';
            } else {
                autocompleteDropdown.style.display = 'none';
            }
        } catch (err) { console.error(err); }
    }, 300);
});

// تفعيل منسدلات التحكم الفرعية والأزرار
const unitsBtn = document.getElementById('unitsBtn');
const unitsMenu = document.getElementById('unitsMenu');
unitsBtn.addEventListener('click', () => unitsMenu.classList.toggle('show'));

window.addEventListener('click', (e) => {
    if (!unitsBtn.contains(e.target)) unitsMenu.classList.remove('show');
    if (!langBtn.contains(e.target)) langMenu.classList.remove('show');
    if (!document.getElementById('hourlyDayBtn').contains(e.target)) document.getElementById('hourlyDayMenu').classList.remove('show');
    if (!searchInput.contains(e.target)) autocompleteDropdown.style.display = 'none';
});

document.getElementById('searchBtn').addEventListener('click', fetchWeatherData);
document.getElementById('retryBtn').addEventListener('click', fetchWeatherData);

// جلب معلومات الطقس الشاملة من السيرفر وعرضها
async function fetchWeatherData() {
    document.getElementById('weatherContent').classList.add('hidden');
    document.getElementById('noResultsState').classList.add('hidden');
    document.getElementById('errorState').classList.add('hidden');
    document.getElementById('loadingState').classList.remove('hidden');

    const { lat, lon } = state.currentCoordinates;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error();
        state.weatherData = await response.json();
        
        document.getElementById('loadingState').classList.add('hidden');
        document.getElementById('weatherContent').classList.remove('hidden');
        renderWeather();
        setupHourlyDayDropdown();
    } catch (error) {
        document.getElementById('loadingState').classList.add('hidden');
        document.getElementById('errorState').classList.remove('hidden');
    }
}

function convertTemp(celsius) { 
    return state.units.temp === 'f' ? Math.round((celsius * 9/5) + 32) + '°' : Math.round(celsius) + '°'; 
}

function getWeatherIcon(code) {
    if ([0].includes(code)) return '☀️';
    if ([1, 2, 3].includes(code)) return '🌤️';
    if ([45, 48].includes(code)) return '🌫️';
    if ([51, 53, 55, 61, 63, 65].includes(code)) return '🌧️';
    return '☁️';
}

function renderWeather() {
    if (!state.weatherData) return;
    const d = state.weatherData;
    
    document.getElementById('cityName').innerText = state.currentCoordinates.name;
    
    // صياغة وعرض تاريخ اليوم المترجم بالكامل طبقاً للغة المختارة حالياً في الصفحة
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString(state.lang, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
    document.getElementById('mainTemp').innerText = convertTemp(d.current_weather.temperature);
    document.getElementById('mainWeatherIcon').innerText = getWeatherIcon(d.current_weather.weathercode);
    
    document.getElementById('feelsLikeVal').innerText = convertTemp(d.hourly.apparent_temperature[0]);
    document.getElementById('humidityVal').innerText = d.hourly.relativehumidity_2m[0] + '%';
    document.getElementById('windVal').innerText = d.current_weather.windspeed + ' km/h';
    document.getElementById('precipVal').innerText = d.hourly.precipitation[0] + ' mm';

    // توليد وتصيير كروت التوقعات لـ 7 أيام بالكامل باللغة المختارة
    const container = document.getElementById('dailyForecastContainer');
    container.innerHTML = '';
    for(let i=0; i<7; i++) {
        const dayName = i === 0 ? languages[state.lang].today : new Date(d.daily.time[i]).toLocaleDateString(state.lang, { weekday: 'short' });
        const card = document.createElement('div');
        card.className = `daily-card ${i === state.activeDayIndex ? 'active-day-border' : ''}`;
        card.innerHTML = `
            <span style="font-size:0.9rem; font-weight:600;">${dayName}</span>
            <span style="font-size:1.5rem">${getWeatherIcon(d.daily.weathercode[i])}</span>
            <div><span style="font-weight:600">${convertTemp(d.daily.temperature_2m_max[i])}</span></div>
        `;
        container.appendChild(card);
    }
    renderHourlyForecast();
}

function setupHourlyDayDropdown() {
    const menu = document.getElementById('hourlyDayMenu');
    const btn = document.getElementById('hourlyDayBtn');
    btn.onclick = () => menu.classList.toggle('show');
    
    menu.innerHTML = '';
    for(let i=0; i<7; i++) {
        const div = document.createElement('div');
        div.innerText = i === 0 ? languages[state.lang].today : new Date(state.weatherData.daily.time[i]).toLocaleDateString(state.lang, { weekday: 'long' });
        div.addEventListener('click', () => {
            state.activeDayIndex = i;
            btn.innerHTML = `${div.innerText} <i class="fa-solid fa-chevron-down"></i>`;
            menu.classList.remove('show');
            renderWeather();
        });
        menu.appendChild(div);
    }
    btn.innerHTML = `${state.activeDayIndex === 0 ? languages[state.lang].today : new Date(state.weatherData.daily.time[state.activeDayIndex]).toLocaleDateString(state.lang, { weekday: 'long' })} <i class="fa-solid fa-chevron-down"></i>`;
}

function renderHourlyForecast() {
    const container = document.getElementById('hourlyForecastContainer');
    container.innerHTML = '';
    const startIndex = state.activeDayIndex * 24;
    const endIndex = startIndex + 24;
    const hourlyData = state.weatherData.hourly;
    
    for(let i = startIndex; i < endIndex; i += 2) { // عرض قفزات كل ساعتين لراحة العين بالتصفح
        const hourTime = new Date(hourlyData.time[i]).getHours();
        const ampm = hourTime >= 12 ? 'PM' : 'AM';
        const displayHour = hourTime % 12 === 0 ? 12 : hourTime % 12;
        
        const row = document.createElement('div');
        row.className = 'hourly-row';
        row.innerHTML = `
            <div class="hourly-time-block">
                <span>${getWeatherIcon(hourlyData.weathercode[i])}</span>
                <span>${displayHour}:00 ${ampm}</span>
            </div>
            <span style="font-weight:600">${convertTemp(hourlyData.temperature_2m[i])}</span>
        `;
        container.appendChild(row);
    }
}

// الإقلاع الأولي للتطبيق
applyTranslations();
fetchWeatherData();