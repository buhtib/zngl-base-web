//所有modules里的state转为getters

const getters = {
    //user
    userName: state => state.user.userName,
    routers: state => state.user.routers,
    systemName: state => state.user.systemName,
};
export default getters;
