
import Layout from '../layout';
import React from 'react';
let itemId = 100;
let nextPage = 1;
let beforePage = 1;
//
export default function Page(props: any) {
//console.log(props.site);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }
//
  return (
  <Layout>
    <div className="text-center py-16 bg-gray-400 text-white mt-10">
      <h1 className="text-4xl font-bold">{props.site.name}</h1>
    </div>
    <input type="text" className="d-none" id="item_id" defaultValue={props.id} />
    <div className="col-md-6 text-end  bg-white py-1">
        <span className="search_key_wrap">
        <input type="text" 
        className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" 
        name="searchKey" id="searchKey"
        placeholder="Title search" />
        </span>                
        <button className="ms-2 btn-outline-purple" id="btn_search"
        >Search</button>
    </div>    
    
    {/*
    <hr className="my-2" />
    */}
    <div 
    className="container mx-auto my-2 px-2">
      <div id="root"></div>
    </div>
    <div 
    className="post_list_wrap container mx-auto my-2 px-2">
      {props.items.map((item: any) => {
        return (
        <div key={item.id} className="rounded-md bg-white my-2  p-4">
          <div className="flex flex-row">
            <div className="flex-1 p-2 m-1">
              <a href={`/posts/${item.id}`}><h3 className="text-3xl font-bold"
              >{item.title}</h3></a>
              <p>ID: {item.id}, {item.createdAt}</p>
            </div>
            <div className="flex-1 p-2 m-1 text-end">
              <a href={`/posts/${item.id}`}>
                <button  className="btn-outline-purple ms-2 my-2">Show</button>
              </a>
            </div>
          </div>
        </div>
        );
      })}
      {/* paginate */}
      <div className="paginate_wrap py-4">
        <a href={`/?page=${beforePage}`}><button className="btn-outline-purple"> ＜ </button>
        </a>
        <a href={`/?page=${nextPage}`}><button className="btn-outline-purple"> ＞ </button>
        </a>
      </div>
    </div>        
    <hr className="my-8" />
    <style>{`
    .post_list_wrap {min-height: 500px;}
    `}</style>
    {/* JS */}
    {import.meta.env.PROD ? (
        <script type="module" src="/static/PostIndex.js"></script>
    ) : (
        <script type="module" src="/src/client/PostIndex.ts"></script>
    )}        
  </Layout>
  )
}

/*
*/