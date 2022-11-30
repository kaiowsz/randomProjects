export class GithubSearch {
    static search(username) {
        const api = `https://api.github.com/users/${username}`


        return fetch(api).then(data => data.json())
        .then( ( {name, login, public_repos, followers }) => ({name, login, public_repos, followers}))

    }
}

export class Favorites {

    constructor() {
        this.createData()
        this.load()
    }

    createData() {
        this.listUsers = [
            {
                name: 'Kaio Silveira',
                login: 'kaiowsz',
                public_repos: 44,
                followers: 20000,
            },
            {
                name: 'Mayk Brito',
                login: 'maykbrito',
                public_repos: 155,
                followers: 245422,
            }
        ]
    }
   

    delete(user) {


        const filtereds = this.listUsers.filter(filtered => {
            if (filtered.login !== user.login) {
                return true
            }
        })

        this.listUsers = filtereds
        this.removeTr()
        this.addUser()
        this.save()
    }

    async add(user) {
        try { 
            
            const exists = this.listUsers.find(userList => user === userList.login)

            if (exists) {
                throw new Error('User already exists.')
            }

            const userGithub = await GithubSearch.search(user)

            if(userGithub.login === undefined) {
                throw new Error('User not found. Please try again.')
            } else {
                this.listUsers = [userGithub, ...this.listUsers]
                this.removeTr()
                this.addUser()
                this.save()
            }

           

            console.log(exists)
            
        } catch (error) {
            alert(error)
        }
    }

    load() {
        this.listUsers = JSON.parse(localStorage.getItem('@github-favorites')) || []
    }


    save() {
        localStorage.setItem('@github-favorites', JSON.stringify(this.listUsers))
    }
}


export class changeView extends Favorites {

    constructor(root) {
        super(root)
        this.root = document.querySelector(root)
        this.tbody = document.querySelector('tbody')
        this.buttonConfig()
        this.removeTr()
        this.addUser()
    }

    buttonConfig() {
        const buttonSearch = document.querySelector('.search button')

        buttonSearch.onclick = () => {
            const { value } = document.querySelector('#name-search')

            this.add(value)
        }
    }
    
    addUser() {
        
        this.listUsers.forEach(user => {
        const row = this.createTr()
        row.querySelector('.user img').src = `https://github.com/${user.login}.png`

        row.querySelector('.user a').href = `https://github.com/${user.login}`

        row.querySelector('.user-info span').textContent = user.name

        row.querySelector('.user-info p').textContent = user.login

        row.querySelector('.repositories').textContent = user.public_repos

        row.querySelector('.followers').textContent = user.followers

        row.querySelector('.remove').onclick = () => {
            const isOk = confirm('Sure? Delete?')

            if (isOk) {
                this.delete(user)
            }
        }

        this.tbody.append(row)
        
    })

    }

    createTr() {
        const tr = document.createElement('tr')

        tr.innerHTML = `<tr>
        <td class="user">
            <img src="https://github.com/kaiowsz.png" alt="github profile kaiowsz">
            <a href="#" class="user-info" target="_blank">
                <span>Kaio Silveira</span>
                <p>kaiowsz</p>
            </a>
        </td>
        <td class="repositories">4</td>
        <td class="followers">0</td>
        <td>
            <button class="remove">&times;</button>
        </td>
        </tr>`

        return tr
    }
    
    removeTr() {
        this.tbody.querySelectorAll('tr').forEach(tr => {
            tr.remove()
        })
    }
}