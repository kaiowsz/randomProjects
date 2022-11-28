export class AdvicePhrase {
    static search() {
        const api = 'https://api.adviceslip.com/advice'

        const data = fetch(api)
        .then(data => data.json())
        .then( ({slip}) => slip)

        return data
    }
}

export class Working {
    async takeAdvice() {

        try {
            let phrase = await AdvicePhrase.search().then( ({advice}) => advice)

            if (phrase === undefined) {
                throw new Error('Go slow, bro. Please.')
            }

            function changeHTML(phrase) {
                const pHTML = document.querySelector('.advice')
                pHTML.textContent = `"${phrase}"`
            }
            
            
            changeHTML(phrase)
            
        } catch (error) {
            alert(error.message)
        }

        

        
    }

}