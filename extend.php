<?php

namespace Nearata\EmbedVideo;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Post\Event\Saving;

use s9e\TextFormatter\Configurator;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Formatter)
        ->configure(function (Configurator $config) {
            $config->BBCodes->addCustom(
                '[embed-video id="{NUMBER}" url="{ANYTHING}" type="{TEXT2}" live="{TEXT3}"]',
                '<div
                    id="player-{NUMBER}"
                    class="dplayer-container"
                    data-url="{ANYTHING}"
                    data-type="{TEXT2}"
                    data-live="{TEXT3}"
                >
                </div>'
            );
        }),
    (new Extend\Event)
        ->listen(Saving::class, function($event) {
            if (Arr::has($event->data, 'attributes.content')) {
                $content = Arr::get($event->data, 'attributes.content');

                if (!Str::contains($content, 'embed-video')) {
                    return;
                }

                $event->actor->assertCan('nearata.embedvideo.create');
            }
        }),
    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('embedVideoCreate', function (ForumSerializer $serializer) {
            return $serializer->getActor()->can('nearata.embedvideo.create');
        })
];
