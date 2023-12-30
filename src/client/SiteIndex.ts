
import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);
console.log("#Page4.client.ts");
//
const SiteIndex = {
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
                <div>
                    <a href="/sites/${element.id}"><h3 class="text-3xl font-bold"
                    >${element.name}</h3></a>                    
                    <p>id: ${element.id}</p>
                    <a href="/sites/${element.id}">
                        <button  class="btn-outline-purple ms-2 my-2">Show</button>
                    </a>
                    <hr class="my-2" />
                </div>
                `
                );
            });
            /*
            <a href="/memo_edit/${element.id}">
                <button  class="btn-outline-purple ms-2 my-2">Edit</button>
            </a>
            */
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
    getList : async function(): Promise<any>
    {
        try{
            let ret: any[] = [];
            const item = {
            }
            const body = JSON.stringify(item);		
            const res = await fetch("/api/sites/get_list", {
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
    /**/
    initProc: async function() {
        //console.log("init");
        const res = await this.getList();
console.log(res);
        this.displayItems(res);
//displayItems
        //btn
        const button = document.querySelector('#save');
        button?.addEventListener('click', async () => {
            const result = await this.addItem();
console.log("result=", result);
            if(result === true) {
                location.reload();
            }
        }); 
    },
}
SiteIndex.initProc();
