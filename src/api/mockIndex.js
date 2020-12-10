import mockAjax from '@/ajax/mockAjax'

export const reqLogin = () => {
    return mockAjax({
      url:'/login',
      method:'get'
    })
  }


