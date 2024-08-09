export const signup = async (userData) => {
    const response = await fetch('https://localhost:7106/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (response.ok) {
        return "";
    } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
    }
};
