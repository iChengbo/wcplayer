/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcControls {
    }
    interface WcCoverLayer {
    }
    interface WcFullscreen {
        "ele": HTMLElement;
    }
    interface WcLayers {
    }
    interface WcPictureInPicture {
        "nativeVideo": HTMLVideoElement;
    }
    interface WcPlayPause {
        "isPlaying": boolean;
        "pauseFunc": () => void;
        "playFunc": () => void;
    }
    interface WcPlayPauseLayer {
    }
    interface WcPlayer {
        "autoplay": boolean;
        "controls": boolean;
        "getNativeVideo": () => Promise<HTMLVideoElement>;
        "muted": boolean;
        "src": string;
    }
    interface WcProgress {
        "currentTime": number;
        "duration": number;
        "seek": (position: number) => void;
    }
    interface WcVideo {
        "autoplay": boolean;
        "controls": boolean;
        "getNativeVideo": () => Promise<HTMLVideoElement>;
        "loop": boolean;
        "muted": boolean;
        "nativeProps": {};
        "pause": () => Promise<void>;
        "play": () => Promise<void>;
        "poster": string;
        "seek": (position: number) => Promise<void>;
        "src": string;
        "stop": () => Promise<void>;
        "volume": number;
    }
    interface WcVolume {
        "cancelMute": () => void;
        "changeVolume": (volume: number) => void;
        "currentVolume": number;
        "isMuted": boolean;
        "mute": () => void;
    }
}
export interface WcVideoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcVideoElement;
}
declare global {
    interface HTMLWcControlsElement extends Components.WcControls, HTMLStencilElement {
    }
    var HTMLWcControlsElement: {
        prototype: HTMLWcControlsElement;
        new (): HTMLWcControlsElement;
    };
    interface HTMLWcCoverLayerElement extends Components.WcCoverLayer, HTMLStencilElement {
    }
    var HTMLWcCoverLayerElement: {
        prototype: HTMLWcCoverLayerElement;
        new (): HTMLWcCoverLayerElement;
    };
    interface HTMLWcFullscreenElement extends Components.WcFullscreen, HTMLStencilElement {
    }
    var HTMLWcFullscreenElement: {
        prototype: HTMLWcFullscreenElement;
        new (): HTMLWcFullscreenElement;
    };
    interface HTMLWcLayersElement extends Components.WcLayers, HTMLStencilElement {
    }
    var HTMLWcLayersElement: {
        prototype: HTMLWcLayersElement;
        new (): HTMLWcLayersElement;
    };
    interface HTMLWcPictureInPictureElement extends Components.WcPictureInPicture, HTMLStencilElement {
    }
    var HTMLWcPictureInPictureElement: {
        prototype: HTMLWcPictureInPictureElement;
        new (): HTMLWcPictureInPictureElement;
    };
    interface HTMLWcPlayPauseElement extends Components.WcPlayPause, HTMLStencilElement {
    }
    var HTMLWcPlayPauseElement: {
        prototype: HTMLWcPlayPauseElement;
        new (): HTMLWcPlayPauseElement;
    };
    interface HTMLWcPlayPauseLayerElement extends Components.WcPlayPauseLayer, HTMLStencilElement {
    }
    var HTMLWcPlayPauseLayerElement: {
        prototype: HTMLWcPlayPauseLayerElement;
        new (): HTMLWcPlayPauseLayerElement;
    };
    interface HTMLWcPlayerElement extends Components.WcPlayer, HTMLStencilElement {
    }
    var HTMLWcPlayerElement: {
        prototype: HTMLWcPlayerElement;
        new (): HTMLWcPlayerElement;
    };
    interface HTMLWcProgressElement extends Components.WcProgress, HTMLStencilElement {
    }
    var HTMLWcProgressElement: {
        prototype: HTMLWcProgressElement;
        new (): HTMLWcProgressElement;
    };
    interface HTMLWcVideoElement extends Components.WcVideo, HTMLStencilElement {
    }
    var HTMLWcVideoElement: {
        prototype: HTMLWcVideoElement;
        new (): HTMLWcVideoElement;
    };
    interface HTMLWcVolumeElement extends Components.WcVolume, HTMLStencilElement {
    }
    var HTMLWcVolumeElement: {
        prototype: HTMLWcVolumeElement;
        new (): HTMLWcVolumeElement;
    };
    interface HTMLElementTagNameMap {
        "wc-controls": HTMLWcControlsElement;
        "wc-cover-layer": HTMLWcCoverLayerElement;
        "wc-fullscreen": HTMLWcFullscreenElement;
        "wc-layers": HTMLWcLayersElement;
        "wc-picture-in-picture": HTMLWcPictureInPictureElement;
        "wc-play-pause": HTMLWcPlayPauseElement;
        "wc-play-pause-layer": HTMLWcPlayPauseLayerElement;
        "wc-player": HTMLWcPlayerElement;
        "wc-progress": HTMLWcProgressElement;
        "wc-video": HTMLWcVideoElement;
        "wc-volume": HTMLWcVolumeElement;
    }
}
declare namespace LocalJSX {
    interface WcControls {
    }
    interface WcCoverLayer {
    }
    interface WcFullscreen {
        "ele"?: HTMLElement;
    }
    interface WcLayers {
    }
    interface WcPictureInPicture {
        "nativeVideo"?: HTMLVideoElement;
    }
    interface WcPlayPause {
        "isPlaying"?: boolean;
        "pauseFunc"?: () => void;
        "playFunc"?: () => void;
    }
    interface WcPlayPauseLayer {
    }
    interface WcPlayer {
        "autoplay"?: boolean;
        "controls"?: boolean;
        "muted"?: boolean;
        "src"?: string;
    }
    interface WcProgress {
        "currentTime"?: number;
        "duration"?: number;
        "seek"?: (position: number) => void;
    }
    interface WcVideo {
        "autoplay"?: boolean;
        "controls"?: boolean;
        "loop"?: boolean;
        "muted"?: boolean;
        "nativeProps"?: {};
        "onCanplay"?: (event: WcVideoCustomEvent<any>) => void;
        "onDurationchange"?: (event: WcVideoCustomEvent<any>) => void;
        "onEnded"?: (event: WcVideoCustomEvent<any>) => void;
        "onPause"?: (event: WcVideoCustomEvent<any>) => void;
        "onPlay"?: (event: WcVideoCustomEvent<any>) => void;
        "onTimeupdate"?: (event: WcVideoCustomEvent<any>) => void;
        "onVolumechange"?: (event: WcVideoCustomEvent<any>) => void;
        "poster"?: string;
        "src"?: string;
        "volume"?: number;
    }
    interface WcVolume {
        "cancelMute"?: () => void;
        "changeVolume"?: (volume: number) => void;
        "currentVolume"?: number;
        "isMuted"?: boolean;
        "mute"?: () => void;
    }
    interface IntrinsicElements {
        "wc-controls": WcControls;
        "wc-cover-layer": WcCoverLayer;
        "wc-fullscreen": WcFullscreen;
        "wc-layers": WcLayers;
        "wc-picture-in-picture": WcPictureInPicture;
        "wc-play-pause": WcPlayPause;
        "wc-play-pause-layer": WcPlayPauseLayer;
        "wc-player": WcPlayer;
        "wc-progress": WcProgress;
        "wc-video": WcVideo;
        "wc-volume": WcVolume;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-controls": LocalJSX.WcControls & JSXBase.HTMLAttributes<HTMLWcControlsElement>;
            "wc-cover-layer": LocalJSX.WcCoverLayer & JSXBase.HTMLAttributes<HTMLWcCoverLayerElement>;
            "wc-fullscreen": LocalJSX.WcFullscreen & JSXBase.HTMLAttributes<HTMLWcFullscreenElement>;
            "wc-layers": LocalJSX.WcLayers & JSXBase.HTMLAttributes<HTMLWcLayersElement>;
            "wc-picture-in-picture": LocalJSX.WcPictureInPicture & JSXBase.HTMLAttributes<HTMLWcPictureInPictureElement>;
            "wc-play-pause": LocalJSX.WcPlayPause & JSXBase.HTMLAttributes<HTMLWcPlayPauseElement>;
            "wc-play-pause-layer": LocalJSX.WcPlayPauseLayer & JSXBase.HTMLAttributes<HTMLWcPlayPauseLayerElement>;
            "wc-player": LocalJSX.WcPlayer & JSXBase.HTMLAttributes<HTMLWcPlayerElement>;
            "wc-progress": LocalJSX.WcProgress & JSXBase.HTMLAttributes<HTMLWcProgressElement>;
            "wc-video": LocalJSX.WcVideo & JSXBase.HTMLAttributes<HTMLWcVideoElement>;
            "wc-volume": LocalJSX.WcVolume & JSXBase.HTMLAttributes<HTMLWcVolumeElement>;
        }
    }
}
