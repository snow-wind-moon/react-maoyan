import axios from 'axios'

// axios 请求头设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const request = ({
    url,
    header,
    method = "GET", // 设置默认请求方式为 GET
    params, // 发送GET请求携带的参数
    data    //发送POST请求携带的参数
}) => {
    return new Promise( ( resolve,reject ) => { //用 Promise 封装 axios 请求 
        // 通过参数判断请求方式
        switch ( method.toUpperCase() ) {
            case "GET": // axios 发送的 GET 请求
                axios({
                    url,
                    params
                }).then( res => resolve( res ) )
                .catch( err => reject( err ))
                break;
            case "POST": // axios 发送的 POST 请求
                axios({
                    url,
                    data
                }).then( res => resolve( res ) )
                .catch( err => reject( err ))
                break;
            default:
                break;
        }
    })
}

export default request