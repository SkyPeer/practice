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



/*
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
*/

// сравнение
/*
var text1 = 'привет!';
var text2 = {toString: function(){ return 'привет!';}};

console.log('text1 == text2',text1 == text2);
console.log('text1 === text2', text1 === text2);

console.log('text2', text2)
console.log('String(text2)',String(text2));
 */

let tweet  ={
  _likes: 16
};

Object.defineProperty(tweet, 'likes', {
    get:
        function () {
        console.log('get method');
      return this._likes;
    },

    set: function (value) {
        console.log('set method', value);
        this._likes = parseInt(value) || 0;

    }

    }
);

console.log(tweet.likes);

tweet.likes = 25;
console.log(tweet.likes);

console.log(new Date());
console.log(Math.random());


try {
    throw new Error('Ошибка');
    console.log('Привет!')
} catch (err) {
    console.log(err.message);
}

var text = 'мороз и солнце'.replace(/[а-я]+/, 'снег');
console.log(text);