import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }

export default{
    //医院设置列表
    getHospSetList(current,limit,searchObj){
        return request({
            url:`/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
            method:'post',
            data:searchObj //使用json传递
        })
    },
    //删除医院设置
    deleteHospSet(id){
        return request({
            url:`/admin/hosp/hospitalSet/${id}`,
            method:'delete',
        })
    },
    //批量删除功能
    batchRemoveHospSet(idList){
        return request({
            url:`/admin/hosp/hospitalSet/batchRemove`,
            method:'delete',
            data:idList //使用json传递
        })
    },
    //锁定和取消锁定
    lockHospSet(id,status){
        return request({
            url:`/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
            method:'put',
        })
    },
    //添加医院设置
    saveHospSet(hospitalSet){
        return request({
            url:`/admin/hosp/hospitalSet/saveHospitalSet`,
            method:'post',
            data:hospitalSet
        })
    },
    //医院设置id查询
    getHospSet(id){
        return request({
            url:`/admin/hosp/hospitalSet/getHospSet/${id}`,
            method:'get',
        })
    },
    //修改医院设置
    updateHospSet(hospitalSet){
        return request({
            url:`/admin/hosp/hospitalSet/updateHospitalSet`,
            method:'post',
            data:hospitalSet
        })
    },
}
