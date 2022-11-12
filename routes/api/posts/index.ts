import { Post } from '../../blog/[post_name].tsx';
import { HandlerContext, Handlers } from "$fresh/server.ts";

const posts: Post[] = [
	{
		name: '¡Bienvenidos a esta aventura!',
		description: 'Os quiero comentar sobre mi primero para...'
	},
	{
		name: 'Cocino tal y pasa esto',
		description: 'Hoy cocine un nuevo plato y bua...'
	},
	{
		name: 'Hoy aprendemos...',
		description: 'Reprehenderit porro ducimus eligendi ea temporibus aut dolor voluptatum.'
	},
	{
		name: 'Vamos a relajarnos...',
		description: 'Reprehenderit porro ducimus eligendi ea temporibus aut dolor voluptatum.'
	}
];

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    posts.map(post => {
        post.url = post.name.replaceAll(' ', '-');
        return post;
    })
    return new Response(JSON.stringify(posts), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
  },
};