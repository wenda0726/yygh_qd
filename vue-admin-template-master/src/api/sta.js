import request from '@/utils/request'

  export default{
    //数据字典列表
    getCountMap(searchObj){
        return request({
            url:`/admin/hosp/statistics/getCountMap`,
            method:'get',
            params: { searchObj },
        })
    },
}

