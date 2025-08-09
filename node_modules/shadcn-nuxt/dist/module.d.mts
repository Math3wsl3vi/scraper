import * as _nuxt_schema from '@nuxt/schema';

interface ModuleOptions {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix?: string;
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir?: string;
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions, ModuleOptions, false>;

export { type ModuleOptions, _default as default };
