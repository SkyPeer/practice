/*
var timeObject =

    {
      year: 0,
      mounth: 0,
        day: 2
    };
console.log(new Date(timeObject.year, timeObject.mounth, timeObject.day));
*/


/*function time(time) {

} */
/*
var time = date('2017-05-16 13:45')
    .add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(15, 'minutes');

console.log(time.value);
*/

/*
function createObject() {
    return {
        first: function () {
            return this;
        },
        second: function () {
            return this;
        }
    }
}
*/

var tweet = {
    likes: 16,

    getFunc: function () {
        return this;
    },

    getLikes: function() {
        return this.likes;
    },

    setLikes: function(value) {
        this.likes = parseInt(value) || 0;
        return this;
    },

    setLikes2: function(value) {
        this.likes = this.likes + parseInt(value) || 0;
        return this;
    },

    getAuthor: function() {
        return this.user.screenName;

    }

};

console.log(tweet.getFunc().setLikes(35).setLikes2(25).getLikes());




/*
var time = date('2017-05-16 13:45').add(24, 'hours').add(3, 'days').add(15, 'minutes');
/*
console.log(time);
    */