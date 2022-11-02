const app = Vue.createApp({
	// data, functions
	// template: '<h2>I am the template</h2>'

	data() {
		return {
            url: 'https://www.thenetninja.co.uk',
			showBooks: true,
            books: [
                { title: "name of the wind", author: "patrick rothfus", img: 'assets/1.jpg', isFav: true },
                { title: "the way of kings", author: "brandon sanderson", img: 'assets/2.jpg', isFav: false },
                { title: "the final empire", author: "brandon sanderson", img: 'assets/3.jpg', isFav: true }
            ],
            // x: 0,
            // y: 0
		};
	},
	methods: {
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},

        handleEvent(e) {
            console.log(e, e.type);
        },

        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },

        toggleIsFav(book) {
            book.isFav = !book.isFav;
        }
	},

    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount("#app");
