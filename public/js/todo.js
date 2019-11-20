// demo data
let treeData = {
  name: 'Разработка',
  children: [
    { name: 'Создание макета' },
    { name: 'Создание репозитория' },
    {
      name: 'Настройка проекта',
      children: [
        {
          name: 'Инициировать npm',
        },
        {
          name: 'Подключить пакеты',
          children: [{ name: 'eslint' }, { name: 'react' }],
        },
        { name: 'Тестовый запуск' },
      ],
    },
  ],
};

// define the tree-item component
Vue.component('tree-item', {
  template: '#item-template',
  props: {
    item: Object,
  },
  data: function() {
    return {
      isOpen: true,
    };
  },
  computed: {
    isFolder: function() {
      return this.item.children && this.item.children.length;
    },
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    makeFolder: function() {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item);
        this.isOpen = true;
      }
    },
  },
});

// boot up the demo
var app = new Vue({
  el: '#app',
  data: {
    newStage: '',
    treeList: [],
    steps: ['Публикация', 'Возможные ошибки', 'Рефакторинг'],
    treeData: treeData,
  },
  // mounted(){
  //
  //
  // },
  methods: {
    makeFolder: function(item) {
      Vue.set(item, 'children', []);
      this.addItem(item);
    },
    addItem: function(item) {
      item.children.push({
        name: 'new stuff',
      });
    },
    fetchTreeList: async function() {
      console.log('work')

      let response  = await fetch('/api/tree/');
      let data = await response.json()
      console.log(data)
      this.treeList = data;
    },
    useTree: function(index) {
      this.treeData = this.treeList[index]
    }
  },
});
