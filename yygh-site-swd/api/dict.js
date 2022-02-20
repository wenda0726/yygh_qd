import request from '@/utils/request'

const api_name = `http://localhost:88/admin/cmn/dict`
export default{
    //根据dictCode获取下级节点
    findByDictCode(dictCode){
        return request({
            url:`${api_name}/findByDictCode/${dictCode}`,
            method:'get',
        })

    },
    //根据医院名称模糊查询
    findByParentId(parentId){
        return request({
            url:`/admin/cmn/dict/findChildData/${parentId}`,
            method:get,
        })
    }
}