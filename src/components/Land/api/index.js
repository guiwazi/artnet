export function getApiDetailInfo(query) {
    return req({
        url: '/Artnet/user/login',
        method: 'get',
        data: query
    });
}