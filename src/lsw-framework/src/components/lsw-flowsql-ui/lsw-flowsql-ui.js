// @code.start: LswFlowsqlUi API | @$section: Vue.js (v2) Components » Lsw LswFlowsqlUi API » LswFlowsqlUi component
Vue.component("LswFlowsqlUi", {
  template: $template,
  props: {
    databaseId: "default_database"
  },
  data() {
    return {
      title: "Flowsql UI",
      foundDatabases: null,
    };
  },
  methods: {
    async loadDependencies() {
      this.$trace("lsw-flowsql-ui.methods.loadDependencies");
      await LswLazyLoads.loadFlowsqlBrowser();
    },
    async loadDatabases() {
      this.$trace("lsw-flowsql-ui.methods.loadDatabases");
      this.foundDatabases = Object.keys(localStorage).filter(key => key.startsWith("FLOWSQL_UI_Database_")).map(key => {
        return key.replace("FLOWSQL_UI_Database_", "");
      });
    },
    async createDatabase() {
      this.$trace("lsw-flowsql-ui.methods.createDatabase");
      const answer = await this.$lsw.dialogs.open({
        title: "Crear base de datos",
        template: `<lsw-flowsql-ui-create-database-dialog :dialog="this" :database-ids="component.foundDatabases" />`,
        factory: { data: { component: this } }
      });
      if(answer === -1) return;
      const db = FlowsqlBrowser.create({});
      localStorage["FLOWSQL_UI_Database_" + answer] = db.dehydrate();
      this.$lsw.toasts.send({
        title: "Database created",
        text: "The database was successfully created."
      });
    },
    setTitle(title) {
      this.$trace("lsw-flowsql-ui.methods.setTitle");
      this.title = title;
    },
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