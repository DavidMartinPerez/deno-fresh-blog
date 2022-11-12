import Layout from "../../components/Layout.tsx";
import { Handlers, PageProps, HandlerContext } from "$fresh/server.ts";
import { Post } from './[post_name].tsx';

export const handler: Handlers<Post[], null> = {
    async GET(_req: Request, _ctx: HandlerContext) {
      const url: URL = new URL(_req.url)

      const data: Response = await fetch(`${url.origin}/api/posts`);
      if (data.status === 404) {
        return _ctx.render(null);
      }
      const posts: Post[] = await data.json();
      return _ctx.render(posts);
    },
  };

export default function BlogHome({ data }: PageProps<Post[] | null>) {

  if(!data){
    return <h2>Lo sentimos no hemos encontrado entradas del blog</h2>
  }

    return (
        <Layout>
            <h2>¡Bienvenido al blog!</h2>
            <div>
                <p>Lista de los ultimos blogs</p>
                {data.map( (page: Post) => (
                  <li> <a href={`/blog/${page.url}`}>{page.name} - {page.description}</a> </li>
                ))}
            </div>
        </Layout>
    )
}