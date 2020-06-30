/**
 *Time: 2020/6/30
 *Author: zore.wang
 *Description:
 */
import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}
