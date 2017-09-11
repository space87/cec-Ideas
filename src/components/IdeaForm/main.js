
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


        const url = 'https://stormy-chamber-35830.herokuapp.com/ideas';

        var data = {
          name: this.idea.name,
          text: this.idea.text,
          dept: this.idea.dept
        }

    
        // The parameters we are gonna pass to the fetch function
        let fetchData = { 
            method: 'POST', 
            body: JSON.stringify(data),
            headers: new Headers({
              'Content-Type': 'application/json',
              Accept: 'application/json',
            }),
            mode: 'cors'
        }   

        fetch(url, fetchData)
        .then(function(data) {

          console.log('testing', data)
            // Handle response you get from the server
        });

        this.$emit('ideaAdded', this.idea);
        this.idea = {name:'',text:'',dept:''}
      }
    }
  }