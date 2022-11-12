import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from 'preact';

type Props = {
    children: ComponentChildren
}

export default function Layout(props: Props) {
    return (
        <>
            <Head>
                <title>Blog Personal en Deno Fresh</title>
            </Head>
            <div>
                <header>
                    <h1>¡Tu blog de confianza!</h1>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">inicio</a>
                            </li>
                            <li>
                                <a href="#">posts</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {props.children}
                </main>
            </div>
        </>
    )
}