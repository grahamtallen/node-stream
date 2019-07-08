const config = {
    server: {
        secret: 'kjVkuti2xAyF3JGCzSZTk0YWM5JhI9mgQW4rytXc',
        port : 3333
    },
    rtmp_server: {
        rtmp: {
            port: 1935,
            chunk_size: 60000,
            gop_cache: true,
            ping: 60,
            ping_timeout: 30
        },
        http: {
            port: 8888,
            mediaroot: './server/media',
            allow_origin: '*'
        },
        trans: {
            ffmpeg: '/usr/local/bin/ffmpeg',
            tasks: [
                {
                    app: 'live',
                    ac: "aac",
                    acParam: ['-ab', '64k', '-ac', '1', '-ar', '44100'],
                    rtmp:true,
                    rtmpApp:'live2',
                }
            ]
        }
    }
};

module.exports = config;
