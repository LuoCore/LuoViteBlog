import axios from 'axios';




function RequestGet(houstUrl: string, timeout?: number, contentType: string = 'application/json', authorization: string = '') {

    axios(houstUrl, {
        method: 'GET',
        timeout: timeout ? 0 : timeout,
        withCredentials: true,
        headers: {
            'Content-Type': contentType,
            Authorization: authorization ? "" : authorization,
        },
        transformRequest: [function (data, headers) {
            return data;
        }],
    })
        .then((data) => {
            // todo: 真正业务逻辑代码
            console.log(data);
        }, (err) => {
            if (err.response.status === 401) {
                // handle authorization error
            }
            if (err.response.status === 403) {
                // handle server forbidden error
            }
            // 其他错误处理.....
            console.log(err);
        });
}

export default {
    install: (Vue: any) => {
        Vue.prototype.$ApiService = RequestGet
    }
}
