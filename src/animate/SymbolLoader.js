import ShapesCache from './ShapesCache';

/**
 * The middleware for PIXI's ResourceLoader to be able to 
 * load Flash symbols such as graphics and images.
 * @memberof PIXI.animate
 * @class SymbolLoader
 * @private
 */
let SymbolLoader = function() {
    return function(resource, next) {
        let url = resource.url;
        let data = resource.data;

        if (!data) {
            next();
        } else if (url.search(/\.shapes\.(json|txt)$/i) > -1) {
            ShapesCache.add(resource.name.replace(/\.shapes\.(json|txt)$/i, ''), data);
        }
        next();
    };
};

// Assign to the loader
PIXI.loaders.Loader.addPixiMiddleware(SymbolLoader);

export default SymbolLoader;