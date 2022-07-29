/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcPlay {
        "isPlaying": boolean;
        "pauseFunc": () => void;
        "playFunc": () => void;
    }
    interface WcPlayer {
        /**
          * 是否自动播放
         */
        "autoplay": boolean;
        /**
          * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
         */
        "controls": boolean;
        /**
          * 是否静音播放
         */
        "muted": boolean;
        /**
          * 要播放视频的资源地址
         */
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
        "loop": boolean;
        "muted": boolean;
        "nativeProps": {};
        "pause": () => Promise<void>;
        "play": () => Promise<void>;
        "poster": string;
        "seek": (position: number) => Promise<void>;
        "src": string;
        "stop": () => Promise<void>;
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
    interface HTMLWcPlayElement extends Components.WcPlay, HTMLStencilElement {
    }
    var HTMLWcPlayElement: {
        prototype: HTMLWcPlayElement;
        new (): HTMLWcPlayElement;
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
        "wc-play": HTMLWcPlayElement;
        "wc-player": HTMLWcPlayerElement;
        "wc-progress": HTMLWcProgressElement;
        "wc-video": HTMLWcVideoElement;
        "wc-volume": HTMLWcVolumeElement;
    }
}
declare namespace LocalJSX {
    interface WcPlay {
        "isPlaying"?: boolean;
        "pauseFunc"?: () => void;
        "playFunc"?: () => void;
    }
    interface WcPlayer {
        /**
          * 是否自动播放
         */
        "autoplay"?: boolean;
        /**
          * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
         */
        "controls"?: boolean;
        /**
          * 是否静音播放
         */
        "muted"?: boolean;
        /**
          * 要播放视频的资源地址
         */
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
        "onDurationchange"?: (event: WcVideoCustomEvent<any>) => void;
        "onEnded"?: (event: WcVideoCustomEvent<any>) => void;
        "onPause"?: (event: WcVideoCustomEvent<any>) => void;
        "onPlay"?: (event: WcVideoCustomEvent<any>) => void;
        "onTimeupdate"?: (event: WcVideoCustomEvent<any>) => void;
        "onVolumechange"?: (event: WcVideoCustomEvent<any>) => void;
        "poster"?: string;
        "src"?: string;
    }
    interface WcVolume {
        "cancelMute"?: () => void;
        "changeVolume"?: (volume: number) => void;
        "currentVolume"?: number;
        "isMuted"?: boolean;
        "mute"?: () => void;
    }
    interface IntrinsicElements {
        "wc-play": WcPlay;
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
            "wc-play": LocalJSX.WcPlay & JSXBase.HTMLAttributes<HTMLWcPlayElement>;
            "wc-player": LocalJSX.WcPlayer & JSXBase.HTMLAttributes<HTMLWcPlayerElement>;
            "wc-progress": LocalJSX.WcProgress & JSXBase.HTMLAttributes<HTMLWcProgressElement>;
            "wc-video": LocalJSX.WcVideo & JSXBase.HTMLAttributes<HTMLWcVideoElement>;
            "wc-volume": LocalJSX.WcVolume & JSXBase.HTMLAttributes<HTMLWcVolumeElement>;
        }
    }
}
