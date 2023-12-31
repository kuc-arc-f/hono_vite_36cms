import { marked } from 'marked';
import React from 'react';
import Layout from '../../layout';

//
export default  function PostShow(props: any) {
  console.log("#taskShow");
//console.log(props);
  const content = marked.parse(props.item.content);
//console.log(content);
  //
  return (
  <Layout title="Show">
    <div className="post_show_wrap container bg-white mx-auto mt-0 mb-8 px-8 py-4">
      <link href="/static/postshow.css" rel="stylesheet" />
      <a href="/" className="btn-outline-purple ms-2 my-0"
      >back</a>
      <hr className="my-4" />
      <div id="root"></div>
      <h1 className="text-4xl font-bold">{props.item.title}</h1>
      <p>id: {props.item.id}, {props.item.createdAt}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }}
      className="mb-8" />
      <hr className="my-12" />
    </div>
    <style>{`
    .post_show_wrap {min-height : 600px;}
    `}
    </style>
  </Layout>
  )
}

/*
<input className="d-none" type="text" defaultValue={props.item.id} id="item_id" />
*/