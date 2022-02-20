import request from '@/utils/request'

const api_name = `http://localhost:88/api/order/weixin`

export default {
    //查询支付状态
    queryPayStatus(orderId) {
        return request({
            url: `${api_name}/queryPayStatus/${orderId}`,
            method: 'get'
        })
    },    

    //生成微信支付二维码
    createNative(orderId) {
        return request({
        url: `${api_name}/createNative/${orderId}`,
        method: 'get'
        })
    },    
    getLoginParam() {
        return request({
            url: `http://localhost:88/api/ucenter/wx/getLoginParam`,
            method: `get`
        })
    }
}
