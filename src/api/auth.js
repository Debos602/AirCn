export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email,
    };
    // save user is db
    const apiUrl = `${process.env.REACT_APP_API_URL}/user/${user?.email}`;
    fetch(apiUrl, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then((res) => res.json)
        .then((data) => {
            console.log(data);
            // save token in localstorage
            localStorage.setItem('aircnc-token', data.token);
        });
};
