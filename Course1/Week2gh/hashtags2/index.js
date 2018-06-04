/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (tagsupcase) {
    var hashtags = [];
    var filtredHashtags = [];

    for (var i = 0; i < tagsupcase.length; i++){
        hashtags.push(tagsupcase[i].toLowerCase());
    }

    function foo(word)
    {
        var count = 0;
        for(var j=0; j < filtredHashtags.length; j++)
        {
            if (word == filtredHashtags[j])
            {
                count = count + 1;
            }
        }
        if (count == 0) {filtredHashtags.push(word)}
        return filtredHashtags;
    }
    for (var i=0; i<hashtags.length; i++) {
        (foo(hashtags[i]));

    }
    return filtredHashtags.join(', ');
};
