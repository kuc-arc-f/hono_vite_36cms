
import Layout from '../layout';
import React from 'react';
let itemId = 100;
let nextPage = 1;
let beforePage = 1;
//
export default function Page(props: any) {
//console.log(props);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }
//
  return (
  <Layout>
    <div>
        <h3 className="text-3xl font-bold">Blogs</h3>
        <input type="text" className="d-none" id="item_id" defaultValue={props.id} />
        <div id="root"></div>
        <hr className="my-2" />
        <ul>
        {props.items.map((item: any) => {
          return (
          <li key={item.id}>
            <a href={`/posts/${item.id}`}><h3 className="text-3xl font-bold"
            >{item.title}</h3></a>
            <p>ID: {item.id}, {item.createdAt}</p>
            <a href={`/posts/${item.id}`}>
                <button  className="btn-outline-purple ms-2 my-2">Show</button>
            </a>
            <hr />
          </li>
          );
        })}
        </ul>        
        {/* paginate */}
        <div className="paginate_wrap py-2">
          <a href={`/tasks?page=${beforePage}`}><button className="btn-outline-purple"> ＜ </button>
          </a>
          <a href={`/tasks?page=${nextPage}`}><button className="btn-outline-purple"> ＞ </button>
          </a>
        </div>
        <hr className="my-8" />
        {/* JS */}
    </div>
  </Layout>
  )
}

/*
        {import.meta.env.PROD ? (
            <script type="module" src="/static/PostIndex.js"></script>
        ) : (
            <script type="module" src="/src/client/PostIndex.ts"></script>
        )}        
*/