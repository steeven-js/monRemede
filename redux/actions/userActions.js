// userActions.js
export const setUser = (user) => {
    const serializableUser = {
        uid: user.uid,
        email: user.email,
        // Add other serializable properties you need
    };

    return {
        type: 'SET_USER',
        payload: serializableUser,
    };
};

export const logout = () => ({
    type: 'LOGOUT',
});
