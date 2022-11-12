import { Handler, PageProps } from '$fresh/server.ts';
import Layout from '../../components/Layout.tsx';

export interface Post {
    name: string,
    description: string,
    url?: string
}

// export const handler: Handler<Post | null> = {
//     GET(req, ctx) {
//         const { post_name } = ctx.params;
//         return ctx.render();
//     }
// }

export default function Post({params}: PageProps) {

    const name: string = params.post_name?.replaceAll('-', ' ');

    return (
        <Layout>
            <>
                <h2>Post: {name} </h2>
                <p>Este post habla sobre....</p>
            </>
        </Layout>
    )
}