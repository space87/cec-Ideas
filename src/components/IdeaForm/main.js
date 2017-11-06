
export default {
    name: 'ideaForm',
    components: {
    },
    data () {
      return {
        idea: {
            name:'',
            text:''
        }
      }
    },
    methods: {
      submitIdea() {


        const url = 'https://cec-ideas-api.herokuapp.com/ideas';

        var data = {
          name: this.idea.name,
          text: this.idea.text
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
        .then((data) => {
           if(data.status == 200) {
            this.$parent.$emit('ideaAdded', this.idea);
            this.idea = {name:'',text:''}
           }
        });
        
      }
    }
  }