/* 
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Consigli:
iniziamo a capire usando postman cosa ci restituisce una chiamata all'endpoint

dove inserisco la chiamata ajax? uso una lifecycle hook? quale?

devo ottenere 10 email tramite la chiamata, come faccio a ripetere un operazione cosí tante volte senza riscrivere la stessa implementazione? conosco uno strumento che mi puó tornare utile?
dové la CDN di axios? https://cdnjs.com/libraries/axios
*/

/*
generare 10 indirizzi email

stamparli in pagina all'interno di una lista

Bonus

Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/



//genero le mail tramite postman

//inserisco un mounted

// tramite axios.get.then vado ad utilizzare l'oggetto generato

// creo un array in return dove pushare dentro le mail

// pusho la mail generata in un array

// ciclo per il numero numberOfMail

const { createApp } = Vue

  createApp({
    data() {
      return {
        mails: [],
        // inserisco un 
        numberOfMail: [1,2,3,4,5,6,7,8,9,10]
      }
    },
    // Uso created per chiamare dopo che siano state e
    created() {



        // uso un for per ciclare un numero di volte selezionato
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response=>{
                console.log(i + 1);
                //console.log(response);
                //console.log(response.data.response);
                this.mails.push(response.data.response);
                //console.log(this.mails);
            
            
            });
            
        }
        
    }
  }).mount('#app')