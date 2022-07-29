import Hls from 'hls.js'

export type MediaSource = {
  src: string
  type: string
}

export interface EngineInterface {
  hls: Hls
  Events: typeof Hls.Events
  loadHlsPlayer: () => void
  loadNativePlayer: () => void
}

export class Engine implements EngineInterface {
  public hls: Hls
  public Events: typeof Hls.Events

  private _source: MediaSource
  private _view: HTMLVideoElement

  constructor(source: MediaSource, view: HTMLVideoElement) {
    this._source = source
    this._view = view

    if (source.type === 'HLS') {
      if (Hls.isSupported()) {
        this.loadHlsPlayer()
      } else {
        this.loadNativePlayer()
      }
    } else {
      this.loadHlsPlayer()
    }
  }

  public loadHlsPlayer () {
    if (this.hls) {
      this.hls.destroy()
    }

    this.hls = new Hls()
    this.hls.loadSource(this._source.src)
    this.hls.attachMedia(this._view)

    this.Events = Hls.Events
  }

  public loadNativePlayer () {
    if (this._view) {
      this._view.src = this._source.src
      this._view.load()
    }
  }

}
