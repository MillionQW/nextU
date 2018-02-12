import axios from 'axios'

export default {
    getProgramList ({commit}, list) {
        return new Promise((resolve, reject) => {
            axios.get(list).then((response) => {
                var data = response.data.data
                resolve(data);
                // commit('get_programlist', data);
            }, error => {
                reject(error);
            })    
        })
            
    }
}