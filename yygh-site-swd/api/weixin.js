import request from '@/utils/request'

const api_name = `http://localhost:88/api/ucenter/wx`

export default {
    //查询支付状态
    queryPayStatus(orderId) {
        return request({
            url: `/api/order/weixin/queryPayStatus/${orderId}`,
            method: 'get'
        })
    },    

    //生成微信支付二维码
    createNative(orderId) {
        return request({
        url: `/api/order/weixin/createNative/${orderId}`,
        method: 'get'
        })
    },    
    getLoginParam() {
        return request({
            url: `${api_name}/getLoginParam`,
            method: `get`
        })
    }
}
