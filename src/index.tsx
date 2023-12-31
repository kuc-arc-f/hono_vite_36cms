import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { renderToString } from 'react-dom/server';
import type { Database } from '@cloudflare/d1'
//
interface Env {
  DB: Database
}
//
const app = new Hono()
// router
import testRouter from './routes/test';
import postRouter from './routes/post';
import siteRouter from './routes/site';
//
import PostsIndex from './pages/posts/App';
import PostsShow from './pages/posts/show/App';

//
app.get('/', async (c) => { 
  let page = c.req.query('page');
  if(!page) { page = '1';}
  const site = await siteRouter.get();
//  const items = await postRouter.get_list();
  const items = await postRouter.get_list_page(Number(page));
//console.log(items);
//console.log("page=", page);
  return c.html(
    renderToString(<PostsIndex items={items} page={page} site={site} />
  ));
});
/*
app.get('/test', async (c) => { 
  let page = c.req.query('page');
  const body = {}; 
  const item = await testRouter.get_list();
  if(!page) { page = '1';}
console.log(item);
 return c.html("<div>hello</div>");
});
*/
//PostsShow
app.get('/posts/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await postRouter.get(Number(id));
//console.log(item);
  return c.html(renderToString(<PostsShow item={item} id={Number(id)} />));
});
/*
API
*/
app.post('/api/posts/search', async (c) => {
  const body = await c.req.json();
console.log(body);
  const resulte = await postRouter.search(body, c);
  return c.json({ret: "OK", data: resulte});
});

export default app
