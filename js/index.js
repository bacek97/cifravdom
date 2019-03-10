var t0 = performance.now();
const toUrlEncoded = (obj) => Object.keys(obj).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&')

var vk
var script = document.createElement('SCRIPT');
script.src = "https://api.vk.com/method/photos.get?owner_id=-58528824&v=5.92&album_id=228741307&access_token=3038692d3038692d3038692d5a300e7c7e330383038692d6cbb86b2e66a0ea7510a1261&callback=callbackVK";
document.getElementsByTagName("head")[0].appendChild(script);

function callbackVK(result) {
  vk = result
}


const fallbackLocale = 'ru'
const redirect = `/${fallbackLocale}/componentx`

function unique(arr) {
  var obj = {};
  arr.forEach((asd) => obj[asd[0]] = true)
  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

const componentX = () => Promise.resolve({
  template: '#componentX',
  data() {
    return {
      text: "abc"
    }
  },
  created() {
  },
  methods: {  },
  beforeRouteEnter (to, from, next) {
    next(componentx => {
    } )
  },
  beforeRouteUpdate (to, from, next) {
    // обрабатываем изменение параметров маршрута...
    // не забываем вызвать next()
    next()
  }
})

const componentLang = () => Promise.resolve({
  template: '#componentRoot',
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.getLang(component.$i18n.fallbackLocale)
      if (~component.availableLanguages.indexOf(to.params.language)) {  component.getLang(to.params.language) } else { alert(component.$t('lang404')); next(redirect) }
    })
  },
  beforeRouteUpdate(to, from, next) {
    next(~this.availableLanguages.indexOf(to.params.language)
      ? (this.getLang(to.params.language), true )
      : (alert(this.$t('lang404')), false) )
    
  },
  
  data() {
    return {
      tablica1: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
       text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `,
      
      availableLanguages: ['ru','en'],
      loadedLanguages: [],
      slide: 0,
      slide2: 0,
      sliding: null,
      GTable: { one: null, two: null }
    }
  },
  created() {
    this.$root.$on('bv::scrollspy::activate', this.onActivate)
    this.gGTable()
  },
  methods: {
    vk() { return vk },
    gtob(arr) {
var obj = {}
arr.forEach(function(row, i) {if (!obj[row[0]]) obj[row[0]]=[]; obj[row[0]].push(row)})
return obj
},
    gGTable() {
			axios
				.all(
					[ "https://script.google.com/macros/s/AKfycbz8lmBQ9bZyZp1pHA4eBARNS5LePfe0ThNFp1J9-0RA3vCpngTA/exec", "https://script.google.com/macros/s/AKfycbwfFzuMz7_LmAjKmCZk3B3QS9BZTXLK-JLi79zY8TOTqyrbEjo/exec"
           // , "https://api.vk.com/method/photos.get?owner_id=-58528824&v=5.92&album_id=228741307&access_token=3038692d3038692d3038692d5a300e7c7e330383038692d6cbb86b2e66a0ea7510a1261"
					].map(axios.get)
				)
				.then(
					axios.spread((one, two, vk) => {
						this.$set(this.GTable, 'one', one.data.Каталог)
						this.$set(this.GTable, 'two', two.data.Цены)
						this.$set(this.GTable, 'vk', vk.data)
					})
				)
		},
    onActivate(target) {
      console.log('Receved Event: scrollspy::activate for target ', target)
    },
    scrollIntoView(evt) {
        evt.preventDefault()
        const href = evt.target.getAttribute('href')
        const el = href ? document.querySelector(href) : null
        if (el) {
          document.documentElement.scrollTop = el.offsetTop-56
        }
      },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    metodTest2: function() {
      console.log('metodTest2')
    },
    getLang(newLang) {
      let loadingText
      if (!~this.loadedLanguages.indexOf(newLang)) {
        //Download
        if (newLang === 'en') { 
          loadingText = {
            en: 'English',
            lang404: "Not found language"
          }
        }
        if (newLang === 'ru') {
          loadingText = {
            ru: 'Русский',
            lang404: "Нет такого языка",
            video1: "Видеонаблюдение",
            video2: `Установка системы видеонаблюдения: цена, доступная каждому!
Купить камеру недостаточно, ее нужно правильно установить, настроить, запустить. Всего 4 шага, и вы получите гарантию безопасности своей, а также безопасности собственного предприятия.

Шаг первый. Выезд специалиста на место для составления сметы и договора.
Шаг второй. Оплата выбранного оборудования.
Шаг третий. Установка оборудования, его настройка и пусконаладка.
Шаг четвертый. Оплата окончательного результата.`
          }
        }
        this.$i18n.setLocaleMessage(newLang, loadingText)
        this.loadedLanguages.push(newLang)
        console.log(`Loaded languages: ${this.loadedLanguages}`)
      }
      this.$i18n.locale = newLang
    }
  }
})

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

// new Vue({
const vm = new Vue({
  router: new VueRouter({
    mode: 'history',
    routes: [
      // { path: '/foo', component: { template: '#component1', components: { 'component-x': componentX } } },
      { path: '/bacek97/*', redirect: '/' }, //HTML5_History - CodePen.io/full
      { path: '/boomerang/*', redirect: '/' }, //HTML5_History - CodePen.io/pen
      { path: '/', redirect }, //HTML5_History - CodePen.io/debug
      { path: '/:language', component: componentLang, children: [
        { path: 'componentx', name: 'componentx', component: componentX, children: [
          { path: ':tovar', name: 'tovar', component: { template: '<div>404 - now path: {{$route.fullPath}} </div>' } },
        ],
        },
        { path: '404', name: 'componenty', component: { template: '<div>404 - now path: {{$route.fullPath}} </div>' } },
        { path: '*', redirect: '404' }
        ] },
    ]
  }),
  i18n: new VueI18n({ fallbackLocale }),
  // components: { componentX  },  // 'component-x': componentX   // <component-x></component-x>
  data() {
    return {
      object: {
        array: [41510, 'string', isNaN(!'NotNumber')]
      }
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to.params.language)
    }
  },
  created() {},
  mounted() {},
  methods: {
    metodTest1() {
      console.log('metodTest1')
    },
    handleScroll: function (evt, el) {
      if (document.documentElement.clientHeight+window.scrollY > el.offsetTop) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }
      return window.scrollY > 100
    }
  },
  template: `<keep-alive><router-view ref="routerView"></router-view></keep-alive>`
}).$mount('#vm')
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")