export const playerData = {
    url: 'https://www.yuanjuechan.com/static/js/DPlayer.min.js',
    integrity: 'sha512-1t2U1/0xGhBZAriD+/9llOhjPs5nFBDZ7KbnHB4SGwAUPrzyS+02Kus1cz0exk5eMyXxwfHxj/1JLuie/p6xXA==',
    loaded: false
};

export const extensions = [
    {
        attributeName: 'Dash',
        url: 'https://yuanjuechan.com/static/js/dash.all.min.js',
        integrity: 'sha512-vYbnErl9JO63c2v/ADkEKrYfQChzm4v7nU+55A5EvO7P+AYm9bmdtZhBA6Fg8FkfqEvXJLd/k9L26d1HS1eOtg==',
        loaded: false,
        window: window.dashjs
    },
    {
        attributeName: 'Flv',
        url: 'https://yuanjuechan.com/static/js/flv.min.js',
        integrity: 'sha512-YY0CZ0d6Wavco6rNJERWAoUJX9jCnRlcwK1MtKon8IzhT189p6rgX7f6ikViiSsv3PLYozgsVJDzdxiVz3IXjw==',
        loaded: false,
        window: window.FlvJs
    },
    {
        attributeName: 'Hls',
        url: 'https://yuanjuechan.com/static/js/hls.min.js',
        integrity: 'sha512-zogXmAvq8Dy0EChh8zcXjRn3ZxJL8VTzlpLInG/1Qh9Z+JfpaGpabiMEaCW0pvFicIKdcc7S2uwTC5mxICGsTg==',
        loaded: false,
        window: window.Hls
    },
    {
        attributeName: 'Shaka',
        url: 'https://yuanjuechan.com/static/js/mux.min.js',
        integrity: 'sha384-dJ95ZgLYhsF9rZoY/PjodgCyqm7acd6Jh9iSwCQvZKVUP7nzM5L++vfYAVJAshjn',
        loaded: false,
        window: window.muxjs
    },
    {
        attributeName: 'Shaka',
        url: 'https://yuanjuechan.com/static/js/shaka-player.compiled.js',
        integrity: 'sha512-emqQNRbjWDr58PFlBm23WFUP92QjyTHjhyz0g3qJIiJnhJPWxbw1d9lr9VAZgX1fIEZhlsbvgj1Fs3cIakhDyA==',
        loaded: false,
        window: window.shaka
    },
    {
        attributeName: 'WebTorrent',
        url: 'https://yuanjuechan.com/static/js/webtorrent.min.js',
        integrity: 'sha512-ExWvmRd/I+Ij/YEKnl6h3tj3+77+KIGBP2t5n7DgMuaXObeuMTuKeZxAkEVIkLdmZGsIceX4TPdm2q+fIhKdnA==',
        loaded: false,
        window: window.WebTorrent
    },
];
