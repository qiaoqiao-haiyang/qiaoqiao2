import request from '@/utils/request'
export function addressList(){
    return request({
        url:'/showAddresses',
        method:'get'
    })
}
export function addressAdd(data){
    return addressList({
        url:'/insertOneAddress',
        method:'post',
        data
    })
}