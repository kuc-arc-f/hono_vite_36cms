
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
    <div id="root"></div>
    {/*
    <hr className="my-2" />
    */}
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
  </Layout>
  )
}

/*
container mx-auto my-2 px-2
sm:container sm:mx-auto
        {import.meta.env.PROD ? (
            <script type="module" src="/static/PostIndex.js"></script>
        ) : (
            <script type="module" src="/src/client/PostIndex.ts"></script>
        )}        
*/