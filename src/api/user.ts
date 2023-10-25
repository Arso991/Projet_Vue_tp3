import { useLocalStorage } from '@vueuse/core'
const users = {
    name : 'arso',
    email : 'arso@gmail.com'
}

const userInfo = useLocalStorage('user', users)

export {userInfo}

