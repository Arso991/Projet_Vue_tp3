import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";

//import {User} from '@/types/user'
 export const useUserStore = defineStore('user-store', {
    state: ()=>{
        return {
            user : useLocalStorage<Partial<User>>('user',{}) 
                    /* ||useLocalStorage<User|null>('user',null) */
            /* {
                email:'arso@gmail.com',
                name:'arso',
                age: 50
            }, */
        }
    },

    actions:{
        modifyUserName(name:string){
            this.user.name = name;
        },
        modifyEmail(email:string){
            this.user.email = email
        },
        initialise(user:User){
            this.user = user
        }
    },

    getters:{
        userName : (state) => state.user.email?state.user.email.split("@")[0]:null,
        userName2 (state){
            return state.user.email.split("@")[0]
        },
        userAge(state){
            const year = new Date().getFullYear()
            return year - state.user.age
        }
    }
})