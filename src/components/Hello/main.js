import Bottle from '@/components/Bottle';
import IdeaForm from '@/components/IdeaForm';
import IdeaList from '@/components/IdeaList';

export default {
    name: 'hello',
    components: {
      Bottle,
      IdeaForm,
      IdeaList
    },
    data () {
      return {
        msg: 'CEC Idea Bin',
        ideas:[]
      }
    },
    methods: {
      ideaTotal: function(data) {

        this.updateTotal(this.ideas);
        
      },
      updateTotal: function() {
        const url = 'https://cec-ideas-api.herokuapp.com/ideas';

       let self = this;

        fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function(res) {
          self.ideas = res;
        })
      }
    },
    beforeMount() {
      this.updateTotal(this.ideas);
      
    },
    mounted() {
      this.$on('ideaAdded', function (selected) {
        console.log('i added a idea')
        this.updateTotal(this.ideas);
      });
    }
  }