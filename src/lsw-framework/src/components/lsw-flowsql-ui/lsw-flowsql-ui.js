// @code.start: LswFlowsqlUi API | @$section: Vue.js (v2) Components » Lsw Formtypes API » LswFlowsqlUi component
Vue.component("LswFlowsqlUi", {
  template: $template,
  props: {
    databaseId: "default_database"
  },
  data() {
    return {
      foundDatabases: null,
    };
  },
  methods: {
    async loadDependencies() {
      await LswLazyLoads.loadFlowsqlBrowser();
    },
    async loadDatabases() {
      this.foundDatabases = Object.keys(localStorage).filter(key => key.startsWith("FLOWSQL_DB_UI_")).map(key => {
        return key.replace("FLOWSQL_DB_UI_", "");
      });
    }
  },
  watch: {},
  computed: {},
  beforeCreate() { },
  created() { },
  beforeMount() { },
  async mounted() {
    await this.loadDependencies();
    await this.loadDatabases();
  },
  beforeUpdate() { },
  updated() { },
  beforeUnmount() { },
  unmounted() { },
});
// @code.end: LswFlowsqlUi API