/* 
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Consigli:
iniziamo a capire usando postman cosa ci restituisce una chiamata all'endpoint :puntare_su_2: qui sopra.
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

// creo una proprieta in return dove pushare dentro le mail

// pusho la mail generata

// svuoto la proprietà

// ciclo per 10 volte

const { createApp } = Vue

  createApp({
    data() {
      return {
        mail: ''
      }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response=>{
            console.log(response);
            console.log(response.data.response);
            
        })
    }
  }).mount('#app')