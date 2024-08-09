export const authenticate = async (userData) => {
    const response = await fetch('https://localhost:7106/users/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (response.ok) {
        return response.json();
    } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'login failed');
    }
};
