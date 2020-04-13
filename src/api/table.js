import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/catharine-user/adventure/page',
    method: 'get',
    params
  })
}
