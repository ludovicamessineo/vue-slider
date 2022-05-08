const app = new Vue (
    {
        el: "#root",
        data: {
            cityItems: [
               {
                   image: 'img/01.jpg',
                   title: 'Svezia',
                   text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
               },
               {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.'
               },
               {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
               },
               {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
               },
               {
                image: 'img/05.jpg',
                title: 'Buccinasco',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
               }
            ],
            currentCity: 0
        },

        methods: {
            prevCity: function () {
                if (currentSlide == 0) {
                    currentSlide = data.length - 1;
                } else {
                    currentSlide--;
                }
            }
        },

            nextCity: function () {
                if (currentSlide == data.length - 1) {
                    currentSlide = 0;
                } else {
                    currentSlide++; 
                }
            }
    }
);