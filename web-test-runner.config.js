import rollupReplace from '@rollup/plugin-replace';
import rollupCommonjs from '@rollup/plugin-commonjs';

import { playwrightLauncher } from '@web/test-runner-playwright';
import { fromRollup } from '@web/dev-server-rollup';

const replace = fromRollup(rollupReplace);
const commonjs = fromRollup(rollupCommonjs);

export default {
	nodeResolve: true,
	plugins: [
		commonjs(),
		replace({ 'process.env.NODE_ENV': process.env.NODE_ENV, preventAssignment: true }),
	],
	browsers: [
		playwrightLauncher({ product: 'chromium' }),
	],
	files: [
		'test/*{test,spec}.{ts,js}',
	],
	testFramework: {
		config: {
			timeout: '2000000000',
		},
	},
};
