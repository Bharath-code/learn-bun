import figlet from 'figlet';
const server = Bun.serve({
    port:3000,
    fetch(req){
        const url = new URL(req.url)
        if(url.pathname === '/'){
            const body = figlet.textSync('Home')
            return new Response(body)
        }
        if(url.pathname === '/about'){
            const body = figlet.textSync('About Me')
            return new Response(body)
        }
        if(url.pathname === '/feed'){
            throw new Error('couldn\'t fetch feed')
        }
        if(url.pathname === '/greet'){
            return new Response(Bun.file('./greet.txt'))
        }
        return new Response("Page not found, 404!!")
    },
    error(error) {
        return new Response(`<pre> ${error} \n ${error.stack}</pre>`,{
            headers:{
                'Content-Type' : 'text/html'
            }
        })
    },
})

console.log(`Listening to the server ${server.port}`)