import HttpCommon from '../lib/HttpCommon';
//
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
console.log(json.data);
            return json.data;
        } catch (e) {
            console.error(e);
            return [];
        } 
    },


}
export default Router;