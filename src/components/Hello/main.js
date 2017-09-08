import Bottle from '@/components/Bottle';
import IdeaForm from '@/components/IdeaForm';

export default {
    name: 'hello',
    components: {
      Bottle,
      IdeaForm
    },
    data () {
      return {
        msg: 'CEC Idea Bin',
        total:0,
        ideas:[]
      }
    },
    methods: {
      ideaTotal: function(data) {
        this.ideas.push(data);
        this.total++;
      }
    }
  }