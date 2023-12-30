import Layout from '../../layout';
//
import React from 'react';

//
export default function Page(props: any) {
console.log("#taskShow");
console.log(props.item);
    return (
    <Layout title="TaskEdit">
        <link href="/static/postshow.css" rel="stylesheet" />
        <div>
            
            <div className="flex flex-row">
                <div className="flex-1 p-2 m-1">
                    <a href={`/sites/${props.item.siteId}`} className="btn-outline-purple ms-2 my-2"
                    >back</a>
                </div>
                <div className="flex-1 m-1 text-end">
                    <button id="save" className="btn-purple ms-2 my-2">Save</button>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex-1 p-2 m-1">
                <p>ID: {props.item.id}
                , {props.item.createdAt}
                </p>
                </div>
                <div className="flex-1 m-1 text-end">
                    <button className="btn-outline-purple" id="btn_edit">Edit</button>
                    <button className="btn-purple ms-2" id="btn_preview">Preview</button>                
                </div>
            </div>


            <hr className="my-2" />
            <div id="edit_box_wrap">
            {/* edit_box_wrap */}
                <label>Title:</label>
                <input type="text" id="title" 
                className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                defaultValue={props.item.title}
                />
                <hr className="my-2" />
                {/* <label>Content:</label> */}                
                <textarea id="content" name="content"
                className="border border-gray-400 rounded-md px-3 py-2 w-full h-96 focus:outline-none focus:border-blue-500"
                placeholder="" defaultValue={props.item.content}
                ></textarea>
            </div>
            <div id="preview_box_wrap">
                <div id="preview_box"></div>
            </div>
            <hr className="my-4" />
            <input type="text" className="d-none" id="item_id" defaultValue={props.item.id} />
            <input type="text" className="d-none" id="site_id" defaultValue={props.item.siteId} />
            {/* root */}
            <div id="root"></div>
            <button id="btn_delete" className="btn-red ms-2 my-2">Delete</button>
            <hr className="mt-4 mb-12" />
            {/* TS */}
            {import.meta.env.PROD ? (
            <>
                <script type="module" src="/static/PostEdit.js"></script>
            </>               
            ) : (
            <>
                <script type="module" src="/src/client/PostEdit.ts"></script>
            </>                
            )}
        </div> 
    </Layout>
    )
}
