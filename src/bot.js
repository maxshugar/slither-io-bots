class Bot{
    constructor(id){
        this.id = id;
    }

    connect(){
        this.ws = new WebSocket(server, {
            headers: {
                'Origin': origin,
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-US,en;q=0.8',
                'Cache-Control': 'no-cache',
                'Connection': 'Upgrade',
                'Host': getHost(server), //104.207.132.60:4041
                'Pragma': 'no-cache',
                'Upgrade': 'websocket',
                'Sec-WebSocket-Version': '13',
                'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
            },
            agent: createHttpAgent(Proxies[~~(Math.random() * Proxies.length)])
        });
        this.binaryType = "nodebuffer";
		this.ws.onmessage = this.onMessage.bind(this);

		this.ws.onopen = this.onOpen.bind(this);
		this.ws.onclose = this.onClose.bind(this);
		this.ws.onerror = this.onError.bind(this);
    }

    disconnect(){

    }


}