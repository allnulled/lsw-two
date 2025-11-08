// @code.start: LswFlowsqlUiCreateDatabaseDialog API | @$section: Vue.js (v2) Components » Lsw LswFlowsqlUi API » LswFlowsqlUiCreateDatabaseDialog component
Vue.component("LswFlowsqlUiCreateDatabaseDialog", {
  template: $template,
  props: {
    dialog: {
      type: Object, 
      required: true,
    },
    databaseIds: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      databaseName: "",
    };
  },
  methods: {
    createDatabase() {
      try {
        if(this.databaseName.trim() === "") {
          throw new Error("Database name cannot be empty");
        }
        const pos = this.databaseIds.indexOf(this.databaseName.trim());
        if(pos !== -1) {
          throw new Error("Database name is already picked up");
        }
        this.dialog.accept(this.databaseName);
      } catch (error) {
        this.$lsw.toasts.showError(error)
      }
    }
  },
  watch: {},
  computed: {},
  beforeCreate() { },
  created() { },
  beforeMount() { },
  async mounted() {
    
  },
  beforeUpdate() { },
  updated() { },
  beforeUnmount() { },
  unmounted() { },
});
// @code.end: LswFlowsqlUiCreateDatabaseDialog API