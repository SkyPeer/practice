// Объект с предопределенным набором свойств
/*let tweet =
    {
        likes: 16,

        getLikes(){return this.likes;},

        setLikes(value) {
            var likes = parseInt(value);
            if (isNaN(likes) || likes < 0) {
               console.log('Передано неверное значение');
            }
            this.likes = likes;
        }
    };*/

let tweet = {
    likes: 10,
    setLikes: function(count) {
        if (count < 0) {
            throw new RangeError('Число лайков не может быть отрицательным');
        }

        this.likes = count
    }
};


try {
    tweet.setLikes(25);
}
catch (e) {
    console.error('Ошибка!');
}

console.log(tweet.likes);

// сравнение

var text1 = 'привет!';
var text2 = {toString: function(){ return 'привет!';}};

console.log('text1 == text2',text1 == text2);
console.log('text1 === text2', text1 === text2);
