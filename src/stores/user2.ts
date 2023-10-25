import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {User} from '@/types/user'
import { useLocalStorage } from "@vueuse/core";

export const useUser2store = defineStore('user2Store', ()=>{
    const user = useLocalStorage<Partial<User>>("user", {})
    const token = ref()

    const userName = computed(()=>{
        const {email} = user.value

        return email?.split('@')[0]
    })

    function initialise(userData:User){
        user.value = userData
    }
    function modifyEmail(email:string){
        user.value.email = email
    }

    return {userName, user, initialise}
})