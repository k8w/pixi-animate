// Typings for PixiAnimate 1.0.0, requires Pixi.js typings
declare namespace animate {

    export namespace utils {
        export function hexToUint(hex: string | number): number;
        export function fillFrames(timeline: boolean[], startFrame: number, duration: number);
        export function deserializeKeyframes(keyframes: string): { [frame: string]: any };
        export function deserializeShapes(str: string): Array<string | number>;
        export function parseValue(prop: string, buffer: string): any;
        export function upload(renderer: PIXI.WebGLRenderer, displayObject: PIXI.DisplayObject, done: Function): void;
        export function addMovieClips(item: PIXI.DisplayObject): boolean;
    }

    export const sound: PIXI.utils.EventEmitter;

    interface LoadOptions {
        stage: any;
        parent: PIXI.Container;
        basePath: string;
    }

    type LoadCallback = (instance: MovieClip) => void;

    export function load(StageRef: any, parent: PIXI.Container, callback?: LoadCallback, basePath?: string): PIXI.loaders.Loader;
    export function load(StageRef: any, parent: PIXI.Container, basePath?: string): PIXI.loaders.Loader;
    export function load(StageRef: any, callback: LoadCallback): PIXI.loaders.Loader;
    export function load(options: LoadOptions): PIXI.loaders.Loader;

    type LabelMap = { [id: string]: number };

    interface FrameLabel {
        label: string;
        position: number;
    }

    interface MovieClipOptions {
        mode?: number;
        startPosition?: number;
        loop?: boolean;
        labels?: LabelMap;
        duration?: number;
        framerate?: number;
    }

    export class Scene extends PIXI.Application {
        constructor(width?: number, height?: number, renderOptions?: any, noWebGL?: boolean);
        public sound: PIXI.utils.EventEmitter;
        public load(StageRef: any, callback?: LoadCallback, basePath?: string): PIXI.loaders.Loader;
    }

    export class MovieClip extends PIXI.Container {
        static readonly DEFAULT_FRAMERATE: number;
        static readonly INDEPENDENT: string;
        static readonly SINGLE_FRAME: string;
        static readonly SYNCHED: string;

        public mode: number;
        public startPosition: number;
        public loop: boolean;
        public selfAdvance: boolean;
        public paused: boolean;
        public actionsEnabled: boolean;
        public autoReset: boolean;
        public readonly labels: FrameLabel[];
        public readonly labelsMap: LabelMap;
        public elapsedTime: number;
        public framerate: number;
        public readonly parentFramerate: number;
        public readonly totalFrames: number;
        public readonly currentFrame: number;
        public readonly currentLabel: string;

        constructor(
            options: number | MovieClipOptions,
            duration?: number,
            loop?: boolean,
            framerate?: number,
            labels?: LabelMap
        );
        addKeyframes(instance: PIXI.DisplayObject, keyframes: any): void;
        addTimedMask(instance: PIXI.DisplayObject, keyframes: any): MovieClip;
        am(instance: PIXI.DisplayObject, keyframes: any): MovieClip;
        addTween(instance: PIXI.DisplayObject, properties: any, startFrame: number, duration?: number, ease?: Function): MovieClip;
        tw(instance: PIXI.DisplayObject, properties: any, startFrame: number, duration?: number, ease?: Function): MovieClip;
        addTimedChild(instance: PIXI.DisplayObject, startFrame: number, duration?: number, keyframes?: any): MovieClip;
        at(instance: PIXI.DisplayObject, startFrame: number, duration?: number, keyframes?: any): MovieClip;
        addAction(callback: Function, startFrame: number | string): MovieClip;
        aa(callback: Function, startFrame: number): MovieClip;
        play(): void;
        stop(): void;
        gotoAndPlay(positionOrLabel: string | number): void;
        gotoAndStop(positionOrLabel: string | number): void;
        playSound(alias: string, loop?: boolean): MovieClip;
        ps(alias: string, loop?: boolean): MovieClip;
        advance(time: number): void;
        destroy(): void;
        setTint(tint: number): this;
        static extend(child: Function): typeof MovieClip;
        static e(child: Function): typeof MovieClip;
        static SYNCED: number;
    }

    export class Tween {
        public target: PIXI.DisplayObject;
        public startProps: any;
        public endProps: any;
        public startFrame: number;
        public duration: number;
        public endFrame: number;
        public ease: Function;
        constructor(
            target: PIXI.DisplayObject,
            startProps: any,
            endProps: any,
            startFrame: number,
            duration: number,
            ease?: Function);
        setPosition(currentFrame: number): void;
        setToEnd(): void;
    }

    export class Timeline extends Array {
        public target: PIXI.DisplayObject;
        constructor(target: PIXI.DisplayObject);
        addTween(instance: PIXI.DisplayObject, properties: any, startFrame: number, duration: number, ease?: Function): void;
        getPropFromShorthand(instance: PIXI.DisplayObject, prop: string): boolean | number | PIXI.Sprite | PIXI.Graphics;
    }

    export class ShapesCache {
        static add(id: string, draw: Array<string | number>): void;
        static fromCache(id: string): void;
        static removeAll(): void;
        static remove(id: string): void;
    }

    export class Animator {
        static STOP_LABEL: string;
        static LOOP_LABEL: string;
        static play(instance: MovieClip, callback?: Function): AnimatorTimeline;
        static play(instance: MovieClip, label: string, callback?: Function): AnimatorTimeline;
        static to(instance: MovieClip, end: string | number, callback?: Function): AnimatorTimeline;
        static fromTo(instance: MovieClip, start: string | number, end: string | number, loop?: boolean, callback?: Function): AnimatorTimeline;
        static stop(instance: MovieClip): void;
        static stopAll(): void;
    }

    export class AnimatorTimeline {
        progress: number;
        instance: MovieClip;
        start: number;
        end: number;
        loop: boolean;
        callback: Function;
        stop(): void;
        static create(instance: MovieClip, start: number, end: number, loop: boolean, callback?: Function): AnimatorTimeline;
    }

    type SymbolLoader = any;
}

export = animate;