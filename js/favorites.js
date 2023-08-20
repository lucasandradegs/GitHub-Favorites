export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [{
            login: 'lucasandradegs',
            name: "Lucas Andrade",
            public_repos: '2',
            followers: '1432',
        },
        {
            login: 'rui-augusto',
            name: "Rui Augusto",
            public_repos: '8',
            followers: '8271',
        }  
        ]
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

        console.log(filteredEntries)
    }
}


export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar esse usuário?')
                
                if(isOk) {
                    this.delete(user)
                }
            }
        
            this.tbody.append(row)
        })
        
    }

    createRow() {
        const tr = document.createElement('tr')
        
        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/lucasandradegs.png" alt="">
            <a href="https://github.com/lucasandradegs" target="_blank">
                <p>Lucas Andrade</p>
                <span>lucasandradegs</span>
            </a>
        </td>
        <td class="repositories">
            76
        </td>
        <td class="followers">
            9589
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>   
        `

        return tr

    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}
