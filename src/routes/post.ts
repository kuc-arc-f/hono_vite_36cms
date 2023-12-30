import HttpCommon from '../lib/HttpCommon';
//
interface Env {
    DB: Database
}
const retObj = {ret: "NG", data: [], message: "Error, Internal Server Error"};

const Router = {
    /**
     *
     * @param
     *
     * @return
     */ 
    get_list: async function()
    {
//console.log("#get_list");
        try{    
            const item = {
            };
            const json = await HttpCommon.post(item, "/api/posts/get_list");
//console.log(json.data);
            return json.data;
        } catch (e) {
            console.error(e);
            return [];
        } 
    },
    /**
     *
     * @param
     *
     * @return
     */ 
    search: async function()
    {
//console.log("#search");
        try{    
        } catch (e) {
            console.error(e);
            return [];
        } 
    },
    /**
     *
     * @param
     *
     * @return
     */    
    get: async function(id: number)
    {
        //console.log("#get");
        try{    
            const item = {
                id: id
            };
            const json = await HttpCommon.post(item, "/api/posts/get");
console.log(json);
            return json.data;
        } catch (e) {
            console.error(e);
            return {};
        } 
    },    

}
export default Router;