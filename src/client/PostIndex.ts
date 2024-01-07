
import { h, Component, render } from 'preact';
import htm from 'htm';
import HttpCommon from './lib/HttpCommon';
//
const html = htm.bind(h);
console.log("#PostIndex.client.ts");
//
const PostIndex = {
    /**
     *
     * @param
     *
     * @return
     */  
    addItem : async function()
    {
        try{
            let ret = false;
            let titleValue = "";
            const title = document.querySelector("#title") as HTMLInputElement;
            if(title) {
                titleValue = title.value;
            }
            let contentValue = "";
            const content = document.querySelector("#content") as HTMLInputElement;
            if(content) {
                contentValue = content.value;
            }              
            const item = {
                name: titleValue,
                content: contentValue,
            }
//console.log("title=", titleValue);
console.log(item);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/sites/create", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                return ret;
            }
            ret = true;
            return ret;
        } catch (e) {
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
        }
    },
    /**
     *
     * @param
     *
     * @return
     */ 
    displayItems: function(items: any[])
    {
        try{      
            const li: any[] = [];  
            items.forEach((element) => {
                li.push(html`
                <div className="rounded-md bg-white my-2  p-4">
                    <div className="flex flex-row">
                        <div className="flex-1 p-2 m-1">
                            <a href="/sites/${element.id}"><h3 class="text-3xl font-bold"
                            >${element.title}</h3></a>
                            <p>id: ${element.id}, ${element.createdAt}</p>
                        </div>
                        <div className="flex-1 p-2 m-1 text-end">
                            <a href="/posts/${element.id}">
                                <button  class="btn-outline-purple ms-2 my-2">Show</button>
                            </a>
                        </div>
                    </div>
                </div>
                `
                );
            });
            render(li, document.getElementById("root"));
        } catch (e) {
            console.error(e);
            throw new Error('Error , displayItems');
        }
    },         
    /**
     *
     * @param
     *
     * @return
     */  
    getList : async function(id: number): Promise<any>
    {
        try{
            let ret: any[] = [];
            const item = {
                siteId: id,
            }
            const body = JSON.stringify(item);		
            const res = await fetch("/api/posts/get_list", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            ret = json.data;
            return ret;
        } catch (e) {
            console.error(e);
            throw new Error('Error , getList');
        }
    }, 
    /**
     *
     * @param
     *
     * @return
     */   
    search : async function(id: number): Promise<any>
    {
        try{
            const searchKey = (<HTMLInputElement>document.querySelector("#searchKey")).value;
            let ret: any[] = [];
            const item = {
                siteId: id,
                seachKey: searchKey,
            }
            //console.log(item);
            const json = await HttpCommon.post(item, "/api/posts/search");
//console.log(json);
            ret = json.data;
            return ret;
        } catch (e) {
            console.error(e);
            throw new Error('Error , search');
        }
    },    
    /**
     *
     * @param
     *
     * @return
     */   
    initProc: async function() {
        //console.log("init");
        const siteId = import.meta.env.VITE_SITE_ID;
        //btn
        const btn_search = document.querySelector('#btn_search');
        btn_search?.addEventListener('click', async () => {
            const post_list_wrap = document.querySelector(`.post_list_wrap`) as HTMLInputElement;
            if (!post_list_wrap.classList.contains('d-none')) {
                post_list_wrap?.classList.add('d-none');
            }
            const res = await this.search(Number(siteId));
            this.displayItems(res);
//console.log(res);
        });  
    },
}
PostIndex.initProc();
