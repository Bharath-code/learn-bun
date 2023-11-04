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
        return new Response("Page not found, 404!!")
    }
})

console.log(`Listening to the server ${server.port}`)