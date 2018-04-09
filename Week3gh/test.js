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

//tweet1
/*
let tweet1 = {
    likes: 10,
    setLikes: function(count) {
        if (count < 0) {
            throw new RangeError('Число лайков не может быть отрицательным');
        }

        this.likes = count
    }
};

try {
    tweet1.setLikes(25);
}
catch (e) {
    console.error('Ошибка!');
}

console.log(tweet1.likes);
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

// tweet Object.defineProperty
/*
let tweet  ={
  _likes: 16
};
Object.defineProperty(tweet, 'likes',
    {
    get:
        function () {console.log('get method');return this._likes;
    },
    set: function (value) {
        console.log('set method', value);
        this._likes = parseInt(value) || 0;
    }});

console.log('-------------------------------------------');
console.log('tweet.likes = ', tweet.likes); // get method
tweet.likes = 25; // set method
console.log('tweet.likes = ', tweet.likes); // get method
console.log('-------------------------------------------');
*/


//tweet likes, цепочка вызовов

var tweet = {
    likes: 16,
    getFunc: function () {
        return this;
    },
    getLikes: function() {
        return this.likes;
    },
    setLikes: function(value) {
        this.likes = this.likes + parseInt(value) || 0;
        return this;
    },
    /* setLikes2func
    setLikes2: function(value) {
        this.likes = this.likes + parseInt(value) || 0;
        return this;
    },
    */
    /* getAuthorFunc
    getAuthor: function() {
        return this.user.screenName;

    }
    */
};
console.log(tweet.getFunc().setLikes(35).setLikes(25).getLikes());

// try
/*
try {
    throw new Error('Ошибка');
    console.log('Привет!')
} catch (err) {
    console.log(err.message);
}

console.log('-------------------------------------------');
*/

