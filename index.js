const book = (year, author, name, price, img, text) => ({year, author, name, price, img, text});
const log = (text, type, date = new Date()) => ({text, type, date});

const books = [
    book('2014', 'Evan You', 'Vue', 30, 'img/vue.png', 'img/vuebook.png'),
    book('2009', 'Ryan Lienhart Dahl', 'Node', 20, 'img/node.png','img/nodebook.png'),
    book('2009', 'Google', 'Angular', 25, 'img/angular.png','img/angularbook.png'),
]

new Vue({
    el: '#app',
    data: {
        books: books,
        book: books[0],
        selectBookIndex: 0,
        read: false,
        search: '',
        modalVisibility: false,
        readVisibility: false,
        logs: []
    },
    methods: {
        selectBook(index) {
            this.book = books[index]
            this.selectBookIndex = index
        },
        buyOrder(){
            this.modalVisibility = false
            this.readVisibility = false
            this.logs.push(log(`Success buy - ${this.book.name} - ${this.book.author}`, 'ok'))            
        },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(log(`Order cancelled - ${this.book.name} - ${this.book.author}`, 'cnl'))
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter (book => {
                return book.name.indexOf(this.search.toUpperCase()) > -1 || book.author.indexOf(this.search.toUpperCase()) > -1
            })
        }
    },
    filters: {
        date(value){
            return value.toLocaleString()
        }
    }
});



