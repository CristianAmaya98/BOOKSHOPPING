import { booksContainer } from "./selectores.js";

function initApp() {
  //booksContainer;

  let books = [
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41tUbhJFOfL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      title: "Steven Jobs",
      author: "Walter Isacons",
      price: "29.22",
      ranking: 5,
      reviews: 368
    },
    {
      image:
        "https://images-eu.bookshop.org/es/9788467068542.jpg?height=500&v=v4-2bc876691737c307fc99a5c659cf14db",
      title: "LA VOZ DE LOS VALIENTES",
      author: "RAFAEL TARRADAS BULTO",
      price: "20.81",
      ranking: 4,
      reviews: 168
    },

    {
      image:
        "https://images-eu.bookshop.org/es/9788408269229.jpg?height=500&v=v4-303dd2914fdc2502377d0f590bbdde95",
      title: "LOS MISTERIOS DE NIKA 2. EL MISTERIO DEL BOSQUE DE VIOLET HILL",
      author: "Rosario Ana",
      price: "12.22",
      ranking: 5,
      reviews: 368
    },
    {
      image:
        "https://images-eu.bookshop.org/es/9788412614572.jpg?height=500&v=v4-8c376dd2b3049c66086a38aacbf833eb",
      title: "Una familia casi perfecta",
      author: "JANE SHEMILT",
      price: "12.26",
      ranking: 4,
      reviews: 168
    },
    {
      image:
        "https://m.media-amazon.com/images/P/1594634726.01._SCLZZZZZZZ_SX500_.jpg",
      title: "Big Magic",
      author: "Elizabeth Gilbert",
      price: "45.22",
      ranking: 5,
      reviews: 368
    },
    {
      image:
        "https://images-eu.bookshop.org/es/9788408267409.jpg?height=500&v=v4-987a7f67867fd6ccb449c956a6dd2732",
      title: "EL ENCANTO DEL CUERVO",
      author: "Maria Martinez",
      price: "11.00",
      ranking: 4,
      reviews: 268
    },
    {
      image:
        "https://images-eu.bookshop.org/es/9788491296355.jpg?height=500&v=v4-cf9ba0717b4c9eceacbafdaa50b35bed",
      title: "EL SUEÑO DE SOPHIA",
      author: "CORINA BOMANN",
      price: "18.91",
      ranking: 4,
      reviews: 268
    },
    {
      image:
        "https://images-eu.bookshop.org/es/9788448026547.jpg?height=500&v=v4-cf4952f8798db5c7559dcfed8926d354",
      title: "Aleluya. Mística y religiones en el rock",
      author: "Maria Martinez",
      price: "23.70",
      ranking: 4,
      reviews: 268
    }
  ];

  books = [...books, ...books, ...books];

  books.forEach((book) => {
    booksContainer.appendChild(initCardBook(book));
  });

  function initCardBook(book) {
    const { image, title, author, price, ranking, reviews } = book;
    const divBook = document.createElement("DIV");
    divBook.className = "book";
    divBook.onclick = function () {
      window.location.href = "detail-book.html?id=1";
    };

    const imageContainer = document.createElement("IMG");
    imageContainer.src = image;
    imageContainer.className = "book__img";

    const h3Title = document.createElement("H3");
    h3Title.classList.add("book__title");
    h3Title.textContent = String(title).toUpperCase();

    const pAuthor = document.createElement("P");
    pAuthor.textContent = author;

    const spanPrice = document.createElement("SPAN");
    spanPrice.classList.add("precio");
    spanPrice.textContent = `$ ${price}`;

    const bookFooter = document.createElement("DIV");
    bookFooter.className = "book-footer";

    bookFooter.innerHTML = `
        <div class="ranking">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
        </div>`;

    const spanReviews = document.createElement("SPAN");
    spanReviews.className = "reviews";
    spanReviews.textContent = `${reviews} reviews`;

    divBook.appendChild(imageContainer);
    divBook.appendChild(h3Title);
    divBook.appendChild(pAuthor);
    divBook.appendChild(spanPrice);
    divBook.appendChild(bookFooter);
    divBook.appendChild(spanReviews);

    return divBook;
  }
}

document.addEventListener("DOMContentLoaded", initApp);
