var t0 = performance.now();
const toUrlEncoded = (obj) => Object.keys(obj).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&')

var vk
var script = document.createElement('SCRIPT');
script.src = "https://api.vk.com/method/photos.get?owner_id=-58528824&v=5.92&album_id=228741307&access_token=3038692d3038692d3038692d5a300e7c7e330383038692d6cbb86b2e66a0ea7510a1261&callback=callbackVK";
document.getElementsByTagName("head")[0].appendChild(script);

function callbackVK(result) {
  vk = result
}


const componentLang = () => Promise.resolve({
  template: '#componentRoot',
  
  data() {
    return {
      slide: 0,
      slide2: 0,
      sliding: null,
      GTable: {}
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
  components: { componentLang  },  // 'component-x': componentX   // <component-x></component-x>
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
  template: `<component-lang></component-lang>`
}).$mount('#vm')
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")