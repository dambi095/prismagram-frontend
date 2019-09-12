/*
    LocalState 는 기본적으로 Client에 없는 state이다.
    마치 API의 state..

    LocalState를 사용하기 위해선 
    1. defaults 정의
    2. resolvers 정의
    가 필요하당
*/

export const defaults = {
    isLoggedIn: localStorage.getItem("token") !== null ? true : false
}

// isLoggedIn를 true로 바꿀 function을 만들 것이에용 
// true 이후 다시 false 로 바꿔주기까지...
export const resolvers = {
    Mutation: {
        logUserIn: (_, { token }, { cache }) => {
            localStorage.setItem("token", token);
            cache.writeData({
                data: {
                    isLoggedIn: true
                }
            });
            return null
        },
        logUserOut: (_, __, { cache }) => {
            localStorage.removeItem("token");

            // 전체 페이지를 reload하는 것이 좋고, 모든 cache를 없애기 때문에 아래와 같이 호출
            window.location.reload();
            return null;
        }
    }
}