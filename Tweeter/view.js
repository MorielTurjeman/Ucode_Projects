

const _postsData =
    [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]




const renderFunction = function (posts) {
    $("#posts").empty()
    for (let post of posts) {
        $("#posts").append($(`<div id='${post.id}'>`).text(`${post.text}`));
        for (let comment of post.comments) {
            $(`#${post.id}`).append($(`<div id='${comment.id}'>`).text(`${comment.text}`));

        }

    }


}

renderFunction(_postsData)