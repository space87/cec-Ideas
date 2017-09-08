
export default {
    name: 'ideaForm',
    components: {
    },
    data () {
      return {
        idea: {
            name:'',
            text:'',
            dept:''
        }
      }
    },
    methods: {
      submitIdea() {

        // save idea to mongodb here

        this.$emit('ideaAdded', this.idea);
        this.idea = {name:'',text:'',dept:''}
      }
    }
  }