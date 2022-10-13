import HTTP from '@/config/axiosApi'

const SrvSeries = {
    getTvSeries(payload){
        return HTTP.get('/tv/popular',payload).then(respuesta => {
            return respuesta
        }).catch(error => {
            console.error(error)
            return error
        })
    },
    //Una prueba de llamada para recuperar las Imágenes
    /*getImages(id,payload){
        return HTTP.get('/tv/'+id+'/images',payload).then(respuesta => {
            return respuesta
        }).catch(error => {
            console.error(error)
            return error
        })
    },*/
    getDetails(id,payload){
        return HTTP.get('/tv/'+id, payload).then(respuesta => {
            return respuesta
        }).catch(error => {
            console.error(error)
            return error
        })
    }
}

export default SrvSeries;