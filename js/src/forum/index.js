import app from 'flarum/app';
import { extend } from 'flarum/extend';
import Button from 'flarum/components/Button';
import CommentPost from 'flarum/components/CommentPost';
import TextEditor from 'flarum/components/TextEditor';

import dashjs from 'dashjs';
import FlvJs from 'flv.js';
import Hls from 'hls.js';
import muxjs from 'mux.js';
import shaka from 'shaka-player';
import WebTorrent from 'webtorrent/webtorrent.min';

import DPlayer from 'dplayer';

import EmbedVideoModal from './components/EmbedVideoModal';

app.initializers.add('nearata-embed-video', () => {
    window.dashjs = dashjs;
    window.flvjs = FlvJs;
    window.Hls = Hls;
    window.muxjs = muxjs;
    window.WebTorrent = WebTorrent;

    extend(TextEditor.prototype, 'controlItems', function (items) {
        if (!app.forum.attribute('embedVideoCreate')) {
            return;
        }

        const editor = this.attrs.composer.editor;

        items.add(
            'nearataEmbedVideo',
            m(Button, {
                icon: 'fas fa-cat',
                class: 'Button Button--icon',
                onclick: () => app.modal.show(EmbedVideoModal, { editor: editor })
            }, app.translator.trans('nearata-embed-video.forum.button_tooltip_title'))
        );
    });

    const loadPlayers = videoPlayers => {
        for (const p of videoPlayers) {
            const videoUrl = p.dataset.url;
            const videoType = p.dataset.type;
            const liveMode = p.dataset.live;

            new DPlayer({
                container: p,
                live: liveMode === 'true' ? true : false,
                video: {
                    url: videoUrl,
                    type: videoType,
                    customType: {
                        dash: (video, player) => {
                            window.dashjs.MediaPlayer().create().initialize(video, video.src, false);
                        },
                        shaka: (video, player) => {
                            if (shaka.Player.isBrowserSupported()) {
                                new shaka.Player(video)
                                    .load(video.src)
                                    .then(() => { })
                                    .catch(e => console.error(e));
                            } else {
                                console.error('Error: Shaka is not supported.');
                            }
                        }
                    }
                }
            });
        }
    };

    extend(CommentPost.prototype, 'oncreate', function () {
        this.videoPlayers = this.element.getElementsByClassName('dplayer-container');
        loadPlayers(this.videoPlayers);
    });

    extend(CommentPost.prototype, 'onupdate', function () {
        loadPlayers(this.videoPlayers);
    });
});
