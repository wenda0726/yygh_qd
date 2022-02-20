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
    //根据父类id查询子类详情
    findByParentId(id){
        return request({
            url:`${api_name}/findChildData/${id}`,
            method:'get',
        })
    }
}