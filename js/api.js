function sendPost(name, text, timestamp) {
    const postData = {
        name: name || 'Anonymous',
        text: text,
        timestamp: timestamp
    };

    return fetch('https://twaiter.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error while sending a post');
            }
            return response.json();
        })
        .then(data => {
            console.log('The post was added successfully: ', data);
        })
        .catch(error => {
            console.error('Error occurred: ', error);
        });
}


