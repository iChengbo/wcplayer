/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { VideoStatus } from "./constants";
export namespace Components {
    interface WcControls {
        "currentTime": number;
        "currentVolume": number;
        "duration": number;
        "isMuted": boolean;
        "nativeVideo": HTMLVideoElement;
        "playerElement": HTMLElement;
        "videoStatus": VideoStatus;
    }
    interface WcCoverLayer {
    }
    interface WcFullscreenToggle {
        "target": HTMLElement;
    }
    interface WcLayers {
    }
    interface WcPictureInPictureToggle {
        "nativeVideo": HTMLVideoElement;
    }
    interface WcPlayPauseLayer {
    }
    interface WcPlayToggle {
        "status": VideoStatus;
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
    }
    interface WcSpacer {
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
        "changeVolume": (volume: number) => void;
        "currentVolume": number;
        "isMuted": boolean;
    }
}
export interface WcControlsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcControlsElement;
}
export interface WcLayersCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcLayersElement;
}
export interface WcProgressCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcProgressElement;
}
export interface WcVideoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcVideoElement;
}
export interface WcVolumeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcVolumeElement;
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
    interface HTMLWcFullscreenToggleElement extends Components.WcFullscreenToggle, HTMLStencilElement {
    }
    var HTMLWcFullscreenToggleElement: {
        prototype: HTMLWcFullscreenToggleElement;
        new (): HTMLWcFullscreenToggleElement;
    };
    interface HTMLWcLayersElement extends Components.WcLayers, HTMLStencilElement {
    }
    var HTMLWcLayersElement: {
        prototype: HTMLWcLayersElement;
        new (): HTMLWcLayersElement;
    };
    interface HTMLWcPictureInPictureToggleElement extends Components.WcPictureInPictureToggle, HTMLStencilElement {
    }
    var HTMLWcPictureInPictureToggleElement: {
        prototype: HTMLWcPictureInPictureToggleElement;
        new (): HTMLWcPictureInPictureToggleElement;
    };
    interface HTMLWcPlayPauseLayerElement extends Components.WcPlayPauseLayer, HTMLStencilElement {
    }
    var HTMLWcPlayPauseLayerElement: {
        prototype: HTMLWcPlayPauseLayerElement;
        new (): HTMLWcPlayPauseLayerElement;
    };
    interface HTMLWcPlayToggleElement extends Components.WcPlayToggle, HTMLStencilElement {
    }
    var HTMLWcPlayToggleElement: {
        prototype: HTMLWcPlayToggleElement;
        new (): HTMLWcPlayToggleElement;
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
    interface HTMLWcSpacerElement extends Components.WcSpacer, HTMLStencilElement {
    }
    var HTMLWcSpacerElement: {
        prototype: HTMLWcSpacerElement;
        new (): HTMLWcSpacerElement;
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
        "wc-fullscreen-toggle": HTMLWcFullscreenToggleElement;
        "wc-layers": HTMLWcLayersElement;
        "wc-picture-in-picture-toggle": HTMLWcPictureInPictureToggleElement;
        "wc-play-pause-layer": HTMLWcPlayPauseLayerElement;
        "wc-play-toggle": HTMLWcPlayToggleElement;
        "wc-player": HTMLWcPlayerElement;
        "wc-progress": HTMLWcProgressElement;
        "wc-spacer": HTMLWcSpacerElement;
        "wc-video": HTMLWcVideoElement;
        "wc-volume": HTMLWcVolumeElement;
    }
}
declare namespace LocalJSX {
    interface WcControls {
        "currentTime"?: number;
        "currentVolume"?: number;
        "duration"?: number;
        "isMuted"?: boolean;
        "nativeVideo"?: HTMLVideoElement;
        "onClickPlayPause"?: (event: WcControlsCustomEvent<any>) => void;
        "onClickVolumeButton"?: (event: WcControlsCustomEvent<any>) => void;
        "onSeek"?: (event: WcControlsCustomEvent<any>) => void;
        "onVolumechange"?: (event: WcControlsCustomEvent<any>) => void;
        "playerElement"?: HTMLElement;
        "videoStatus"?: VideoStatus;
    }
    interface WcCoverLayer {
    }
    interface WcFullscreenToggle {
        "target"?: HTMLElement;
    }
    interface WcLayers {
        "onDoubleClick"?: (event: WcLayersCustomEvent<any>) => void;
        "onSingleClick"?: (event: WcLayersCustomEvent<any>) => void;
    }
    interface WcPictureInPictureToggle {
        "nativeVideo"?: HTMLVideoElement;
    }
    interface WcPlayPauseLayer {
    }
    interface WcPlayToggle {
        "status"?: VideoStatus;
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
        "onSeek"?: (event: WcProgressCustomEvent<any>) => void;
    }
    interface WcSpacer {
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
        "changeVolume"?: (volume: number) => void;
        "currentVolume"?: number;
        "isMuted"?: boolean;
        "onClickVolumebutton"?: (event: WcVolumeCustomEvent<any>) => void;
        "onVolumechange"?: (event: WcVolumeCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "wc-controls": WcControls;
        "wc-cover-layer": WcCoverLayer;
        "wc-fullscreen-toggle": WcFullscreenToggle;
        "wc-layers": WcLayers;
        "wc-picture-in-picture-toggle": WcPictureInPictureToggle;
        "wc-play-pause-layer": WcPlayPauseLayer;
        "wc-play-toggle": WcPlayToggle;
        "wc-player": WcPlayer;
        "wc-progress": WcProgress;
        "wc-spacer": WcSpacer;
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
            "wc-fullscreen-toggle": LocalJSX.WcFullscreenToggle & JSXBase.HTMLAttributes<HTMLWcFullscreenToggleElement>;
            "wc-layers": LocalJSX.WcLayers & JSXBase.HTMLAttributes<HTMLWcLayersElement>;
            "wc-picture-in-picture-toggle": LocalJSX.WcPictureInPictureToggle & JSXBase.HTMLAttributes<HTMLWcPictureInPictureToggleElement>;
            "wc-play-pause-layer": LocalJSX.WcPlayPauseLayer & JSXBase.HTMLAttributes<HTMLWcPlayPauseLayerElement>;
            "wc-play-toggle": LocalJSX.WcPlayToggle & JSXBase.HTMLAttributes<HTMLWcPlayToggleElement>;
            "wc-player": LocalJSX.WcPlayer & JSXBase.HTMLAttributes<HTMLWcPlayerElement>;
            "wc-progress": LocalJSX.WcProgress & JSXBase.HTMLAttributes<HTMLWcProgressElement>;
            "wc-spacer": LocalJSX.WcSpacer & JSXBase.HTMLAttributes<HTMLWcSpacerElement>;
            "wc-video": LocalJSX.WcVideo & JSXBase.HTMLAttributes<HTMLWcVideoElement>;
            "wc-volume": LocalJSX.WcVolume & JSXBase.HTMLAttributes<HTMLWcVolumeElement>;
        }
    }
}
