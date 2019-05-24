class ApiHandler {
    constructor(baseURL){
        this.baseURL = baseURL
    }

    getPokemon (name) {
        return axios.get(`${this.baseURL}/pokemon/${name}/`)
        .then(response => {
            return response.data
        })
    }

}